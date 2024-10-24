import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/victoryVillasAbout2.jpg";

import ContactButton from "../Home/ContactButton";

const Discription = () => {
  return (
    <>
      <div className="dubai-section" id="invest">
        <div className="container">
          <div className="row align-items-center ">
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
              className="col-lg-6 col-md-12 pe-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-area-content">
                <span>Why Maidaan Properties </span>
                <h3>Live the Victory Life in Unmatched Luxury</h3>

                <p>
                  We've meticulously designed each Houses with high-end
                  finishes, spa-like amenities, and spacious layouts. Smart home
                  technology puts control at your fingertips, while stunning
                  architecture and private outdoor spaces create an oasis of
                  tranquility. Indulge in a gourmet kitchen perfect for culinary
                  creations. 
                </p>
              </div>
              <div
                className="banner-btn mt-5"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <ContactButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discription;