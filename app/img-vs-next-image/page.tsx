/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div className='p-4 mt-10 max-w-xl'>
      <div className='mb-2'>
        <h1 className='text-3xl font-bold'>img tag</h1>
        <div className='flex my-4'>
          <span className='mr-2'> Elements </span>
          <img src="images/tag/img-tag.png" alt="sample" />
        </div>
      </div>
      <div className='border border-solid'>
        <img 
          src="images/tag/sample.png"
          alt="sample" 
          width={`574px`}
          height={`430px`}
        />
      </div>
    </div>

    <div className='p-4 max-w-xl'>
      <div className='mb-2'>
        <h1 className='text-3xl font-bold'>next/image</h1>
        <div className='flex my-4'>
          <span className='mr-2'> Elements </span>
          <img src="images/tag/next-image.png" alt="sample" />
        </div>
      </div>
      <div className='border border-solid'>
        <Image
            src="/images/tag/sample.png"
            alt="sample"
            width={574}
            height={430}
          />
        </div>
    </div>
    </>
  )
}

export default page