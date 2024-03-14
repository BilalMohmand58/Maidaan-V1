import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import partner1 from "../../public/images/partner/pom.png";
import partner2 from "../../public/images/partner/jv.png";
import partner3 from "../../public/images/partner/mtj.png";
import partner4 from "../../public/images/partner/vc.png";
import partner5 from "../../public/images/partner/vch.png";
import partner6 from "../../public/images/partner/v7.png";
import partner7 from "../../public/images/partner/dtl.png";

const PartnerLogos = () => {
  return (
    <>
      <div className="partner-section">
        <div className="container">
          <Swiper
            autoHeight={true}
            spaceBetween={0}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="partner-slider"
          >
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image src={partner1} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image src={partner2} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image src={partner3} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image src={partner4} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image src={partner5} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image src={partner3} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PartnerLogos;
