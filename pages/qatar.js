import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";


import Head from "next/head";
import { getMetadata } from "../config/metadata";
import About from "../components/Qater/About";
import Discription from "../components/Qater/Discription";
import Content from "../components/Qater/Content";
import Invest from "../components/mirpur/Invest";
const qatar = () => {
  const page = "qatar"; // Set the page name here
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavbarTwo />
      <PageBanner
        pageTitle="Qatar"
        breadcrumbTextOne="Property Ka Maidaan"
        breadcrumbTextTwo="Qatar"
        breadcrumbUrl="/propertyKaMaidaan/"
      />

      <div className="mt-5">
        <About/>
      </div>
     
      <div className="pb-100">
        <Discription />
      </div>

      <div className="pb-100">
        <Content />
      </div>
      <Invest/>
      <Footer />
    </>
  );
};

export default qatar;