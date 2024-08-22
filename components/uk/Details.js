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
                
                <h3>Why Attend?</h3>

                <p>
                  <b>In-depth Knowledge: </b> 
                  Gain valuable insights into
                  the Pakistani real estate market and investment opportunities.<br/>
                  <b>Expert Guidance: </b>
                  Receive personalized advice from our
                  experienced professionals on making informed investment
                  decisions. <br/>
                  <b>Networking Opportunities: </b>
                  
                  Connect with like-minded investors and industry experts. 
                  <br/><br/>
                  <h6>Exclusive Invite-Only Seminar:
                  Pakistan Property Talk with Maidaan!</h6>
                   Are you curious about
                  real estate taxes in Pakistan? Want to understand the benefits
                  of being a tax filer, especially if you own property? Join us
                  for an exclusive, invite-only seminar where we'll address
                  these critical topics and more. Whether you have questions
                  about your current real estate investments or are looking to
                  invest in your dream home, this seminar is designed to provide
                  you with valuable insights and guidance. Our experts will help
                  you navigate the complexities of real estate transactions and
                  taxation to ensure you're well-informed. </p>
                  <br/>
                  <h5>Why Attend This
                  Seminar?</h5>
                  <p> This exclusive seminar offers a unique opportunity to gain expert insights into the intricacies of real estate transactions and tax benefits in Pakistan. By attending, you'll have direct access to knowledgeable professionals who can answer your specific questions, provide tailored advice, and help you make informed decisions about your real estate investments. Don't miss this chance to enhance your understanding of the property market and learn strategies that can optimize your investments and maximize your returns. Secure your spot today and take the first step towards achieving your property goals!
                  {" "}
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
