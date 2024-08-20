import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/maidaanxff.jpg";
import Link from "next/link";

const MaidaanXmirpur = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="row align-items-center">
            {/* <div
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
            </div> */}

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-area-content">
                <span>Maidaan X Mirpur</span>
                <h3>
                  Property Ka Maidaan Mirpur: A Hub of Lucrative Investment
                  Prospects
                </h3>

                <p>
                  Maidaan, following its successful event in Lahore, organized
                  another gathering in Mirpur City, Azad Kashmir on April 20th,
                  2024 at Jabeer Marquee. The event, titled "Property Ka
                  Maidaan," presented exclusive investment options in domestic
                  and international properties. Raja Mehtab, CEO of Maidaan
                  Group of companies as a chief guest and Sheikh Abdul Rasheed,
                  President of the Mirpur Real Estate Association, was also at
                  the event. Approximately 400-450 people attended, including
                  investors, overseas Pakistani realtors, real estate
                  professionals, dealers and locals from Mirpur.
                </p>
                <div className="choose-btn mt-3 mb-4">
                  <Link href="/mirpur" className="default-btn-one">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaidaanXmirpur;
