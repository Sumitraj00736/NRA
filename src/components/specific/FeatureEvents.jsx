// import React from "react";

// const features = [
//   {
//     heading: "Rap Battle Nepal",
//     img: "/assets/feature-img-1.png", // Replace with the correct path to your image
//     description: "RAP BATTLE NEPAL - WILD CARD ENTRY",
//     time: "2025/1/4",
//   },
//   {
//     heading: "Universe Superstar",
//     img: "/assets/feature-img-2.png", // Replace with the correct path to your image
//     description: "Organizer: Smart Guff Pvt. Ltd.",
//     time: "2025/1/25",
//   },
// ];

// function FeatureEvents() {
//   return (
//     <div className="bg-customBlue px-4 sm:px-8 md:px-16 lg:px-32 py-8 md:py-12 lg:py-16">
//       <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">
//         Featured Events
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="bg-blue-900 text-white rounded-xl shadow-lg overflow-hidden"
//           >
//             <img
//               src={feature.img}
//               alt={feature.heading}
//               className="w-full h-48 sm:h-56 md:h-60 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg md:text-xl font-semibold">
//                 {feature.heading}
//               </h3>
//               <p className="text-sm md:text-base text-gray-300 mt-2">
//                 {feature.description}
//               </p>
//               <div className="flex justify-between items-center mt-4">
//                 {/* Time with Clock Icon */}
//                 <p className="flex items-center text-sm md:text-base text-gray-100">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-5 h-5 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   {feature.time}
//                 </p>
//                 <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm md:text-base px-4 py-2 rounded-full">
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FeatureEvents;

import React from "react";
import Slider from "react-slick";
import "./feature.css";

// Sample features data
const features = [
  {
    heading: "Rap Battle Nepal",
    img: "/assets/feature-img-1.png",
    description: "RAP BATTLE NEPAL - WILD CARD ENTRY",
    time: "2025/1/4",
  },
  {
    heading: "Universe Superstar",
    img: "/assets/feature-img-2.png",
    description: "Organizer: Smart Guff Pvt. Ltd.",
    time: "2025/1/25",
  },

  // Add more feature objects if needed
];

function FeatureEvents() {
  // Slick slider settings
  const settings = {
    dots: false, // No dots for navigation
    arrows: false, // No arrows for navigation
    infinite: false, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 cards at once
    slidesToScroll: 1, // Scroll one card at a time
    centerMode: false, // Disables center mode for better alignment

    responsive: [
      {
        breakpoint: 1024, // Medium screens and above
        settings: {
          slidesToShow: 2, // Show 2 cards on medium screens
        },
      },
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1, // Show 1 card on small screens
        },
      },
    ],
  };

  return (
    <div className="bg-customBlue px-4 sm:px-8 md:px-16 lg:px-32 py-8 md:py-12 lg:py-16">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">
        Featured Events
      </h2>

      {/* React Slick Slider */}
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white rounded-xl shadow-lg overflow-hidden"
            style={{ margin: "0 8px" }} // Ensure proper spacing between cards
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
                {/* Time with Clock Icon */}
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
