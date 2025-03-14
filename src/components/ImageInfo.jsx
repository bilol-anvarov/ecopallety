import Link from "next/link";
import React from "react";

export default function ImageInfo({ imgSrc, textFirst, title, paragraph, link }) {
  return (
    <div
      className={`imgInfo flex defCtr justify-between mt-[60px] ${
        textFirst ? "flex-row-reverse" : ""
      }`}
    >
      <img className="w-full rounded-[12px] max-w-[565px]" src={imgSrc} alt="img" />
      <div className="info">
        <h4>{title}</h4>
        <p dangerouslySetInnerHTML={{__html: paragraph}}/>
        <Link href={link ? link : '#!'}>
            <button type="button" className="secondaryBtn">
                Посмотреть
            </button>
        </Link>
      </div>
    </div>
  );
}
