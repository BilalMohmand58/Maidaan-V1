import React from "react";
import Image from "next/image";

// import servicesDetailsImg1 from "../../public/images/services-details/services-details-img1.jpg";

const SingleServiceContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <h3>Digital Marketing</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>

                  <div className="features-text">
                    <h4>
                      <i className="flaticon-check-mark"></i> Core Development
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                  </div>

                  <div className="features-text">
                    <h4>
                      <i className="flaticon-check-mark"></i> Define Your
                      Choices
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="services-details-image">
                  {/* <Image
                    src={servicesDetailsImg1}
                    alt="projects"
                    width={550}
                    height={413}
                  /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="services-details-overview">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-image">
                  {/* <Image
                    src={servicesDetailsImg1}
                    alt="projects"
                    width={550}
                    height={413}
                  /> */}
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <h3>Social Media Marketing</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>

                  <div className="features-text">
                    <h4>
                      <i className="flaticon-check-mark"></i> Core Development
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                  </div>

                  <div className="features-text">
                    <h4>
                      <i className="flaticon-check-mark"></i> Define Your
                      Choices
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleServiceContent;
