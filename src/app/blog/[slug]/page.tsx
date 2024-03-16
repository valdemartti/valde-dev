export default function BlogPost({ params }: { params: { slug: string } }) {
  return <main>This is a blog post {params.slug}!</main>;
}
