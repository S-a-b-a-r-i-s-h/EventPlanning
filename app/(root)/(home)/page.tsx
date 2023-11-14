import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='flex justify-between w-[100vw] text-dark-100 dark:text-light-900 px-20'>
        <div className='flex flex-col pt-10 h-[80vh] w-[50vw]'>
          <h1 className='p-5 text-xl h1-bold text-slate-400'>Official TinkerHub Campus community chapter of College of Engineering Perumon.</h1>
          <p className='h1-bold italic text-[70px] leading-[5rem] mt-40 p-5'>"A free and completely open tech community for the innovative minds"</p>
        </div>
        <div className='w-[50vw]'>
          <Image 
            src='/assets/images/tinker5.png'
            alt="tinker image"
            width={900}
            height={900}
            className="mt-40"
          />
        </div>
      </div>
    </>
  )
}

export default Home