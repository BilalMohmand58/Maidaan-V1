import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

import realTimeAnalytic from "../../public/images/boosting/real-time-analytics.jpg";
import payPerClick from "../../public/images/boosting/pay-per-click.jpg";
import onlineMarketing from "../../public/images/boosting/online-marketing.jpg";
import emailMarketing from "../../public/images/boosting/email-marketing.jpg";
import socialMarketing from "../../public/images/boosting/social-marketing.jpg";
import digitalMarketing from "../../public/images/boosting/digital-marketing.jpg";

import shape from "../../public/images/boosting/shape.png";

const OutstandingDigitalExperience = () => {
  return (
    <>
      <div className="tab-section">
        <div className="container">
          <div className="section-title">
            <span>Investment Horizons</span>
            <h3>Explore investment opportunities</h3>
          </div>

          <Tabs className="boosting-list-tab">
            <TabList>
              <Tab>
                <i className="flaticon-hand"></i>

                <span>Emaar</span>
              </Tab>

              <Tab className="bg-eff7e9">
                <i className="flaticon-hand"></i>
                <span>DAMAC</span>
              </Tab>

              <Tab className="bg-fff8f0">
                <i className="flaticon-digital-marketing"></i>
                <span>NAKHEEL</span>
              </Tab>

              <Tab className="bg-ecfaf7">
                <i className="flaticon-email"></i>
                <span>Reportage Properties</span>
              </Tab>

              <Tab className="bg-f2f0fb">
                <i className="flaticon-network"></i>
                <span>SOBHA REALTY</span>
              </Tab>

              <Tab className="bg-c5ebf9">
                <i className="flaticon-analysis-1"></i>
                <span>MERAAS</span>
              </Tab>
            </TabList>

            <div className="tab_content">
              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="tab-image">
                      <Image
                        src={realTimeAnalytic}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="content">
                      <h2>EMAAR PROPERTIES</h2>
                      <p>
                        Emaar Properties is among the most admired and valuable
                        real estate development companies in the world. Emaar,
                        which has established competencies in real estate,
                        retail and shopping malls, hospitality, and leisure,
                        shapes new lifestyles through its commitment to design
                        excellence, build quality, and timely delivery.
                      </p>
                    </div>

                    {/* <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tab-text-content">
                          <i className="flaticon-analysis-2"></i>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tab-text-content">
                          <i className="flaticon-analysis-1"></i>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                    </div> */}

                    <div className="tab-btn">
                      <Link
                        href="https://properties.emaar.com/en/"
                        className="default-btn-one"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="tab-shape">
                  <Image src={shape} alt="shape" width={237} height={197} />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="tab-image">
                      <Image
                        src={payPerClick}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="content">
                      <h2>DAMAC PROPERTIES</h2>
                      <p>
                        Indulge in the epitome of luxury living with DAMAC
                        Properties, where a world of investment opportunities
                        awaits. Whether you're drawn to the charm of lavish
                        villas nestled within master communities, the allure of
                        waterfront apartments overlooking the iconic Dubai
                        Marina, or the glamour of Hollywood-inspired hotel rooms
                        in proximity to the vibrant Burj Area, DAMAC Properties
                        presents a diverse array of options tailored to your
                        discerning taste.
                      </p>
                    </div>

                    <div className="tab-btn">
                      <Link
                        href="https://promotions.damacproperties.com/"
                        className="default-btn-one"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="tab-shape">
                  <div className="tab-shape">
                    <Image src={shape} alt="shape" width={237} height={197} />
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image">
                      <Image
                        src={onlineMarketing}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>NAKHEEL PROPERTIES</h2>
                      <p>
                        Dubai-based Nakheel is a world-leading master developer
                        whose innovative, landmark projects form an iconic
                        portfolio of master communities and residential, retail,
                        hospitality and leisure developments that are pivotal to
                        realising Dubai’s vision. Nakheel’s waterfront projects,
                        including the world-famous, award-winning Palm Jumeirah,
                        have added more than 300 kilometres to Dubai’s original,
                        70km coastline, paving the way for the development of
                        hundreds of seafront homes, resorts, hotels and
                        attractions.
                      </p>
                    </div>

                    <div className="tab-btn">
                      <Link
                        href="https://www.nakheel.com/"
                        className="default-btn-one"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="tab-shape">
                  <Image src={shape} alt="shape" width={237} height={197} />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image">
                      <Image
                        src={emailMarketing}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>Reportage Properties</h2>
                      <p>
                        With over 20 years of experience, Reportage Properties
                        is one of the largest private developers in the United
                        Arab Emirates, with projects in Abu Dhabi, Dubai, and
                        now Egypt. <br />
                        Focused and consistent in our objective to provide
                        innovative, modern, and affordable housing solutions
                        that not only offer our investors an outstanding value
                        but also provide the home buyers a safe place to live
                        in. We build homes with unparalleled elegance and
                        comfort that redefine experiences.
                      </p>
                    </div>

                    <div className="tab-btn">
                      <Link
                        href="https://reportageuae.com/"
                        className="default-btn-one"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="tab-shape">
                  <Image src={shape} alt="shape" width={237} height={197} />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image">
                      <Image
                        src={socialMarketing}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>SOBHA REALTY</h2>
                      <p>
                        Sobha Hartland is a luxury real estate development
                        located in Dubai, United Arab Emirates. The development
                        features a variety of residential properties, including
                        apartments, townhouses, and villas. Sobha Hartland is
                        located in the Mohammed Bin Rashid Al Maktoum City area
                        of Dubai, and is close to popular landmarks such as the
                        Burj Khalifa, Dubai Mall, and Dubai Fountain. <br />{" "}
                        <br /> The development is known for its high-quality
                        construction and amenities, including parks, swimming
                        pools, and fitness centers. Come home to a resort-like
                        space that offers more room for everything you love;
                        from your baby’s first steps to your shiny new car,
                        there’s room to celebrate every family milestone in
                        Arabian Ranches III.
                      </p>
                    </div>

                    <div className="tab-btn">
                      <Link
                        href="/services/single-service/"
                        className="default-btn-one"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="tab-shape">
                  <Image src={shape} alt="shape" width={237} height={197} />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image">
                      <Image
                        src={digitalMarketing}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>Meraas</h2>
                      <p>
                        Meraas is committed to creating and consistently
                        delivering world-class real estate projects and master
                        developments that strengthen Dubai's position as the
                        global real estate investment destination of choice.
                        <br /> <br />
                        The legacy of developing well-known destinations and
                        prominent landmarks continues with well-designed and
                        coveted lifestyle experiences in waterfront, urban and
                        suburban locations.
                      </p>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tab-text-content">
                          <i className="flaticon-analysis-2"></i>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tab-text-content">
                          <i className="flaticon-analysis-2"></i>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="tab-btn">
                      <Link
                        href="/services/single-service/"
                        className="default-btn-one"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="tab-shape">
                  <Image src={shape} alt="shape" width={237} height={197} />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image">
                      <Image
                        src={digitalMarketing}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>Meraas</h2>
                      <p>
                        Meraas is committed to creating and consistently
                        delivering world-class real estate projects and master
                        developments that strengthen Dubai's position as the
                        global real estate investment destination of choice.
                        <br /> <br />
                        The legacy of developing well-known destinations and
                        prominent landmarks continues with well-designed and
                        coveted lifestyle experiences in waterfront, urban and
                        suburban locations.
                      </p>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tab-text-content">
                          <i className="flaticon-analysis-2"></i>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tab-text-content">
                          <i className="flaticon-analysis-2"></i>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="tab-btn">
                      <Link
                        href="/services/single-service/"
                        className="default-btn-one"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="tab-shape">
                  <Image src={shape} alt="shape" width={237} height={197} />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image">
                      <Image
                        src={digitalMarketing}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>Meraas</h2>
                      <p>
                        Meraas is committed to creating and consistently
                        delivering world-class real estate projects and master
                        developments that strengthen Dubai's position as the
                        global real estate investment destination of choice.
                        <br /> <br />
                        The legacy of developing well-known destinations and
                        prominent landmarks continues with well-designed and
                        coveted lifestyle experiences in waterfront, urban and
                        suburban locations.
                      </p>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tab-text-content">
                          <i className="flaticon-analysis-2"></i>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tab-text-content">
                          <i className="flaticon-analysis-2"></i>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="tab-btn">
                      <Link
                        href="/services/single-service/"
                        className="default-btn-one"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="tab-shape">
                  <Image src={shape} alt="shape" width={237} height={197} />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image">
                      <Image
                        src={digitalMarketing}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>Meraas</h2>
                      <p>
                        Meraas is committed to creating and consistently
                        delivering world-class real estate projects and master
                        developments that strengthen Dubai's position as the
                        global real estate investment destination of choice.
                        <br /> <br />
                        The legacy of developing well-known destinations and
                        prominent landmarks continues with well-designed and
                        coveted lifestyle experiences in waterfront, urban and
                        suburban locations.
                      </p>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tab-text-content">
                          <i className="flaticon-analysis-2"></i>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tab-text-content">
                          <i className="flaticon-analysis-2"></i>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="tab-btn">
                      <Link
                        href="/services/single-service/"
                        className="default-btn-one"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="tab-shape">
                  <Image src={shape} alt="shape" width={237} height={197} />
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default OutstandingDigitalExperience;
