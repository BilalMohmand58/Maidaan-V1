import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import partner1 from "../../public/images/partner/azizi.png";
import partner2 from "../../public/images/partner/damac.png";
import partner3 from "../../public/images/partner/danube.png";
import partner4 from "../../public/images/partner/emaar.png";
import partner5 from "../../public/images/partner/empired.png";
import partner6 from "../../public/images/partner/imtiaz.png";
import partner7 from "../../public/images/partner/meraas.png";

import partner8 from "../../public/images/partner/nakheel.png";
import partner9 from "../../public/images/partner/reportage.png";
import partner10 from "../../public/images/partner/samana.png";

const DubaiPartnerLogos = () => {
  return (
    <>
      <div className="partner-section">
        <div className="container">
          <Swiper
            autoHeight={true}
            spaceBetween={0}
            autoplay={{
              delay: 3000,
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
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="partner-slider"
          >
            <SwiperSlide>
              <div className="dubai-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner1}
                    alt="partner"
                    width={200}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="dubai-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner2}
                    alt="partner"
                    width={200}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="dubai-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner3}
                    alt="partner"
                    width={200}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="dubai-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner4}
                    alt="partner"
                    width={200}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="dubai-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner5}
                    alt="partner"
                    width={200}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="dubai-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner6}
                    alt="partner"
                    width={200}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="dubai-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner7}
                    alt="partner"
                    width={200}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="dubai-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner8}
                    alt="partner"
                    width={200}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="dubai-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner9}
                    alt="partner"
                    width={200}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default DubaiPartnerLogos;
