import React from "react";
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
                <span>Discover the Magic of Victory Villas</span>
                <h3>Your Ultimate Adventure Awaits</h3>
                <p className="mb-3 fw-bold ">
                  Unveil the Splendor of the Luxury Property – From Sky-High
                  Wonders to Cultural Treasures
                </p>

                <p>
                  A 2-night, 3-day luxury journey blending travel and investment
                  opportunities. Explore iconic landmarks and engage with
                  leading real estate projects. Unique to this package, invest
                  in Victory Villas property and your trip's cost will be
                  adjusted against your downpayment. Experience the blend of
                  culture, luxury, and investment potential in one of the
                  world's most dynamic property landscapes. Start your
                  investment journey with added travel pleasure in Victory
                  Villas.
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
                      Explore the architectural marvels of Victory Villas, from
                      the towering structures to the enchanting landscapes.
                      Discover the property's beauty and historic sites,
                      creating memories against the backdrop of breathtaking
                      vistas.
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
                      Transform your visit to Victory Villas into a smart
                      investment. Explore prime real estate opportunities and
                      learn how your travel expenses can be adjusted against the
                      downpayment of your property investment, making every
                      moment count towards your future.
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
                      Immerse yourself in the rich tapestry of Victory Villas'
                      culture. From traditional landmarks to contemporary
                      amenities, discover a vibrant blend of heritage and
                      innovation that captivates every visitor.
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
                      Gain invaluable insights by meeting directly with Victory
                      Villas’ leading real estate developers. Discover upcoming
                      projects, understand market trends, and forge potential
                      investment paths in one of the world's most dynamic
                      property landscapes.
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
