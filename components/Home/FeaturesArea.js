import React from "react";
import Image from "next/image";

import shape8 from "../../public/images/shape/shape8.png";
import shape5 from "../../public/images/shape/shape5.png";

const FeaturesArea = () => {
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="features-title">
            <span>Core Features</span>
            <h3>Gain benefits via the customer centric offerings</h3>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-item bg-f27e19">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>Transparency and Reliability</h3>
                <p>
                  Establishing transparency through a trusted and reliable
                  source for property evaluations and selections.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-item bg-f27e19">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>Property Sales</h3>
                <p>
                  Selling luxury properties for our existing clients and seeking
                  potential clients to expand your client base.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-item bg-f27e19">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>Stakeholder Relations</h3>
                <p>
                  Strengthening relationships with stakeholders, including
                  property investors, developers, owners, sellers, agents, and
                  government bodies.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-item bg-f27e19">
                <div className="icon">
                  <i className="flaticon-analysis-1"></i>
                </div>
                <h3>Brand Positioning & Visibility</h3>
                <p>
                  Elevating your brand's presence in the national/international
                  market through strategic positioning and enhanced visibility
                  strategies with us.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="features-animation">
          <div className="shape-img1">
            <Image src={shape8} alt="image" width={20} height={20} />
          </div>
          <div className="shape-img2">
            <Image src={shape5} alt="image" width={71} height={16} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesArea;
