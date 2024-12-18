import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import PricingContent from "../components/PricingPlans/PricingContent";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../components/Common/PartnerLogos";
import Footer from "../components/Layouts/Footer";

export default function Pricing() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Pricing"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Our Pricing Plans"
        breadcrumbUrl="/"
      />

      <PricingContent />

      <SubscribeStyleTwo />

      <div className="ptb-100">
        <PartnerLogos />
      </div>

      <Footer />
    </>
  );
}
