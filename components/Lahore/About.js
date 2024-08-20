import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/event/lahore15.jpg";
import Link from "next/link";


const About = () => {
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
                <span>Maidaan X Future Fest </span>
                <h3>Property Ka Maidaan Lahore: Bridging Local and International Investments</h3>

                <p>
                

Maidaan, in collaboration with Future Fest, held the 'Property Ka Maidaan' event at Expo Center Lahore from March 31st until Eid ul Fitr, from Iftar till Sehr. Property Ka Maidaan aimed to help investors explore exclusive offerings and investment options directly from renowned domestic and international real estate developers, alongside Maidaan’s sales team. Our mission was to bridge the gap between potential investors in Pakistan and lucrative domestic and international real estate opportunities. The primary objective of this event was to sell properties, promote, market, and position the Maidaan brand while fostering collaborations. </p>
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

                {/* <ContactButton /> */}

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

export default About;
