import React from 'react'
import { PiArrowCircleUpRightLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

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
];
function NewsList() {
    const navigate = useNavigate(); 

  return (
    <div className='mx-auto w-full max-w-7xl font-poppins px-6'>
        <div className='flex lg:flex-row flex-col gap-x-6'>
                        {items.map((item, i) => (
                            <div 
                                key={i} 
                                className="relative group flex flex-col gap-4 mt-8 py-4 w-96 cursor-pointer"
                                onClick={() => navigate(`/news/${slugify(item.title)}`)} // Use slugify
                            >
                                {/* Image Container */}
                                <div className="relative w-96 h-72 rounded-lg overflow-hidden">
                                    <img src={item.imgSrc} alt="" className="w-full h-full object-cover rounded-lg" />
                                    {/* Arrow Icon (Appears on Hover) */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <PiArrowCircleUpRightLight className="text-white text-5xl" />
                                    </div>
                                </div>
        
                                {/* Text Content */}
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-lg font-semibold">{item.title}</h1>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
      
    </div>
  )
}

export default NewsList
