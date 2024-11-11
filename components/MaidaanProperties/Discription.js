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
                <span>About Maidaan Properties </span>
                <h3>Live the Victory Life in Unmatched Luxury</h3>

                <p>
                Maidaan Properties is redefining the real estate experience, delivering seamless, transparent, and efficient property solutions for individuals and businesses. As a U.S.-based real estate development firm, we’re committed to making property transactions simple, secure, and rewarding. Our approach combines high-quality design, strategic locations, and community-centered amenities, creating exceptional living environments that reflect both cultural values and modern lifestyles. Through our Property ka Maidaan expos, we bring real estate opportunities to overseas Pakistanis, bridging the gap between Pakistani and American real estate markets.
                </p>
              </div>
              <div
                className="banner-btn mt-5"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                {/* <ContactButton /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discription;
