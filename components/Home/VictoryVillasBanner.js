import Link from "next/link";
import React from "react";

const VictoyVillasBanner = () => {
  return (
    <>
      <div className="victory-villas-banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="coming-soon-content">
                <div className="  d-flex justify-content-center align-items-center mt-5  p-3">
                  <Link
                    href="http://localhost:3000/victory-villas"
                    className=" me-2 victory-villas-btn text-black"
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

export default VictoyVillasBanner;
