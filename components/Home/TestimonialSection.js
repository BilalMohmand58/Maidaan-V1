import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import client from "../../public/images/clients/client.jpg";

import testimonialImg from "../../public/images/testimonial-image.jpg";

const TestimonialSection = () => {
  return (
    <>
      <div className="client-section">
        <div className="container">
          <div className="section-title">
            <span>Testimonial</span>
            <h3>What Our Happy Clients Say</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="client-image">
                <Image
                  src={testimonialImg}
                  alt="image"
                  width={750}
                  height={655}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <Swiper
                autoHeight={true}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay, Pagination]}
                className="client-slides"
              >
                <SwiperSlide>
                  <div className="testimonial-single-item">
                    <div className="testimonial-content-text">
                      <div className="icon">
                        <i className="flaticon-left-quote"></i>
                      </div>
                      <p>
                        Investing in Dubai with Maidaan was a game-changer for
                        me. Their collaboration with top developers like Emaar
                        and Sobha provided access to exclusive luxury
                        residential properties, making my investment journey
                        both smooth and profitable.
                      </p>
                    </div>
                    <div className="testimonial-image">
                      <Image
                        src={client}
                        alt="client"
                        width={150}
                        height={150}
                      />
                      <h3>Javed Iqbal</h3>
                      <span>Residential Investor</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-single-item">
                    <div className="testimonial-content-text">
                      <div className="icon">
                        <i className="flaticon-left-quote"></i>
                      </div>
                      <p>
                        The level of personal attention and detailed market
                        analysis Maidaan provided, especially in commercial
                        ventures with Nakheel and Damac, was beyond my
                        expectations. They truly care about your investment
                        success.
                      </p>
                    </div>
                    <div className="testimonial-image">
                      <Image
                        src={client}
                        alt="client"
                        width={150}
                        height={150}
                      />
                      <h3>Omar Ahmed</h3>
                      <span>Commercial Investor</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
