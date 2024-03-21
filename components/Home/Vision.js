import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/vision.jpg";

const Vision = () => {
  return (
    <>
      <div className="vision-section">
        <div className="container">
          <div className=" d-flex flex-row align-items-center ">
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
                <span>Our Vision</span>
                <h3>
                  Translating To Your Success By Our Team’s Extensive Knowledge
                  of Real Estate Investment.
                </h3>
                {/* <strong>
                  With a vision for transparency, efficiency, and innovation,
                  Maidaan is shaping the future of Pakistan's real estate
                  industry.
                </strong> */}
                <p>
                  Redefining the simplicity of real estate and offering an
                  integrated platform for buying, selling, and renting
                  properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
