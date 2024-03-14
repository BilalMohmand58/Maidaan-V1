import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import BlogCardContent from "../../components/Blog/BlogCardContent";
import Footer from "../../components/Layouts/Footer";
import { createClient } from "contentful";
import BlogSidebar from "../../components/Blog/BlogSidebar";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: res?.items,
    },
    revalidate: 1,
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Blog"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blogs"
        breadcrumbUrl="/"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <BlogCardContent posts={posts} />
          </div>
          <div className="col-lg-4 mb-5 mt-5">
            <BlogSidebar posts={posts} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
