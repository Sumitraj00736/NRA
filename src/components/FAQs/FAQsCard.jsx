import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "../../assets/css/faqs.css";
import { Link } from 'react-router-dom';

const faqData = [
    {
        question: "What is the Nepal Remitters Association (NRA)?",
        answer: "The Nepal Remitters Association (NRA) is a representative organization for remittance companies and financial institutions operating in Nepal. It works to ensure a secure, transparent, and efficient remittance ecosystem while advocating for favorable policies and industry development."
    },
    {
        question: "What is the role of NRA in Nepal’s remittance sector?",
        answer: "NRA works as an industry advocate, promoting ethical practices, enhancing financial inclusion, supporting technological advancements, and engaging with policymakers to create a sustainable remittance environment."
    },
    {
        question: "Who can become a member of NRA?",
        answer: "Membership is open to licensed (Issued By Nepal Rastra Bank) remittance service providers and banks involved in Nepal’s remittance industry."
    },
    {
        question: "How can an organization become a member of NRA?",
        answer: "Interested organizations can apply for membership by submitting an application along with the required documentation. The NRA reviews applications to ensure they meet the necessary criteria before granting membership."
    },
    {
        question: "What are the benefits of NRA membership?",
        answer: "Members gain access to industry insights, policy advocacy, networking opportunities, capacity-building programs, and regulatory support to help them operate efficiently in Nepal’s remittance market."
    },
    {
        question: "Does NRA regulate remittance companies?",
        answer: "NRA does not function as a regulatory body but works closely with regulators such as Nepal Rastra Bank to help shape policies that ensure ethical and transparent remittance operations."
    },
    {
        question: "What compliance must remittance providers follow?",
        answer: "Remittance companies must adhere to Nepal Rastra Bank’s guidelines, bylaws and circular."
    },
    {
        question: "How does NRA ensure remittance security?",
        answer: "NRA advocates for best practices in fraud prevention, cybersecurity, and regulatory compliance while working with stakeholders to implement secure and efficient remittance systems."
    },
];

function FAQsCard() {
    const [openIndex, setOpenIndex] = useState(0);
    const [isScreen, setIsScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsScreen(window.innerWidth < 430);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='grid grid-cols-1 gap-4 max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto font-poppins p-6'>
            <div className='flex flex-col lg:flex-row gap-6'>
                <div className='lg:w-1/2'>
                    {faqData.slice(0, faqData.length / 2).map((item, index) => (
                        <motion.div key={index} 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className='border border-gray-300 rounded-md mb-4 p-4 cursor-pointer'
                            onClick={() => toggleFAQ(index)}>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-lg font-medium text-black'>{item.question}</h3>
                                <span className='text-customPurple'>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
                            </div>
                            {openIndex === index && (
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className='text-gray-600 mt-2'>
                                    {item.answer}
                                </motion.p>
                            )}
                        </motion.div>
                    ))}
                </div>
                <div className='lg:w-1/2'>
                    {faqData.slice(faqData.length / 2).map((item, index) => (
                        <motion.div key={index} 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className='border border-gray-300 rounded-md mb-4 p-4 cursor-pointer'
                            onClick={() => toggleFAQ(index + faqData.length / 2)}>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-lg font-medium text-black'>{item.question}</h3>
                                <span className='text-customPurple'>{openIndex === index + faqData.length / 2 ? <FaMinus /> : <FaPlus />}</span>
                            </div>
                            {openIndex === index + faqData.length / 2 && (
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className='text-gray-600 mt-2'>
                                    {item.answer}
                                </motion.p>
                            )}
                        </motion.div>
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
    );
}

export default FAQsCard;
