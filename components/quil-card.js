import React from 'react';
import { IoImageOutline, IoMicOutline, IoSend, IoVideocamOutline } from 'react-icons/io5';

const NewQuilCard = (props) => {
  return (
    <div style={{gridTemplateColumns: '4rem 1fr'}} 
      className='lg:grid hidden rounded-xl gap-4 bg-white shadow-lg p-3 px-5'>
      <img className='w-[4rem] h-[4rem] rounded-full bg-red-600 row-span-2 shadow-lg object-cover' src='/spiderman-avi.jpg'/>
      <textarea className='flex-grow rounded-md resize-none bg-gray-200 border p-1 focus:outline-none focus:scale-[1.01]' 
      placeholder="What's on your mind?"/>
      <span className='grid grid-cols-4 place-items-center text-black'>
        <button className='w-[95%] h-full flex gap-2 flex-row items-center justify-center px-2 rounded-full border border-gray-300 hover:scale-[1.02]' 
        onClick={props.image}>
          <IoImageOutline/>
          <p>Photo</p>
        </button>
        <button className='w-[95%] h-full flex gap-2 flex-row items-center justify-center px-2 rounded-full border border-gray-300 hover:scale-[1.02]' 
        onClick={props.video}>
          <IoVideocamOutline/>
          <p>Video</p>
        </button>
        <button className='w-[95%] h-full flex gap-2 flex-row items-center justify-center px-2 rounded-full border border-gray-300 hover:scale-[1.02]' 
        onClick={props.mic}>
          <IoMicOutline/>
          <p>Mic</p>
        </button>
        <button className='w-[95%] h-full flex gap-2 flex-row items-center justify-center px-2 bg-cyan-500 rounded-full border border-cyan-500 hover:scale-[1.02]'>
          <p>Send</p>
          <IoSend/>
        </button>
      </span>
    </div>
  )
}

export default NewQuilCard