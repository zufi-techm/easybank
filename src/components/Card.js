import React from 'react'
import online from "../images/icon-online.svg"
const Card = ({src,head,text}) => {
  return (
    <div className='flex flex-col items-center sm:items-start justify-center gap-4 w-48 grey_text'>
        <img src={src} className='sm:h-16 h-14 w-14 sm:w-16'/>
        <h1 className='text-sm font-semibold blue-text'>{head}</h1>
        <p className='text-xs text-center sm:text-left sm:text-sm'>{text}</p>
    </div>
  )
}

export default Card