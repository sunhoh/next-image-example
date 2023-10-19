'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

import meongji from '../../public/images/meonji.jpg'

const page = () => {
  const IMG_LIST = [
    {src: meongji, quality:25, location: 'nomal', props: 'jpg' },
    {src: "/images/meonji.svg", quality:50, location: 'relative path',props: 'svg' },
    {src: "/images/meonji.webp", quality:75, location: 'external path',props: 'webp' },
    {src: "/images/meonji.avif", quality:100, location: 'external path',props: 'avif' }
  ];
 
  

  return (
    <>
    {IMG_LIST.map(item =>(
      <div className='p-4 max-w-xl' key={`quality-${item.quality}`}>
      <div className='mb-2'>
        <h1 className='text-3xl font-bold'>quality: {item.quality}</h1>
        <div className=' my-4'>
          <span className='mr-2'>src: {item.props}</span>
          <span className='mr-2'>location: {item.location}</span>
        </div>
      </div>
      <div className='border border-solid'>
        <Image
            src={item.src}
            alt="sample"
            width={574}
            height={430}
          />
        </div>
    </div>
    ))}
    
    </>
  )
}

export default page