"use client";
import "./Components.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title:
      "Специализируемся на производстве деревянных поддонов, ящиков, их продаже, покупке и ремонте",
    bgImg: "/banner.png",
    link: "/production",
  },
  {
    id: 2,
    title:
      "Деревянные ящики",
    bgImg: "/image 43.png",
    link: "/boxes",
  },
  {
    id: 3,
    title:
      "Виды продаваемых поддонов / паллет",
    bgImg: "/image 17.png",
    link: "/pallets", 
  }
];

const slideDuration = 7000; // 5 секунд для каждого слайда

export default function SliderCtr() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleProgressClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="sliderSection defaultSection lg:p-2">
        {/* background Image */}
        <div className="bgImages">
          <AnimatePresence mode="wait">
            {slides.map(
              (slide, index) =>
                index === currentSlide && (
                  <motion.div
                    key={slide.id}
                    className="slide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={slide.bgImg}
                      className="bgImage"
                      alt={slide.bgImg}
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
        {/* information */}
        <div className="info">
          <AnimatePresence mode="wait">
            {slides.map(
              (slide, index) =>
                index === currentSlide && (
                  <motion.div
                    key={slide.id}
                    className="slide w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="infoCtr flex justify-between w-full">
                        <div className="texts">
                            <h1>{slide.title}</h1>
                            <a href={slide.link}>
                                <div className="sliderBtn">Перейти</div>
                            </a>
                        </div>
                        <img src="/image 18.png" alt=".." />
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Прогресс-линии */}
        <div className="progressContainer mt-6">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="progressSegment"
              onClick={() => handleProgressClick(index)} // Переход по клику на сегмент
            >
              <motion.div
                key={currentSlide} // изменяющийся ключ для сброса
                className="progressBar"
                initial={{ width: "0" }}
                animate={{ width: currentSlide >= index ? "100%" : "0" }}
                transition={{
                  duration: currentSlide === index ? slideDuration / 1000 : 0,
                  ease: "linear",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
