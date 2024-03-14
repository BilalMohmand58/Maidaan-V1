import React from "react";
import Link from "next/link";
import Image from "next/image";

import BlogCard from "../../components/Blog/BlogCard";

const BlogCardContent = ({ posts }) => {
  return (
    <>
      <div className="blog-page-area ptb-100">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-4 col-md-6"> */}
            {posts?.map((post) => (
              <BlogCard key={post.sys.id} post={post} />
            ))}
            <div style={{ marginBottom: "20px" }}> </div>
          </div>

          {/* Pagination */}
          {/* <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>

                <a className="page-numbers">1</a>

                <span className="page-numbers current" aria-current="page">
                  2
                </span>

                <a className="page-numbers">3</a>

                <a className="page-numbers">4</a>

                <a className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default BlogCardContent;
