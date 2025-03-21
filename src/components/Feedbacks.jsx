import React from "react";

const FeedbackCard = ({ icon, backImg, title, descr }) => {
  return (
    <div className="feedbackCard overflow-hidden py-[41px] relative rounded-[20px] w-[46%] max-w-[330px] h-[366px] flex flex-col justify-between bg-[#FFF]">
      <div className="imgCtr px-[35px]">
        <img src={icon} className="icon w-[55px]" alt="img" />
      </div>
      <img
        src={backImg}
        className="back absolute z-[0] top-[27px] w-full"
        alt="img"
      />
      <div className="info px-[35px]">
        <h3 className="text-[28px]">{title}</h3>
        <p className="text-[20px] font-[500] mt-[12px]">{descr}</p>
      </div>
    </div>
  );
};

export default function Feedbacks() {
  return (
    <div className="feedbacks mt-[60px] flex gap-[24px] items-stretch justify-between">
      <FeedbackCard
        icon={"/Group 367.svg"}
        backImg={"/Group 370.svg"}
        title={"18244+"}
        descr={"Довольных клиентов"}
      />
      <FeedbackCard
        icon={"/Plain.svg"}
        backImg={"/Group 371.svg"}
        title={"150+"}
        descr={"Отгрузок в месяц"}
      />
      <FeedbackCard
        icon={"/Headphones Round Sound.svg"}
        backImg={"/Group 372.svg"}
        title={"300+"}
        descr={"Новых клиентов"}
      />
      <FeedbackCard
        icon={"/Diploma Verified.svg"}
        backImg={"/Group 373.svg"}
        title={"97%"}
        descr={"Клиентов рекомендуют"}
      />
    </div>
  );
}
