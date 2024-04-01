import React from "react";
import Image from "next/image";

import aboutImg1 from "../../public/images/exploreDubai.webp";
import aboutImg2 from "../../public/images/investindubai.webp";
import ContactButton from "../Home/ContactButton";

const Invest = () => {
  return (
    <>
      <div className="dubai-section" id="invest">
        <div className="container">
          <div className="row align-items-center ">
            <div
              className="col-lg-6 col-md-12 pe-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-area-content">
                <span>Why Choose Us</span>
                <h3>
                  Unlocking Lucrative Opportunities: Dive into Dubai's Real
                  Estate Market
                </h3>

                <p>
                  Explore the dynamic landscape of investment opportunities in
                  Dubai, a city renowned for its innovation, economic
                  resilience, and strategic location. With its investor-friendly
                  policies, thriving business ecosystem, and ambitious
                  development projects, Dubai offers a wealth of prospects
                  across various sectors including real estate, technology,
                  tourism, and renewable energy.
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
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-image collage">
                <div className="d-flex gap-3">
                  <div className="image-item">
                    <div className="zoom-on-hover">
                      <Image
                        src={aboutImg1}
                        alt="About Img 1"
                        width={290}
                        height={268}
                      />
                    </div>
                  </div>
                  <div className="image-item">
                    <div className="zoom-on-hover">
                      <Image
                        src={aboutImg2}
                        alt="About Img 2"
                        width={290}
                        height={268}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3 mt-3">
                  <div className="image-item">
                    <div className="zoom-on-hover">
                      <Image
                        src={aboutImg2}
                        alt="About Img 3"
                        width={290}
                        height={268}
                      />
                    </div>
                  </div>
                  <div className="image-item">
                    <div className="zoom-on-hover">
                      <Image
                        src={aboutImg1}
                        alt="About Img 4"
                        width={290}
                        height={268}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invest;
