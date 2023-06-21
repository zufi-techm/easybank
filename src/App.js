import React, { useState } from 'react'
import Header from './components/Header'
import bg from "../src/images/bg-intro-desktop.svg"
import phones from "../src/images/image-mockups.png"
import Button from './components/Button'
import Card from './components/Card'
import online from "../src/images/icon-online.svg"
import budgeting from "../src/images/icon-budgeting.svg"
import onboarding from "../src/images/icon-onboarding.svg"
import openapi from "../src/images/icon-api.svg"
import money from "../src/images/image-currency.jpg"
import restaurant from "../src/images/image-restaurant.jpg"
import plane from "../src/images/image-plane.jpg"
import stars from "../src/images/image-confetti.jpg"
import Article from './components/Article'
import Footer from './components/Footer'
import mobile_bg from "../src/images/bg-intro-mobile.svg"
import logo from "../src/images/logo.svg"
import close from "../src/images/icon-close.svg"
const App = () => {
  const [display,setDisplay]=useState(false)
  return (
    <section className='flex  flex-col items-center justify-center  main'>
      <div className='h-16 w-full header'>  <Header onClick={()=>{setDisplay(true)}}/></div>

<div className={display ? 'fixed flex-col w-full max-h-screen -top-10  bottom-0 z-50  py-10 sm:hidden flex items-center ':"hidden"}>
<header className='h-16  mb-10 w-full z-50   bg-white flex   items-center  justify-around'>
<div>
    <img src={logo} className='h-4 ml-2 sm:ml-0 sm:h-6'/>
</div>
<div 
className={'sm:hidden'}
>
  <img src={close}
  onClick={()=>setDisplay(false)}
  />
</div>

</header>
  <div className='w-full h-full fixed bg-gray-400 opacity-50 z-30'>.</div>
  <div className='flex h-2/3 flex-col items-center justify-center z-50 gap-4 bg-white w-3/4 p-10'>
    <a href=''>Home</a>
    <a href=''>About</a>
    <a href=''>Contact</a>
    <a href=''>Blog</a>
    <a href=''>Careers</a>
  </div>
</div>

   <div className='absolute bgdiv hidden sm:block'>
   <img src={bg} className='bg'/>
   <img src={phones} className='bg2 sm:absolute'/>
   </div>
   <div className='absolute -top-20 h-80 w-full sm:hidden'>
    <img src={mobile_bg} className='w-full'/>
    <img src={phones} className='absolute top-8 left-14 h-96'/>
   </div>

<div className='a sm:w-full mt-72 sm:mt-10'>
  <div className='flex flex-col justify-center items-center sm:items-start sm:ml-24 pt-16 sm:pt-0 sm:mt-28 mb-32 '>
    <h1 className='sm:text-5xl text-3xl blue-text'>Next generation</h1>
    <h1 className='sm:text-5xl text-3xl blue-text'>digital banking</h1>
    <p className='break sm:w-1/3 w-3/4  px-1 my-4 text-sm grey_text'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending,saving, budgeting, investing, and much more.</p>
    <div className='mt-4'><Button/></div>
  </div>

<div className='b sm:pl-24 pt-10 pb-10 flex flex-col  sm:items-start items-center sm:justify-between justify-center'>
<div className='p-2  grey_text sm:z-50 flex items-center flex-col sm:block sm:text-left  text-center'>
  <h1 className='sm:text-3xl text-2xl  w-1/3 sm:w-full text-center sm:text-left blue-text mb-3'>Why choose Easybank?</h1>
  <p className='text-xs  w-2/3 sm:w-full sm:text-sm'>We leverage Open Banking to turn  your bank account into your financial hub.</p>
  <p className='text-xs sm:text-sm grey_text'>Control your finances like never before.</p>
</div>
<div className='flex flex-col sm:flex-row  items-center justify-between gap-12 sm:gap-28 item sm:mt-10 sm:pr-6'>
<Card src={online} head={"Online Banking"} text={"Our modern weband mobile applications allow you to keep track of your finances wherever you are in the world."}/>
<Card src={budgeting} head={"Simple Budgeting"} text={"See exactly where your money goes each month. Receive notification when you are close to hitting your limits."}/>
<Card src={onboarding} head={"Fast Onboarding"} text={"We don't do branches. Open your account in minutes online and start taking control of your finances right awaw."}/>
<Card src={openapi} head={"Open API"} text={"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."}/>
</div>
</div>

<div className='sm:pl-24 pt-10 sm:pb-10 sm:pr-6 flex  flex-col items-center sm:items-start p-14 sm:p-0'>
  <h1 className='sm:text-4xl text-3xl sm:mb-14 blue-text'>Latest Articles</h1>
  <div className='flex flex-col p-6 sm:flex-row items-center justify-between'>
  <Article src={money} by={"Claire Robinson"} head={"Receive money in any currency with no fees"} text={"The world is getting smaller and we are becoming more mobile. So why should you be forced to only money in a single ..."} />
  <Article src={restaurant} by={"Wilson Hutton"} head={"Treat yourself without worrying about money"} text={"our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."}/>
  <Article src={plane} by={"Wilson Hutton"} head={"Take your Easybank card wherever you go"} text={"We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."}/>
  <Article src={stars} by={"Claire Robinson"} head={"Our invite-only Beta accounts are now live!"} text={"We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."}/>
  </div>
</div>
<div><Footer/></div>
</div>

 </section>
  )
}

export default App