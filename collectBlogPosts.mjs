import fs from "fs";
import { remark } from "remark";
import mdx from "remark-mdx";
import { compileSync } from "@mdx-js/mdx";

const BLOG_PATH = "./src/app/blog";

/**
 * Collects all blog posts from the blog directory, including their metadata.
 */
const blogPosts = (
  await Promise.all(
    fs.readdirSync(BLOG_PATH).map(async (fileName) => {
      const isPostDirectory =
        fileName.startsWith("(") && fileName.endsWith(")");
      if (!isPostDirectory) return;

      const innerDirectory = fs.readdirSync(`${BLOG_PATH}/${fileName}`);
      const slug = innerDirectory[0];

      const dateString = fileName.replace("(", "").replace(")", "");

      const compiled = compileSync(
        fs.readFileSync(`${BLOG_PATH}/${fileName}/${slug}/page.mdx`)
      ).value.replace(/\n/g, "");

      const match = compiled.match(/export const metadata = {(.*?)};/);
      const { metadata } = await import("data:text/javascript," + match[0]);

      return {
        slug,
        title: metadata.title,
        description: metadata.description,
        author: metadata.author,
        date: dateString,
      };
    })
  )
)
  .filter((post) => post !== undefined)
  .sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;

    return 0;
  });

fs.writeFileSync(
  "./src/app/blog/blogPosts.json",
  JSON.stringify(blogPosts, null, 2)
);
