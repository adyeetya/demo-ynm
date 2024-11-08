import React from "react";
import { client, urlFor } from "../../../sanity/client";
import { PortableText } from "@portabletext/react";
import { defineQuery } from "next-sanity";
import Image from "next/image";

const components = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).width(600).url(); // Generate URL
      return (
        <div style={{ margin: "20px 0" }}>
          <Image
            src={imageUrl}
            alt="Blog Image"
            width={600}
            height={400}
            style={{ objectFit: "cover" }}
          />
        </div>
      );
    },
  },
  list: {
    number: ({ children }) => (
      <ol style={{ paddingLeft: "20px" }}>{children}</ol>
    ),
  },
  listItem: {
    number: ({ children }) => (
      <li style={{ paddingLeft: "10px", marginBottom: "5px" }}>{children}</li>
    ),
  },
  block: {
    normal: ({ children }) => <p>{children}</p>,
  },
};

export default async function BlogPost({ params }) {
  const query = defineQuery(`*[_type == "blogPost" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    author -> {name, bio},
    "slug": slug.current
  }`);

  const post = await client.fetch(query, { slug: params.slug });

  // console.log(post);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{new Date(post.publishedAt).toDateString()}</p>

      {/* Rendering the blog content using PortableText */}
      <PortableText value={post.body} components={components} />
      <p>Author: {post.author.name}</p>
    </article>
  );
}

// Generate paths at build time for all slugs
export async function generateStaticParams() {
  const query = `*[_type == "blogPost"]{
    "slug": slug.current
  }`;
  const posts = await client.fetch(query);

  return posts.map((post) => ({
    slug: post.slug, // Generate a path for each post using the slug
  }));
}
