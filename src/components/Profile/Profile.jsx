import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import elipse from "../../assets/Images/elipse.png";
import { motion, AnimatePresence } from "framer-motion";
import signature from "../../assets/Images/president-signature.png";

function Profile() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="w-full mx-auto max-w-7xl px-4 font-poppins my-8 mt-16">
            <div className="flex md:flex-row flex-col gap-10 md:items-start items-center ">
                <div className="w-full flex flex-col items-center md:items-start">
                    <h1 className="text-md text-customOrange font-semibold tracking-wider mb-4">
                        MESSAGE FROM THE LEADER
                    </h1>
                    <h2 className="text-4xl font-bold mb-8">
                        Hear From Our <span className="text-customBlue">President</span>
                    </h2>
                    <p className="text-md text-gray-500">
                        Namaste, <br/><br />    
                        It is an honor to lead the Nepal Remitters Association (NRA), representing remittance companies and financial institutions that connect millions of Nepalis worldwide with their loved ones. Remittances are vital to Nepal’s economy, supporting countless households and driving national development. NRA is committed to ensuring secure, efficient, and affordable money transfers.
                        <br/><br />
                    </p>

                    {/* Extra Content Displayed when showMore is true */}
                    <AnimatePresence>
                        {showMore && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }} // Start faded out & slightly above
                                animate={{ opacity: 1, y: 0 }} // Fade in & slide down
                                exit={{ opacity: 0, y: -10 }} // Fade out & slide up
                                transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
                            >
                                <p className="text-md text-gray-500">
                                    We prioritize innovation, transparency, and advocacy to strengthen the remittance ecosystem. Our mission is to empower our members and safeguard the seamless flow of hard-earned remittances. <br /> <br />
                                    I sincerely thank our members and partners for their support. Together, we will enhance Nepal’s remittance industry and build a more prosperous future. Explore our website to learn more. <br /><br />
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <img
                        src={signature}
                        className="w-28 h-full"
                    />

                    <button
                        className="bg-customBlue hover:bg-customOrange py-3 px-6 text-white rounded-xl text-md font-semibold shadow-sm shadow-customBlue hover:shadow-customOrange mt-4"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Read Less" : "Read More"}
                    </button>
                </div>

                <div className="relative " >
                    <img src="https://i.ibb.co/M57DVVGg/ritesh-mittal.jpg" alt="" className=" w-full md:h-full h-1/2 rounded-xl z-50 shadow-md shadow-customOrange" />
                    {/* <motion.div
                        animate={{ rotate: 360 }} // Rotates from 0° to 360°
                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // Infinite rotation
                    >
                        <img src={elipse} alt="Rotating Elipse" className="h-full w-40 " />
                    </motion.div> */}
                    <div className="p-3 border-4 border-customBlue rounded-full bg-customBlue md:absolute md:-left-20 md:bottom-8 w-1/2 text-center md:text-left mt-4 block mx-auto shadow-sm shadow-customOrange">
                        <p className="text-lg font-semibold ml-2 text-white">Ritesh Mittal</p>
                        <p className="text-md font-normal text-white ml-2 ">President</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
