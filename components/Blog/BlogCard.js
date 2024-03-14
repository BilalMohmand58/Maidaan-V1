import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post }) => {
  const {
    title,
    slug,
    featuredImage,
    thumbnail,
    publishedDate,
    excerpt,
    author,
  } = post?.fields;

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
    <div className="col-lg-4 col-md-6">
      <div className="blog-item">
        <div className="blog-image">
          <Link href={"/blog/" + slug}>
            <Image
              src={"https:" + thumbnail?.fields?.file?.url}
              alt="image"
              width={510}
              height={445}
            />
          </Link>
        </div>

        <div className="single-blog-item">
          <ul className="date">
            <li>{date}</li>
            <li>{monthName}</li>
          </ul>

          <ul className="blog-list">
            <li>
              <Link href="/blog">
                <i className="fa fa-user-alt"></i> {author?.fields?.name}
              </Link>
            </li>
            {/* <li>
              <i className="far fa-comments"></i> 3 
            </li> */}
          </ul>

          <div className="blog-content">
            <Link href={"/blog/" + slug}>
              <h3>{title}</h3>
            </Link>
            <p>{excerpt}</p>
          </div>

          <div className="blog-btn">
            <Link href={"/blog/" + slug} className="blog-btn-one">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
