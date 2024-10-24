import React from "react";
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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavbarTwo />
      <>
      <div className="page-title-area"  style={{ backgroundImage: "url('https://res.cloudinary.com/dzeldg2vi/image/upload/v1729761806/pak-slide_zrziw6.webp')" }}>
        <div className="container">
          <div className="page-title-content">
            <h2 color="red">Maidaan Properties</h2>
           
          </div>
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
      {/* <div className="pb-100">
        <Form />
      </div>
      <div className="pb-100">
        <Payment />
      </div> */}

      {/* <div className="pb-100">
        <FeaturesContent />
      </div> */}
      <Details />
      <FeaturesContent />
      <div className="pb-100">
        <Description />
      </div>
      <div className="pb-100">
        <Discover />
      </div>
      <Banner />



      <Footer />
    </>
  );
}
