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
                <span>Victori Villas </span>
                <h3>
                  Step into a world of unparalleled opulence with luxury
                  properties
                </h3>

                <p>
                  Step into a world of unparalleled opulence with our curated
                  selection of luxury properties. From sprawling estates nestled
                  in lush landscapes to sleek urban penthouses boasting
                  panoramic views, each residence is meticulously crafted to
                  redefine modern luxury living. <br /> <br /> Join us for
                  exclusive insights into prime investment opportunities,
                  tailored advice from market experts, and special investor
                  benefits. Whether you are new to the market or looking to
                  expand your portfolio, Invest in Dubai provides everything you
                  need to make informed and lucrative investments in this
                  vibrant city.
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
