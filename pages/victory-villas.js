import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import AboutVillas from "../components/victoryVillas/AboutVillas";
import DiscriptionVillas from "../components/victoryVillas/DiscriptionVillas";
import Payment from "../components/victoryVillas/Payment";
import Form from "../components/victoryVillas/Form";
import FeaturesContent from "../components/victoryVillas/FeaturesContent";
import Footer from "../components/Layouts/Footer";
import Intro from "../components/victoryVillas/Intro";
import Map from "../components/victoryVillas/Map";
import Main from "../components/victoryVillas/Main";

const victoriVillas = () => {
  return (
    <>
      <NavbarTwo />
      {/* <Intro /> */}

      <div className="pb-100">
        <AboutVillas />
      </div>
      <div className="pb-100">
        <Main />
      </div>

      <div className="pb-100">
        <DiscriptionVillas />
      </div>
      <div className="pb-100">
        <Form />
      </div>
      <div className="pb-100">
        <Payment />
      </div>

      <div className="pb-100">
        <FeaturesContent />
      </div>
      <Map />

      <Footer />
    </>
  );
};

export default victoriVillas;
