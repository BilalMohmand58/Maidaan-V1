import React from "react";
import Image from "next/image";

import analysisImg from "../../public/images/banner.jpg";

const AnalysisFormContent = () => {
  return (
    <>
      <div className="analysis-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="analysis-area-content">
                <span>Analysis</span>
                <h3>Get Free SEO Analysis</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>

              <form className="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Your Name *"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="text"
                        id="text"
                        className="form-control"
                        placeholder="Email *"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="phone"
                        className="form-control"
                        placeholder="Phone *"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="website"
                        className="form-control"
                        placeholder="Website *"
                      />
                    </div>
                  </div>
                </div>

                <div className="send-btn">
                  <button type="submit" className="default-btn-one">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="analysis-image right">
                <Image src={analysisImg} alt="image" width={565} height={407} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalysisFormContent;
