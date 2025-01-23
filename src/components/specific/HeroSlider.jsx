import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Make sure these are imported

function HeroSlider() {
  // Array of slide objects with individual colors
  const slides = [
    { id: 1, content: "Slide 1", color: "bg-red-200" },
    { id: 2, content: "Slide 2", color: "bg-blue-200" },
    { id: 3, content: "Slide 3", color: "bg-green-200" },
    { id: 4, content: "Slide 4", color: "bg-yellow-200" },
    { id: 5, content: "Slide 5", color: "bg-purple-200" },
    { id: 6, content: "Slide 6", color: "bg-orange-200" },
  ];

  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px", // Ensure the center padding works for the centered slide
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    // Margin between slides can be applied here directly
    slide: "div", // Specify the tag used for slides (default div)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div className="slider-container relative h-[400px] p-40">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.color} h-[200px] w-[300px] flex justify-center items-center mx-2`} // Adjusted mx-2 for margin between slides
          >
            <h3>{slide.content}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;
