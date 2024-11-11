import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Details = () => {
  return (
    <>
      <div className="pricing-section ptb-100">
        <div className="container">
          <div className="section-title">
            <h3>Our Core Values
            </h3>
          </div>

          <Tabs className="pricing-tab">
            <TabPanel>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div className="single-pricing-box bg-f6f5fb">
                    <div className="price">
                      <span>Transparency</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        {/* <i className="flaticon-check-mark"></i> */}
                         We believe in open communication and honest dealings in every interaction.
                      </li>

                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-pricing-box bg-f6f5fb">
                    <div className="price">
                      <span>Innovation</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        {/* <i className="flaticon-check-mark"></i> */}
                         Leveraging technology to simplify and enhance the real estate process.
                      </li>
                     
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-pricing-box bg-f6f5fb">
                    <div className="price">
                      <span>Client-Centric</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        {/* <i className="flaticon-check-mark"></i> */}
                         Focused on understanding and meeting each client’s unique needs.
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-pricing-box bg-f6f5fb">
                    <div className="price">
                      <span>Integrity</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        {/* <i className="flaticon-check-mark"></i> */}
                        Upholding ethical practices and accountability in every transaction.
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
