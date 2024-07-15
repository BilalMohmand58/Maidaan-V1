import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/MaidaanXVC.jpg";
import Link from "next/link";

const MaidaanXVc = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="row align-items-center">
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
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-area-content pb-70">
                <span>
                  Maidaan and Victory Construction: A Powerful Partnership
                </span>
                <h3>
                  Combining Vision and Expertise to Achieve Exceptional Quality
                  and Speed in High-Rise Projects
                </h3>
                <strong>
                  Maidaan, as the marketing partner and project head, has
                  collaborated with Victory Construction, leveraging their 40+
                  years of experience as the construction partner, to deliver
                  projects with exceptional quality and speed.
                </strong>
                <p>
                  This partnership has proven to be highly successful, combining
                  Maidaan's rapidly growing success and vision with Victory
                  Construction's expertise. Their collaboration has been a key
                  factor in Maidaan's recent achievements, enabling the
                  completion of high-rise commercial projects in record time
                  despite market fluctuations and challenges. This synergy
                  between Maidaan's visionary approach and Victory
                  Construction's execution has been instrumental in our success
                  over the past year.
                </p>
              </div>
              <div className="choose-btn">
                <Link href="/contact-us" className="default-btn-one">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaidaanXVc;
