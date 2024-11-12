import React from "react";
import Link from "next/link";
import Image from "next/image";

// Shape Images
import shape2 from "../../public/images/shape/shape2.png";
import shape12 from "../../public/images/shape/shape12.svg";
import shape13 from "../../public/images/shape/shape13.svg";
import shape14 from "../../public/images/shape/shape14.png";
import shape15 from "../../public/images/shape/shape15.png";

const ServicesContent = () => {
  return (
    <>
      <div className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Services</span>
            <h3>How We Can Help?</h3>
          </div>

          <div className="row justify-content-center">
           

            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon bg-faddd4">
                  <i className="flaticon-goal"></i>
                </div>
                <h3>
                  <Link href="#">MAAS (Marketing as a Service)</Link>
                </h3>
                <p>
                
From strategy to design and production, we deliver marketing solutions tailored to elevate your brand’s presence and growth. 

                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon bg-faddd4">
                  <i className="flaticon-contract"></i>
                </div>
                <h3>
                  <Link href="#">EAAS (Event As a Service)</Link>
                </h3>
                <p>
                Our all-in-one event solutions handle every detail—from concept and design to execution and post-event analysis. 

                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon bg-faddd4">
                  <i className="flaticon-landing-page"></i>
                </div>
                <h3>
                  <Link href="#">Sales Support</Link>
                </h3>
                <p>Expert assistance for buying and selling properties</p>
              </div>
            </div>

            {/* <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon bg-faddd4">
                  <i className="flaticon-application"></i>
                </div>
                <h3>
                  <Link href="#">Invest Tranparently (Marketing services)</Link>
                </h3>
                <p>
                  A newest venture for buying and selling properties, we are a
                  trusted partner for all your real estate needs here.
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Shape Images */}
        <div className="default-animation">
          <div className="shape-img1">
            <Image src={shape12} alt="image" width={21} height={20} />
          </div>
          <div className="shape-img2">
            <Image src={shape13} alt="image" width={22} height={22} />
          </div>
          <div className="shape-img3">
            <Image src={shape14} alt="image" width={15} height={15} />
          </div>
          <div className="shape-img4">
            <Image src={shape15} alt="image" width={18} height={18} />
          </div>
          <div className="shape-img5">
            <Image src={shape2} alt="shape" width={23} height={23} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesContent;
