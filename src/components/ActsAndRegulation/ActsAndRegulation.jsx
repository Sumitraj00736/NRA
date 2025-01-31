import React from 'react';
import { PiArrowCircleUpRightLight } from "react-icons/pi";
import RemittanceCirculation from "../../assets/Images/Remittance_Circulation.webp";
import RemittanceBylaws from "../../assets/Images/Remittance_Bylaws.gif";
import RemittanceBylaws2079 from "../../assets/Images/RemittanceBylaws2079.jpeg";
import FXMDCircular from "../../assets/Images/FXMD-Circular.jpeg";

const items = [
    {
        imgSrc: RemittanceCirculation,
        title: "Remittance Circular",
        description: "Guidelines and regulations for international remittance transactions.",
        pdfSrc: "/pdf/RemittanceCircular.pdf",
    },
    {
        imgSrc: RemittanceBylaws,
        title: "Remittance Bylaws",
        description: "Comprehensive legal framework governing remittance services.",
        pdfSrc: "/pdf/Remittance_Bylaws.pdf",
    },
    {
        imgSrc: RemittanceBylaws2079,
        title: "Remittance Bylaws 2079",
        description: "Updated remittance bylaws for the year 2079 with new policies.",
        pdfSrc: "/pdf/Remittance-Bylaws_2079.pdf",
    },
    {
        imgSrc: FXMDCircular,
        title: "FXMD Circular",
        description: "Foreign exchange management directives and compliance requirements.",
        pdfSrc: "/pdf/FXMD-Circular.pdf",
    }
];

function ActsAndRegulation() {
    const handleDownload = (pdfSrc) => {
        const link = document.createElement("a");
        link.href = pdfSrc;
        link.download = pdfSrc.split('/').pop(); // Extracts filename from URL
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='mx-auto w-full max-w-7xl font-poppins px-2 mb-8 mt-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8'>
                {items.map((item, i) => (
                    <div 
                        key={i} 
                        className="relative group flex flex-col gap-4 mt-8 py-4 w-96 cursor-pointer"
                        onClick={() => handleDownload(item.pdfSrc)}
                    >
                        {/* Image Container */}
                        <div className="relative w-96 h-72 rounded-lg overflow-hidden">
                            <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                            {/* Arrow Icon (Appears on Hover) */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <PiArrowCircleUpRightLight className="text-white text-5xl" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-1">
                            <h1 className="text-lg font-semibold text-orange-500 ">{item.title}</h1>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActsAndRegulation;
