import React from "react";
import { useParams } from "react-router-dom";

const features = [
  {
    id: 1,
    heading: "Rap Battle Nepal",
    img: "/assets/feature-img-1.png",
    description: "RAP BATTLE NEPAL - WILD CARD ENTRY",
    time: "2025/1/4",
    cards: [
      { id: 1, title: "GUNLEFTDUG", img: "/assets/card-img-1.png" },
      { id: 2, title: "LOLA", img: "/assets/card-img-1.png" },
      { id: 3, title: "GODFATHER", img: "/assets/card-img-1.png" },
      { id: 4, title: "GODFATHER", img: "/assets/card-img-1.png" },
      { id: 5, title: "GODFATHER", img: "/assets/card-img-1.png" },
      { id: 6, title: "GODFATHER", img: "/assets/card-img-1.png" },
      { id: 7, title: "GODFATHER", img: "/assets/card-img-1.png" },
      { id: 8, title: "GODFATHER", img: "/assets/card-img-1.png" },
      { id: 9, title: "GODFATHER", img: "/assets/card-img-1.png" },
    ],
  },
  {
    id: 2,
    heading: "Universe Superstar",
    img: "/assets/feature-img-2.png",
    description: "Organizer: Smart Guff Pvt. Ltd.",
    time: "2025/1/25",
    cards: [
      { id: 1, title: "CONTESTANT A", img: "/assets/card-img-1.png" },
      { id: 2, title: "CONTESTANT B", img: "/assets/card-img-1.png" },
      { id: 3, title: "CONTESTANT C", img: "/assets/card-img-1.png" },
      { id: 4, title: "GODFATHER", img: "/assets/card-img-1.png" },
      { id: 5, title: "GODFATHER", img: "/assets/card-img-1.png" },
      { id: 6, title: "GODFATHER", img: "/assets/card-img-1.png" },
      { id: 7, title: "GODFATHER", img: "/assets/card-img-1.png" },
      { id: 8, title: "GODFATHER", img: "/assets/card-img-1.png" },
      { id: 9, title: "GODFATHER", img: "/assets/card-img-1.png" }, 
    ],
  },
];

function EventDetails() {
  const { id } = useParams();
  const event = features.find((feature) => feature.id === parseInt(id));

  if (!event) {
    return <p className="text-center text-red-500">Event not found!</p>;
  }

  return (
    <div className="bg-customBlue max-w-full py-8 px-4 flex flex-col items-center pb-20">
      {/* Banner Image and Details */}
      <div className="flex justify-center items-center w-full">
        <img
          src={event.img}
          alt={event.heading}
          className="w-full max-w-[90%] h-auto md:h-[500px] object-cover rounded-lg mb-6"
        />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
        {event.heading}
      </h1>
      <p className="text-white mt-2 text-center text-sm md:text-lg">Voting close!</p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-[90%]">
        {event.cards.map((card) => (
          <div
            key={card.id}
            className="bg-customBlue rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full sm:h-[250p object-cove rounded-lg mb-4"
            />
            <h2 className="text-base md:text-lg text-white font-semibold mb-4">
              {card.title}
            </h2>
            <button className="bg-gray-700 w-full text-white px-6 py-2 rounded-3xl font-medium hover:bg-gray-600">
              Vote Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDetails;
