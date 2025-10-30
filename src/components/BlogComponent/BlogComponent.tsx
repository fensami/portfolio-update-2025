// app/blog/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import React from "react";
import { blogData } from "./BlogFakeData";
// import { blogData } from "./BlogFakeData";

const BlogDetails = () => {
  const params = useParams();
  const blogId = Number(params.id);
  const blog = blogData.find((b) => b.id === blogId);

  if (!blog)
    return <p className="text-center text-red-500 mt-20">Blog not found!</p>;

  return (
    <div className="   ">
      {/* Header */}

      <header className="text-center mt-10 mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
          {blog.title}
        </h1>

        <p className="mt-4 text-lg text-gray-700">{blog.description}</p>
      </header>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blog.keyTakeaways.map((takeaway, index) => (
            <li
              key={index}
              className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <span className="font-semibold mr-2">•</span> {takeaway}
            </li>
          ))}
        </ul>
      </section>

      {/* Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Step-by-Step Guide
        </h2>
        <div className="space-y-6">
          {blog.steps.map((step) => (
            <div
              key={step.step}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold mb-2">
                Step {step.step}: {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div>
        <p className="font-bold text-2xl">📝 Summary:</p>
        <p className="mt-2 text-lg text-gray-700">{blog.summary}</p>
      </div>
      <div>
        <p className="font-bold text-2xl mt-4">⚠️ Disclaimer:</p>
        <p className="mt-2 text-lg text-gray-700">{blog.disclaimer}</p>
      </div>

      {/* Related Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Posts</h2>
        <ul className="space-y-3">
          {blog.relatedPosts.map((post, index) => (
            <li key={index}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default BlogDetails;
