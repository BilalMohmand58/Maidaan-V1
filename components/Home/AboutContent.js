import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/Maidaanabout.jpg";

const AboutContent = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="row align-items-center">
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
                <span>About Us</span>
                <h3>Maidaan, A Core Center Of Real Estate Investment</h3>
                <strong>
                  Maidaan Group of Companies is a leading real estate marketing
                  business in Pakistan, committed to simplifying the intricacies
                  of the real estate sector. We were established in September
                  2022, with a mission to simplify real estate and make it
                  accessible to all.
                </strong>
                <p>
                  With a focus on simplifying the complexities inherent in the
                  market, we specialize in providing comprehensive services for
                  buying and selling properties across Pakistan and beyond. We
                  aim to revolutionize the real estate landscape by addressing
                  diverse client needs and streamlining every aspect of property
                  transaction, from listing to ownership transfer through
                  innovative solutions and advanced technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
