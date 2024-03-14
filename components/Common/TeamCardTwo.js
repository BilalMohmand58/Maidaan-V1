import React from "react";
import Image from "next/image";

import teamImg1 from "../../public/images/team/team4.jpg";
import teamImg2 from "../../public/images/team/team5.jpg";
import teamImg3 from "../../public/images/team/team6.jpg";

const TeamCardTwo = () => {
  return (
    <>
      <div className="team-section bg-color pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Team</span>
            <h3>Meet Our Team</h3>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="team-item">
                <div className="image">
                  <Image src={teamImg1} alt="image" width={510} height={500} />

                  <ul className="social">
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
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
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content bg-ffffff">
                  <h3>James Adult</h3>
                  <span>Cardiologist</span>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="team-item">
                <div className="image">
                  <Image src={teamImg2} alt="image" width={510} height={500} />

                  <ul className="social">
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
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
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content bg-ffffff">
                  <h3>James Alison</h3>
                  <span>Medicine</span>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="team-item">
                <div className="image">
                  <Image src={teamImg3} alt="image" width={510} height={500} />

                  <ul className="social">
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
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
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content bg-ffffff">
                  <h3>Jelin Alis</h3>
                  <span>Neurologiest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCardTwo;
