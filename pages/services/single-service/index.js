import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import SingleServiceContent from "../../../components/SingleService/SingleServiceContent";
import Footer from "../../../components/Layouts/Footer";

export default function SingleService() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Service Details"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Service Details"
        breadcrumbUrl="/"
      />

      <SingleServiceContent />

      <Footer />
    </>
  );
}
