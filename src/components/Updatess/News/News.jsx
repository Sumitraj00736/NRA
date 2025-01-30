import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PiArrowUpRightBold, PiArrowCircleUpRightLight } from "react-icons/pi";
import { HiChevronDoubleRight } from "react-icons/hi";

// Function to generate URL-friendly slugs
const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, "-");
};

const items = [
    {
        imgSrc: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title 1",
        description: "Description 1",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title 2",
        description: "Description 2",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title 3",
        description: "Description 3",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title 4",
        description: "Description 4",
    },
];

function News() {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className='mx-auto w-full max-w-7xl font-poppins px-2 mb-4'>
            <span className='inline-flex items-center gap-2 font-poppins border-2 px-4 py-2 rounded-xl mb-8 border-customOrange bg-customOrange bg-opacity-10'>
                <PiArrowUpRightBold className='text-customOrange' size={22} />
                <h1 className='text-lg font-medium'>News</h1>
            </span>
            <h1 className='text-5xl font-light mb-2'>Have a Look on News</h1>
            <div className='flex lg:flex-row flex-col lg:justify-between lg:items-center gap-y-12 lg:gap-y-0'>
                <h1 className='text-5xl font-semibold text-customBlue'>Amazing News Experience</h1>
                <button 
                    className='flex items-center gap-2 border rounded-lg py-2 px-4 text-customBlue border-customBlue w-fit hover:text-white hover:bg-customOrange hover:border-none'
                    onClick={() => navigate("/news")}
                >
                    <p className='font-medium'>View All News</p>
                    <HiChevronDoubleRight />
                </button>
            </div>

            <div className='flex lg:flex-row flex-col gap-x-8'>
                {items.map((item, i) => (
                    <div 
                        key={i} 
                        className="relative group flex flex-col gap-4 mt-8 py-4 w-96 cursor-pointer"
                        onClick={() => navigate(`/news/${slugify(item.title)}`)} // Use slugify
                    >
                        {/* Image Container */}
                        <div className="relative w-96 h-72 rounded-lg overflow-hidden">
                            <img src={item.imgSrc} alt="" className="w-full h-full object-cover rounded-lg" />
                            {/* Arrow Icon (Appears on Hover) */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <PiArrowCircleUpRightLight className="text-white text-5xl" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-1">
                            <h1 className="text-lg font-semibold">{item.title}</h1>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
