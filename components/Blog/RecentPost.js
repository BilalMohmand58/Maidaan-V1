import Link from "next/link";
import React from "react";

const RecentPost = ({ post }) => {
  const { title, slug, featuredImage, thumbnail, publishedDate, excerpt } =
    post?.fields;

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
    <article className="item">
      <Link href={"/blog/" + slug} className="thumb">
        <span
          className="fullimage cover"
          role="img"
          style={{
            backgroundImage: `url("https:${thumbnail?.fields?.file?.url}")`,
          }}
        ></span>
      </Link>

      <div className="info">
        <time className="2020-06-30">
          {monthName} {date}, {year}
        </time>
        <h4 className="title usmall">
          <Link href={"/blog/" + slug}>{title}</Link>
        </h4>
      </div>
    </article>
  );
};

export default RecentPost;
