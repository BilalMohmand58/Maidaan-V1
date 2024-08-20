import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";

import Head from "next/head";
import { getMetadata } from "../config/metadata";
import About from "../components/uk/About";
import Discription from "../components/uk/Discription";
import Details from "../components/uk/Details";
import Invest from "../components/mirpur/Invest";

const uk = () => {
  const page = "uk"; // Set the page name here
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavbarTwo />
      <PageBanner
        pageTitle="uk"
        breadcrumbTextOne="PropertKaMaidaan"
        breadcrumbTextTwo="uk"
        breadcrumbUrl="/propertKaMaidaan"
      />

      <div className="mt-5">
        <About/>
      </div>
     
      <div className="pb-100">
        <Discription />
      </div>

      <div className="pb-100">
        <Details />
      </div>
      <Invest/>

      <Footer />
    </>
  );
};

export default uk;