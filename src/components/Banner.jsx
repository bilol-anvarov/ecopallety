import React from 'react'

export default function Banner({imgSrc, title}) {
  return (
    <div className='banner defCtr' style={{backgroundImage: `url("${imgSrc}")`}}>
        <h1>{title}</h1>
        <a href="#!">
            <div className="sliderBtn">Перейти</div>
        </a>
    </div>
  )
}
