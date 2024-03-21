import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/investindubai.webp";
import Link from "next/link";
import ContactButton from "./ContactButton";

const InvestInDubai = () => {
  return (
    <>
      <div className="dubai-section">
        <div className="container">
          <div className=" d-flex flex-row  align-items-center ">
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
                <span>Invest In Dubai </span>
                <h3>Discover Dubai : Unveil Limitless Investment Horizons.</h3>

                <p>
                  Explore the gateway to luxury and innovation in one of the
                  world’s most dynamic real estate markets. Discover a diverse
                  portfolio of properties, from high-end apartments to sprawling
                  villas, each offering unmatched luxury, high rental yields,
                  and tax-free income. <br /> <br /> Join us for exclusive
                  insights into prime investment opportunities, tailored advice
                  from market experts, and special investor benefits. Whether
                  you are new to the market or looking to expand your portfolio,
                  Invest in Dubai provides everything you need to make informed
                  and lucrative investments in this vibrant city.
                </p>
              </div>
              <div
                className="banner-btn mt-5"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                {/* <Link href="/about-us" className="default-btn-one">
                  Get In Touch
                </Link> */}

                <ContactButton />

                {/* <div
                        onClick={() => setToggler(!toggler)}
                        className="video-btn popup-youtube"
                      >
                        Watch Video <i className="flaticon-play-button"></i>
                      </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestInDubai;
