import React, { useEffect, useState } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";

import Footer from "../components/Layouts/Footer";
import bannermage from "../public/images/banner2.png";
import Head from "next/head";
import { getMetadata } from "../config/metadata";

import About from "../components/MaidaanProperties/About";
import Discription from "../components/MaidaanProperties/Discription";
import FeaturesContent from "../components/MaidaanProperties/FeaturesContent";

import Discover from "../components/MaidaanProperties/Discover";
import Description from "../components/MaidaanProperties/Description";
import Banner from "../components/MaidaanProperties/Banner";
import Details from "../components/MaidaanProperties/Details";


export default function Properties() {
  const page = "propertyKaMaidaan";
  const { title, description } = getMetadata(page);

  const [height, setHeight] = useState("");

  useEffect(() => {
    // Define a function to set height based on window width
    const updateHeight = () => {
      setHeight(window.innerWidth > 1000 ? "70vh" : "");
    };

    // Call function initially and on window resize
    updateHeight();
    window.addEventListener("resize", updateHeight);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavbarTwo />
      <>
      <div
  className="page-title-area d-flex align-items-center justify-content-center"
  style={{
    height: height,
    backgroundImage: "url('https://res.cloudinary.com/dzeldg2vi/image/upload/v1730095118/kusmh8jq29zoppn20y5g.png')",
  }}
>
  <div className="container text-center">
    <h2 style={{ color: "white" }}>Maidaan Properties</h2>
    <h3 className="slide-sub-title" style={{ color: "white" }}>
                      Limitless Investment Horizons
                    </h3>
  </div>
</div>

    </>
      {/* <div>
        <Carousel />
      </div> */}
      <div className="pb-100">
        <About />
      </div>
      <div className="pb-100">
        <Discription />
      </div>
   
 {/* our mission and Vision */}
      <div className="pb-100">
        <Description />
      </div>
      {/* why choose us */}
      <div className="pb-100">
        <Discover />
      </div>

      <Details />
      <FeaturesContent />

     
      <Banner />



      <Footer />
    </>
  );
}
