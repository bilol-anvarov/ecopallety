import Banner from '@/components/Banner'
import Boxes from '@/components/Boxes'
import React from 'react'

export default function Page() {
  return (
    <div className='boxesPage defCtr'>
        <Banner imgSrc={'/image 43.png'} title={'Деревянные ящики'}/>
        <h2 className='text-center mt-[60px]'>Виды производимых ящиков</h2>
        <Boxes />
    </div>
  )
}
