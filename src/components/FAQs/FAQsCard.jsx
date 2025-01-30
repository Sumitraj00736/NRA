import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import "../../assets/css/faqs.css"
import { Link } from 'react-router-dom';

const faqData = [
    {
        question: "First and foremost, you never want to go?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
        question: "Without security protection on your computer?",
        answer: "It's essential to have security protection to safeguard your data and privacy."
    },
    {
        question: "Free Anti-Virus has very low detection rates?",
        answer: "Yes, free antivirus solutions often have lower detection rates compared to paid versions."
    },
    {
        question: "You of the latest security software?",
        answer: "Feel free to contact us for more details on our services and solutions. Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "Give us a call and we will be happy to inform?",
        answer: "We keep our clients informed about the latest security software and updates."
    },
    {
        question: "We recommend and sell to all our clients?",
        answer: "Yes, we recommend and sell trusted security solutions to our clients."
    },
];

function FAQsCard() {
    const [openIndex, setOpenIndex] = useState(null);
    const [openIndex1, setOpenIndex1] = useState(null);

    const [isScreen, setIsScreen] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setIsScreen(window.innerWidth < 430)
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    const updateOpenIndex = () => {
        if (window.innerWidth >= 1024) {
            setOpenIndex(0);
            setOpenIndex1(0);
        } else {
            setOpenIndex(0);
            setOpenIndex1(null);
        }
    };

    useEffect(() => {
        updateOpenIndex();
        window.addEventListener('resize', updateOpenIndex);
        return () => window.removeEventListener('resize', updateOpenIndex);
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
    };

    const toggleFAQ1 = (index) => {
        setOpenIndex1(openIndex1 === index ? null : index); // Toggle between open and closed
    };

    const firstColumn = faqData.slice(0, faqData.length / 2)
    console.log(firstColumn)
    const secondColumn = faqData.slice(faqData.length / 2, faqData.length)
    console.log(secondColumn);

    return (
        <>
            <div className='grid grid-cols-1 gap-2 max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto font-poppins p-4'>
                <div className=" font-poppins flex flex-col lg:flex-row gap-4 ">
                    <div className='lg:w-1/2 -mb-4'>
                        {firstColumn.map((item, index) => (
                            <div key={index}
                                className="border border-gray-300 rounded-md flex flex-col gap-0 transition-all duration-300 lg:mb-4 mb-4">
                                <div
                                    className=" p-4 flex flex-row justify-between items-center"
                                >
                                    <h3 className="text-base md:text-large font-medium text-black px-2">{item.question}</h3>
                                    <span onClick={() => toggleFAQ(index)} className="text-customPurple cursor-pointer ml-4">{openIndex === index ? (
                                        <FaMinus />
                                    ) : (
                                        <FaPlus />
                                    )}</span>
                                </div>
                                {openIndex === index && (
                                    <div className="px-6 mb-6 bg-white text-gray-600 flex flex-row gap-6">
                                        <div className=" border-l-4 border-customPurple rounded-lg"></div>

                                        <p className='text-sm md:text-base'>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className='lg:w-1/2'>
                        {secondColumn.map((item, index) => (
                            <div key={index}
                                className="border border-gray-300 rounded-md flex flex-col gap-0 transition-all duration-300 mb-4 ">
                                <div
                                    className=" p-4 flex flex-row justify-between items-center"
                                >
                                    <h3 className="text-base md:text-large font-medium text-black px-2">{item.question}</h3>
                                    <span onClick={() => toggleFAQ1(index)} className="text-customPurple cursor-pointer ml-4">{openIndex1 === index ? (
                                        <FaMinus />
                                    ) : (
                                        <FaPlus />
                                    )}</span>
                                </div>
                                {openIndex1 === index && (
                                    <div className="px-6 mb-6 bg-white text-gray-600 flex flex-row gap-6">
                                        <div className=" border-l-4 border-customPurple rounded-lg"></div>

                                        <p className='text-sm md:text-base'>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
                <div className={`flex ${isScreen ? "flex-col" : "flex-row"} items-center justify-center w-full gap-2 font-medium bg-customBlue p-8 rounded-lg mb-12`}>
                    <p className='text-white text-center'>Couldn't find an answer?</p>
                    <Link to="#">
                        <p className='text-customOrange cursor-pointer hover:text-orange-300 text-center'>Ask a Question</p>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default FAQsCard