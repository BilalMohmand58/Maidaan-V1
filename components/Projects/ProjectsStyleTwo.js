import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsStyleTwo = () => {
  return (
    <>
      <div className="portfolio-section">
        <div className="container">
          <div className="section-title">
            <span>Portfolio</span>
            <h3>Our Project For Client</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/projects/single-project">
                    {/* <Image
                      src={portfolioImg1}
                      alt="image"
                      width={380}
                      height={700}
                    /> */}
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/projects/single-project/">Branding</Link>
                  </h3>
                </div>
              </div>

              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/projects/single-project">
                    {/* <Image
                      src={portfolioImg2}
                      alt="image"
                      width={390}
                      height={340}
                    /> */}
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/projects/single-project">Marketing</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/projects/single-project">
                    {/* <Image
                      src={portfolioImg3}
                      alt="image"
                      width={390}
                      height={340}
                    /> */}
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/projects/single-project">SEO</Link>
                  </h3>
                </div>
              </div>

              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/projects/single-project">
                    {/* <Image
                      src={portfolioImg4}
                      alt="image"
                      width={390}
                      height={340}
                    /> */}
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/projects/single-project">Web Design</Link>
                  </h3>
                </div>
              </div>

              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/projects/single-project">
                    {/* <Image
                      src={portfolioImg5}
                      alt="image"
                      width={390}
                      height={340}
                    /> */}
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/projects/single-project">Web Development</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/projects/single-project">
                    {/* <Image
                      src={portfolioImg6}
                      alt="image"
                      width={390}
                      height={340}
                    /> */}
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/projects/single-project">
                      Digital Marketing
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/projects/single-project">
                    {/* <Image
                      src={portfolioImg7}
                      alt="image"
                      width={380}
                      height={700}
                    /> */}
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/projects/single-project">IT Marketing</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsStyleTwo;
