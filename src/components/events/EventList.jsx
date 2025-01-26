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

function EventList() {
  return (
    <div className="bg-customBlue px-4 sm:px-8 md:px-16 lg:px-32 py-8 md:py-12 lg:py-16">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">
        Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={feature.img}
              alt={feature.heading}
              className="w-full h-48 sm:h-56 md:h-60 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-lg md:text-lg font-semibold">{feature.heading}</h3>
              <p className="text-sm md:text-base text-gray-300 mt-2">
                {feature.description}
              </p>

              <div className="mt-auto flex justify-between items-center pt-4">
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
      </div>
    </div>
  );
}

export default EventList;


