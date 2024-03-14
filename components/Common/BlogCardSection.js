import React from "react";
import Link from "next/link";
import Image from "next/image";

import blogImg1 from "../../public/images/blog/blog-img1.png";
import blogImg2 from "../../public/images/blog/blog-img2.png";
import blogImg3 from "../../public/images/blog/blog-img3.png";
import BlogCard from "../Blog/BlogCard";

const BlogCardSection = ({ posts }) => {
  const firstThreePosts = posts?.slice(0, 3);

  return (
    <>
      <div className="blog-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Blog</span>
            <h3>Read Our Latest Blogs</h3>
          </div>

          <div className="row justify-content-center">
            {firstThreePosts?.map((post) => (
              <BlogCard key={post.sys.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCardSection;
