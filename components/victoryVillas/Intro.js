import React from "react";
import Link from "next/link";
import slider3 from "../../public/images/victoryVillasMap.jpg";

const Intro = () => {
  // Assuming slider3.src is the URL of the background image
  const backgroundImageStyle = {
    backgroundImage: `url(${slider3.src})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "90vh", // Set the height to 70% of the viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="container-fluid m-0 p-0 overflow-hidden">
      <div className="row">
        <div className="col">
          <div
            className="d-flex flex-column justify-content-between slide-content"
            style={backgroundImageStyle}
          >
            <div className="text-center text-white p-5">
              {/* Your content here */}
            </div>
            <div className="text-center mb-5">
              <div className="features-btn-one">
                <Link href="#map" className="">
                  Get Direction
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
