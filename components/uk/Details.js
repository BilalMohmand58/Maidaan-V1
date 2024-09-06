import React from "react";
import Image from "next/image";

import aboutImg1 from "../../public/images/event/1.png";
import aboutImg2 from "../../public/images/event/2.png";
import aboutImg3 from "../../public/images/event/4.png";
import aboutImg4 from "../../public/images/event/3.png";
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
              data-aos-once="true">
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
              data-aos-once="true">
              <div className="about-area-content">
                <h3>Why People Attended?</h3>

                <p>
                  <b>In-depth Knowledge: </b>
                  To gain valuable insights into the Pakistani real estate
                  market and investment opportunities.<br />
                  <b>Expert Guidance: </b>
                  To receive personalized advice from our experienced
                  professionals on making informed investment decisions.
                  <br />
                  <b>Networking Opportunities: </b>
                  To connect with like-minded investors and industry experts. .
                  <br />
                  <br />
                  <h6>Pakistan Property Talk with Maidaan!</h6>
                  Are you interested in the latest insights on real estate taxes
                  in Pakistan? Curious about the advantages of being a tax
                  filer, particularly if you own property? Our recent seminar
                  covered these essential topics and more, offering invaluable
                  guidance for navigating real estate transactions and taxation.
                </p>
                <br />
                <h5>Why This Seminar Was a Must-Attend</h5>
                <p>
                  {" "}
                  Our exclusive seminar provided a unique opportunity to delve
                  into the complexities of real estate transactions and tax
                  benefits in Pakistan. Attendees gained direct access to
                  industry experts who addressed specific questions, offered
                  tailored advice, and helped participants make informed
                  decisions about their real estate investments. With expert
                  insights into the property market and investment strategies,
                  participants learned how to optimize their investments and
                  maximize returns.{" "}
                </p>
              </div>
              <div
                className="banner-btn mt-5 mb-3"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300">
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
