import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

import shape from "../../public/images/shape/shape11.png";
import partner1 from "../../public/images/partner/azizi.png";
import partner2 from "../../public/images/partner/damac.png";
import partner3 from "../../public/images/partner/danube.png";
import partner4 from "../../public/images/partner/emaar.png";
import partner5 from "../../public/images/partner/empired.png";
import partner6 from "../../public/images/partner/Imtiaz.png";
import partner7 from "../../public/images/partner/meraas.png";

import partner8 from "../../public/images/partner/nakheel.png";
import partner9 from "../../public/images/partner/reportage.png";
import partner10 from "../../public/images/partner/samana.png";

const DubaiProjects = () => {
  return (
    <>
      <div className="tab-section">
        <div className="container">
          <Tabs className="boosting-list-tab">
            <TabList>
              <Tab>
                <Image src={partner4} alt="partner" />
              </Tab>

              <Tab className="bg-eff7e9">
                <Image src={partner2} alt="partner" />
              </Tab>

              <Tab className="bg-fff8f0">
                <Image src={partner8} alt="partner" />
              </Tab>

              <Tab className="bg-ecfaf7">
                <Image src={partner9} alt="partner" />
              </Tab>

              <Tab className="bg-f2f0fb">
                <Image src={partner5} alt="partner" />
              </Tab>

              <Tab className="bg-c5ebf9">
                <Image src={partner6} alt="partner" />
              </Tab>

              <Tab className="bg-c5ebf9">
                <Image src={partner7} alt="partner" />
              </Tab>

              <Tab className="bg-c5ebf9">
                <Image src={partner10} alt="partner" />
              </Tab>
            </TabList>

            <div className="tab_content">
              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="tab-image">
                      <Image
                        src={partner4}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="content">
                      <h2>Lorem ipsum dolor</h2>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum vulputate risus, vel fringilla ipsum cursus ut. Mauris non libero at dolor gravida ullamcorper ut vel est. Fusce feugiat, quam nec viverra varius, ligula lacus maximus quam, id vestibulum turpis mi eu magna.
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
                        src={partner2}
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
                        src={partner8}
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
                        src={partner9}
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
                        src={partner5}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>Empire Developments</h2>
                      <p>
                        Empire Developments is a prominent real estate
                        development company based in Dubai, United Arab
                        Emirates. Renowned for its innovative projects and
                        commitment to excellence, Empire Developments has been
                        instrumental in shaping Dubai's skyline and urban
                        landscape. With a diverse portfolio that includes
                        residential, commercial, and hospitality properties, the
                        company has earned a reputation for delivering
                        high-quality, luxurious developments that cater to the
                        needs and aspirations of its discerning clientele.
                        Committed to sustainability and cutting-edge design,
                        Empire Developments continues to set new standards in
                        the real estate industry, making it a trusted name
                        synonymous with sophistication and reliability in the
                        dynamic market of Dubai.
                      </p>
                    </div>

                    <div className="tab-btn">
                      <Link
                        href="https://empiredevelopments.ae/"
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
                        src={partner6}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>Imtiaz Developments</h2>
                      <p>
                        Imtiaze is committed to creating and consistently
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

                    <div className="tab-btn">
                      <Link
                        href="https://covebyimtiaz.ae/"
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
                        src={partner7}
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

                    <div className="tab-btn">
                      <Link
                        href="https://www.meraas.com/en"
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
                        src={partner10}
                        alt="image"
                        width={550}
                        height={480}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="content">
                      <h2>Samana Developers</h2>
                      <p>
                        Samana is committed to creating and consistently
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

                    <div className="tab-btn">
                      <Link
                        href="https://www.samanadevelopers.com/"
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
                      <Image src={shape} alt="image" width={550} height={480} />
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

export default DubaiProjects;
