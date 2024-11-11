import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import Invest from "../components/mirpur/Invest";;
import Head from "next/head";
import { getMetadata } from "../config/metadata";
import About from "../components/Lahore/About";
import Discription from "../components/Lahore/Discription";
import Content from "../components/Lahore/Content";
const Lahore = () => {
  const page = "lahore"; // Set the page name here
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavbarTwo />
      <PageBanner
        pageTitle="Lahore"
        breadcrumbTextOne="Property Ka Maidaan"
        breadcrumbTextTwo="Lahore"
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

export default Lahore;