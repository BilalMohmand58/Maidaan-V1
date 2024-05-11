import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import FeaturesContent from "../components/Home/FeaturesContent";
import OutstandingDigitalExperience from "../components/Home/OutstandingDigitalExperience";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import Footer from "../components/Layouts/Footer";
import Carousel from "../components/PropertyKaMaidaan/Carousel";
import About from "../components/PropertyKaMaidaan/About";
import InvestInDubai from "../components/Home/InvestInDubai";
import InvestInPak from "../components/Home/InvestInPak";
import DubaiProjects from "../components/PropertyKaMaidaan/DubaiProjects";
import PartnerLogos from "../components/Home/PartnerLogos";
import DubaiTrip from "../components/PropertyKaMaidaan/DubaiTrip";
import Head from "next/head";
import { getMetadata } from "../config/metadata";

export default function PropertyKaMaidaan() {
  const page = "propertyKaMaidaan";
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavbarTwo />

      <div className="pb-100">
        <Carousel />
      </div>

      {/* <FeaturesContent /> */}

      <InvestInDubai />

      <div className="pb-100">
        <DubaiProjects />
      </div>

      <InvestInPak />
      <div className="pb-70 ">
        <PartnerLogos />
      </div>

      <DubaiTrip />

      <SubscribeStyleTwo />

      {/* <div className="ptb-100">
        <PartnerLogos />
      </div> */}

      <Footer />
    </>
  );
}
