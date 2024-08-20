import React from "react";
import Image from "next/image";

import aboutImg1 from "../../public/images/event/mirpur7.jpg";
import aboutImg2 from "../../public/images/event/mirpur5.jpg";
import aboutImg3 from "../../public/images/event/mirpur1.jpg";
import aboutImg4 from "../../public/images/event/mirpur3.jpg";
import ContactButton from "../Home/ContactButton";

const Details = () => {
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
                        src={aboutImg3}
                        alt="About Img 3"
                        width={290}
                        height={268}
                      />
                    </div>
                  </div>
                  <div className="image-item">
                    <div className="zoom-on-hover">
                      <Image
                        src={aboutImg4}
                        alt="About Img 4"
                        width={290}
                        height={268}
                      />
                    </div>
                  </div>
                </div>
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
                <span>Investment Opportunities</span>
                <h3>
                Insightful Discussions on Investment Opportunities
                </h3>

                <p>
                The event provided a comprehensive overview of current and emerging investment opportunities within the real estate sector. Attendees had the chance to engage in detailed discussions about market trends, investment strategies, and the potential for growth in both local and international property markets. The presentations, delivered by experts and seasoned professionals, highlighted key areas for investment and offered valuable insights into maximizing returns.</p>
              </div>
              <div
                className="banner-btn mt-5 mb-3"
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

export default Details;
