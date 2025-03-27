'use client'
import Link from "next/link";
import React, { useState } from "react";
import ConsultationModal from "./popup";

export default function ConsultationBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="consultBanner w-full p-[44px] mt-[60px] flex items-center justify-between">
      <h2>Получить профессиональную консультацию прямо сейчас</h2>
      {/* <Link > */}
        <button type="button"  onClick={() => setIsModalOpen(true)} className="thirdBtn">
          Консультация
        </button>
      {/* </Link> */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
