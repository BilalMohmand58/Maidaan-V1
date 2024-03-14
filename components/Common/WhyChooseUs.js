import React from "react";
import Link from "next/link";
import Image from "next/image";

import chooseImg from "../../public/images/choose-image.png";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-section">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
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
                <Image src={chooseImg} alt="image" width={574} height={574} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
