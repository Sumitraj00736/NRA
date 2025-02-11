import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiArrowUpRightBold, PiArrowCircleUpRightLight } from "react-icons/pi";
import { HiChevronDoubleRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, "-");
};

const items = [
    {
        imgSrc: "https://i.ibb.co/zhPPfW5W/blog-news.webp",
        title: "यस्तो छ आजका लागि विदेशी मुद्राको विनिमय दर",
        date: "Magh 18, 2081",
    },
    {
        imgSrc: "https://i.ibb.co/HRyynjY/3.png",
        title: "19th Annual General Meeting of Nepal Remitters Association",
        date: "Poush 18, 2081",
    },
    {
        imgSrc: "https://i.ibb.co/99c0zMc1/nrb-photo.jpg",
        title: "नेपाल राष्ट्र बैंकले बैंकिङ प्रणालीबाट आज फेरि रु. ३० अर्ब तान्दै",
        date: "Poush 12, 2081",
    },
    {
        imgSrc: "https://i.ibb.co/gpgCQzL/remitance.jpg",
        title: "एक खर्ब ३६ अर्ब विप्रेषण देशभित्र भित्रियो",
        date: "Asoj 11, 2081",
    },
];

function News() {
    const navigate = useNavigate();
    const [isSliding, setIsSliding] = useState(false);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        swipeToSlide: true,
        touchThreshold: 10, 
        beforeChange: () => setIsSliding(true),
        afterChange: () => setIsSliding(false),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='mx-auto w-full max-w-7xl font-poppins px-2 mb-4 mt-20'>
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

            <Slider {...settings} className='mt-8'>
                {items.map((item, i) => (
                    <div 
                        key={i} 
                        className="relative group flex flex-col gap-4 px-2 cursor-pointer -ml-4 mb-6" 
                        onClick={() => {
                            if (!isSliding) {
                                navigate(`/news/${slugify(item.title)}`);
                            }
                        }}
                    >
                        <div className="relative w-90 h-72 rounded-lg overflow-hidden mb-2">
                            <img src={item.imgSrc} alt="" className="w-full h-full object-cover rounded-lg" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <PiArrowCircleUpRightLight className="text-white text-5xl" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="text-lg font-semibold">
                                {item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}
                            </h1>
                            <p className="text-sm text-gray-600">{item.date}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default News;
