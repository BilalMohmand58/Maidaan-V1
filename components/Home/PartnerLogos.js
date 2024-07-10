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

// import partner8 from "../../public/images/partner/j7.jpg";
// import partner9 from "../../public/images/partner/kmk.jpg";
// import partner10 from "../../public/images/partner/lakeshore.jpg";
// import partner11 from "../../public/images/partner/man.jpg";
// import partner12 from "../../public/images/partner/muree-oaks.png";
// import partner13 from "../../public/images/partner/oasis.png";
// import partner14 from "../../public/images/partner/parkview.png";

const PartnerLogos = () => {
  return (
    <>
      <div className="partner-section">
        <div className="container">
          {/* <div className="partner-title">
            <h3>Trusted By Clients & Leading Companies</h3>
          </div> */}

          <Swiper
            autoHeight={true}
            slidesPerView={1}
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
              <div className="partner-item">
                <a
                  href="https://thevictoryconstruction.com/project/prince-one-mall/"
                  target="_blank"
                >
                  <Image src={partner1} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="https://jhelumvillas.com/" target="_blank">
                  <Image src={partner2} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="https://jhelummidtown.com/" target="_blank">
                  <Image src={partner3} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="https://thevictoryconstruction.com/" target="_blank">
                  <Image src={partner4} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a
                  href="https://thevictoryconstruction.com/project/victory-chib-heights/"
                  target="_blank"
                >
                  <Image src={partner5} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a
                  href="https://thevictoryconstruction.com/project/v7-heights/"
                  target="_blank"
                >
                  <Image src={partner6} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a
                  href="https://thevictoryconstruction.com/project/downtown-lane/"
                  target="_blank"
                >
                  <Image src={partner7} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image src={partner8} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image src={partner9} alt="partner" width={100} height={60} />
                </a>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner10}
                    alt="partner"
                    width={100}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner11}
                    alt="partner"
                    width={100}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner12}
                    alt="partner"
                    width={100}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner13}
                    alt="partner"
                    width={100}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src={partner14}
                    alt="partner"
                    width={100}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PartnerLogos;
