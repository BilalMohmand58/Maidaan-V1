import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";

import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/Home/AboutContent";
import FeaturesArea from "../components/Home/FeaturesArea";
import ServicesContent from "../components/Common/ServicesContent";
import PricingContent from "../components/PricingPlans/PricingContent";
import ProjectsStyleTwo from "../components/Projects/ProjectsStyleTwo";
import TeamCard from "../components/Common/TeamCard";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../components/Home/PartnerLogos";
import Footer from "../components/Layouts/Footer";
import Mission from "../components/Home/Mission";
import Vision from "../components/Home/Vision";
import DubaiPartnerLogos from "../components/Common/DubaiPartnerLogos";
import Head from "next/head";
import { getMetadata } from "../config/metadata";
export default function AboutUs() {
  const page = "about"; // Set the page name here
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavbarTwo />

      <PageBanner
        pageTitle="About Us"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="About Us"
        breadcrumbUrl="/"
      />

      <AboutContent />
      <div className="ptb-70">
        <DubaiPartnerLogos />
      </div>

      <div className="pb-70">
        <Mission />
      </div>
      <div className="pb-70">
        <Vision />
      </div>
      <FeaturesArea />

      <ServicesContent />

      {/* <TeamCard /> */}

      <SubscribeStyleTwo />

      <Footer />
    </>
  );
}
