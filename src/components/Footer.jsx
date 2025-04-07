import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="defCtr">
      <div className="footerIsland flex gap-[70px] max-w-[1115px] px-[42px] py-[47px] w-full">

      <Link target="_blank" href="tel:+77082083002">
        <div className="linkCtr">
          <img src="/Phone Rounded.svg" alt="img" />
          <div className="text flex flex-col gap-[6px]">
            <span className="text-[20px] font-[500]">Позвоните нам</span>
            <span>+7 708 208 30 02</span>
          </div>
        </div>
      </Link>

      <Link target="_blank" href="mailto:ecopallety@gmail.com">
        <div className="linkCtr">
          <img src="/Letter.svg" alt="img" />
          <div className="text flex flex-col gap-[6px]">
            <span className="text-[20px] font-[500]">Напишите нам</span>
            <span>ecopallety@gmail.com</span>
          </div>
        </div>
      </Link>

        <Link href={"https://maps.app.goo.gl/43Z1VgD2DqtNPAN99"} target="_blank" >
          <div className="linkCtr">
            <img src="/Map_Pin.svg" alt="img" />
            <div className="text flex flex-col gap-[6px]">
              <span className="text-[20px] font-[500]">Наша локация</span>
              <span>КАЗАХСТАН, Ал.</span>
            </div>
          </div>
        </Link>
        <div className="linkCtr">
          <img src="/Clock Circle.svg" alt="img" />
          <div className="text flex flex-col gap-[6px]">
            <span className="text-[20px] font-[500]">Часы работы</span>
            <span>24/7</span>
          </div>
        </div>
      </div>
      <div className="footerIns">
        <div className="info w-full max-w-[330px] flex flex-col gap-[36px]">
          <img src="/logo.svg" className="w-[90px]" alt="logo" />
          <p>
          Продажа надёжных палетов и деревянных ящиков в Казахстане.<br/> 
          Высокое качество, доступные цены и доставка по всей стране.
          </p>
          <div className="socials">
            <Link href={"#!"}>
              <img src="/color.svg" alt="img" />
            </Link>
            <Link href={"#!"}>
              <img src="/Instagram.svg" alt="img" />
            </Link>
          </div>
        </div>
        <div className="links">
          <div className="linksCtr">
            <div className="title">Подробнее о нас</div>
            <div className="linksIns">

              <Link href={"/about-us"}>
                <div className="linkCtr flex items-center gap-[10px]">
                  <img src="/Icon Frame.svg" className="w-[24px]" alt="img" />
                  <span>О Нас</span>
                </div>
              </Link>
              <Link href={"/contacts"}>
                <div className="linkCtr flex items-center gap-[10px]">
                  <img src="/Icon Frame.svg" className="w-[24px]" alt="img" />
                  <span>Контакты</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="linksCtr">
            <div className="title">Направления</div>
            <div className="linksIns">
              <Link href={"/pallets"}>
                <div className="linkCtr flex items-center gap-[10px]">
                  <img src="/Icon Frame.svg" className="w-[24px]" alt="img" />
                  <span>Европаллеты</span>
                </div>
              </Link>

              <Link href={"/boxes"}>
                <div className="linkCtr flex items-center gap-[10px]">
                  <img src="/Icon Frame.svg" className="w-[24px]" alt="img" />
                  <span>Деревянные ящики</span>
                </div>
              </Link>
              <Link href={"/production"}>
                <div className="linkCtr flex items-center gap-[10px]">
                  <img src="/Icon Frame.svg" className="w-[24px]" alt="img" />
                  <span>Производство</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
