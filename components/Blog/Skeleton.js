import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Image from "next/image";

import singleBlog from "../../public/images/blog/single-blog.jpg";
import blogImg7 from "../../public/images/blog/blog-img7.jpg";
import blogImg8 from "../../public/images/blog/blog-img8.jpg";
import blogImg9 from "../../public/images/blog/blog-img9.jpg";

import userImg1 from "../../public/images/clients/client1.jpg";
import userImg2 from "../../public/images/clients/client2.jpg";
import userImg3 from "../../public/images/clients/client3.jpg";
import userImg4 from "../../public/images/clients/client4.jpg";

const SingleBlogContent = () => {
  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Image src="#" alt="image" width={900} height={450} />
                </div>

                {/* Article details content */}
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span className="mr-1"></span>
                      </li>
                      <li>
                        <span className="mr-1"></span>{" "}
                        <Link href="/blog"></Link>
                      </li>
                    </ul>
                  </div>

                  <h3></h3>

                  <p></p>

                  <p></p>

                  <blockquote className="wp-block-quote">
                    <p></p>
                    <cite></cite>
                  </blockquote>

                  <p></p>

                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src={blogImg7}
                          alt="image"
                          width={510}
                          height={400}
                        />
                      </figure>
                    </li>
                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src={blogImg8}
                          alt="image"
                          width={510}
                          height={400}
                        />
                      </figure>
                    </li>
                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src={blogImg9}
                          alt="image"
                          width={510}
                          height={400}
                        />
                      </figure>
                    </li>
                  </ul>

                  <p></p>
                </div>

                {/* Article footer */}
                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>
                    <Link href="/blog/"></Link>
                    <Link href="/blog/"></Link>
                    <Link href="/blog/"></Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Post navigation */}
                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <i className="fa fa-arrow-left mr-2"></i>
                      </Link>
                    </div>
                    <div className="nav-next">
                      <Link href="#">
                        <i className="fa fa-arrow-right ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Sidebar */}
            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogContent;
