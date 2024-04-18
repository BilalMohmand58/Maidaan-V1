import React from "react";
import Image from "next/image";

// Shape Images
import shape5 from "../../public/images/shape/shape5.png";
import shape8 from "../../public/images/shape/shape8.png";
import ContactButton from "../Home/ContactButton";

const FeaturesContent = () => {
  return (
    <>
      <div className="features-section" id="explore">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="features-content-area">
                <span>Life at Victory Villas</span>
                <h3>Beyond Your Doorstep: A World of Amenities Awaits</h3>
                <p className="mb-3 fw-bold ">
                  Unveil the Splendor of the Luxury Property – From Sky-High
                  Wonders to Cultural Treasures
                </p>

                <p>
                  Nestled within the vibrant Airport Green Gardens community,
                  you'll enjoy a plethora of amenities designed to enhance your
                  everyday living at victory villas. Rest assured with features
                  like uninterrupted utilities – gas, electricity, and water –
                  alongside a robust drainage system. High-speed internet keeps
                  y ou connected, while a 24/7 security system with CCTV and
                  trained guards ensures peace of mind.
                  <br />
                  Victory Villas goes beyond the walls of your home. Explore a
                  world of leisure and entertainment with a sports club,
                  landscaped boulevards, and a mega shopping complex featuring
                  hotels and business centers. For families, a multipurpose
                  community center, international schools, and a dedicated
                  children's theme park provide endless opportunities for
                  connection and fun.
                </p>

                <div className="features-btn">
                  <ContactButton />
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="single-features-item bg-f1eff8">
                    <div className="icon">
                      <i className="flaticon-check-mark"></i>
                    </div>
                    <h3>Our Strategic Location</h3>
                    <p>
                      Victory Villas boasts a prime location within the
                      progressive Airport Green Gardens community. Enjoy easy
                      access to Islamabad International Airport, Islamabad toll
                      plaza, Kashmir Highway, Motorway M1, M2, and Top City.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="single-features-item bg-fbe6d4">
                    <div className="icon">
                      <i className="flaticon-check-mark"></i>
                    </div>
                    <h3>Flexible Payment Options</h3>
                    <p>
                      We offer a manageable down payment to get you started,
                      followed by convenient monthly installments that fit your
                      budget. Plus, our possession payment plan allows you to
                      spread out the remaining cost upon receiving the keys to
                      your new home.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="single-features-item bg-f0fffc">
                    <div className="icon">
                      <i className="flaticon-check-mark"></i>
                    </div>
                    <h3>Diverse Villas Offerings</h3>
                    <p>
                      Choose from our diverse range of villas, including the
                      luxurious double-story Royal Villas, perfect for grand
                      living. The Sunrise Villas offer a captivating corner
                      location, and the Majestic Villas provide a classic
                      single-story design.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="single-features-item bg-f8e1eb">
                    <div className="icon">
                      <i className="flaticon-check-mark"></i>
                    </div>
                    <h3>Landmark Community</h3>
                    <p>
                      Nestled within the prestigious Airport Green Gardens,
                      Victory Villas invites you to enjoy the benefits of a
                      vibrant community with modern amenities, eco- friendly
                      living, and unparalleled security, all within easy reach
                      of Islamabad International Airport.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="features-animation">
          <div className="shape-img1">
            <Image src={shape8} alt="image" width={20} height={20} />
          </div>
          <div className="shape-img2">
            <Image src={shape5} alt="shape" width={71} height={16} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesContent;
