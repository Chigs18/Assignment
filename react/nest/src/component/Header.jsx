import React from 'react'
import logo from '../assets/logo.svg'
import Nav from './Nav'



export default function Header() {
  return (
    <>
      <div className='w-full flex justify-between items-center px-4 py-7 border-b-2'>
        <div className='basis-1/5'>
          <img src={logo} className='w-40' alt="logo" />
        </div>
        <div className='basis-2/4 '>

          <form>
            <div className="flex border border-primary">
              
              <button id="dropdown-button" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900  " type="button">All categories <svg aria-hidden="true" className="w-4 h-4 ml-1 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
              <div className='border-r-2 border-indigo-500 my-3'></div>
              <div className="relative w-full">
                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900  dark:placeholder-gray-400 dark:text-white outline-0" placeholder="Search items..." required />
                  <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white ">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="sr-only">Search</span>
                  </button>
              </div>
            </div>
          </form>

        </div>
        <div className='basis-1/4'>
          <ul className='flex space-x-3'>
            <li><i className="fa-solid fa-arrows-spin"></i> <span className='text-gray-400'> Compare</span></li>
            <li><i className="fa-regular fa-heart"></i> <span className='text-gray-400'> Wishlist</span></li>
            <li><i className="fa-solid fa-cart-shopping"></i> <span className='text-gray-400'> Cart</span> </li>
            <li><i className="fa-regular fa-user"></i> <span className='text-gray-400 '> Cart</span></li>
          </ul>
        </div>
      </div>
      <Nav />
      </>
      )
    
}
