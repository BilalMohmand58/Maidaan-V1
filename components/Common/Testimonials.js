import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import client1 from "../../public/images/clients/client1.jpg";
import client2 from "../../public/images/clients/client2.jpg";
import client3 from "../../public/images/clients/client3.jpg";
import client4 from "../../public/images/clients/client4.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="testimonial-section ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Testimonial</span>
            <h3>What Our Client Say</h3>
          </div>

          <Swiper
            autoHeight={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="testimonial-slides"
          >
            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <Image src={client1} alt="client" width={150} height={150} />
                </div>

                <div className="testimonial-content-text">
                  <h3>R.Mortein</h3>
                  <span>Product Manager</span>
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse gravida.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <Image src={client2} alt="client" width={150} height={150} />
                </div>

                <div className="testimonial-content-text">
                  <h3>Edward Bold</h3>
                  <span>CEO & Founder</span>
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse gravida.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <Image src={client3} alt="client" width={150} height={150} />
                </div>

                <div className="testimonial-content-text">
                  <h3>Mahindra jhon</h3>
                  <span>Ceo & Sustainable designer</span>
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse gravida.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <Image src={client4} alt="client" width={150} height={150} />
                </div>

                <div className="testimonial-content-text">
                  <h3>Lee Munroe</h3>
                  <span>Underwriter</span>
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse gravida.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <Image src={client1} alt="client" width={150} height={150} />
                </div>

                <div className="testimonial-content-text">
                  <h3>Meg Lanning</h3>
                  <span>Agent Manager</span>
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse gravida.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
