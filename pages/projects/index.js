import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import ProjectsStyleOne from "../../components/Projects/ProjectsStyleOne";
import SubscribeStyleTwo from "../../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../../components/Common/PartnerLogos";
import Footer from "../../components/Layouts/Footer";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "project" });

  return {
    props: {
      projects: res?.items,
    },
    revalidate: 1,
  };
}

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Projects"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Projects"
        breadcrumbUrl="/"
      />

      <ProjectsStyleOne projects={projects} />

      <SubscribeStyleTwo />

      {/* <div className="ptb-100">
        <PartnerLogos />
      </div> */}

      <Footer />
    </>
  );
}
