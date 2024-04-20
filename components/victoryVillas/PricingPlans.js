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
                        Villa Feature Here
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Villa Feature Here
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Villa Feature Here
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Villa Feature Here
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
                        Villa Feature Here
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Villa Feature Here
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Villa Feature Here
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Villa Feature Here
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
                        Villa Feature Here
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Villa Feature Here
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Villa Feature Here
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Villa Feature Here
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
