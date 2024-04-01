import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import Discription from "../components/InvestInDubai/Discription";
import InvestInDubai from "../components/Home/InvestInDubai";
import DubaiProjects from "../components/PropertyKaMaidaan/DubaiProjects";
import Invest from "../components/InvestInDubai/Invest";
import Detail from "../components/InvestInDubai/Detail";
import Banner from "../components/InvestInDubai/Banner";

const investInDubai = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        pageTitle="Invest in Dubai"
        breadcrumbTextOne="PropertKaMaidaan"
        breadcrumbTextTwo="Invest in Dubai"
        breadcrumbUrl="/propertKaMaidaan"
      />

      <div className="mt-5">
        <InvestInDubai />
      </div>
      <div className="pb-100">
        <DubaiProjects />
      </div>
      <div className="pb-100">
        <Discription />
      </div>

      <div className="pb-100">
        <Invest />
      </div>
      <Banner />

      <Footer />
    </>
  );
};

export default investInDubai;
