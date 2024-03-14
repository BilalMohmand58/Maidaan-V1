import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent";

export default function PrivacyPolicy() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Privacy Policy"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Privacy Policy"
        breadcrumbUrl="/"
      />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
}
