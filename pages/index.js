import React, { useEffect, useReducer, useState } from "react";
import { IoAdd, IoClose, IoImageOutline, IoMicOutline, IoPencilOutline, IoSearchOutline, IoVideocamOutline } from "react-icons/io5";
import Card from "../components/card";
import { NavbarDesktop, NavbarMobile } from "../components/navbar";
import { ProfileCard, Statistics } from "../components/profile-card";
import NewQuilCard from "../components/quil-card";
import SuggestionCard from "../components/suggestion-card";
import useMedia from "../hooks/useMedia";

const init = {
  quil: 'z-0', image: 'z-0', video: 'z-0', mic: 'z-0',
  quilState: false, imageState: false, videoState: false, micState: false,
}

const reducer = (state, action) => {
  switch(action){
    case 'open':
      return {quil: 'open-quil', image: 'open-image', video: 'open-video', mic: 'open-mic'}
    case 'quil':
      return {...state, quilState: !state.quilState}
    case 'image':
      return {...state, imageState: !state.imageState}
    case 'video':
      return {...state, videoState: !state.videoState}
    case 'mic':
      return {...state, micState: !state.micState}
    case 'close':
      return init
    default:
      return state
  }
}
const Home = () => {
  const lg = useMedia('(min-width: 1024px)');
  const [buttons, dispatch] = useReducer(reducer, init);
  const [state, setState] = useState(false);
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    toggle ? dispatch('open'): dispatch('close');
  },[toggle])

  const search = () => {
    return state ? 'w-[15rem]' : 'w-0'
  }
  return (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden bg-[#eeeeee]">
      { lg ? <NavbarDesktop/> : <NavbarMobile/> }
      
      <main className=" w-full h-screen p-2 lg:pb-0 flex flex-col gap-4
      lg:h-[94vh] lg:flex-row  justify-between mx-auto lg:overflow-y-auto">
        
        <span className="hidden lg:flex flex-col gap-4">
          <ProfileCard/>
          <Statistics/>
        </span>
        
        <span className="flex gap-2 flex-col h-full flex-grow">
          <div className="lg:hidden sticky top-0 flex flex-row justify-between items-center">
            <p className="font-bold text-5xl">Quil</p>
            <span className={`flex flex-row items-center border pr-[.5rem] rounded-full shadow-md overflow-hidden bg-white w-fit`}>
              <input className={`${search()} focus:outline-none outline-none border-none pl-2 transition-all h-[2rem]`}/>
              <button onClick={() => setState(!state)}><IoSearchOutline className="text-2xl my-[.5rem] font-bold mx-auto"/></button>
            </span>
          </div>
          <NewQuilCard image={() => dispatch('image')}
                       video={() => dispatch('video')}
                       mic={() => dispatch('mic')}/>
          <div id="quil-content" 
            className="card-map lg:shadow-lg bg-white border-2 border-[#ebebeb] rounded-2xl lg:rounded-b-none w-full flex-grow p-2 flex flex-col overflow-y-auto">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
          </div>
        </span>
        <span>
          <SuggestionCard/>
        </span>


        <div className="lg:hidden absolute bottom-[9.5rem] right-[4rem]">
          <button className={`${buttons.quil} transition-all duration-250 ease-linear absolute left-2 top-4 text-white bg-teal-500 hover:bg-cyan-800 rounded-full p-2 text-xl`} 
          onClick={() => dispatch('quil')}>
            <IoPencilOutline/>
          </button>
          <button className={`${buttons.image} transition-all duration-250 ease-linear absolute left-2 top-4 text-white bg-teal-500 hover:bg-cyan-800 rounded-full p-2 text-xl`} 
          onClick={() => dispatch('image')}>
            <IoImageOutline/>
          </button>
          <button className={`${buttons.video} transition-all duration-250 ease-linear absolute left-2 top-4 text-white bg-teal-500 hover:bg-cyan-800 rounded-full p-2 text-xl`} 
          onClick={() => dispatch('video')}>
            <IoVideocamOutline/>
          </button>
          <button className={`${buttons.mic} transition-all duration-250 ease-linear absolute left-2 top-4 text-white bg-teal-500 hover:bg-cyan-800 rounded-full p-2 text-xl`} 
          onClick={() => dispatch('mic')}>
            <IoMicOutline/>
          </button>
          <button id="float-button" className="absolute shadow-md bg-cyan-600 p-2 hover:bg-cyan-800 rounded-full" 
            onClick={() => setToggle(!toggle)}>
           { toggle? <IoClose className="text-4xl text-white"/>: 
                     <IoAdd className="text-4xl text-white"/> }
          </button>
        </div>
        <span className="lg:hidden">
          <div className={`${buttons.quilState ? 'grid' : 'hidden'} dialog-bg absolute w-full h-full  top-0 left-0 place-items-center`}>
            <div className={`${buttons.quilState ? 'flex' : 'hidden'} w-[90%] flex-col gap-2 bg-white py-4 rounded-xl`}>
              <button className="w-fit mr-2 self-end" onClick={() => dispatch('quil')}><IoClose className="text-2xl "/></button>
              <textarea className='rounded-md w-11/12 h-[10rem] mx-auto resize-none bg-gray-200 border p-1 focus:outline-none' placeholder="What's on your mind?"/>
              <button className="border-2 border-black w-fit mx-auto px-4 rounded">Send</button>
            </div>
          </div>
          <div className={`${buttons.imageState ? 'grid' : 'hidden'} dialog-bg absolute w-full h-full top-0 left-0 place-items-center`}>
            <div className={`${buttons.imageState ? 'flex' : 'hidden'} w-[90%] lg:w-[60%] xl:w-[40%] flex-col gap-2 bg-white py-4 rounded-xl`}>
              <button className="w-fit mr-2 self-end" onClick={() => dispatch('image')}><IoClose className="text-2xl "/></button>
              <textarea className='rounded-md w-11/12 h-[5rem] mx-auto resize-none bg-gray-200 border p-1 focus:outline-none' placeholder="Caption....."/>
              <input type='file' className='rounded-md w-11/12 mx-auto resize-none bg-gray-200 border border-dashed border-black p-1'/>
              <div className=""></div>
              <button className="border-2 border-black w-fit mx-auto px-4 rounded">Send</button>
            </div>
          </div>
          <div className={`${buttons.videoState ? 'grid' : 'hidden'} dialog-bg absolute w-full h-full top-0 left-0 place-items-center`}>
            <div className={`${buttons.videoState ? 'flex' : 'hidden'} w-[90%] lg:w-[60%] xl:w-[40%] flex-col gap-2 bg-white py-4 rounded-xl`}>
              <button className="w-fit mr-2 self-end" onClick={() => dispatch('video')}><IoClose className="text-2xl "/></button>
              <textarea className='rounded-md w-11/12 h-[5rem] mx-auto resize-none bg-gray-200 border p-1 focus:outline-none' placeholder="Caption....."/>
              <input type='file' className='rounded-md w-11/12 mx-auto resize-none bg-gray-200 border border-dashed border-black p-1'/>
              <div className=""></div>
              <button className="border-2 border-black w-fit mx-auto px-4 rounded">Send</button>
            </div>
          </div>
          <div className={`${buttons.micState ? 'grid' : 'hidden'} dialog-bg absolute w-full h-full top-0 left-0 place-items-center`}>
            <div className={`${buttons.micState ? 'flex' : 'hidden'} w-[90%] lg:w-[60%] xl:w-[40%] flex-col gap-2 bg-white py-4 rounded-xl`}>
              <button className="w-fit mr-2 self-end" onClick={() => dispatch('mic')}><IoClose className="text-2xl "/></button>
              <textarea className='rounded-md w-11/12 h-[5rem] mx-auto resize-none bg-gray-200 border p-1 focus:outline-none' placeholder="Caption....."/>
              <input type='file' className='rounded-md w-11/12 mx-auto resize-none bg-gray-200 border border-dashed border-black p-1'/>
              <div className=""></div>
              <button className="border-2 border-black w-fit mx-auto px-4 rounded">Send</button>
            </div>
          </div>
        </span>
      </main>
    </div>
  )
}


export default Home;
