import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/investindubai.webp";

import ContactButton from "../Home/ContactButton";

const DiscriptionVillas = () => {
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
                <span>Why Victory Villas </span>
                <h3>Live the Victory Life in Unmatched Luxury</h3>

                <p>
                  We've meticulously designed each Victory Villa with high-end
                  finishes, spa-like amenities, and spacious layouts. Smart home
                  technology puts control at your fingertips, while stunning
                  architecture and private outdoor spaces create an oasis of
                  tranquility. Indulge in a gourmet kitchen perfect for culinary
                  creations, and unwind in a home theater designed for
                  entertainment. Al Sadat Group, a trusted name in real estate
                  for over a decade, brings their commitment to transparency and
                  affordability to Victory Villas. Partnering with the
                  award-winning Victory Construction, renowned for their quality
                  and on-time project delivery, Victory Villas guarantees not
                  just a dream home, but a winning investment.
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

export default DiscriptionVillas;
