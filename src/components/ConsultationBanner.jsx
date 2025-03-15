import Link from "next/link";
import React from "react";

export default function ConsultationBanner() {
  return (
    <div className="consultBanner w-full p-[44px] mt-[60px] flex items-center justify-between">
      <h2>Получить профессиональную консультацию прямо сейчас</h2>
      <Link href={"#!"}>
        <button type="button" className="thirdBtn">
          Консультация
        </button>
      </Link>
    </div>
  );
}
