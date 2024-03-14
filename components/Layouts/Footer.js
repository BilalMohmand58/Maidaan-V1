import React from "react";
import Link from "next/link";
import Image from "next/image";

import shape12 from "../../public/images/shape/shape12.svg";
import shape13 from "../../public/images/shape/shape13.svg";
import shape14 from "../../public/images/shape/shape14.png";
import shape15 from "../../public/images/shape/shape15.png";
import shape2 from "../../public/images/shape/shape2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer-area">
                <div className="footer-heading">
                  <h3>Maidaan</h3>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                </p>

                <ul className="footer-social">
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      className="bg-3955bc"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="bg-1da1f2"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="bg-004dff"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="bg-0273af"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-item-area">
                <div className="footer-heading">
                  <h3>Important Links</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-item-area">
                <div className="footer-heading">
                  <h3>Featured Service</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/services/single-service/">SEO Marketing</Link>
                  </li>
                  <li>
                    <Link href="/services/single-service/">SEO Services</Link>
                  </li>
                  <li>
                    <Link href="/services/single-service/">Services</Link>
                  </li>
                  <li>
                    <Link href="/services/single-service/">Pay-Per-Click</Link>
                  </li>
                  <li>
                    <Link href="/services/single-service/">Social Media</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="mb-30">
                <div className="footer-heading">
                  <h3>Contact</h3>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-call-answer"></i>
                  <h3>Phone</h3>
                  <span>(+92) 304-111-3309</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span>info@themaidaan.com</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-placeholder-filled-point"></i>
                  <h3>Address</h3>
                  <span>Fortune Plaza 3rd Floor, Blue Area Islamabad</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="default-animation">
          <div className="shape-img1">
            <Image src={shape12} alt="image" width={21} height={20} />
          </div>
          <div className="shape-img2">
            <Image src={shape13} alt="image" width={22} height={22} />
          </div>
          <div className="shape-img3">
            <Image src={shape14} alt="image" width={15} height={15} />
          </div>
          <div className="shape-img4">
            <Image src={shape15} alt="image" width={18} height={18} />
          </div>
          <div className="shape-img5">
            <Image src={shape2} alt="image" width={23} height={23} />
          </div>
        </div>
      </footer>

      {/* Copyright footer */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p>
                © {currentYear}. All Rights Reserved by{" "}
                <a href="https://envytheme.com/" target="_blank">
                  Maidaan
                </a>
              </p>
            </div>

            <div className="col-lg-6">
              <ul>
                <li>
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
