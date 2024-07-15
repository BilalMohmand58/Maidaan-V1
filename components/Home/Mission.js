import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/mission.jpg";

const Mission = () => {
  return (
    <>
      <div className="mission-section">
        <div className="container">
          <div className=" row flex-row-reverse  align-items-center ">
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
                  width={515}
                  height={436}
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

                <p>
                  Our mission at Maidaan is to streamline Pakistan's real estate
                  market by addressing multifaceted industry needs and
                  simplifying processes for our clients through pioneering
                  solutions.
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
