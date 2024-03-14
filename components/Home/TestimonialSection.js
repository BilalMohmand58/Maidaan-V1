import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import client1 from "../../public/images/clients/client1.jpg";
import client2 from "../../public/images/clients/client2.jpg";
import testimonialImg from "../../public/images/testimonial-image.png"; 

const TestimonialSection = () => {
  return (
    <>
      <div className="client-section">
        <div className="container">
          <div className="section-title">
            <span>Testimonial</span>
            <h3>What Our Happy Client Say</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="client-image">
                <Image src={testimonialImg} alt="image" width={750} height={655} />
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>
                    </div>
                    <div className="testimonial-image">
                      <Image
                        src={client1}
                        alt="client"
                        width={150}
                        height={150}
                      />
                      <h3>R.Mortein</h3>
                      <span>Product Manager</span>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>
                    </div>
                    <div className="testimonial-image">
                      <Image
                        src={client2}
                        alt="client"
                        width={150}
                        height={150}
                      />
                      <h3>R.Mortein</h3>
                      <span>Product Manager</span>
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
