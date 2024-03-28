import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import Footer from "../../components/Layouts/Footer";
import PageBanner from "../../components/Common/PageBanner";
import Disc from "../../components/investindubai/disc";
import InvestInDubai from "../../components/Home/InvestInDubai";
import DubaiProjects from "../../components/PropertyKaMaidaan/DubaiProjects";
import Invest from "../../components/investindubai/Invest";
import Detail from "../../components/investindubai/Detail";

const investindubai = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        pageTitle="Invest in Dubai"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Invest in Dubai"
        breadcrumbUrl="/"
      />
      <div className="pb-100">
        <Disc />
      </div>

      <InvestInDubai />
      <div className="pb-100">
        <Detail />
      </div>

      <div className="pb-100">
        <Invest />
      </div>
      <div className="pb-100">
        <DubaiProjects />
      </div>

      <Footer />
    </>
  );
};

export default investindubai;
