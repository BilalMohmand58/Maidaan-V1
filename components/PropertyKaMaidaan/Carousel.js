import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import slider1 from "../../public/images/invest-uae.webp";
import slider2 from "../../public/images/pak-slide.webp";
import slider3 from "../../public/images/explore-dubai.webp";
import Link from "next/link";
import ContactButton from "../Home/ContactButton";

const Carousel = () => {
  return (
    <>
      <div className="slider-section">
        <div>
          <Swiper
            autoHeight={true}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay]}
            className="slider"
          >
            <SwiperSlide>
              <div className="slide-item">
                <a href="#" target="_blank">
                  <Image className="slider-image" src={slider1} alt="partner" />
                </a>
                <div className="slide-content">
                  <h3 className="slide-title">
                    Invest In Dubai : Limitless Investment Horizons.
                  </h3>
                  <div className="features-btn">
                    <Link href="/features" className="features-btn-one">
                      More Details
                    </Link>
                    <ContactButton />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-item">
                <a href="#" target="_blank">
                  <Image className="slider-image" src={slider2} alt="partner" />
                </a>
                <div className="slide-content">
                  <h3 className="slide-title">
                    Invest In Pakistan : Limitless Investment Horizons
                  </h3>
                  <div className="features-btn">
                    <Link href="/features" className="features-btn-one">
                      More Details
                    </Link>
                    <ContactButton />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <a href="#" target="_blank">
                  <Image className="slider-image" src={slider3} alt="partner" />
                </a>
                <div className="slide-content">
                  <h3 className="slide-title">
                    Explore Dubai : Avail Our Latest Offers{" "}
                  </h3>
                  <div className="features-btn">
                    <Link href="/features" className="features-btn-one">
                      More Details
                    </Link>
                    <ContactButton />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Carousel;
