import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SingleBlogSidebar from "./SingleBlogSidebar";

const SingleBlogContent = ({ post }) => {
  const {
    title,
    slug,
    featuredImage,
    thumbnail,
    publishedDate,
    excerpt,
    content,
    author,
    relatedBlogPosts,
  } = post?.fields;

  const articleUrl = `http://themaidaan.com/blog/${slug}`;

  const shareUrl = encodeURIComponent(articleUrl);

  const dateObj = new Date(publishedDate);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extracting year, month, and date
  const year = dateObj.getFullYear();
  const monthIndex = dateObj.getMonth();
  const monthName = monthNames[monthIndex];
  const date = dateObj.getDate();

  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Image
                    src={"https:" + featuredImage?.fields?.file?.url}
                    alt="image"
                    width={900}
                    height={450}
                  />
                </div>

                {/* Article details content */}
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        {/* <span className="mr-1">Author:</span>{" "} */}
                        <span>
                          {/* <img
                            src={
                              "https:" +
                              author?.fields?.avatar?.fields?.file?.url
                            } // Assuming there's a field for the author's avatar in the author object
                            alt={author?.fields?.name}
                            className="avatar"
                          /> */}
                          {author?.fields?.name}
                        </span>
                      </li>
                      <li>
                        <span className="mr-1">Posted On :</span>{" "}
                        <span>
                          {monthName} {date} {year}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <h3>{title}</h3>

                  <div>{documentToReactComponents(content)}</div>
                </div>

                {/* Article footer */}
                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>
                    <Link href="/blog/">Real Estate,</Link>

                    <Link href="/blog/">Marketing</Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href={`https://www.linkedin.com/shareArticle?url=${shareUrl}`}
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href={`https://www.instagram.com/share?url=${shareUrl}`}
                          target="_blank"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Post navigation */}
                {/* <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <i className="fa fa-arrow-left mr-2"></i>
                        Prev Post
                      </Link>
                    </div>
                    <div className="nav-next">
                      <Link href="#">
                        Next Post
                        <i className="fa fa-arrow-right ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Blog Sidebar */}
            <div className="col-lg-4 col-md-12">
              <SingleBlogSidebar relatedBlogPosts={relatedBlogPosts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogContent;
