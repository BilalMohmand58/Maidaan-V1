import React from "react";
import Image from "next/image";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const SingleProjectContent = ({ project }) => {
  const {
    title,
    slug,
    featuredImages,
    thumbnail,
    publishedDate,
    projectStatus,
    location,
    description,
    projectGallery,
    paymentPlan,
    projectDetails,
  } = project.fields;

  const { createdAt } = project.sys;
  const dateObj = new Date(createdAt);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extracting year, month, and date
  const year = dateObj.getFullYear();
  const monthIndex = dateObj.getMonth();
  const monthName = monthNames[monthIndex];
  const date = dateObj.getDate();

  return (
    <>
      <div className="project-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="project-details-image">
                <Image
                  src={"https:" + featuredImages[0]?.fields?.file?.url}
                  alt="projects"
                  width={900}
                  height={450}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="project-details-image">
                <Image
                  src={"https:" + featuredImages[1]?.fields?.file?.url}
                  alt="projects"
                  width={900}
                  height={450}
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="projects-details-desc">
                <div className="project-details-info">
                  <div className="single-info-box">
                    <h4>Project Status</h4>
                    <span>{projectStatus}</span>
                  </div>

                  <div className="single-info-box">
                    <h4>Marketed By</h4>
                    <span>Maidaan</span>
                  </div>

                  <div className="single-info-box">
                    <h4>Date</h4>
                    <span>
                      {date} {monthName} {year}
                    </span>
                  </div>

                  <div className="single-info-box">
                    <a
                      href={"https:" + paymentPlan?.fields?.file?.url}
                      target="_blank"
                      className="default-btn-one"
                    >
                      Download Payment Plan
                    </a>
                  </div>

                  <div className="single-info-box">
                    <a href="#" target="_blank" className="default-btn-one">
                      Get In Touch
                    </a>
                  </div>
                </div>
                <h3>{title}</h3>
                <strong>{description}</strong>

                <div className="features-text">
                  {documentToReactComponents(projectDetails)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProjectContent;
