import React, { useEffect, useRef, useState } from 'react';
import { IoMdMore } from 'react-icons/io';
import { MdOutlineThumbUp, MdOutlineThumbDown, MdChatBubbleOutline } from 'react-icons/md';

const Card = (props) => {
    const [state, setState] = useState(false);
    const [quil] = useState(props.quil);

    const splitQuil = (quilString) => {
        let quilArray = quilString?.split(' + ');
        const [quil, type, url] = quilArray;
        if(type === 'Image'){
            return <div className='flex flex-col gap-2'>
                <p>{quil}</p>
                <img className='w-full lg:w-[80%] object-cover rounded-xl mx-auto' src={url}/>
            </div>
        } else if(type === 'Video'){
            return <div className='flex flex-col gap-2'>
                <p>{quil}</p>
                <video className='w-[80%] aspect-video object-cover mx-auto'>
                    <source src={url}></source>
                </video>
            </div>

        } else if(type === 'Audio'){
            return <div className='flex flex-col gap-2'>
                <p>{quil}</p>
                <audio controls>
                    <source src={url}/>
                </audio>
            </div>

        } else {
            return quil
        }
    }
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
                <img src={props.profile} className='w-[3rem] row-span-2 aspect-square object-cover rounded-full'/>
                <p className='text-lg font-semibold justify-self-start'>{props.name}</p>
                <p className='text-sm font-light justify-self-start'>@{props.displayname}</p>
            </span>
            <button className='pr-1 text-2xl self-start' onClick={() => setState(!state)}><IoMdMore/></button>
        </div>
        <div className='text-base px-3'>
            {
                splitQuil(quil)
            }
        </div>
        <div className='w-full flex flex-row mt-1 border-y border-gray-300 py-2 text-lg px-4 lg:gap-12 justify-between'>
            <div className='flex flex-row gap-8'>
                <span className='flex flex-row gap-2 items-center px-3 bg-gray-100 shadow-md  justify-center rounded'>
                    <button><MdOutlineThumbUp/></button>
                    <p>{props.likes}</p>
                </span>
                <span className='flex flex-row gap-2 items-center px-3 bg-gray-100 shadow-md justify-center rounded'>
                    <button><MdOutlineThumbDown/></button>
                    <p>{props.unlikes}</p>
                </span>
                <span className='flex flex-row gap-2 items-center px-3 bg-gray-100 shadow-md justify-center rounded'>
                    <button><MdChatBubbleOutline/></button>
                    <p>{props.comments}</p>
                </span>
            </div>
            <div className='hidden md:grid font-light text-sm border border-black rounded px-2 place-items-center'>
                {props.timestamp}
            </div>
        </div>
        <div id='dropdown' className={`${drop()} text-white transition-all gap-1 absolute flex overflow-hidden flex-col rounded-md z-20 rounded-tr-none right-4 top-8`}>
            <button className=' w-[10rem] mx-2 mt-2 border-b border-gray-500'>Share</button>
            <button className=' w-[10rem] mx-2 border-b border-gray-500'>Save</button>
            <button className=' w-[10rem] mx-2 mb-2'>Delete</button>
        </div>
    </div>
  )
}

export default Card;