import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PiArrowCircleUpRightLight } from "react-icons/pi";
import { motion } from 'framer-motion';

const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, "-");
};

const items = [
    {
        imgSrc: "https://i.ibb.co/9kwTZhbF/1.png",
    },
    {
        imgSrc: "https://i.ibb.co/XkjZRQXd/2.png",
    },
    {
        imgSrc: "https://i.ibb.co/HRyynjY/3.png",
    },
    {
        imgSrc: "https://i.ibb.co/Kps44xtK/4.png",
    },
   
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { 
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hover: {
        y: -10,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const overlayVariants = {
    hidden: { 
        opacity: 0,
        scale: 0.8
    },
    hover: { 
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3
        }
    }
};

function Gallery() {
    const navigate = useNavigate();

    return (
        <motion.div 
            className="mx-auto w-full max-w-7xl font-poppins px-2 mb-8 mt-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8">
                {items.map((item, i) => (
                    <motion.div 
                        key={i}
                        className="relative group flex flex-col gap-4 mt-8 py-4 w-96 cursor-pointer"
                        variants={itemVariants}
                        whileHover="hover"
                        layout
                    >
                        {/* Image Container */}
                        <motion.div 
                            className="relative w-96 h-72 rounded-lg overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img 
                                src={item.imgSrc} 
                                alt="" 
                                className="w-full h-full object-cover rounded-lg"
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            
                            <motion.div 
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70"
                                variants={overlayVariants}
                                initial="hidden"
                                whileHover="hover"
                            >
                                <motion.div
                                    whileHover={{ rotate: 45 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <PiArrowCircleUpRightLight className="text-white text-5xl" />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div 
                            className="flex flex-col gap-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.h1 
                                className="text-lg font-semibold"
                                layout
                            >
                                {item.title}
                            </motion.h1>
                            <motion.p 
                                className="text-sm text-gray-600"
                                layout
                            >
                                {item.description}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Gallery;