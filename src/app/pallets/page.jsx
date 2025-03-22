
import Banner from '@/components/Banner'
import BoxesPallets from '@/components/BoxesPallets'
import Catalog from '@/components/Catalog'
import ConsultationBanner from '@/components/ConsultationBanner'
import Requests from '@/components/Requests'
import React from 'react'

export default function Page() {
  return (
    <div className='PalletsMain defCtr'>
        <Banner imgSrc={'/image 17.png'} title={'Каталог паллеты'}/>
        <h2 className='text-center mt-[60px]'>Виды продаваемых поддонов / паллет</h2>
        <Catalog />
        <Requests />
        <ConsultationBanner />
        <BoxesPallets />
    </div>
  )
}
