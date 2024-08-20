import React from "react";
import Image from "next/image";

import aboutImg1 from "../../public/images/event/mirpur5.jpg";
import aboutImg2 from "../../public/images/event/mirpur4.jpg";
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
                <span>Why Attend This Seminar?</span>
                <h3>
                Unlock the Secrets to Successful Real Estate Investment
                </h3>

                <p>
                This exclusive seminar offers a unique opportunity to gain expert insights into the intricacies of real estate transactions and tax benefits in Pakistan. By attending, you'll have direct access to knowledgeable professionals who can answer your specific questions, provide tailored advice, and help you make informed decisions about your real estate investments. Don't miss this chance to enhance your understanding of the property market and learn strategies that can optimize your investments and maximize your returns. Secure your spot today and take the first step towards achieving your property goals!  </p>
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
