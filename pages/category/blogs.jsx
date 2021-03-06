import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.blogs);

  console.log(blogs);

  return (
    <>
      <Head>
        <title>All Blog</title>
        <meta name="description" content="All Blog Here" />
        <meta name="keywords" content="Blog Programming" />
      </Head>
      <main>
        {blogs?.map((blogItem) => (
          <article key={blogItem.title}>
            <Link href={`/blog/${blogItem.id}`}>
              <h5>{blogItem.title}</h5>
            </Link>
            <p> {blogItem.body.substr(0, 40)} </p>
          </article>
        ))}
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const blogs = await data.json();
  return {
    props: { blogs }, // will be passed to the page component as props
  };
}

export default Blog;
