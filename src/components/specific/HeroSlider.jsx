import React from "react";
import Slider from "react-slick";
import { motion, useTransform, useScroll } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { 
    id: 1, 
    // title: <>Empowering <br /><span className="text-orange-500">Communities</span></>, 
    image: "https://i.ibb.co/4ZwLFrHX/Whats-App-Image-2025-02-02-at-13-48-06.jpg" 
  },
  { 
    id: 2, 
    // title: <>Building a Resilient <br /> <span className="text-orange-500" >Future</span></>, 
    image: "https://i.ibb.co/jPfMsCcS/Whats-App-Image-2025-02-02-at-13-48-06-1.jpg" 
  },
  { 
    id: 3, 
    // title: <> Sustainable <br /><span className="text-orange-500">Development</span></>, 
    image: "https://i.ibb.co/tM3bq7WS/Whats-App-Image-2025-02-02-at-13-48-38.jpg" 
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: "0", 
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  draggable: true, 
  swipeToSlide: true, 
  swipe: true, 
  rtl: false, 
  responsive: [
    { breakpoint: 1024, settings: { centerPadding: "20px" } },
    { breakpoint: 768, settings: { centerPadding: "10px" } },
    { breakpoint: 480, settings: { centerPadding: "5px" } },
  ],
};

const HeroSlider = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="relative h-full w-full flex justify-center items-center -z-50  ">
      <Slider {...settings} className=" h-full w-full bg-customBlue ">
        {slides.map((slide) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
            whileHover={{ scale: 1.02 }}
            className="flex justify-center h-full items-center w-full  "
          >
            <div className="relative w-full overflow-hidden ">
              {/* Background Image with Parallax Effect */}
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
                style={{ scale }}
                transition={{ duration: 5, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
              />

              {/* Gradient Overlay */}
              <div className="absolute pl-10 md:pl-60 inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/10 flex flex-col justify-center">
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
