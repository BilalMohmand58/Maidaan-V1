import React from "react";
import Link from "next/link";
import slider3 from "../../public/images/explore-dubai.webp";

const Intro = () => {
  // Assuming slider3.src is the URL of the background image
  const backgroundImageStyle = {
    backgroundImage: `url(${slider3.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh", // Set the height to 70% of the viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="container-fluid m-0 p-0">
      <div className="row">
        <div className="col">
          <div className="slide-content" style={backgroundImageStyle}>
            <div className="text-center text-white p-5">
              <h3 className="slide-title">DISCOVER THE MAGIC OF DUBAI</h3>
              <h3 className="slide-sub-title">
                Unveil the Splendor of the City of Dreams
              </h3>
              <div className="features-btn">
                <Link href="#pakInvest" className="btn btn-primary">
                  More Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
