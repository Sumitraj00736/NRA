import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
// import "../../assets/css/feature.css";

// Sample features data
const features = [
  {
    id: 1,
    heading: "Rap Battle Nepal",
    img: "/assets/feature-img-1.png",
    description: "RAP BATTLE NEPAL - WILD CARD ENTRY",
    time: "2025/1/4",
  },
  {
    id: 2,
    heading: "Universe Superstar",
    img: "/assets/feature-img-2.png",
    description: "Organizer: Smart Guff Pvt. Ltd.",
    time: "2025/1/25",
  },
];

function FeatureEvents() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/events/${id}`);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-customBlue px-4 sm:px-8 md:px-16 lg:px-32 py-8 md:py-12 lg:py-16">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">
        Featured Events
      </h2>
      <Slider {...settings}>
        {features.map((feature) => (
          <div
            key={feature.id}
            onClick={() => handleCardClick(feature.id)} // Navigate on click
            className="bg-blue-900 text-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            style={{ margin: "0 8px" }}
          >
            <img
              src={feature.img}
              alt={feature.heading}
              className="w-full h-48 sm:h-56 md:h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold">
                {feature.heading}
              </h3>
              <p className="text-sm md:text-base text-gray-300 mt-2">
                {feature.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="flex items-center text-sm md:text-base text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {feature.time}
                </p>
                <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm md:text-base px-4 py-2 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeatureEvents;
