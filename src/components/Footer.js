import React from 'react'
import logo from "../images/logo.svg"
import fb from "../images/icon-facebook.svg"
import ytube from "../images/icon-youtube.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
import ig from "../images/icon-instagram.svg"
import Button from './Button'
import {BsCCircle} from "react-icons/bs"
const Footer = () => {
  return (
    <footer className='flex flex-col sm:flex-row items-center sm:justify-between p-16 pb-10'>
        <div className='flex flex-col justify-center items-center gap-4 sm:gap-14 mb-4 sm:mb-0'>
<div className='flex relative justify-center items-center'><img src={logo} className=''/><p className='absolute text-2xl font-extrabold text-gray-200 left-1/4'>easybank</p></div>
<div className='flex items-center gap-2'>
   <img src={fb} className='hover:bg-cyan-500'/>
   <img src={ytube} className='hover:bg-cyan-500'/>
   <img src={twitter} className='hover:bg-cyan-500'/>
   <img src={pinterest} className='hover:bg-cyan-500'/>
   <img src={ig} className='hover:bg-cyan-500'/>
</div>
        </div>

        <div className='flex items-center justify-between flex-col gap-4'>
            <a href='' className='hover:text-cyan-500 text-sm sm:font-medium text-white'>About Us</a>
            <a href='' className='hover:text-cyan-500 text-sm sm:font-medium text-white'>Contact</a>
            <a href='' className='hover:text-cyan-500 text-sm sm:font-medium text-white'>Blog</a>
        </div>

        <div className='flex items-center justify-between flex-col gap-4'>
            <a href='' className='hover:text-cyan-500 text-sm sm:font-medium text-white'>Careers</a>
            <a href='' className='hover:text-cyan-500 text-sm sm:font-medium text-white'>Support</a>
            <a href='' className='hover:text-cyan-500 text-sm sm:font-medium text-white'>Privacy Policy</a>
        </div>
        
        <div className='flex grey_text text-sm justify-between items-center sm:items-start mt-2 flex-col gap-4'>
            <div><Button/></div>
            <div className='flex items-center'><BsCCircle/> Easybank. All Rights Reserved</div>
        </div>
    </footer>
  )
}

export default Footer