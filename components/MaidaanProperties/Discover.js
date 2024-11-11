import React from "react";
import Image from "next/image";

import aboutImg1 from "../../public/images/exploreDubai.webp";
import aboutImg2 from "../../public/images/investindubai.webp";
import ContactButton from "../Home/ContactButton";

const Discover = () => {
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
                <span>Why Maidaan Properties?</span>
                <h3> Why Choose Maidaan Properties?</h3>

                <p>
                Why Choose Maidaan Properties?
With our technology-driven, client-centric approach, we simplify the real estate journey by providing an integrated platform and expert guidance. Whether you’re a homebuyer, an investor, or a developer, Maidaan Properties offers a complete suite of services designed to make real estate transactions smooth and stress-free.

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

export default Discover;
