import Link from 'next/link';
import React from 'react';
import { IoHomeOutline, IoChatboxEllipsesOutline, 
         IoNotificationsOutline, IoPersonOutline, 
         IoHome, IoMail, IoNotifications, 
         IoGridOutline } from 'react-icons/io5';

export const NavbarMobile = () => {
  return (
    <div className='fixed bottom-0 z-20 h-fit w-full flex flex-row justify-between items-center px-2 py-2 bg-gray-400'>
       <span className='w-full flex flex-row justify-around text-2xl'>
         <Link href='/'><button className='hover:bg-gray-500 rounded-lg p-2'><IoHomeOutline/></button></Link>
         <button className='hover:bg-gray-500 rounded-lg p-2'><IoNotificationsOutline/></button>
         <button className='hover:bg-gray-500 rounded-lg p-2'><IoChatboxEllipsesOutline/></button>
         <Link href='/profile'><button className='hover:bg-gray-500 rounded-lg p-2'><IoPersonOutline/></button></Link>
       </span>
    </div>
  )
}

export const NavbarDesktop = () => {
  return (
    <div className='w-full sticky top-0 flex h-[8vh] p-4 z-30 flex-row justify-between items-center bg-white shadow-lg'>
      <div className='flex flex-row gap-2'>
        <img className="h-[2rem]" src="/newLogo.png"/>
        <input type='search' className='rounded-full focus:outline-none px-3 bg-gray-300'/>
      </div>
      <div className='flex flex-row items-center gap-3'>
        <Link href='/'><span className='flex flex-row bg-gray-300 px-2 p-1 rounded-3xl gap-1 items-center'>
          <IoHome className='cursor-pointer'/>
          <p className='cursor-pointer'>Home</p>
        </span></Link>
        <IoMail/>
        <span>
          <IoNotifications/>
        </span>
        <hr style={{height: '1rem', width: '0.1rem', backgroundColor: 'black'}}/>
        <span className='flex flex-row bg-gray-300 px-2 p-1 rounded-3xl gap-1 items-center'>
          <img className='bg-cyan-500 w-[1.5rem] h-[1.5rem] rounded-full object-cover' src='/spiderman-avi.jpg'/>
          <p>Spiderman</p>
        </span>
        <IoGridOutline/>
      </div>

    </div>
  )
}