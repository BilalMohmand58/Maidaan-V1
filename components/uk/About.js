import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/event/ukE.jpg";


const About = () => {
  return (
    <>
      <div className="dubai-section" id="invest">
        <div className="container">
          <div className="row align-items-center ">
            <div
              className="col-lg-6 col-md-12 pe-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true">
              <div className="about-area-content">
                <span>Maidaan UK Tour:</span>
                <h4>
                Empowering Overseas Pakistanis with Real Estate Investment Opportunities

                </h4>
<br/>
                <h6>

Welcome to Maidaan's UK Tour!
</h6> 
                <p>
                 
                Following our successful events across various countries, Maidaan brought a premier real estate investment initiative to the UK. Our mission was to support overseas Pakistanis in investing in the thriving real estate market of Pakistan, offering them exclusive opportunities to own a dream home in one of the most sought-after locations near Islamabad.

                </p><br />
                <h6>Introducing Victory Villas: Your Dream Home Awaits
                </h6>
                <p>
                Our spotlight project, Victory Villas, is a premier residential development situated in the serene Airport Green Garden, just minutes away from Islamabad International Airport. This project offers a unique blend of modern living and convenience, making it an ideal choice for those looking to invest in a high-quality property in Pakistan.

                </p>
              </div>
              <div
                className="banner-btn mt-5"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300">
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
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true">
              <div className="about-image">
                <Image
                  src={aboutImg}
                  alt="About Img"
                  width={595}
                  height={536}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
