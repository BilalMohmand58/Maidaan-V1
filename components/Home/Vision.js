import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/vision.jpg";

const Vision = () => {
  return (
    <>
      <div className="vision-section">
        <div className="container">
          <div className=" row align-items-center ">
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

                {/* <strong>
                  With a vision for transparency, efficiency, and innovation,
                  Maidaan is shaping the future of Pakistan's real estate
                  industry.
                </strong> */}
                <p>
                  Maidaan envisions to redefine real estate simplicity by
                  offering an integrated platform for buying, selling and
                  renting properties. We aim to create an environment where
                  transparency, efficiency, innovation, and creativity converge,
                  redefining the norms of the real estate.
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
