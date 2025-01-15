import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/projectsofmaidaan.jpg";
import Link from "next/link";
import ContactButton from "./ContactButton";

const MaidaanAchievments = () => {
  return (
    <>
      <div className="dubai-section" id="pakInvest">
        <div className="container">
          <div className=" row flex-row-reverse align-items-center ">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true">
              <div className="about-image">
                <Image src={aboutImg} alt="projects" width={595} height={336} />
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12 pe-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true">
              <div className="about-area-content">
                <span>Maidaan's Achievements </span>
                <h3>Significant Achievements and Milestones of Maidaan</h3>

                <p>
                  At Maidaan, we take immense pride in our significant
                  achievements over the past year. Our commitment and
                  collaborative initiatives have led to the delivery of
                  high-rise commercial and residential projects like V7 Heights,
                  Victory Chib Heights, Prince One Mall, and Jhelum Villas
                  within record time in last just one year. In a challenging
                  period for Pakistan's real estate and construction industry,
                  our dedication and hard work ensured swift and efficient
                  project completion. <br />A major milestone for us is the
                  launch of "Property Ka Maidaan", a dynamic platform organizing
                  marketing, collaboration, and sales events across Pakistan and
                  internationally. Through PKM in last 1 year, we have
                  successfully held events in UK, USA, Qatar, Lahore, Jhelum,
                  Mirpur, and more areas, providing valuable investment
                  opportunities in both local and global markets. These
                  accomplishments reflect our vision, resilience, and leadership
                  in the real estate sector.
                </p>
              </div>
              <div
                className="banner-btn mt-5"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100">
                {/* <Link href="/about-us" className="default-btn-one">
                  Get In Touch
                </Link> */}

                <ContactButton />

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

export default MaidaanAchievments;
