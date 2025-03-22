import React from "react";

const IconText = ({ text }) => {
  return (
    <div className="iconText flex items-center gap-[15px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={17}
        viewBox="0 0 8 17"
        fill="none"
      >
        <path
          d="M1 1.5L7 8.5L1 15.5"
          stroke="#0069FF"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="text-[18px] font-[500]">{text}</span>
    </div>
  );
};

export default function BoxesPallets() {
  return (
    <div className="boxandpallets mt-[60px] flex gap-[24px] justify-between max-[567px]:flex-col items-stretch">
      <div className="palletsCtr bg-[#FFF] px-[39px] w-full max-w-[684px] rounded-[20px] pt-[32px] pb-[50px]">
        <h4 className="mb-[30px] text-center">Паллеты</h4>
        <div className="ins flex gap-[19px] justify-between items-center max-[576px]:flex-col">
          <div className="ctr flex flex-col gap-[19px] w-full max-w-[720px]">
            <IconText text={"Европаллеты"} />
            <IconText text={"Финские паллеты"} />
            <IconText text={"Финские паллеты"} />
            <IconText text={"Прием б/у паллет"} />
            <IconText text={"Аренда поддонов"} />
            <IconText text={"Выкуп поддонов"} />
            <IconText text={"Поддоны для мебели"} />
          </div>
          <div className="ctr flex flex-col gap-[19px] w-full max-w-[590px]">
            <IconText text={"Сервис и замена поддонов"} />
            <IconText text={"Возврат из торговых сетей"} />
            <IconText text={"Ремонт деревянных поддонов"} />
            <IconText text={"Утилизация поддонов"} />
            <IconText text={"Купить паллеты Алматы"} />
            <IconText text={"Купить паллеты Астаны"} />
            <IconText text={"Купить паллеты Шымкент"} />
          </div>
        </div>
      </div>


      <div className="palletsCtr bg-[#FFF] px-[39px] w-full max-w-[684px] rounded-[20px] pt-[32px] pb-[50px]">
        <h4 className="mb-[30px] text-center">Деревянные ящики</h4>
        <div className="ins flex gap-[19px] justify-between items-center max-[576px]:flex-col">
          <div className="ctr flex flex-col gap-[19px] w-full max-w-[720px]">
            <IconText text={"Для овощей и фруктов"} />
            <IconText text={"Для овощехранилщ и паллтеные борта"} />
            <IconText text={"Для перевозки грузов"} />
            <IconText text={"Фанерные ящики"} />
            <IconText text={"Вагонные ящики"} />
            <IconText text={"Армейские ящики"} />
          </div>
          <div className="ctr flex flex-col gap-[19px] w-full max-w-[590px]">        
              <IconText text={"Для декора"} />
              <IconText text={"Деревянные ящики"} />
              <IconText text={"Ящики Астана"} />
              <IconText text={"Ящики Шымкент"} />
              <IconText text={"С видвижной крышкой"} />
              <IconText text={"Корневые ящики"} />
          </div>
        </div>
      </div>
    </div>
  );
}
