'use client'
import React, { useState } from "react";
import ConsultationModal from "./popup";

export default function Banner({ imgSrc, title }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div
      className="banner defCtr"
      style={{ backgroundImage: `url("${imgSrc}")` }}
    >
      <h1>{title}</h1>
      {/* <a href="#!"> */}
      <div className="sliderBtn cursor-pointer" onClick={() => setIsModalOpen(true)}>Заказать</div>
      {/* </a> */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
    </div>
  );
}
