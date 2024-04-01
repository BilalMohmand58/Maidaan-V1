import Link from "next/link";
import React from "react";

import logo from "../../public/images/logo.png";
import Image from "next/image";

const MarketedBanner = () => {
  return (
    <>
      <div className="coming-soon-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="coming-soon-content">
                <div className="d-flex justify-content-center align-items-center mt-5  p-3">
                  <Link
                    href="https://lakeshorecity.com/"
                    target="_blank"
                    className=" me-2 features-btn-one text-black"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketedBanner;
