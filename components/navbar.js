import React from 'react';
import { IoHomeOutline, IoChatboxEllipsesOutline, IoNotificationsOutline, IoPersonOutline} from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className='fixed bottom-0 z-10 h-fit w-full flex flex-row justify-between items-center px-2 py-2 bg-gray-400'>
       <span className='w-full flex flex-row justify-around text-2xl'>
         <button className='hover:bg-gray-500 rounded-lg p-2'><IoHomeOutline/></button>
         <button className='hover:bg-gray-500 rounded-lg p-2'><IoChatboxEllipsesOutline/></button>
         <button className='hover:bg-gray-500 rounded-lg p-2'><IoNotificationsOutline/></button>
         <button className='hover:bg-gray-500 rounded-lg p-2'><IoPersonOutline/></button>
       </span>
    </div>
  )
}

export default Navbar