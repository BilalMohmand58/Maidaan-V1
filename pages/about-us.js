import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";

import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/AboutUs/AboutContent";
import FeaturesArea from "../components/Home/FeaturesArea";
import ServicesContent from "../components/Common/ServicesContent";
import PricingContent from "../components/PricingPlans/PricingContent";
import ProjectsStyleTwo from "../components/Projects/ProjectsStyleTwo";
import TeamCard from "../components/Common/TeamCard";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../components/Common/PartnerLogos";
import Footer from "../components/Layouts/Footer";

export default function AboutUs() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="About Us"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="About Us"
        breadcrumbUrl="/"
      />

      <AboutContent />
      <div className="ptb-50">
        <PartnerLogos />
      </div>
      <FeaturesArea />

      <ServicesContent />

      <TeamCard />

      <SubscribeStyleTwo />

      <Footer />
    </>
  );
}
