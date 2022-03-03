import React, { useState } from 'react'

export const ProfileCard = () => {
  return (
    <div className='relative w-[18rem] text-black shadow-lg rounded-xl overflow-hidden bg-white lg:flex flex-col'>
          <img id='cover-image' className='absolute w-full h-16 bg-teal-700 shadow-md object-cover' src='/spiderman-avi.jpg'/>
          <img className='z-10 w-[4rem] h-[4rem] rounded-full bg-red-500 mx-auto mt-8 object-cover' src='/spiderman-avi.jpg'/>
          <span className='w-full flex flex-col items-center border-b border-gray-500 pb-2'>
            <p className='text-lg font-semibold'>Spiderman NY</p>
            <p className='text-sm'>@friendlyneighborhood</p>
            <p className='text-center'>Aliqua reprehenderit veniam sint ea ipsum.</p>
          </span>
          <div className='grid grid-cols-2 border-b border-gray-500 py-3'>
            <span className='flex flex-col w-full items-center border-r border-gray-500'>
              <p className='font-bold'>1K</p>
              <p>Following</p>
            </span>
            <span className='flex flex-col w-full items-center'>
              <p className='font-bold'>510K</p>
              <p>Followers</p>
            </span>
          </div>
          <button className='flex-grow text-blue-400 my-4 w-fit mx-auto px-8 py-1'>My Profile</button>
        </div>
  )
}


export const Statistics = () => {
  const [stat, ] = useState(10);

  return (
    <div className='relative w-[18rem] text-black shadow-lg rounded-xl overflow-hidden bg-white lg:flex flex-col p-4 gap-2 items-center'>
      <p className='text-lg font-semibold'>PROFILE STATS</p>
      <span className='flex flex-col items-center border-b border-gray-400 w-[70%] pb-2'>
        <p className='font-bold'>Likes</p>
        <p>129324</p>
      </span>
      <span className='flex flex-col items-center border-b border-gray-400 w-[70%] pb-2'>
        <p className='font-bold'>Dislikes</p>
        <p>4333</p>
      </span>
      <span className='flex flex-col items-center border-b border-gray-400 w-[70%] pb-2'>
        <p className='font-bold'>Interactions</p>
        <p>133657</p>
      </span>
      <label className='flex flex-col items-center gap-1 w-[65%] pb-6'>
        <p className='font-bold'>Popularity {stat}%</p>
        <div id='progress-bar' className='w-full rounded-full h-[.5rem] overflow-hidden bg-gray-300'>
          <div style={{width: `${stat}%`}} className={`h-full rounded-full bg-cyan-500`}></div>
        </div>
      </label>
    </div>
  )
}
