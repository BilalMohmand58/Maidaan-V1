import React from "react";
// import Image from "next/image";

import MainImg from "../../public/images/PaymentVV.jpg";
import Table from "./Table";
import PricingPlans from "./PricingPlans";

const Payment = () => {
  const handleDownload = () => {
    // Simulate downloading the image
    const link = document.createElement("a");
    link.href = MainImg.src;
    link.download = "paymentPlan.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <div className="section-title">
              {/* <span>Pricing Plans</span> */}
              <h3
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                Victory Villas, your dream of owning a luxurious home
              </h3>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <Table />
          {/* <div className="about-image">
          <Image
            src={MainImg}
            alt="About Img"
            layout="responsive"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </div> */}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <button
              onClick={handleDownload}
              className="features-btn-one text-black"
            >
              Download Payment Plans
            </button>
          </div>
        </div>
      </div>
      <PricingPlans />
    </>
  );
};

export default Payment;
