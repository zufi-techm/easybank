import React from 'react'
import money from "../images/image-currency.jpg"
const Article = ({src,by,head,text}) => {
  return (
    <div className='.article m-2 p-3 w-full bg-white flex flex-col cursor-pointer shadow-md'>
        <img src={src} className='h-1/2 w-full rounded-md'/>
        <div className='p-4'>
        <small className='grey_text text-xs font-medium'>By {by}</small>
        <h1 className='blue-text text-sm font-medium hover:text-cyan-500'>{head}</h1>
        <p className='sm:text-sm text-xs grey_text'>{text}</p>
        </div>
     </div>
  )
}

export default Article