import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Home/MainBanner";
import PartnerLogos from "../components/Home/PartnerLogos";
import FeaturesArea from "../components/Home/FeaturesArea";
import AboutContent from "../components/Home/AboutContent";
import Mission from "../components/Home/Mission";
import Vision from "../components/Home/Vision";

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
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <PartnerLogos />

      <FeaturesArea />

      <div className="pb-70 ">
        <AboutContent />
      </div>

      <div className="pb-70">
        <Mission />
        <Vision />
      </div>

      <WhyChooseUs />

      <ProjectsStyleOne projects={projects} />

      <ServicesContent />

      {/* <PricingContent /> */}

      {/* <ProjectsStyleTwo /> */}

      <TestimonialSection />

      <FaqSection />

      <TeamCard />

      {/* <AnalysisFormContent /> */}

      <BlogCardSection posts={posts} />

      <SubscribeStyleTwo />

      <Footer />
    </>
  );
}
