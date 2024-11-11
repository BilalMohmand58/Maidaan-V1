import React from "react";
import Link from "next/link";
import Image from "next/image";

// Shape Images
import shape5 from "../../public/images/shape/shape5.png";
import shape8 from "../../public/images/shape/shape8.png";
import ContactButton from "../Home/ContactButton";

const FeaturesContent = () => {
  return (
    <>
      <div className="features-section" id="explore">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="features-content-area">
                <span>Property ka Maidaan
                </span>
                <h3> Connecting Communities, Expanding Opportunities
                </h3>
                <p className="mb-3 fw-bold ">
                "Property ka Maidaan" is more than an expo; 
                </p>

                <p>
              
It's a platform where overseas Pakistanis connect with exclusive real estate opportunities in the U.S. and Pakistan. Featuring a dedicated Pakistan Pavilion, the event showcases top developers, builders, and projects, providing a one-stop destination for investment insights and networking. Attendees can explore booths, participate in panel discussions, enjoy community dinners, and gain valuable insights on U.S. real estate.
With Property ka Maidaan, Maidaan Properties empowers the Pakistani diaspora to make informed, confident investments, fostering valuable connections across borders.

                </p>

                <div className="features-btn">
                  <ContactButton />
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="single-features-item bg-f1eff8">
                    <div className="icon">
                      <i className="flaticon-check-mark"></i>
                    </div>
                    <h3>Iconic Landmarks</h3>
                    <p>
                      Explore the architectural marvels of Dubai, from the
                      towering Burj Khalifa to the enchanting Palm Jumeirah.
                      Discover the city's skyline and historic sites, creating
                      memories against the backdrop of breathtaking vistas.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="single-features-item bg-fbe6d4">
                    <div className="icon">
                      <i className="flaticon-check-mark"></i>
                    </div>
                    <h3>Strategic Investment</h3>
                    <p>
                      Transform your Dubai visit into a smart investment.
                      Explore prime real estate opportunities and learn how your
                      travel expenses can be adjusted against the downpayment of
                      your property investment, making every moment count
                      towards your future.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="single-features-item bg-f0fffc">
                    <div className="icon">
                      <i className="flaticon-check-mark"></i>
                    </div>
                    <h3>Cultural Diversity</h3>
                    <p>
                      Immerse yourself in the rich tapestry of Dubai's culture.
                      From traditional souks to contemporary art galleries,
                      discover a vibrant blend of heritage and innovation that
                      captivates every visitor.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="single-features-item bg-f8e1eb">
                    <div className="icon">
                      <i className="flaticon-check-mark"></i>
                    </div>
                    <h3>Meet the Developers</h3>
                    <p>
                      Gain invaluable insights by meeting directly with Dubai’s
                      leading real estate developers. Discover upcoming
                      projects, understand market trends, and forge potential
                      investment paths in one of the world's most dynamic
                      property landscapes.
                    </p>
                  </div>
                </div>
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
            <Image src={shape5} alt="shape" width={71} height={16} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesContent;
