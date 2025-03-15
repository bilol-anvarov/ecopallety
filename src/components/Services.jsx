import React from "react";

const ServicesCard = ({ icon, title, descr }) => {
  return (
    <div className="card flex flex-col justify-between">
      <img src={icon || "/"} alt="icon" />
      <div className="info flex flex-col gap-[23px]">
        <h5>{title}</h5>
        <p>{descr}</p>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <div className="flex services flex-col gap-[20px] mt-[60px]">
      <h2>Деревянные поддоны и ящики</h2>
      <div className="cards">
        <ServicesCard 
            icon={'/Group 9.svg'}
            title={'Производим'}
            descr={'Поддоны в ручном режиме и на полуавтоматический производственной линии'}
        />

        <ServicesCard 
            icon={'/Group 11.svg'}
            title={'Продажа'}
            descr={'Деревянные тары - поддоны (палетты), ящики коробки'}
        />
        <ServicesCard 
            icon={'/Group 10.svg'}
            title={'Восстанавливаем'}
            descr={'Мы доверяем нашим клиентам безопастность уснул'}
        />
        <ServicesCard 
            icon={'/Group 15.svg'}
            title={'Безопастность'}
            descr={'Мы доверяем нашим клиентам безопастность уснул'}
        />
      </div>
    </div>
  );
}
