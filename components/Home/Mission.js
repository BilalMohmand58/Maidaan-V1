import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/about-image.png";

const Mission = () => {
  return (
    <>
      <div className="mission-section">
        <div className="container">
          <div className=" d-flex flex-row-reverse  align-items-center ">
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
                <span>Our Mission</span>
                <h3>We are Dynamic Team</h3>
                <strong>
                  With a vision for transparency, efficiency, and innovation,
                  Maidaan is shaping the future of Pakistan's real estate
                  industry.
                </strong>
                <p>
                  includes addressing the multifaceted needs of the real estate
                  industry and simplifying the processes for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
