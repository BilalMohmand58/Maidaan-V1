import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/invest-pak.webp";
import Link from "next/link";
import ContactButton from "./ContactButton";

const InvestInPak = () => {
  return (
    <>
      <div className="dubai-section" id="pakInvest">
        <div className="container">
          <div className=" row flex-row-reverse align-items-center ">
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
                  alt="invest in pakistan"
                  width={595}
                  height={336}
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
                <span>Invest In Pakistan </span>
                <h3>Explore Pakistan : Unleashing Limitless Investment</h3>

                <p>
                  Dive into a curated collection of the nation’s most promising
                  real estate ventures, from serene suburban retreats to
                  bustling urban developments. <br /> <br /> Each project is
                  selected for its growth potential, lifestyle offerings, and
                  strategic location. Gain direct access to exclusive offers,
                  detailed project insights, and direct interactions with
                  developers. Whether you're seeking a new home or an investment
                  opportunity, our Domestic Projects showcase offers a
                  comprehensive guide to the best in local real estate.
                </p>
              </div>
              <div
                className="banner-btn mt-5"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
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

export default InvestInPak;
