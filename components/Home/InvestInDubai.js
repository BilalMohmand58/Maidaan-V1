import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/investindubai.webp";
import Link from "next/link";
import ContactButton from "./ContactButton";

const InvestInDubai = () => {
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
            </div>

            <div
              className="col-lg-6 col-md-12 pe-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-area-content">
                <span>Lorem Ipsum Dolor </span>
                <h3>Lorem Ipsum Dolor: Consectetur Adipiscing Elit</h3>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at justo ac ligula fermentum varius. Nullam vel enim id dui tincidunt tincidunt. Curabitur euismod urna in orci laoreet, ac interdum nisl volutpat. Phasellus eget tellus eget odio convallis posuere ut nec purus. Sed euismod lorem orci, nec consectetur turpis suscipit a.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel vestibulum turpis, non accumsan risus. Nunc a nibh ligula. Integer at tincidunt ligula, ut scelerisque eros. Ut in orci sit amet sapien aliquam vestibulum et in elit.
                </p>
              </div>
              <div
                className="banner-btn mt-5"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                {/* <Link href="/about-us" className="default-btn-one">
                  Get In Touch
                </Link> */}

                {/* <ContactButton /> */}

                {/* <div
                        onClick={() => setToggler(!toggler)}
                        className="video-btn popup-youtube"
                      >
                        Watch Video <i className="flaticon-play-button"></i>
                      </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestInDubai;
