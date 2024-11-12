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
import { Image } from "react-bootstrap";
import Link from "next/link";
import Hero from "../components/MaidaanProperties/Hero";


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
    <Hero/>
     
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
