import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import FeaturesContent from "../components/Home/FeaturesContent";
import OutstandingDigitalExperience from "../components/Home/OutstandingDigitalExperience";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../components/Common/PartnerLogos";
import Footer from "../components/Layouts/Footer";

export default function Features() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Features"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Features"
        breadcrumbUrl="/"
      />

      <FeaturesContent />

      <div className="pb-100">
        <OutstandingDigitalExperience />
      </div>

      <SubscribeStyleTwo />

      {/* <div className="ptb-100">
        <PartnerLogos />
      </div> */}

      <Footer />
    </>
  );
}
