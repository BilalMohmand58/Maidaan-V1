import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import slider1 from "../../public/images/invest-uae.webp";
import slider2 from "../../public/images/pak-slide.webp";
import slider3 from "../../public/images/explore-dubai.webp";
import Link from "next/link";
import ContactButton from "../Home/ContactButton";
import { useMediaQuery } from "react-responsive";

const Carousel = () => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  return (
    <>
      <div className="container-fluid full-width-container m-0 p-0 overflow-hidden  ">
        <div className="row">
          <div className="col">
            <Swiper
              autoHeight={true}
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{
                delay: 6000,
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
                    <Image
                      className="slider-image"
                      src={slider1}
                      alt="partner"
                    />
                  </a>
                  <div className="slide-content">
                    <h3 className="slide-title">INVEST IN DUBAI</h3>
                    <h3 className="slide-sub-title">
                      Limitless Investment Horizons
                    </h3>
                    <div className="features-btn">
                      <Link href="#invest" className="features-btn-one">
                        More Details
                      </Link>
                      {!isMobile && <ContactButton />}
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide-item">
                  <a href="#" target="_blank">
                    <Image
                      className="slider-image"
                      src={slider2}
                      alt="partner"
                    />
                  </a>
                  <div className="slide-content">
                    <h3 className="slide-title">INVEST IN PAKISTAN</h3>
                    <h3 className="slide-sub-title">
                      Unleash Limitless Investment Opportunities
                    </h3>
                    <div className="features-btn">
                      <Link href="#pakInvest" className="features-btn-one">
                        More Details
                      </Link>
                      {!isMobile && <ContactButton />}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-item">
                  <a href="#" target="_blank">
                    <Image
                      className="slider-image"
                      src={slider3}
                      alt="partner"
                    />
                  </a>
                  <div className="slide-content">
                    <h3 className="slide-title">DISCOVER THE DUBAI MAGIC </h3>
                    <h3 className="slide-sub-title">
                      Unveil the City of Dreams Splendor
                    </h3>
                    <div className="features-btn">
                      <Link href="#explore" className="features-btn-one">
                        More Details
                      </Link>
                      {!isMobile && <ContactButton />}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
