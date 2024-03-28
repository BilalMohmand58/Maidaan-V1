import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import Footer from "../../components/Layouts/Footer";
import PageBanner from "../../components/Common/PageBanner";

import DubaiTrip from "../../components/PropertyKaMaidaan/DubaiTrip";

import SubscribeStyleTwo from "../../components/Common/SubscribeStyleTwo";
import Discover from "../../components/discoverdubai/Discover";
import Discr from "../../components/discoverdubai/Discr";

const discoverdubai = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        pageTitle="Discover a Dubai"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Discover a Dubai"
        breadcrumbUrl="/"
      />
      <div className="pb-100">
        <Discr />
      </div>
      <div className="pb-100">
        <Discover />
      </div>
      <DubaiTrip />

      <SubscribeStyleTwo />

      <Footer />
    </>
  );
};

export default discoverdubai;
