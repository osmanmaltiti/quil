import React from 'react';
import { IoMdMore } from 'react-icons/io';
import { MdOutlineThumbUp, MdOutlineThumbDown, MdChatBubbleOutline } from 'react-icons/md';

const Card = () => {
  return (
    <div className='main-card w-full flex flex-col flex-shrink-0 gap-2 pt-2 pb-0 overflow-hidden bg-white rounded-2xl '>
        <div className='w-full flex flex-row flex-grow justify-between flex-nowrap'>
            <span className='card-name'>
                <img src='/spiderman-avi.jpg' className='w-[3rem] row-span-2 aspect-square object-cover rounded-full'/>
                <p className='text-lg font-semibold justify-self-start'>Spiderman</p>
                <p className='text-sm font-extralight justify-self-start'>@yourfriendlyneighbourhood</p>
            </span>
            <button className='pr-1 text-2xl self-start'><IoMdMore/></button>
        </div>
        <div className='text-sm px-3'>
            Lorem id cupidatat quis proident voluptate voluptate ullamco sunt occaecat. Occaecat do dolore occaecat ipsum adipisicing est incididunt laborum consequat ea. Consectetur officia nisi in consequat in occaecat excepteur reprehenderit velit qui dolor exercitation cillum incididunt.
        </div>
        <div className='w-full flex flex-row gap-8 py-1 bg-gray-200 text-lg px-4'>
            <span className='flex flex-row gap-2 items-center'>
                <button><MdOutlineThumbUp/></button>
                <p>2</p>
            </span>
            <span className='flex flex-row gap-2 items-center'>
                <button><MdOutlineThumbDown/></button>
                <p>3</p>
            </span>
            <span className='flex flex-row gap-2 items-center'>
                <button><MdChatBubbleOutline/></button>
                <p>7</p>
            </span>
            
        </div>
    </div>
  )
}

export default Card;