import fs from "fs";
import path from "path";
import { cwd } from "process";
import { z } from "zod";

const blogPostSchema = z.array(
  z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.string(),
  })
);

export async function getBlogPosts() {
  const fileContents = fs
    .readFileSync(path.join(cwd(), "/src/app/blog/blogPosts.json"))
    .toString();

  const blogPosts = JSON.parse(fileContents);

  const result = blogPostSchema.safeParse(blogPosts);

  if (!result.success) {
    throw new Error(result.error.message);
  }

  return result.data;
}
