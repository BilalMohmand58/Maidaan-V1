import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/about-image.jpg";

const AboutContent = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            {/* <div
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
            </div> */}

            <div
              className="col-lg-12 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-area-content">
                <span>Our Story</span>
                <h3>Maidaan Group of Companies</h3>
                <strong>
                  Maidaan Group of Companies is a leading real estate marketing
                  business in Pakistan, committed to simplifying the intricacies
                  of the real estate sector. This group was established in
                  September 2022, with a mission to simplify real estate and
                  make it accessible to all. With a focus on simplifying the
                  complexities inherent in the market.
                </strong>
                <p>
                  we specialize in providing comprehensive services for buying,
                  selling properties across Pakistan. Our slogan "Simplifying
                  Real Estate" encapsulates our dedication to making the real
                  estate process more accessible and transparent for all.
                </p>
                <p>
                  {" "}
                  Maidaan Group of Companies stands as a powerhouse
                  conglomerate, encompassing a diverse portfolio of enterprises
                  that resonate with innovation, excellence, and client-centric
                  solutions. Rooted in Pakistan yet thriving globally, our
                  spectrum of companies—Maidaan, Node Proptech, Bolt Media
                  Productions, The Sprocket Media Agency, Victory Villas,
                  Workwise, and Victory Constructions—embodies a collective
                  pursuit of pioneering advancements across various industries.
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
