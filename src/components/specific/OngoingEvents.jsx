const events = [
  {
    heading: "Rap Battle Nepal",
    img: "/assets/feature-img-1.png", // Replace with the correct path to your image
    description: "RAP BATTLE NEPAL - WILD CARD ENTRY",
    time: "2025/1/4",
  },
  {
    heading: "Tech'25 London Techathon",
    img: "/assets/feature-img-2.png", // Replace with the correct path to your image
    description: "London Techathon",
    time: "2025/1/25",
  },
  {
    heading: "Universe SuperStar",
    img: "/assets/feature-img-2.png", // Replace with the correct path to your image
    description: "Organizer: Smart Guff Pvt. Ltd.",
    time: "2025/1/25",
  },
];
function OngoingEvents() {
  return (
    <div className=" bg-customBlue px-[126px] py-[56px]">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">
        OnGoing Events
      </h2>
      <div className="flex gap-8 justify-items-center ">
        {events.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white rounded-xl shadow-lg w-96 " // Increased width
          >
            <img
              src={feature.img}
              alt={feature.heading}
              className="w-full h-60 object-cover rounded-t-xl" // Increased image height
            />
            <div className="p-3">
              {" "}
              {/* Increased padding */}
              <h3 className="text-xl">{feature.heading}</h3>
              <p className="text-base text-gray-300 mt-[2px] ">
                {feature.description}
              </p>
              <div className="flex justify-between items-center mt-3">
                <p className="flex items-center text-base text-gray-100">
                  <span className="material-icons text-lg mr-1">event</span>
                  {feature.time}
                </p>
                <button className="bg-[#6666] hover:bg-[#5555] text-white text-[10px] text-base px-6 py-1 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OngoingEvents;
