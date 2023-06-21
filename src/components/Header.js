import React, { useState } from 'react'
import logo from "../images/logo.svg"
import Button from './Button'
import btn from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"
const Header = ({onClick}) => {


  return (
    <header className='h-full w-full relative bg-white flex   items-center  justify-around'>
        <div>
            <img src={logo} className='h-4 ml-2 sm:ml-0 sm:h-6'/>
        </div>
        <div className='sm:flex gap-6 header_links h-full items-center justify-center hidden'>
            <a href='' className='h-full pt-5   state'>Home</a>
            <a href='' className='h-full pt-5   state'>About</a>
            <a href='' className='h-full pt-5   state'>Contact</a>
            <a href='' className='h-full pt-5   state'>Blog</a>
            <a href='' className='h-full pt-5   state'>Careers</a>
        </div>
        <div className='hidden sm:block'>
           <Button/>
        </div>
        <div 
        className={'sm:hidden'}
        >
          <img src={btn}
          onClick={onClick}
          />
        </div>
    
    </header>
  )
}

export default Header


