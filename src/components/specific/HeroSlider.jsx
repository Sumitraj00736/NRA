import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/HeroSlider.css";

function HeroSlider() {
  const slides = [
    { id: 1, title: "", icon: "http://www.nra.org.np/assets/image/nra_cover2.jpg" },
    { id: 2, title: "", icon: "http://www.nra.org.np/assets/image/nra_cover1.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "180px",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "1px",
        },
      },
    ],
  };

  return (
    <div className="slider-container bg-transparent h-[600px] flex justify-center items-center px-4 sm:px-8">
      <Slider {...settings} className="w-full max-w-[1200px]">
        {slides.map((slide) => (
          <div key={slide.id} className="p-2 sm:p-8 flex justify-center items-center">
            <div className=" w-full max-w-[750px] h-[360px] relative rounded-2xl flex flex-col justify-center items-center text-white px-4 sm:px-6">
              <div className="flex justify-center items-center rounded mb-8">
                <img
                  src={slide.icon}
                  alt={slide.title}
                  className="h-full w-full max-w-[750px] mt-[70px] object-contain"
                />
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-center mt-2">{slide.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;
