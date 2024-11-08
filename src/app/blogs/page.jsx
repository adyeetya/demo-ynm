import { client } from "@/sanity/client";
import Link from "next/link";

// Query to fetch all blog posts
const BLOGS_QUERY = `*[_type == "blogPost" && defined(slug.current)]{
  _id,
  title,
  publishedAt,
   "slug": slug.current
}|order(publishedAt desc)`;

export const revalidate = 60; // Enable ISR with a 60 seconds revalidation

export default async function BlogsPage() {
  // Fetch all blog posts
  const blogs = await client.fetch(BLOGS_QUERY);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <Link href={`/blogs/${blog.slug}`}>
              <h2>{blog.title}</h2>
            </Link>
            <p>{new Date(blog.publishedAt).toDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
