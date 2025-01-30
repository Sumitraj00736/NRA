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

function OurPartnersHeader() {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className='mx-auto w-full max-w-7xl font-poppins px-2 mb-4 mt-20'>
            <span className='inline-flex items-center gap-2 font-poppins border-2 px-4 py-2 rounded-xl mb-8 border-customOrange bg-customOrange bg-opacity-10'>
                <PiArrowUpRightBold className='text-customOrange' size={22} />
                <h1 className='text-lg font-medium'>Our Partners</h1>
            </span>
            <h1 className='text-5xl font-light mb-2'>Have a Look on Our Partners</h1>
            <div className='flex lg:flex-row flex-col lg:justify-between lg:items-center gap-y-12 lg:gap-y-0'>
                <h1 className='text-5xl font-semibold text-customBlue'>Cooperative Experience</h1>
                {/* <button 
                    className='flex items-center gap-2 border rounded-lg py-2 px-4 text-customBlue border-customBlue w-fit hover:text-white hover:bg-customOrange hover:border-none'
                    onClick={() => navigate("/news")}
                >
                    <p className='font-medium'>View All Partners</p>
                    <HiChevronDoubleRight />
                </button> */}
            </div>
        </div>
    );
}

export default OurPartnersHeader;
