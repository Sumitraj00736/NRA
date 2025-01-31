import React from 'react';
import { PiArrowUpRightBold } from "react-icons/pi";

const AboutUsHero = () => {
    return (
        <div className="max-w-7xl w-full mx-auto mt-8 font-poppins ">
            <div className='border-2 border-gray-200 rounded-lg shadow-lg'>
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full p-2">

                    {/* Image 1 (Mission) */}
                    <div className="w-full">
                        <img
                            src="https://i.ibb.co/vxKMtMgK/360-F-96545306-c-X6-N4-Fv2-TTVRMKah-A3ao-Cvxl-UOGm2-Kk-V.jpg"
                            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none h-64 md:h-96 w-full object-cover"
                            alt="Our Mission"
                        />
                    </div>

                    {/* Mission Text */}
                    <div className="p-6 md:p-12 text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-semibold text-customBlue">Our Mission</h1>
                        <p className="mt-2 text-gray-700">
                            To foster a dynamic and sustainable remittance industry in Nepal that enhances financial inclusion, reduces poverty, and contributes to long-term economic growth.
                        </p>
                    </div>

                    {/* Vision Text */}
                    <div className="p-6 md:p-12 text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-semibold text-customBlue">Our Vision</h1>
                        <p className="mt-2 text-gray-700">
                            To be the leading and most trusted advocate for the remittance sector in Nepal, promoting policies, technology, and collaboration that drive financial accessibility and economic development.
                        </p>
                    </div>

                    {/* Image 2 (Vision) */}
                    <div className="w-full">
                        <img
                            src="https://i.ibb.co/dwNF42rD/360-F-58249496-c7bj8-Kr-PYMXw-FJIqhxsr-AN4wa2-Dy82-Eb.jpg"
                            className="rounded-b-lg md:rounded-r-lg md:rounded-bl-none h-64 md:h-96 w-full object-cover"
                            alt="Our Vision"
                        />
                    </div>

                </div>
            </div>

            <div className='mt-16'>
                <span className='inline-flex items-center gap-2 font-poppins border-2 px-4 py-2 rounded-xl mb-8 border-customOrange bg-customOrange bg-opacity-10'>
                    <PiArrowUpRightBold className='text-customOrange' size={22} />
                    <h1 className='text-lg font-medium'>Who We Are</h1>
                </span>
                <div className='flex gap-2 items-center p-2 border-2 rounded-lg shadow-lg'>
                    <div className='flex flex-col gap-2 p-8'>
                    <h1 className='text-customBlue text-3xl font-semibold'>Uniting & Advancing the Remittance Industry</h1>
                    <p className='mt-2 text-gray-700 '>
                        The Nepal Remitters Association (NRA) is the umbrella organization representing remittance companies and financial institutions operating in Nepal. Established on 23rd Baisakh 2061 B.S. (May 6, 2005 A.D.), NRA serves as a unified voice for the remittance industry, advocating for responsible practices, innovation, and secure, cost-effective fund transfers.
                    </p>
                    </div>
                  
                    <img src="https://i.ibb.co/C5JDQgwR/DW1dp-Qm-XLwo-Ag-I77uc-GGcuyg-E-i-K339-IRQg42-PYY5db-AH-CXa-XSa-WLN1j-Dj-IU6xwfdvh-SXn-Ga8-j-Uny-D1c.jpg" 
                    className='rounded-lg'
                    alt="" />
                </div>
            </div>


        </div>
    );
};

export default AboutUsHero;
