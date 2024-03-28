import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import Footer from "../../components/Layouts/Footer";
import PageBanner from "../../components/Common/PageBanner";

import PartnerLogos from "../../components/Home/PartnerLogos";
import InvestInPak from "../../components/Home/InvestInPak";
import Discription from "../../components/investinpakistan/Discription";
import Investinpak from "../../components/investinpakistan/Investinpak";
import Details from "../../components/investinpakistan/Details";

const investinpakistan = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        pageTitle="Invest in Pakistan"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Invest in Pakistan"
        breadcrumbUrl="/"
      />
      <div className="pb-100">
        <Discription />
      </div>

      <InvestInPak />
      <div className="pb-100">
        <Details />
      </div>

      <div className="pb-100">
        <Investinpak />
      </div>
      <div className="pb-100">
        <PartnerLogos />
      </div>
      <Footer />
    </>
  );
};

export default investinpakistan;
