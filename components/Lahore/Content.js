import React from "react";
import Image from "next/image";

import aboutImg1 from "../../public/images/event/lahore14.jpg";
import aboutImg2 from "../../public/images/event/lahore13.jpg";
import aboutImg3 from "../../public/images/event/lahore12.JPG";
import aboutImg4 from "../../public/images/event/lahore6.JPG";
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
                Unlock Exclusive Real Estate Opportunities with Maidaan
                </h3>

                <p>
                At 'Property Ka Maidaan,' Maidaan provided investors with unparalleled access to exclusive real estate opportunities, offering a direct channel to explore and invest in premium properties. This event was a prime opportunity for investors to secure high-value assets, guided by industry experts who ensured a seamless and informed investment process. Through this initiative, Maidaan reinforced its commitment to delivering top-tier investment options, bridging the gap between investors and high-growth real estate markets.
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