import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="defCtr">
      <div className="footerIsland flex gap-[70px] max-w-[1115px] px-[42px] py-[47px] w-full">
        <Link href={"#!"}>
          <div className="linkCtr">
            <img src="/Phone Rounded.svg" alt="img" />
            <div className="text flex flex-col gap-[6px]">
              <span className="text-[20px] font-[500]">Позвоните нам</span>
              <span>+(66) 999-99-099</span>
            </div>
          </div>
        </Link>
        <Link href={"#!"}>
          <div className="linkCtr">
            <img src="/Letter.svg" alt="img" />
            <div className="text flex flex-col gap-[6px]">
              <span className="text-[20px] font-[500]">Напишите нам</span>
              <span>ecopalletykz@gmail.com</span>
            </div>
          </div>
        </Link>
        <Link href={"#!"}>
          <div className="linkCtr">
            <img src="/Map_Pin.svg" alt="img" />
            <div className="text flex flex-col gap-[6px]">
              <span className="text-[20px] font-[500]">Наша локация</span>
              <span>Центральная Азия</span>
            </div>
          </div>
        </Link>
        <Link href={"#!"}>
          <div className="linkCtr">
            <img src="/Clock Circle.svg" alt="img" />
            <div className="text flex flex-col gap-[6px]">
              <span className="text-[20px] font-[500]">Часы работы</span>
              <span>24/7</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="footerIns">
        <div className="info w-full max-w-[330px] flex flex-col gap-[36px]">
          <img src="/logo.svg" className="w-[90px]" alt="logo" />
          <p>
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="socials">
            <Link href={"#!"}>
              <img src="/color.png" alt="img" />
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
              <Link href={"#!"}>
                <div className="linkCtr flex items-center gap-[10px]">
                  <img src="/Icon Frame.svg" className="w-[24px]" alt="img" />
                  <span>О компании</span>
                </div>
              </Link>

              <Link href={"#!"}>
                <div className="linkCtr flex items-center gap-[10px]">
                  <img src="/Icon Frame.svg" className="w-[24px]" alt="img" />
                  <span>Контакты</span>
                </div>
              </Link>
              <Link href={"#!"}>
                <div className="linkCtr flex items-center gap-[10px]">
                  <img src="/Icon Frame.svg" className="w-[24px]" alt="img" />
                  <span>Новости</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="linksCtr">
            <div className="title">Направления</div>
            <div className="linksIns">
              <Link href={"#!"}>
                <div className="linkCtr flex items-center gap-[10px]">
                  <img src="/Icon Frame.svg" className="w-[24px]" alt="img" />
                  <span>Европаллеты</span>
                </div>
              </Link>

              <Link href={"#!"}>
                <div className="linkCtr flex items-center gap-[10px]">
                  <img src="/Icon Frame.svg" className="w-[24px]" alt="img" />
                  <span>Деревянные ящики</span>
                </div>
              </Link>
              <Link href={"#!"}>
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
