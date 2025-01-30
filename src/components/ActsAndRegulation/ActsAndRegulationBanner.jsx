import React from 'react'
import { Link } from 'react-router-dom';
import "../../assets/css/faqs.css";
import { HiArrowLongRight, HiArrowLongDown } from "react-icons/hi2";

function ActsAndRegulationBanner() {

    const handleToBottom = () => {
        window.scrollTo({
            top: 700,
            behavior: "smooth"
        });
    }
    return (
        <div className='relative -mt-20 font-poppins bg-gradient-to-b from-customBlue to-blue-700 mb-12 -z-50 py-12 '>
            <div className='grid grid-cols-1 items-center gap-2 mx-auto max-w-7xl'>
                <div className=' flex flex-col justify-center items-center sm:mt-28 mt-20 px-4 mx-auto'>
                    <div className='flex flex-col gap-4 md:gap-6 justify-center items-center'>
                        <h1 className='text-white font-semibold sm:text-5xl text-4xl text-center spacing'>Acts And Regulations</h1>
                        <p className='tracking-wider text-white sm:text-3xl text-2xl'>Acts & Regulations</p>
                        <p className='text-white text-sm sm:text-base text-center'>Navigating Remittance: Key Acts and Regulations Shaping Global Transfers
                        </p>
                        <ul className='flex flex-row gap-3 items-center rounded-3xl bg-white w-sm px-4 py-2 mt-2 mb-4'>
                            <Link to="/">
                                <p className='hover:text-customPurple text-sm sm:text-base'>Home</p>
                            </Link>
                            <HiArrowLongRight />
                            <p className='text-customPurple text-sm sm:text-base'>Acts and Regulations</p>
                        </ul>
                        {/* <div onClick={handleToBottom}className='mx-auto mb-12 cursor-pointer '>
            <HiArrowLongDown className='text-white rounded-full border border-white'/>
        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActsAndRegulationBanner