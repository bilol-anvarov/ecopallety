import Link from "next/link";
import React from "react";
import "./Components.css";

export default function Header() {
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
      </div>
    </header>
  );
}
