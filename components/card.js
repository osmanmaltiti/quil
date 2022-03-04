import React, { useEffect, useRef, useState } from 'react';
import { IoMdMore } from 'react-icons/io';
import { MdOutlineThumbUp, MdOutlineThumbDown, MdChatBubbleOutline } from 'react-icons/md';

const Card = () => {
    const [state, setState] = useState(false);
    const drop = () => {
        return state ? 'w-[11rem] h-[6rem]' : 'w-0 h-0 overflow-hidden'
    }
    const cardRef = useRef()
    useEffect(() => {
        const card = document.querySelectorAll('.main-card');
        card.forEach(item => item
                .addEventListener('click', () => {
                    setState(false)
                    })
        );
    },[state])
  return (
    <div ref={cardRef} className=' relative w-full flex flex-col flex-shrink-0 gap-2 pt-2 pb-0 overflow-hidden bg-white '>
        <div className='w-full flex flex-row flex-grow justify-between flex-nowrap'>
            <span className='card-name'>
                <img src='/spiderman-avi.jpg' className='w-[3rem] row-span-2 aspect-square object-cover rounded-full'/>
                <p className='text-lg font-semibold justify-self-start'>Spiderman</p>
                <p className='text-sm font-extralight justify-self-start'>@yourfriendlyneighbourhood</p>
            </span>
            <button className='pr-1 text-2xl self-start' onClick={() => setState(!state)}><IoMdMore/></button>
        </div>
        <div className='text-sm px-3'>
            Lorem id cupidatat quis proident voluptate voluptate ullamco sunt occaecat. Occaecat do dolore occaecat ipsum adipisicing est incididunt laborum consequat ea. Consectetur officia nisi in consequat in occaecat excepteur reprehenderit velit qui dolor exercitation cillum incididunt.
        </div>
        <div className='w-full flex flex-row border-y border-gray-300 py-2 text-lg px-4 lg:gap-12 justify-between'>
            <div className='flex flex-row gap-8'>
                <span className='flex flex-row gap-2 items-center px-3 bg-gray-100 shadow-md  justify-center rounded'>
                    <button><MdOutlineThumbUp/></button>
                    <p>2</p>
                </span>
                <span className='flex flex-row gap-2 items-center px-3 bg-gray-100 shadow-md justify-center rounded'>
                    <button><MdOutlineThumbDown/></button>
                    <p>3</p>
                </span>
                <span className='flex flex-row gap-2 items-center px-3 bg-gray-100 shadow-md justify-center rounded'>
                    <button><MdChatBubbleOutline/></button>
                    <p>7</p>
                </span>
            </div>
            <div className='hidden md:grid font-light text-sm border border-black rounded px-2 place-items-center'>
                01/12/2021 . 12:45
            </div>
        </div>
        <div id='dropdown' className={`${drop()} text-white transition-all gap-1 absolute flex flex-col rounded-md z-20 rounded-tr-none right-4 top-8`}>
            <button className=' w-[10rem] mx-2 mt-2 border-b border-gray-500'>Share</button>
            <button className=' w-[10rem] mx-2 border-b border-gray-500'>Save</button>
            <button className=' w-[10rem] mx-2 mb-2'>Delete</button>
        </div>
    </div>
  )
}

export default Card;