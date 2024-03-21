import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import ServicesContent from "../../components/Common/ServicesContent";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import SubscribeStyleTwo from "../../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../../components/Common/PartnerLogos";
import Footer from "../../components/Layouts/Footer";

export default function Services() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Services"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Services"
        breadcrumbUrl="/"
      />

      <ServicesContent />

      <WhyChooseUs />

      <SubscribeStyleTwo />

      {/* <div className="ptb-100">
        <PartnerLogos />
      </div> */}

      <Footer />
    </>
  );
}
