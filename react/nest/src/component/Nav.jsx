import React from 'react'
import Menu from './Menu'

export default function Nav() {
  return (
    <>
      <div className='w-full flex  items-center px-4 py-3 border-b-2'>

        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-primary hover:bg-hover focus:ring-4  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center outline-0" type="button"><i className="fa-regular fa-heart px-2"></i> Dropdown hover <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>


        <div className='ms-5'><span><i class="fa-solid fa-fire text-primary "></i></span> <a href="#" className='text-textColor font-bold hover:text-primary'>Deals</a></div>

        <Menu />

        <div className='flex ms-24 text-center items-center justify-evenly'><i class="fa-solid fa-headphones-simple fa-2xl text-textColor"></i>
        <div className='ms-2'><h3 className='text-2xl font-semibold text-primary'>1900-888</h3>
        <p className='text-xs'>24/7 Support Center</p></div>
        </div>
      </div>

      

    </>
  )
}
