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
      "Мы занимаемся производством, продажей, ремонтом и выкупом деревянных поддонов и ящиков, обеспечивая их высокое качество и долговечность.",
    bgImg: "/banner.png",
    link: "/production",
  },
  {
    id: 2,
    title:
      "Деревянные ящики для хранения и транспортировки",
    bgImg: "/360_F_223169680_U50vFiStgM2DCirTf4jfJcJCc8A7OFfj.jpg",
    link: "/boxes",
  },
  {
    id: 3,
    title:
      "Ассортимент поддонов / паллет, доступных для покупки",
    bgImg: "https://p1.zoon.ru/f/a/554a5eac40c088ed4d8c5ddf_60be7b4b1988b.jpg",
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
                      className={`bgImage img-${index}`}
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
                            <div className="flex certificates items-center gap-3 mt-[30px]">
                              <img className="max-w-[150px]" src="/made_in_kz_-_.png" alt="img" />
                              <img className="max-w-[150px]" src="/samruk_kazyna_-.png" alt="img" />
                            </div>
                        </div>
                        <img className="w-full max-w-[285px] mainIMG" src="/image 18.png" alt=".." />
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
