import React from "react";
import Image from "next/image";

// Shape Images
import shape7 from "../../public/images/shape/shape7.png";
import shape9 from "../../public/images/shape/shape9.png";

const TeamCard = () => {
  return (
    <>
      <div className="team-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Team</span>
            <h3>Meet Our Team</h3>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="team-item-area">
                <div className="team-image">
                  <Image src={teamImg1} alt="image" width={510} height={500} />
                </div>

                <div className="team-content">
                  <h3>Edward Bold</h3>
                  <span>CEO & Founder</span>

                  <ul className="team-social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="team-item-area">
                <div className="team-image">
                  <Image src={teamImg2} alt="image" width={510} height={500} />
                </div>

                <div className="team-content">
                  <h3>Calvin Klein</h3>
                  <span>Marketing Support</span>

                  <ul className="team-social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="team-item-area">
                <div className="team-image">
                  <Image src={teamImg3} alt="image" width={510} height={500} />
                </div>

                <div className="team-content">
                  <h3>Alastair Cook</h3>
                  <span>Underwriter</span>

                  <ul className="team-social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="team-animation">
          <div className="shape-img1">
            <Image src={shape7} alt="shape" width={39} height={39} />
          </div>
          <div className="shape-img2">
            <Image src={shape9} alt="image" width={20} height={20} />
          </div>
          <div className="shape-img3">
            <Image src={shape7} alt="shape" width={39} height={39} />
          </div>
          <div className="shape-img4">
            <Image src={shape9} alt="image" width={20} height={20} />
          </div>
          <div className="shape-img5">
            <Image src={shape9} alt="image" width={20} height={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
