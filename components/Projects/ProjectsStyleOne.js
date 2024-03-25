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
            <h3>Invest In Our Featured Projects</h3>
          </div>

          <div className="row justify-content-center">
            {projects && projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard key={project.sys.id} project={project} />
              ))
            ) : (
              // Render a message if no projects are available
              <p className="text-center">Coming</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsStyleOne;
