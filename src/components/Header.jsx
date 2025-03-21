"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./Components.css";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [ifOpenBar, setIfOpenBar] = useState(false);

  useEffect(() => {
    if (ifOpenBar) {
      document.querySelector("body").classList.add("overflow-y-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-y-hidden");
    }
  }, [ifOpenBar]);

  useEffect(() => {
    setIfOpenBar(false);
  }, [router.events]);

  return (
    <header className="header fixed  w-full flex justify-center">
      <div className="header_ins defCtr">
        <Link href={"/"}>
          <div className="logoCtr">
            <img src="/logo.svg" alt="logo" />
            <img src="/logoName.svg" alt="logo" />
          </div>
        </Link>
        <nav>
          <ul className="links desktop flex lg:gap-[74px] gap-[30px]">
            <li>
              <Link href="/">Паллеты</Link>
            </li>
            <li>
              <Link href="/">Деревянные ящики</Link>
            </li>
            <li>
              <Link href="/">Производство</Link>
            </li>
            <li>
              <Link href="/">О нас</Link>
            </li>
            <li>
              <Link href="/">Контакты</Link>
            </li>
          </ul>
        </nav>
        <nav className={`mobile${ifOpenBar ? " active" : ""}`}>
          <div className="navInside"></div>
        </nav>
        <div className="burgerMobile" onClick={()=>{setIfOpenBar(item=> item = !ifOpenBar)}}>
          <div className={`iconMenu humburger${ifOpenBar ? " active" : ""}`}>
            <div className="bar bar--1"></div>
            <div className="bar bar--2"></div>
            <div className="bar bar--3"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
