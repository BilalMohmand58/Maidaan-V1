import React from "react";
import Link from "next/link";
import Image from "next/image";

import chooseImg from "../../public/images/choose-image.jpg";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-section bg-fafafa">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div
              className="col-lg-7 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="choose-content-area">
                <span>Why Choose Us</span>
                <h3>We Bring You Real Estate Success.</h3>
                <p>
                  At Maidaan, we stand out as your premier choice in the dynamic
                  realm of real estate. Our commitment to{" "}
                  <strong>Simplifying Real Estate</strong> is more than a slogan
                  – it's a promise. Choose Maidaan for a seamless experience,
                  unmatched expertise, and a future-forward approach that
                  propels you confidently through the ever-evolving landscape of
                  real estate. Your journey to successful property transactions
                  begins with us.
                </p>

                <div class="container">
                  <div class="choose-text">
                    <i class="flaticon-check-mark"></i>
                    <h4>User-friendly Platform</h4>
                    <p>Facilitates seamless property transactions.</p>
                  </div>

                  <div class="choose-text">
                    <i class="flaticon-check-mark"></i>
                    <h4>Advanced Search Filters</h4>
                    <p>Enables specific property searches.</p>
                  </div>

                  <div class="choose-text">
                    <i class="flaticon-check-mark"></i>
                    <h4>Secure Transactions</h4>
                    <p>Integration with various payment gateways for safety.</p>
                  </div>

                  <div class="choose-text">
                    <i class="flaticon-check-mark"></i>
                    <h4>Diverse Property Listings</h4>
                    <p>
                      Residential, commercial, and prestigious Dubai real estate
                      projects.
                    </p>
                  </div>

                  <div class="choose-text">
                    <i class="flaticon-check-mark"></i>
                    <h4>Access to Real Estate Professionals</h4>
                    <p>
                      Connects users with agents for personalized assistance.
                    </p>
                  </div>

                  <div class="choose-text">
                    <i class="flaticon-check-mark"></i>
                    <h4> Transparent Pricing</h4>
                    <p>Ensures clarity in property pricing and negotiations.</p>
                  </div>

                  <div class="choose-text">
                    <i class="flaticon-check-mark"></i>
                    <h4>Property Management Integration</h4>
                    <p>
                      Seamlessly manages properties for landlords and tenants.
                    </p>
                  </div>

                  <div class="choose-text">
                    <i class="flaticon-check-mark"></i>
                    <h4>Market Updates</h4>
                    <p>Provides real-time market insights.</p>
                  </div>
                </div>

                <div className="choose-btn">
                  <Link href="/contact-us" className="default-btn-one">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-5 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="choose-image">
                <Image src={chooseImg} alt="image" width={584} height={574} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
