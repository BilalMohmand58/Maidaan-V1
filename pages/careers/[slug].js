import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import { createClient } from "contentful";
import Skeleton from "../../components/Blog/Skeleton";
import JobDetails from "../../components/careers/JobDetails";
import CareerForm from "../../components/careers/CareerForm";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "job",
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
    content_type: "job",
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
    props: { job: items[0] },
    revalidate: 1,
  };
};

export default function SingleBlog({ job }) {
  if (!job) return <Skeleton />;

  const { title } = job?.fields;
  return (
    <>
      <NavbarTwo />
      <div className="pb-70">
        <JobDetails job={job} />
      </div>

      <div className="pb-100 mt-4">
        <CareerForm />
      </div>
      <Footer />
    </>
  );
}
