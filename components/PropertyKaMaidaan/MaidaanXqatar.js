import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/maidaanxff.jpg";
import Link from "next/link";

const MaidaanXqatar = () => {
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
                <span>Maidaan Doha Event</span>
                <h3>
                  Property Ka Maidaan Doha: Expanding Horizons in the Global
                  Property Market
                </h3>

                <p>
                  Maidaan successfully made its mark to Qatar with the grand
                  showcase of Victory Villas at the Pakistan International
                  Property Expo (PIPEx) 2024 in Doha on 2nd, 3rd and 6th June,
                  2024. Attendees had the opportunity to experience luxury
                  living at its best with Victory Villas, strategically
                  positioned near New Islamabad Airport, offering convenience
                  and elegance to overseas Pakistanis and international
                  investors looking to invest in the Pakistani real estate
                  market. Evidently, this event was a great success, allowing
                  visitors to explore premium real estate options in Pakistan,
                  and engage with industry experts and developers who were there
                  to help them make the right decision.
                </p>
                <div className="choose-btn mt-3 mb-4">
                  <Link href="/qatar" className="default-btn-one">
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

export default MaidaanXqatar;
