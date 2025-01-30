import React from "react";
import Slider from "react-slick";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { id: 1, title: "Empowering Communities", image: "http://www.nra.org.np/assets/image/nra_cover2.jpg" },
  { id: 2, title: "Building a Resilient Future", image: "http://www.nra.org.np/assets/image/nra_cover1.jpg" },
  { id: 3, title: "Sustainable Development", image: "http://www.nra.org.np/assets/image/nra_cover2.jpg" },
  { id: 4, title: "Innovation for Progress", image: "http://www.nra.org.np/assets/image/nra_cover1.jpg" }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "300px",
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { centerPadding: "80px" } },
    { breakpoint: 768, settings: { centerPadding: "40px" } },
    { breakpoint: 480, settings: { centerPadding: "10px" } },
  ],
};

const HeroSlider = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="relative h-[550px] flex justify-center items-center ">
      <Slider {...settings} className="w-full  bg-customBlue bg-opacity-5 ">
        {slides.map((slide) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
            whileHover={{ scale: 1.02 }}
            className="p-2 sm:p-6 flex justify-center items-center "
          >
            <div className="relative w-full max-w-[900px] h-[380px] rounded-3xl overflow-hidden shadow-2xl ">
              {/* Background Image with Parallax Effect */}
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover rounded-3xl"
                style={{ scale }}
                transition={{ duration: 5, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 flex flex-col justify-center items-center">
                <motion.h2
                  className="text-3xl sm:text-5xl font-extrabold text-white text-center px-6 tracking-wide drop-shadow-lg"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {slide.title}
                </motion.h2>

                {/* Animated Divider */}
                <motion.div
                  className="mt-4 w-16 h-1 bg-white rounded-full"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "4rem" }}
                  transition={{ duration: 1, delay: 0.7 }}
                />

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