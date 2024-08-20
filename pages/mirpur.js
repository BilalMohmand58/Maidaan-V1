import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";


import DubaiProjects from "../components/PropertyKaMaidaan/DubaiProjects";
import Detail from "../components/InvestInDubai/Detail";
import Banner from "../components/InvestInDubai/Banner";
import Head from "next/head";
import { getMetadata } from "../config/metadata";
import About from "../components/mirpur/About";
import Discription from "../components/mirpur/Discription";
import Details from "../components/mirpur/Details";
import Invest from "../components/mirpur/Invest";

const mirpur = () => {
  const page = "mirpur"; // Set the page name here
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavbarTwo />
      <PageBanner
        pageTitle="Mirpur"
        breadcrumbTextOne="PropertKaMaidaan"
        breadcrumbTextTwo="Mirpur"
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

export default mirpur;