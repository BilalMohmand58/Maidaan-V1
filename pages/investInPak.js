import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import Discription from "../components/InvestInDubai/Discription";
import InvestInDubai from "../components/Home/InvestInDubai";
import DubaiProjects from "../components/PropertyKaMaidaan/DubaiProjects";
import InvestInPak from "../components/Home/InvestInPak";
import InvestInPakistan from "../components/InvestInPakistan/InvestInPakistan";
import PartnerLogos from "../components/Home/PartnerLogos";
import Banner from "../components/InvestInPakistan/Banner";
const investInDubai = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        pageTitle="Invest in Pakistan"
        breadcrumbTextOne="Property Ka Maidaan"
        breadcrumbTextTwo="Invest in Pakistan"
        breadcrumbUrl="/propertyKaMaidaan"
      />

      <div className="mt-5">
        <InvestInPak />
      </div>

      <div className="pb-70 ">
        <PartnerLogos />
      </div>
      <div className="pb-100">
        <Discription />
      </div>
      <div className="pb-100">
        <InvestInPakistan />
      </div>
      <div className="pb-100">
        <Banner />
      </div>

      <Footer />
    </>
  );
};

export default investInDubai;
