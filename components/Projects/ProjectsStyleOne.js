import React from "react";
import Link from "next/link";
import Image from "next/image";

import ProjectCard from "./ProjectCard";

const ProjectsStyleOne = ({ projects }) => {
  return (
    <>
      <div className="project-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Projects</span>
            <h3>Our Projects For Client</h3>
          </div>

          <div className="row justify-content-center">
            {projects && projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard key={project.sys.id} project={project} />
              ))
            ) : (
              // Render a message if no projects are available
              <p>No projects available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsStyleOne;
