"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./Components.css";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
    <>
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
                <Link href="/pallets">Паллеты</Link>
              </li>
              <li>
                <Link href="/boxes">Деревянные ящики</Link>
              </li>
              <li>
                <Link href="/production">Производство</Link>
              </li>
              <li>
                <Link href="/">О нас</Link>
              </li>
              <li>
                <Link href="/">Контакты</Link>
              </li>
            </ul>
          </nav>

          <div
            className="burgerMobile"
            onClick={() => {
              setIfOpenBar((item) => (item = !ifOpenBar));
            }}
          >
            <div className={`iconMenu humburger${ifOpenBar ? " active" : ""}`}>
              <div className="bar bar--1"></div>
              <div className="bar bar--2"></div>
              <div className="bar bar--3"></div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {ifOpenBar && (
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`navMobileCtr  w-full  fixed left-[0] top-[0] h-full ${ifOpenBar && 'active'} `}
          >
            <nav className={`mobile`}>
              <div className="navInside w-full">
                <ul className="links desktop flex lg:gap-[74px] gap-[30px]">
                  <li>
                    <Link href="/pallets">Паллеты</Link>
                  </li> 
                  <li>
                    <Link href="/boxes">Деревянные ящики</Link>
                  </li>
                  <li>
                    <Link href="/production">Производство</Link>
                  </li>
                  <li>
                    <Link href="/">О нас</Link>
                  </li>
                  <li>
                    <Link href="/">Контакты</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
