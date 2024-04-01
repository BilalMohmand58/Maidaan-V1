import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";

import DubaiTrip from "../components/PropertyKaMaidaan/DubaiTrip";

import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import Discover from "../components/DiscoverDubai/Discover";
import Discription from "../components/DiscoverDubai/Description";
import Banner from "../components/DiscoverDubai/Banner";

const discoverdubai = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        pageTitle="Discover The Magic Of Dubai"
        breadcrumbTextOne="Property Ka Maidaan"
        breadcrumbTextTwo="Discover a Dubai"
        breadcrumbUrl="/"
      />
      <DubaiTrip />
      <div className="pb-100">
        <Discription />
      </div>
      <div className="pb-100">
        <Discover />
      </div>
      <Banner />
      <SubscribeStyleTwo />

      <Footer />
    </>
  );
};

export default discoverdubai;
