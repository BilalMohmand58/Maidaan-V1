import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

import pricingShape from "../../public/images/pricing-shape.png";

const PricingPlans = () => {
  return (
    <>
      <div className="pricing-section ptb-100">
        <div className="container">
          <div className="section-title">
            {/* <span>Pricing Plans</span> */}
            <h3>Victory Villas, your dream of owning a luxurious home</h3>
          </div>

          <Tabs className="pricing-tab">
            <TabPanel>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-pricing-box bg-f6f5fb">
                    {/* <div className="pricing-header">
                      <h3>Silver Villas</h3>
                    </div> */}

                    <div className="price">
                      <span>Silver Villas </span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Modern architecture with spacious interiors, style, and
                        comfort.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        ush green surroundings and scenic views while living at
                        Silver Villas
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        High-quality fixtures and amenities ensuring a luxurious
                        living
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Convenience and connectivity with easy access to key
                        locations
                      </li>
                    </ul>

                    {/* <div className="price-btn">
                      <Link href="/contact-us" className="price-btn-one">
                        Get Started
                      </Link>
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-pricing-box bg-f6f5fb">
                    {/* <div className="pricing-header">
                      <h3>Silver Villas</h3>
                    </div> */}

                    <div className="price">
                      <span>Diamond Villas </span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Realize cutting-edge smart home technology at Diamond
                        Villas.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Witness a luxury where elegant architectural design
                        shines.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Unparalleled amenities such as private spas and infinity
                        pools.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Lush and expansive gardens define the unique luxury of
                        Diamond Villas.
                      </li>
                    </ul>

                    {/* <div className="price-btn">
                      <Link href="/contact-us" className="price-btn-one">
                        Get Started
                      </Link>
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-pricing-box bg-f6f5fb">
                    {/* <div className="pricing-header">
                      <h3>Silver Villas</h3>
                    </div> */}

                    <div className="price">
                      <span>Golden Villas </span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Unfold Golden Villas with Spacious Luxury Interiors and
                        Urbanized Architecture
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Own a luxury residence with dedicated entertainment
                        rooms.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Hold a key to villas equipped with eco-friendly outdoor
                        living spaces.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Enhanced security systems to ensure a sophisticated
                        lifestyle.
                      </li>
                    </ul>

                    {/* <div className="price-btn">
                      <Link href="/contact-us" className="price-btn-one">
                        Get Started
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
