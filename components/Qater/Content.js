import React from "react";
import Image from "next/image";

import aboutImg1 from "../../public/images/event/doha2.jpeg";
import aboutImg2 from "../../public/images/event/doha3.jpeg";
import aboutImg3 from "../../public/images/event/doha4.jpeg";
import aboutImg4 from "../../public/images/event/doha8.jpeg";
import ContactButton from "../Home/ContactButton";

const Content = () => {
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
                <span>maidaan</span>
                <h3>
                Experience Excellence in Real Estate Investment
                </h3>

                <p>
                Maidaan is dedicated to offering unparalleled real estate opportunities, catering to the needs of both local and international investors. Our commitment to quality and customer satisfaction is evident in every project we undertake. Whether you are looking to invest in a luxurious property like Victory Villas or seeking expert advice on the best real estate options in Pakistan, Maidaan is your trusted partner. Our experienced team of professionals is always ready to guide you through every step of your investment journey, ensuring that your decision is well-informed and beneficial in the long run.

</p>
              </div>
              <div
                className="banner-btn mt-5 mb-4"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;