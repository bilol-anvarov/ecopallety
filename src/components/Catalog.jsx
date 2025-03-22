import React from 'react';

const data = [
    {
        id: '1',
        title: "Поддон П2 однонастильный двухзаходный",
        type: 'Облегченный',
        img: '/1-1.jpg',
        size: '800х1200 мм или 1000х1200 мм',
        weight: 'до 1000 кг'
    },
    {
        id: '2',
        title: "Поддон П2 однонастильный двухзаходный",
        type: 'Стандартный',
        img: '/1-2.jpg',
        size: '800х1200 мм или 1000х1200 мм',
        weight: 'до 1500 кг'
    },
    {
        id: '3',
        title: "Поддон П2 однонастильный двухзаходный",
        type: 'Усиленный',
        img: '/1-3.jpg',
        size: '800х1200 мм или 1000х1200 мм',
        weight: 'до 2500 кг'
    },
    {
        id: '4',
        title: "Поддон П4 однонастильный четырехзаходный",
        type: 'Облегченный',
        img: '/2-1.jpg',
        size: '800х1200 мм или 1000х1200 мм',
        weight: 'до 1000 кг'
    },
    {
        id: '5',
        title: "Поддон П4 однонастильный четырехзаходный",
        type: 'Стандартный',
        img: '/2-2.jpg',
        size: '800х1200 мм или 1000х1200 мм',
        weight: 'до 1500 кг'
    },
    {
        id: '6',
        title: "Поддон П4 однонастильный четырехзаходный",
        type: 'Усиленный',
        img: '/2-3.jpg',
        size: '800х1200 мм или 1000х1200 мм',
        weight: 'до 2500 кг'
    },
    {
        id: '7',
        title: "Европоддон",
        type: 'Стандартный',
        img: '/3-1.jpg',
        size: '800х1200 мм',
        weight: 'до 2500 кг'
    },
    {
        id: '8',
        title: "Американский поддон",
        type: 'Стандартный',
        img: '/30.jpg',
        size: '1200х1200 мм',
        weight: 'до 1500 кг'
    },
    {
        id: '9',
        title: "Финский поддон",
        type: 'Стандартный',
        img: '/31.jpg',
        size: '1000х1200 мм',
        weight: 'до 2000 кг'
    }
];

const ProductCard = ({ img, title, type, size, weight }) => {
  return (
    <div className='productCard rounded-[20px] bg-[#FFF] pb-[24px] w-[46%] max-w-[330px] flex flex-col gap-[28px] items-center pt-[32px] px-[23px]'>
      <img src={img} alt={title} className='w-full h-auto max-w-[200px]' />
      <div className="info w-full max-w-[258px]">
        <h5 className='text-[18px] mb-[12px]'>{title}</h5>
        <span className='type text-[#0069FF] text-[18px] font-[600]'>{type}</span>
        <div className='mt-[30px]'>
          <span className='text-[#646464] text-[18px]'>Размер</span>
          <div className='text-[#646464] text-[16px] mt-[6px]'>{size}</div>
        </div>
        <div className='mt-[10px]'>
          <span className='text-[#646464] text-[18px]'>Грузоподъемность</span>
          <div className='text-[#646464] text-[16px] mt-[6px]'>{weight}</div>
        </div>
      </div>
    </div>
  );
};

export default function Catalog() {
  return (
    <div className='Catalog mt-[40px] flex gap-[24px] flex-wrap'>
      {data.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}
