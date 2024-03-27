import React, { useEffect, useState } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Home/MainBanner";
import PartnerLogos from "../components/Home/PartnerLogos";
import FeaturesArea from "../components/Home/FeaturesArea";
import AboutContent from "../components/Home/AboutContent";
import Mission from "../components/Home/Mission";
import Vision from "../components/Home/Vision";
import { useMediaQuery } from "react-responsive";

// modal
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import AnalysisFormContent from "../components/Home/AnalysisFormContent";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ServicesContent from "../components/Common/ServicesContent";
import PricingContent from "../components/PricingPlans/PricingContent";
import TestimonialSection from "../components/Home/TestimonialSection";
import FaqSection from "../components/Faq/FaqSection";
import TeamCard from "../components/Common/TeamCard";
import BlogCardSection from "../components/Common/BlogCardSection";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import Footer from "../components/Layouts/Footer";
import { createClient } from "contentful";
import ProjectsStyleOne from "../components/Projects/ProjectsStyleOne";
import OutstandingDigitalExperience from "../components/Home/OutstandingDigitalExperience";
import InvestInDubai from "../components/Home/InvestInDubai";
import DubaiPartnerLogos from "../components/Common/DubaiPartnerLogos";
import InvestInPak from "../components/Home/InvestInPak";
import LeadFormPopup from "../components/Home/LeadFormPopup";
import Image from "next/image";

import popupImage from "../public/images/futurefest.jpg";
import ContactButton from "../components/Home/ContactButton";
import Link from "next/link";

export async function getStaticProps() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const postRes = await client.getEntries({ content_type: "post" });
    const projectRes = await client.getEntries({ content_type: "project" });

    return {
      props: {
        posts: postRes.items,
        projects: projectRes.items,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        posts: [],
        projects: [],
      },
      revalidate: 1,
    };
  }
}

export default function Index({ posts, projects }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate 20% scroll position
      const twentyPercent = (documentHeight - windowHeight) * 0.2;

      if (scrollPosition >= twentyPercent) {
        setShowModal(true);
        // Remove event listener after modal is shown once
        window.removeEventListener("scroll", handleScroll);
        // Set cookie to indicate that the modal has been shown
        document.cookie = "modalShown=true; max-age=86400"; // Cookie expires in 7 days
      }
    };

    // window.addEventListener("scroll", handleScroll);
    // Check if modalShown cookie exists
    const modalShownCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("modalShown="));

    if (!modalShownCookie) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setShowModal(false);
    }
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <NavbarTwo />

      <MainBanner />
      <div className="pb-70 ">
        <AboutContent />
      </div>

      <div className="pb-70 ">
        <FeaturesArea />
      </div>

      <InvestInDubai />

      <div className="pb-70 ">
        <DubaiPartnerLogos />
      </div>

      <InvestInPak />

      <div className="pb-70 ">
        <PartnerLogos />
      </div>

      {/* <div className="pb-70">
        <OutstandingDigitalExperience />
      </div> */}

      <WhyChooseUs />

      {/* <ProjectsStyleOne projects={projects} /> */}

      <ServicesContent />

      {/* <PricingContent /> */}

      {/* <ProjectsStyleTwo /> */}

      <TestimonialSection />

      <FaqSection />

      {/* <TeamCard /> */}

      {/* <AnalysisFormContent /> */}

      <BlogCardSection posts={posts} />

      <SubscribeStyleTwo />

      <Footer />

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="xl">
        <Modal.Body style={{ position: "relative", padding: 0 }}>
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3 bg-white"
            aria-label="Close"
            onClick={handleCloseModal}
          ></button>
          <Image
            className="slider-image w-100"
            src={popupImage}
            alt="partner"
          />
          <div
            className="d-flex justify-content-end align-items-end position-absolute p-3"
            style={{ bottom: 0, right: 0 }}
          >
            {!isMobile && (
              <Link
                href="/propertyKaMaidaan/"
                target="_blank"
                className=" me-2 features-btn-one"
              >
                Learn More
              </Link>
            )}

            {!isMobile && <ContactButton />}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
