import React from "react";
import Link from "next/link";
import Image from "next/image";

import chooseImg from "../../public/images/choose-image.png";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-section bg-fafafa">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="choose-content-area">
                <span>Why Choose Us</span>
                <h3>Outstanding Digital Experience</h3>
                <p>
                  At Maidaan, we stand out as your premier choice in the dynamic
                  realm of real estate. Our commitment to "Simplifying Real
                  Estate" is more than a slogan – it's a promise. With a track
                  record of streamlining property transactions, our
                  user-friendly platform, innovative marketing solutions, and
                  transparent processes redefine industry standards. Choose
                  Maidaan for a seamless experience, unmatched expertise, and a
                  future-forward approach that propels you confidently through
                  the ever-evolving landscape of real estate. Your journey to
                  simplified, efficient, and successful property transactions
                  begins with us.
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>First Working Process</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor abore et dolore magna aliqua.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Dedicated Team Member</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor abore et dolore magna aliqua.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>24/7 Support</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor abore et dolore magna aliqua.
                  </p>
                </div>

                <div className="choose-btn">
                  <Link href="/about-us" className="default-btn-one">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
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
