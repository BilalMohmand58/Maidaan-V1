import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import SingleBlogContent from "../../components/Blog/SingleBlogContent";
import Footer from "../../components/Layouts/Footer";
import { createClient } from "contentful";
import Skeleton from "../../components/Blog/Skeleton";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "post",
  });

  const paths = res.items?.map((item) => {
    return {
      params: { slug: item?.fields?.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params?.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { post: items[0] },
    revalidate: 1,
  };
};

export default function SingleBlog({ post }) {
  if (!post) return <Skeleton />;

  const { title } = post?.fields;
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle={title}
        breadcrumbTextOne="Home"
        // breadcrumbTextTwo={title}
        breadcrumbUrl="/"
      />

      <SingleBlogContent post={post} />

      <Footer />
    </>
  );
}
