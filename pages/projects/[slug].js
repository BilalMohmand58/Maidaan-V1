import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Skeleton from "../../components/Blog/Skeleton";
import ProjectsStyleOne from "../../components/Projects/ProjectsStyleOne";
import SingleProjectContent from "../../components/SingleProject/SingleProjectContent";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "project",
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
    content_type: "project",
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
    props: { project: items[0] },
    revalidate: 1,
  };
};

export default function SingleProject({ project }) {
  if (!project) return <Skeleton />;
  const { title } = project?.fields;
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle={title}
        breadcrumbTextOne="Home"
        // breadcrumbTextTwo="Project Detail"
        breadcrumbUrl="/"
      />

      <SingleProjectContent project={project} />

      <Footer />
    </>
  );
}
