import React from "react";
import Image from "next/image";

import MainImg from "../../public/images/paymentPlan.jpg";

const Payment = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
          {/* <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            Victory Villas Payment Plans
          </h1> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="about-image">
          <Image
            src={MainImg}
            alt="About Img"
            layout="responsive"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
