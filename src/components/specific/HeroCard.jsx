import { useState } from "react";
import efficient from "../../assets/Images/Efficient.png";
import advocacy from "../../assets/Images/Advocacy.png";
import ethics from "../../assets/Images/ethics.png";
import inclusion from "../../assets/Images/inclusion.png";

export default function InfoCards() {
    const [expandedCard, setExpandedCard] = useState(null);

    const cardData = [
        {
            icon: efficient, 
            title: "Efficiency",
            description: "The NRA focuses on improving the speed, security, and cost-effectiveness of remittance transfers. By encouraging the adoption of advanced technologies and innovative solutions, it aims to streamline processes and enhance the overall experience for users.",
        },
        {
            icon: advocacy,
            title: "Advocacy",
            description: "The NRA represents the interests of remittance service providers and advocates for favorable policies and regulations with government bodies and regulators. It works to create a supportive environment for the remittance industry, ensuring it operates transparently and efficiently while addressing challenges faced by stakeholders.",
        },
        {
            icon: ethics,
            title: "Ethics",
            description: "The NRA promotes ethical and responsible practices within the remittance industry. It sets standards for fair pricing, transparency, and customer protection, ensuring that remittance services are trustworthy and reliable for both senders and recipients.",
        },
        {
            icon: inclusion,
            title: "Inclusion",
            description: "The NRA works to promote financial inclusion, ensuring that remittance recipients, especially in rural and underserved areas, have access to formal financial services. This helps integrate more people into the financial system, empowering them economically and socially.",
        },
    ];

    return (
        <div className="flex md:-mt-24 items-center justify-center font-poppins mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-4">
                {cardData.map((card, index) => {
                    const isExpanded = expandedCard === index;
                    const shortText = card.description.slice(0, 100) + "..."; // Truncate text
                    return (
                        <div 
                            key={index} 
                            className={`bg-orange-50 shadow-lg rounded-2xl w-64 transition-all duration-500 flex flex-col items-center justify-center text-center py-8 px-6  ${
                                isExpanded ? "h-auto" : "h-80"
                            }`}
                        >
                            <div className="flex justify-center rounded-full bg-customBlue p-2 mt-2">
                                <img src={card.icon} alt="" className="h-12 w-12"/>
                            </div>
                            <h3 className="text-lg font-bold mt-4">{card.title}</h3>
                            <p className="text-gray-500 mt-2">
                                {isExpanded ? card.description : shortText}
                            </p>
                            <button
                                className="text-customBlue mt-2 underline "
                                onClick={() => setExpandedCard(isExpanded ? null : index)}
                            >
                                {isExpanded ? "Read Less" : "Read More"}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
