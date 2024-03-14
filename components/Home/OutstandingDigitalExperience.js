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
            <span>Invest In Dubai </span>
            <h3>Explore Investment Opportunities</h3>
          </div>

          <Tabs className="boosting-list-tab">
            <TabList>
              <Tab>
                <i className="flaticon-analysis-2"></i>
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
                  <div className="col-lg-5">
                    <div className="tab-image">
                      <Image
                        src={realTimeAnalytic}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>Real-Time Analytics</h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
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
                        src={payPerClick}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>Pay-Per Click</h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
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
                      <h2>Online Marketting</h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
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
                        src={emailMarketing}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>Email Marketting</h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
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
                        src={socialMarketing}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>Social Marketting</h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
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
                      <h2>Digital Marketting</h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
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
