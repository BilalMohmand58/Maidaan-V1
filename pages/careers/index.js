import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Cards from "../../components/careers/Cards";
import Contents from "../../components/careers/Contents";
import Benefits from "../../components/careers/Benefits";
import CareerForm from "../../components/careers/CareerForm";
import Footer from "../../components/Layouts/Footer";
import { createClient } from "contentful";
import ContactForm from "../../components/Contact/ContactForm";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "job" });

  return {
    props: {
      jobs: res?.items,
    },
    revalidate: 1,
  };
}

const Careers = ({ jobs }) => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        pageTitle="Join Our Team"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Careers"
        breadcrumbUrl="/"
      />
      <div className="pb-100">
        <Cards jobs={jobs} />
      </div>
      <div className="pb-100">
        <Contents />
      </div>
      <div className="pb-100">
        <Benefits />
      </div>
      <div className="pb-100">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Careers;
