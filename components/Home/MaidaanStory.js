import React from "react";
import Image from "next/image";

import aboutImg from "../../public/images/about-image.jpg";

const AboutContent = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
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
              className="col-lg-12 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-area-content">
                <span>Our Story</span>
                <h3>Maidaan Group of Companies</h3>
                <strong>
                  In view of the locals as well as Overseas Pakistanis’
                  aspirations, Maidaan is committed to bringing luxury property
                  and technology together for futuristic investment at both
                  national and international levels.
                </strong>

                <p>
                  {" "}
                  Understanding the difficulties and pains deep-rooted in the
                  Pakistani real estate market, we’ve built a comprehensive
                  suite of services and introduced “Property Ka Maidaan," a
                  collaboration-oriented event series recently held in Lahore,
                  Mirpur, Jhelum and Doha, Qatar, to revolutionize the processes
                  for all participants. Whether you are buying, or selling
                  properties, Maidaan offers expert guidance and innovative
                  solutions to ensure a whole experience under one roof. Maidaan
                  also stands as a powerhouse conglomerate, encompassing a
                  diverse portfolio of enterprises that resonate with
                  innovation, excellence, and client-centric solutions. Rooted
                  in Pakistan yet thriving globally, our spectrum of
                  companies—Maidaan, Node Proptech, Bolt Media Productions, The
                  Sprocket Media Agency, Victory Villas, Workwise, and Victory
                  Constructions—embodies a collective pursuit of pioneering
                  advancements across various industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
