import React, { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pImg1 from "../../public/images/event/lahore13.jpg";
import pImg2 from "../../public/images/event/lahore13.jpg";
import pImg3 from "../../public/images/event/lahore13.jpg";
import pImg4 from "../../public/images/event/lahore13.jpg";
import pImg5 from "../../public/images/event/lahore13.jpg";
import pImg6 from "../../public/images/event/lahore13.jpg";

const images = [
  { src: pImg1, title: "Explore Dubai" },
  { src: pImg2, title: "Invest in Dubai" },
  { src: pImg3, title: "Investment Opportunities in Dubai" },
  { src: pImg4, title: "Invest in Pakistan" },
  { src: pImg5, title: "Investment in Pakistan" },
  { src: pImg6, title: "Investment in Dubai Revisited" },
];

const EventSliderLahore = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const openLightbox = (index) => {
    setOpenIndex(index);
  };

  const closeLightbox = () => {
    setOpenIndex(null);
  };

  const sliderPrev = () => {
    slider.slickPrev();
  };

  const sliderNext = () => {
    slider.slickNext();
  };

  let slider;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: (
      <button className="slick-prev-button" onClick={sliderPrev}>
        prev
      </button>
    ),
    nextArrow: (
      <button className="slick-next-button" onClick={sliderNext}>
        next
      </button>
    ),
  };

  return (
    <div className="container mb-3">
      {/* <div className="section-title">
        <span>Events</span>
        <h3> maidaan Events</h3>
      </div> */}
      <Slider {...sliderSettings} ref={(c) => (slider = c)}>
        {images.map((item, index) => (
          <div key={index}>
            <div className="mb-4 gap-4">
              <div
                className="position-relative cursor-pointer m-3"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="img-fluid"
                />
                <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center bg-dark bg-opacity-10">
                  <span
                    className="text-white"
                    onClick={() => openLightbox(index)}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="d-flex justify-content-between ">
        <button className="slick-prev-button" onClick={sliderPrev}>
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button className="slick-next-button" onClick={sliderNext}>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="footer-bottom mt-55">
        <div className="container"></div>
      </div>
      <Lightbox
        open={openIndex !== null}
        close={closeLightbox}
        slides={images.map(({ src, title }) => ({
          src: src.src,
          title,
        }))}
        plugins={[Zoom]}
        index={openIndex}
      />
    </div>
  );
};

export default EventSliderLahore;
