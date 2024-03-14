import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

import pricingShape from "../../public/images/pricing-shape.png";

const PricingContent = () => {
  return (
    <>
      <div className="pricing-section ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Pricing Plans</span>
            <h3>The Best Solutions for Our Clients</h3>
          </div>

          <Tabs className="pricing-tab">
            <TabList>
              <Tab>Monthly</Tab>
              <Tab>Yearly</Tab>
            </TabList>

            <TabPanel>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-pricing-box bg-f6f5fb">
                    <div className="pricing-header">
                      <h3>Basic Plan</h3>
                    </div>

                    <div className="price">
                      <strong>$</strong>
                      <span>24</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Audits
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Management
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Copywriting
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Link Building
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Site Migration
                      </li>
                    </ul>

                    <div className="price-btn">
                      <Link href="/contact-us" className="price-btn-one">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-pricing-box bg-ed0678">
                    <div className="pricing-header">
                      <h3>Standard Plan</h3>
                    </div>

                    <div className="price">
                      <strong>$</strong>
                      <span>59</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Audits
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Management
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Copywriting
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Link Building
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Site Migration
                      </li>
                    </ul>

                    <div className="price-btn">
                      <Link href="/contact-us" className="price-btn-one">
                        Get Started
                      </Link>
                    </div>

                    <div className="pricing-shape">
                      <Image
                        src={pricingShape}
                        alt="image"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-pricing-box bg-edfbf8">
                    <div className="pricing-header">
                      <h3>Premium Plan</h3>
                    </div>

                    <div className="price">
                      <strong>$</strong>
                      <span>89</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Audits
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Management
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Copywriting
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Link Building
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Site Migration
                      </li>
                    </ul>

                    <div className="price-btn">
                      <Link href="/contact-us" className="price-btn-one">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-pricing-box bg-f6f5fb">
                    <div className="pricing-header">
                      <h3>Basic Plan</h3>
                    </div>

                    <div className="price">
                      <strong>$</strong>
                      <span>199</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Audits
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Management
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Copywriting
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Link Building
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Site Migration
                      </li>
                    </ul>

                    <div className="price-btn">
                      <Link href="/contact-us" className="price-btn-one">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-pricing-box bg-ed0678">
                    <div className="pricing-header">
                      <h3>Standard Plan</h3>
                    </div>

                    <div className="price">
                      <strong>$</strong>
                      <span>299</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Audits
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Management
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Copywriting
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Link Building
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Site Migration
                      </li>
                    </ul>

                    <div className="price-btn">
                      <Link href="/contact-us" className="price-btn-one">
                        Get Started
                      </Link>
                    </div>

                    <div className="pricing-shape">
                      <Image
                        src={pricingShape}
                        alt="image"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-pricing-box bg-edfbf8">
                    <div className="pricing-header">
                      <h3>Premium Plan</h3>
                    </div>

                    <div className="price">
                      <strong>$</strong>
                      <span>399</span>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Audits
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Management
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        SEO Copywriting
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Link Building
                      </li>
                      <li>
                        <i className="flaticon-check-mark"></i>
                        Site Migration
                      </li>
                    </ul>

                    <div className="price-btn">
                      <Link href="/contact-us" className="price-btn-one">
                        Get Started
                      </Link>
                    </div>
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

export default PricingContent;
