'use client'
import React, { useState } from "react";
import Banner from "@/components/Banner";
import BoxesPallets from "@/components/BoxesPallets";
import Link from "next/link";
import ConsultationModal from "@/components/popup";



export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="production defCtr">
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Banner title={"Производство"} imgSrc={"/image2.jpg"} />
      <div className={`imgInfo flex defCtr justify-between mt-[60px]`}>
        <img
          className="w-full rounded-[12px] max-h-[600px] object-cover max-w-[565px]"
          src={"/image2121.jpg"}
          alt="img"
        />
<div className="info">
  <h4>Производство поддонов/паллетов</h4>
  <p>
    ТОО «ECO PALLETY.KZ» занимается производством деревянных поддонов, паллет, европоддонов 
    и ящиков различных размеров и грузоподъёмности. Также мы изготавливаем ящики по индивидуальным размерам и в любых объемах.
    <br />
    <br />
    Благодаря тому, что:
    <br />
    <br />
    мы напрямую закупаем древесину у поставщиков, без посредников, 
    а производство осуществляется как вручную, так и на полуавтоматических линиях с отдельными зонами для малых и крупных партий — 
    мы предоставляем полный спектр услуг: от производства и реализации до доставки и утилизации. 
    Всё это позволяет нам предлагать одну из самых выгодных цен на рынке Алматы и Казахстана.
  </p>
  <button type="button" onClick={() => setIsModalOpen(true)} className="secondaryBtn">
    Заказать
  </button>
</div>

      </div>

      <div
        className={`imgInfo flex defCtr justify-between mt-[60px] flex-row-reverse items-center`}
      >
        <img
          className="w-full max-h-[700px] object-cover rounded-[12px] max-w-[565px]"
          src={"/image211.jpg"}
          alt="img"
        />
<div className="info">
  <h4>Высокое качество поддонов/паллетов</h4>
  <div className="text">
    <p>
      Деревянные поддоны, паллеты и ящики — это наиболее экологичное, удобное и экономичное решение среди всех видов тары. 
      Они отлично подходят для транспортировки и проведения погрузочно-разгрузочных работ на любых предприятиях.
    </p>
    <br />
    <br />
    <strong className="text-[#000]">У нас на производстве:</strong>
    <br />
    <br />
    <ul>
      <li>
        Все поддоны изготавливаются исключительно из отборной древесины, что обеспечивает необходимую грузоподъёмность и увеличенный срок службы изделий.
      </li>
      <li>
        Стандартные модели производятся на современном оборудовании, которое обеспечивает точность исполнения и соответствие установленным нормам. 
        Высококачественные материалы позволяют нам достигать надежных результатов, на которые можно рассчитывать в любой ситуации.
      </li>
    </ul>
  </div>
  <button type="button" onClick={() => setIsModalOpen(true)} className="secondaryBtn">
    Заказать
  </button>
</div>

      </div>
      <BoxesPallets />
    </div>
  );
}
