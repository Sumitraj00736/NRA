import React from "react";
import Slider from "react-slick";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { 
    id: 1, 
    // title: <>Empowering <br /><span className="text-orange-500">Communities</span></>, 
    image: "https://i.ibb.co/9kwTZhbF/1.png" 
  },
  { 
    id: 2, 
    // title: <>Building a Resilient <br /> <span className="text-orange-500" >Future</span></>, 
    image: "https://i.ibb.co/XkjZRQXd/2.png" 
  },
  { 
    id: 3, 
    // title: <> Sustainable <br /><span className="text-orange-500">Development</span></>, 
    image: "https://i.ibb.co/HRyynjY/3.png" 
  },
  { 
    id: 4, 
    // title: <>Innovation for <br /><span className="text-orange-500">Progress</span></>, 
    image: "https://i.ibb.co/Kps44xtK/4.png" 
  }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: "0", // Remove padding for a more natural left-to-right effect
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  draggable: true, // Allow dragging of the slides
  swipeToSlide: true, // Allow swipe-to-slide for mobile
  swipe: true, // Enable swipe effect
  rtl: false, // Ensure the slide direction is left to right
  responsive: [
    { breakpoint: 1024, settings: { centerPadding: "20px" } },
    { breakpoint: 768, settings: { centerPadding: "10px" } },
    { breakpoint: 480, settings: { centerPadding: "5px" } },
  ],
};

const HeroSlider = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="relative h-full w-full flex justify-center items-center -z-50 ">
      <Slider {...settings} className="w-full h-full bg-customBlue bg-opacity-5 ">
        {slides.map((slide) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
            whileHover={{ scale: 1.02 }}
            className="flex justify-center h-full items-center  "
          >
            <div className="relative w-full overflow-hidden ">
              {/* Background Image with Parallax Effect */}
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover" // Ensures the image covers the full area without distortion
                style={{ scale }}
                transition={{ duration: 5, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
              />

              {/* Gradient Overlay */}
              <div className="absolute pl-10 md:pl-60 inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 flex flex-col justify-center">
                <motion.h2
                  className="text-sm md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {slide.title}
                </motion.h2>

                {/* Animated Divider */}
                {/* <motion.div
                  className="mt-4 w-16 h-1 bg-white rounded-full"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "4rem" }}
                  transition={{ duration: 1, delay: 0.7 }}
                /> */}

                {/* Glowing Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.15) 20%, transparent 70%)"
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
