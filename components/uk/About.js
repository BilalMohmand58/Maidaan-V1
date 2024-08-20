import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/event/ukE.jpg";
import Link from "next/link";


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
              data-aos-once="true"
            >
              <div className="about-area-content">
                <span>𝐀𝐳𝐚𝐝𝐢 𝐄𝐯𝐞𝐧𝐭 𝐢𝐧 𝐭𝐡𝐞 𝐔𝐊  </span>
                <h3>Exclusive Invite-Only Seminar: Pakistan Property Talk with Maidaan!</h3>

                <p>
                Exclusive Invite-Only Seminar: Pakistan Property Talk with Maidaan!
Are you curious about real estate taxes in Pakistan? Want to understand the benefits of being a tax filer, especially if you own property? Join us for an exclusive, invite-only seminar where we'll address these critical topics and more.

Whether you have questions about your current real estate investments or are looking to invest in your dream home, this seminar is designed to provide you with valuable insights and guidance. Our experts will help you navigate the complexities of real estate transactions and taxation to ensure you're well-informed. </p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default About;