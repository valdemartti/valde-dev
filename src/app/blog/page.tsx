import { getBlogPosts } from "./getBlogPosts";
import { Article } from "@/components/self-ui/Article";

export default async function Blog() {
  const blogPosts = await getBlogPosts();

  return blogPosts.map(({ slug, title, description, author, date }) => (
    <Article
      key={slug}
      slug={slug}
      title={title}
      description={description}
      author={author}
      date={date}
    />
  ));
}
