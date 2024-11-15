import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import TeamMemberContact from "../components/Team/TeamMemberContact";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../components/Common/PartnerLogos";
import Footer from "../components/Layouts/Footer";

export default function Team() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Team"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Our Team Members"
        breadcrumbUrl="/"
      />

      <TeamMemberContact />

      <SubscribeStyleTwo />

      <div className="ptb-100">
        <PartnerLogos />
      </div>

      <Footer />
    </>
  );
}
