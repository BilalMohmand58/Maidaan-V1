import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import { getMetadata } from "../config/metadata";
export default function ContactUs() {
  const page = "contact"; // Set the page name here
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavbarTwo />

      <PageBanner
        pageTitle="Contact"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Contact Us"
        breadcrumbUrl="/"
      />

      <ContactForm />

      <SubscribeStyleTwo />

      <Footer />
    </>
  );
}
