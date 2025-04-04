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
      <Banner title={"Производство"} imgSrc={"/image 80.png"} />
      <div className={`imgInfo flex defCtr justify-between mt-[60px]`}>
        <img
          className="w-full rounded-[12px] max-w-[565px]"
          src={"/image 71.png"}
          alt="img"
        />
        <div className="info">
          <h4>Производство поддонов/паллетов</h4>
          <p>
            ТОО «ECO PALLETY.KZ» производит деревянные поддоны, паллеты, европоддоны
            и деревянные ящики разных размеров и грузоподъёмности. Также
            изготавливаем в любых объемах ящики под ваши размеры.
            <br />
            <br />
            За счет того, что:
            <br />
            <br />
            мы закупаем древесину у заготовителей без посредников, производим
            поддоны в ручном режиме и на полуавтоматической производственной
            линии, в котором есть отдельные секции для выпуска больших и малых
            серий, предлагаем весь комплекс услуг от производства, продажи до
            доставки и утилизации. Мы можем предложить наиболее
            конкурентоспособную цену на рынке в Алматы и Казахстане.
          </p>
          {/* <Link href={"#!"}> */}
            <button type="button" onClick={() => setIsModalOpen(true)} className="secondaryBtn">
              Заказать
            </button>
          {/* </Link> */}
        </div>
      </div>

      <div
        className={`imgInfo flex defCtr justify-between mt-[60px] flex-row-reverse items-center`}
      >
        <img
          className="w-full rounded-[12px] max-w-[565px]"
          src={"/image 71.png"}
          alt="img"
        />
        <div className="info">
          <h4>Высокое качесвто поддонов/паллетов</h4>
          <div className="text">
            <p>
              Деревянные поддоны, паллеты, ящики – наиболее экологичный, удобный
              и экономичный из всех видов поддонов. Они прекрасно подходят для
              транспортировки и разгрузочно-погрузочных работ на любых
              предприятиях.
            </p>
            <br />
            <br />
            <strong className="text-[#000]">На нашем предприятии:</strong>
            <br />
            <br />
            <ul>
              <li>
                Производство деревянных поддонов осуществляется только из
                высококачественной заготовки. Это гарантирует заданную
                грузоподъемность и долговечность поддона.
              </li>
              <li>
                Производство стандартных поддонов производится на современных
                машинах, которые гарантируют точность, включая предписанную
                грузоподъемность, в соответствии с действующими стандартами.
                Благодаря высокому качеству заготовок, мы достигаем наилучших
                результатов, на которые можно положиться в любое время.
              </li>
            </ul>
          </div>
            <button type="button" onClick={() => setIsModalOpen(true)} className="secondaryBtn">
              Заказать
            </button>
          {/* <Link href={"#!"}> */}
          {/* </Link> */}
        </div>
      </div>
      <BoxesPallets />
    </div>
  );
}
