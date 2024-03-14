import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  const {
    title,
    slug,
    featuredImage,
    thumbnail,
    publishedDate,
    projectStatus,
  } = project?.fields;
  return (
    <div
      className="col-lg-4 col-sm-6"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div className="single-project-box">
        <Link href={"/projects/" + slug}>
          <Image
            src={"https:" + thumbnail?.fields?.file?.url}
            alt="Project Thumbnail"
            width={510}
            height={445}
          />
        </Link>
        <div className="project-hover-content">
          <h3>
            <Link href={"/projects/" + slug}>{title}</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
