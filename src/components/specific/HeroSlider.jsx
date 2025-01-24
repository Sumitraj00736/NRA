import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSlider() {
  const slides = [
    { id: 1, title: "MUSICAL CONCERTS", icon: "path/to/icon1.svg" },
    { id: 2, title: "WORKSHOPS", icon: "path/to/icon2.svg" },
    { id: 3, title: "CONFERENCES", icon: "path/to/icon3.svg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div className="slider-container bg-customBlue h-[600px] flex justify-center items-center">
      <Slider {...settings} className="w-full max-w-[1200px]">
        {slides.map((slide) => (
          <div key={slide.id} className="flex justify-center items-center">
            <div className="relative flex flex-col justify-center items-center text-white">
              <div className="bg-[#0b1f4f] w-[250px] h-[250px] flex justify-center items-center rounded-full mb-8">
                <img
                  src={slide.icon}
                  alt={slide.title}
                  className="h-[150px] w-[150px] object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-center mt-4">{slide.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;