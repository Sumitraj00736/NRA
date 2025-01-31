import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import signature from "../../assets/Images/president-signature.png";

function Profile() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div 
            ref={ref}
            className="w-full mx-auto max-w-7xl px-4 font-poppins my-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            <div className="flex md:flex-row flex-col gap-10 md:items-start items-center">
                <motion.div 
                    className="w-full flex flex-col items-center md:items-start"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1 className="text-md text-customOrange font-semibold tracking-wider mb-4">
                        MESSAGE FROM THE LEADER
                    </h1>
                    <h2 className="text-4xl font-bold mb-8">
                        Hear From Our <span className="text-customBlue">President</span>
                    </h2>
                    <p className="text-md text-gray-500">
                        Namaste, <br /><br />
                        It is an honor to lead the Nepal Remitters Association (NRA), representing remittance companies and financial institutions that connect millions of Nepalis worldwide with their loved ones. Remittances are vital to Nepal’s economy, supporting countless households and driving national development. NRA is committed to ensuring secure, efficient, and affordable money transfers.
                        <br /><br />
                    </p>
                    <p className="text-md text-gray-500">
                        We prioritize innovation, transparency, and advocacy to strengthen the remittance ecosystem. Our mission is to empower our members and safeguard the seamless flow of hard-earned remittances. <br /> <br />
                        I sincerely thank our members and partners for their support. Together, we will enhance Nepal’s remittance industry and build a more prosperous future. Explore our website to learn more. <br /><br />
                    </p>
                    <motion.img 
                        src={signature} 
                        className="w-28 h-full"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </motion.div>

                <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <img 
                        src="https://i.ibb.co/M57DVVGg/ritesh-mittal.jpg" 
                        alt="President" 
                        className="w-full md:h-full h-1/2 rounded-xl z-50 shadow-md shadow-customOrange"
                    />
                    <motion.div 
                        className="p-3 border-4 border-customBlue rounded-full bg-customBlue md:absolute md:-left-20 md:bottom-8 w-1/2 text-center md:text-left mt-4 block mx-auto shadow-sm shadow-customOrange"
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <p className="text-lg font-semibold ml-2 text-white">Ritesh Mittal</p>
                        <p className="text-md font-normal text-white ml-2">President</p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Profile;
