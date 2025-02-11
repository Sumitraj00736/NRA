import { LuMail, LuLinkedin, LuFacebook  } from "react-icons/lu";
import { HiMail } from "react-icons/hi";
import { RiFacebookFill } from "react-icons/ri";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { PiArrowUpRightBold, PiArrowCircleUpRightLight } from "react-icons/pi";
import { HiChevronDoubleRight } from "react-icons/hi";

const profile = [
    {
        position: "President",
        name: "Ritesh Mittal",
        imgSrc: "https://i.ibb.co/8gm2XPm6/ritesh-mittal.jpg"
    },
    {
        position: "IPP",
        name: "Chandra Tandon",
        imgSrc: "https://i.ibb.co/b503wxvx/tandon.jpg"
    },
    {
        position: "Vice President",
        name: "Sanjaya Sigdel",
        imgSrc: "https://i.ibb.co/HTJvDNJD/sanjay-sigdel.jpg"
    },
    {
        position: "General Secretary",
        name: "Dibakar Paudel",
        imgSrc: "https://i.ibb.co/Pvgrp6F8/diwakar-poudel.jpg"
    },
    {
        position: "Treasurer",
        name: "Sanjib Pathak",
        imgSrc: "https://i.ibb.co/jkWKhKtW/sanjib-pathak.jpg"
    },
    {
        position: "Secretary",
        name: "Rameshwor Sapkota",
        imgSrc: "https://i.ibb.co/FqK10rvg/rameshor-sapkota.jpg"
    },
    {
        position: "Executive Member",
        name: "Bimal Mahat",
        imgSrc: "https://i.ibb.co/Q7Wh7ycv/bimal-mahat.jpg"
    },
    {
        position: "Executive Member",
        name: "Sudan Singh Silwal",
        imgSrc: "https://i.ibb.co/5xRCL6gW/sudan-sing-shilwal.jpg"
    },
   
    {
        position: "Executive Member",
        name: "Shyam Pd. Lamichhane",
        imgSrc: "https://i.ibb.co/rRYb3ZVN/shyam-prasad.jpg"
    },
    
    {
        position: "Executive Member",
        name: "Madhusudhan Neupane",
        imgSrc: "https://i.ibb.co/27RxJBbC/madhu-sudan.jpg"
    },


]
export default function AboutUs() {
    return (
        <>
            <div className="w-full mt-6 mb-6 font-poppins py-8 ">
                <div className="max-w-7xl w-full mx-auto px-2">
                    <span className='inline-flex items-center gap-2 font-poppins border-2 px-4 py-2 rounded-xl mb-8 border-customOrange bg-customOrange bg-opacity-10'>
                        <PiArrowUpRightBold className='text-customOrange' size={22} />
                        <h1 className='text-lg font-medium'>Office Bearers</h1>
                    </span>
                    <h1 className='text-5xl font-light mb-2'>Take a Look At Our</h1>
                    <h1 className='text-5xl font-semibold text-customBlue'>Esteemed Office Bearers</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2 py-10 mx-auto w-full max-w-7xl">
                    {profile.map((item, index) => (
                        <>
                            <div
                                key={index}
                                className=" bg-gray-100 rounded-2xl shadow-lg overflow-hidden w-72 relative h-[420px] font-poppins mx-auto ">

                                <div className=" w-full h-full">
                                    <img
                                        src={item.imgSrc}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-full scale-150 translate-y-12 flex flex-col gap-2 mb-2">
                                        <div>
                                            <button className="bg-white shadow-md p-2 rounded-full absolute flex gap-4 left-[35%] -top-2 transform -translate-x-1/2 hover:scale-110  hover:transition-all"><HiMail /></button>
                                            <button className="bg-white shadow-md p-2 rounded-full absolute flex gap-4 left-[50%] -top-4 transform -translate-x-1/2 hover:scale-110 hover:transition-all"><RiFacebookFill /></button>
                                            <button className="bg-white shadow-md p-2 rounded-full absolute flex gap-4 left-[65%] -top-2 transform -translate-x-1/2 hover:scale-110 hover:transition-all"><LiaLinkedinIn /></button>
                                        </div>
                                        <div className="text-center ">
                                            <h2 className="mt-6 text-md font-semibold text-gray-900 px-16 " >
                                                {item.name}
                                            </h2>
                                            <p className="text-gray-500 text-xs">{item.position}</p>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </>
                    ))}

                </div>
            </div>
        </>
    );
}
