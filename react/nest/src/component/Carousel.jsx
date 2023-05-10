import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'



export default function Carousel() {
  const slides = [
    {
      url: 'src/assets/slider-1.png'
    },
    {
      url: 'src/assets/slider-2.png'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <>
      <div className='max-w-[1400px] h-[500px] w-full m-auto py-5 px-2 relative group'>
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
          <div className='absolute left-24 top-32'>
            <h1 className='font-semibold text-textColor text-6xl'>Dont't miss amaizing <br/>grocery deals</h1>
            <p className='text-grayColor text-2xl mt-6'>Sign up for a daily Newsletter</p>
            <form className='mt-10'>
              <input className='py-4 pl-8 rounded-s-full w-[280px]' type="text" placeholder='Your email address' />
              <button className='py-4 bg-primary px-7 rounded-full -ms-6 text-white'>Subscribe</button>
            </form>
          </div>
        </div>

        <div className='hidden group-hover:block hover:bg-hover absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='hidden group-hover:block hover:bg-hover absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>

    </>
  )
}
