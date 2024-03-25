import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/logo.png";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-two">
        <div className="neemo-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <Image src={logo} alt="logo" width={150} height={34} />
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {/* <li className="nav-item">
                    <Link
                      href="/"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Home <i className="fa-solid fa-plus"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/"
                          className={`nav-link ${
                            currentPath == "/" && "active"
                          }`}
                        >
                          Home Demo - 1
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/index2/"
                          className={`nav-link ${
                            currentPath == "/index2/" && "active"
                          }`}
                        >
                          Home Demo - 2
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/index3/"
                          className={`nav-link ${
                            currentPath == "/index3/" && "active"
                          }`}
                        >
                          Home Demo - 3
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/propertyKaMaidaan/"
                      className={`nav-link ${
                        currentPath == "/propertyKaMaidaan/" && "active"
                      }`}
                    >
                      Property Ka Maidaan
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-us/"
                      className={`nav-link ${
                        currentPath == "/about-us/" && "active"
                      }`}
                    >
                      About us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/services/"
                      className={`nav-link ${
                        currentPath == "/services/" && "active"
                      }`}
                    >
                      Services
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Services <i className="fa-solid fa-plus"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services/"
                          className={`nav-link ${
                            currentPath == "/services/" && "active"
                          }`}
                        >
                          Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services/single-service/"
                          className={`nav-link ${
                            currentPath == "/services/single-service/" &&
                            "active"
                          }`}
                        >
                          Service Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Projects <i className="fa-solid fa-plus"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/projects/"
                          className={`nav-link ${
                            currentPath == "/projects/" && "active"
                          }`}
                        >
                          Projects
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/projects-two/"
                          className={`nav-link ${
                            currentPath == "/projects-two/" && "active"
                          }`}
                        >
                          Projects Two
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/projects/single-project/"
                          className={`nav-link ${
                            currentPath == "/projects/single-project/" &&
                            "active"
                          }`}
                        >
                          Victory Chib Heights
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/projects/single-project/"
                          className={`nav-link ${
                            currentPath == "/projects/single-project/" &&
                            "active"
                          }`}
                        >
                          Prince One Mall
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/projects/single-project/"
                          className={`nav-link ${
                            currentPath == "/projects/single-project/" &&
                            "active"
                          }`}
                        >
                          V7 Heights
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/projects/single-project/"
                          className={`nav-link ${
                            currentPath == "/projects/single-project/" &&
                            "active"
                          }`}
                        >
                          Jhelum Villas
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link
                      href="/projects/"
                      className={`nav-link ${
                        currentPath == "/projects/" && "active"
                      }`}
                    >
                      Projects
                    </Link>
                  </li> */}

                  <li className="nav-item">
                    <Link
                      href="/blog/"
                      className={`nav-link ${
                        currentPath == "/blog/" && "active"
                      }`}
                    >
                      Blogs
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Blog <i className="fa-solid fa-plus"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${
                            currentPath == "/blog/" && "active"
                          }`}
                        >
                          Blog
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog/single-blog/"
                          className={`nav-link ${
                            currentPath == "/blog/single-blog/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Pages <i className="fa-solid fa-plus"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/features/"
                          className={`nav-link ${
                            currentPath == "/features/" && "active"
                          }`}
                        >
                          Features
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/team/"
                          className={`nav-link ${
                            currentPath == "/team/" && "active"
                          }`}
                        >
                          Team
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/pricing/"
                          className={`nav-link ${
                            currentPath == "/pricing/" && "active"
                          }`}
                        >
                          Pricing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq/"
                          className={`nav-link ${
                            currentPath == "/faq/" && "active"
                          }`}
                        >
                          FAQ
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/404/"
                          className={`nav-link ${
                            currentPath == "/404/" && "active"
                          }`}
                        >
                          404 error
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/coming-soon/"
                          className={`nav-link ${
                            currentPath == "/coming-soon/" && "active"
                          }`}
                        >
                          Coming Soon
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link
                      href="/contact-us/"
                      className={`nav-link ${
                        currentPath == "/contact-us/" && "active"
                      }`}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-options">
                {/* <div className="option-item">
                  <i
                    className="search-btn fa fa-search"
                    onClick={handleToggleSearchModal}
                  ></i>
                </div> */}

                <div className="burger-menu" onClick={handleToggleSidebarModal}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      {/* <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div className={`sidebar-modal ${isActiveSidebarModal ? "" : "active"}`}>
        <div className="sidebar-modal-inner">
          <span
            className="close-btn sidebar-modal-close-btn"
            onClick={handleToggleSidebarModal}
          >
            <i className="fas fa-times"></i>
          </span>

          <div className="sidebar-logo">
            <Link href="/" className="navbar-brand">
              <Image src={logo} alt="logo" width={150} height={34} />
            </Link>
          </div>
          <div className="sidebar-about-area">
            <div className="title">
              <p>
                We are simplifying the real estate of Pakistan by leveraging
                technology, making it more convenient, accessible, and
                transparent for all.
              </p>
            </div>
          </div>
          {/* <div className="contact-items">
            <h4>Contact Info</h4>
            <span className="info">
              <i className="fas fa-phone"></i> 0304-111-3309
            </span>
            <span className="info">
              <i className="far fa-envelope"></i> info@themaidaan.com
            </span>
          </div> */}
          {/* Maidaan Office Location */}

          <div className="sidebar-map">
            <h2>Head Office Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1917.2352478530238!2d73.0605570899873!3d33.712199225383934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfc4d6e85d3d%3A0x9354aafce8605d7!2sMaidaan%20Head%20Office!5e0!3m2!1sen!2sus!4v1709104028652!5m2!1sen!2sus"
              width="300"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Instagram feed */}
          {/* <div className="sidebar-instagram-feed">
            <h2>Instagram</h2>
            <ul>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src={instagramImg1}
                    alt="image"
                    width={100}
                    height={78}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src={instagramImg2}
                    alt="image"
                    width={100}
                    height={78}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src={instagramImg3}
                    alt="image"
                    width={100}
                    height={78}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src={instagramImg4}
                    alt="image"
                    width={100}
                    height={78}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src={instagramImg5}
                    alt="image"
                    width={100}
                    height={78}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src={instagramImg6}
                    alt="image"
                    width={100}
                    height={78}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src={instagramImg7}
                    alt="image"
                    width={100}
                    height={78}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src={instagramImg8}
                    alt="image"
                    width={100}
                    height={78}
                  />
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="sidebar-contact-area">
            <div className="contact-info">
              <div className="contact-info-content">
                <ul className="social">
                  <li>
                    <a href="https://twitter.com/the_maidaan" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.facebook.com/themaidaan/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://linkedin.com/company/maidaan"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/themaidaan/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </>
  );
};

export default Navbar;
