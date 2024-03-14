import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/about-image.png";

const AboutContent = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-image">
                <Image
                  src={aboutImg}
                  alt="About Img"
                  width={595}
                  height={536}
                />
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-area-content">
                <span>About Us</span>
                <h3>We are Dynamic Team of Real Estate Marketing</h3>
                <strong>
                  With a vision for transparency, efficiency, and innovation,
                  Maidaan is shaping the future of Pakistan's real estate
                  industry.
                </strong>
                <p>
                  Explore unique marketing gems with Maidaan, which is a leading
                  real estate marketing business in Pakistan. It simplifies the
                  real estate sector in the country. We specialize in providing
                  comprehensive services for buying, selling, and renting and
                  building properties across Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
