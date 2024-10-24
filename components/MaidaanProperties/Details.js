import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Details = () => {
  return (
    <>
      <div className="pricing-section ptb-100">
        <div className="container">
          <div className="section-title">
            <h3>Maidaan Properties - Your Gateway to Premium Real Estate</h3>
          </div>

          <Tabs className="pricing-tab">
            <TabPanel>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-pricing-box bg-f6f5fb">
                    <div className="price">
                      <span>Residential Properties</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Discover a wide range of luxurious residential options.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Prime locations across major cities for your dream home.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        High-quality amenities for modern living.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Designed to cater to the needs of contemporary families.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-pricing-box bg-f6f5fb">
                    <div className="price">
                      <span>Commercial Properties</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Ideal commercial spaces for businesses of all sizes.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Located in prime business districts for maximum exposure.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        State-of-the-art infrastructure .
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Flexible layouts to meet diverse business needs.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-pricing-box bg-f6f5fb">
                    <div className="price">
                      <span>Investment Opportunities</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check-mark"></i>
                        High-potential investment properties .
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        maximum returns on investment.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Expert guidance in navigating the real estate market.
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Transparency and ease in property transactions.
                      </li>
                    </ul>
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

export default Details;
