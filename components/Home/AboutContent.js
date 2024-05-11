import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/about-image.jpg";

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
                  Dive into luxury, culture, and family-friendly real estate
                  opportunities. Explore over 30 leading domestic and
                  international brands and uncover prime real estate gems.
                </strong>
                <p>
                  Maidaan, a trusted partner, helps you explore the unique gems
                  of real estate marketing. We are a leading real estate
                  marketing company and specialize in providing comprehensive
                  services by our dedicated real estate marketing team for
                  buying, selling, and renting properties.
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
