import React from "react";
import Link from "next/link";
import Image from "next/image";

import shape11 from "../../public/images/shape/shape11.png";
import logo from "../../public/images/maidaanlogowhite.png";

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
                  <Link href="/" className="navbar-brand">
                    <Image src={logo} alt="logo" width={150} height={34} />
                  </Link>
                </div>

                <p>
                  We are simplifying the real estate of Pakistan by leveraging
                  technology, making it more convenient, accessible, and
                  transparent for all.
                </p>

                <ul className="footer-social">
                  <li>
                    <a
                      href="http://linkedin.com/company/maidaan"
                      target="_blank"
                      className="bg-3955bc"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://web.facebook.com/themaidaanmarketing/"
                      target="_blank"
                      className="bg-1da1f2"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/the_maidaan"
                      target="_blank"
                      className="bg-004dff"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/themaidaan/"
                      target="_blank"
                      className="bg-0273af"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@themaidaan"
                      target="_blank"
                      className="bg-0273af"
                    >
                      <i className="fab fa-youtube"></i>
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
                    <Link href="/propertyKaMaidaan">Property Ka Maidaan</Link>
                    {/* <ol>
                      <li className="mt-3">
                        <Link href="/investInDubai/">Invest In Dubai</Link>
                      </li>
                      <li>
                        <Link href="/investInPak/">Invest In Pakistan</Link>
                      </li>
                      <li>
                        <Link href="/discoverDubai/">Discover Dubai</Link>
                      </li>
                    </ol> */}
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>

                  <li>
                    <Link href="/services">Services</Link>
                  </li>

                  <li>
                    <Link href="/blog">Blogs</Link>
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
                    <Link href="/services">Sale Support</Link>
                  </li>
                  <li>
                    <Link href="/services">
                      Maas ( Marketing As A Service )
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">Real Estate Solutions</Link>
                  </li>
                  <li>
                    <Link href="/services">Invest Tranparently</Link>
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
            <Image src={shape11} alt="image" width={21} height={20} />
          </div>
          <div className="shape-img2">
            <Image src={shape11} alt="image" width={22} height={22} />
          </div>
          <div className="shape-img3">
            <Image src={shape11} alt="image" width={15} height={15} />
          </div>
          <div className="shape-img4">
            <Image src={shape11} alt="image" width={18} height={18} />
          </div>
          <div className="shape-img5">
            <Image src={shape11} alt="image" width={23} height={23} />
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
                <a href="https://themaidaan.com/">Maidaan</a>
              </p>
            </div>

            <div className="col-lg-6">
              <ul>
                <li>
                  <Link href="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy/">Privacy Policy</Link>
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
