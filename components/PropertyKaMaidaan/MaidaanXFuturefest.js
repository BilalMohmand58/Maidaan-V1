import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/maidaanxff.jpg";

const MaidaanXFuturefest = () => {
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
                <span>Maidaan X Future Fest</span>
                <h3>
                  Property Ka Maidaan Lahore: Bridging Local and International
                  Investments
                </h3>

                <p>
                  Maidaan, in collaboration with Future Fest, held the 'Property
                  Ka Maidaan' event at Expo Center Lahore from March 31st until
                  Eid ul Fitr, from Iftar till Sehr. Property Ka Maidaan aimed
                  to help investors explore exclusive offerings and investment
                  options directly from renowned domestic and international real
                  estate developers, alongside Maidaan’s sales team. Our mission
                  was to bridge the gap between potential investors in Pakistan
                  and lucrative domestic and international real estate
                  opportunities. The primary objective of this event was to sell
                  properties, promote, market, and position the Maidaan brand
                  while fostering collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaidaanXFuturefest;
