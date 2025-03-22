import React from "react";

const IconText = ({ text }) => {
  return (
    <div className="iconText flex items-center gap-[15px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={19}
        viewBox="0 0 19 19"
        fill="none"
      >
        <path
          d="M2 11L6.28571 17L17 2"
          stroke="#0069FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[18px] font-[500]">{text}</span>
    </div>
  );
};

export default function Requests() {
  return (
    <div className="requests mt-[40px] rounded-[20px] bg-[#FFF] flex flex-col gap-[30px] py-[44px] px-[34px]">
      <h4>Индивидуальные поддоны по требованию заказчика</h4>
      <div className="ins flex gap-[19px] justify-between items-center max-[576px]:flex-col">
        <div className="ctr flex flex-col gap-[19px] w-full max-w-[720px]">
          <IconText text={'Поддон 2П2 двухстильный двухзаходный'}/>
          <IconText text={'Поддон 2П4 двухстильный четырехзаходный'}/>
          <IconText text={'Поддон 2П04 двухстильный четырехзаходный с окнами в нижнем настиле'}/>
          <IconText text={'Поддон 2ПB4 двухстильный  двухзахлдный с выступами'}/>
          <IconText text={'Поддон 600х600'}/>
          <IconText text={'Поддон 600х800'}/>
        </div>
        <div className="ctr flex flex-col gap-[19px] w-full max-w-[590px]">
          <IconText text={'Поддон 1000х1200'}/>
          <IconText text={'Поддон 1100х1100'}/>
          <IconText text={'Поддон 1200х1200'}/>
          <IconText text={'Поддон 1200х1600'}/>
          <IconText text={'Поддон 1200х1800'}/>
          <IconText text={'Поддон любой сложности и размеров'}/>
        </div>
      </div>
    </div>
  );
}
