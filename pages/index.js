import React, { useEffect, useReducer, useState } from "react";
import { IoAdd, IoClose, IoSend, IoImageOutline, 
  IoMicOutline, IoPencilOutline, IoSearchOutline, IoVideocamOutline } from "react-icons/io5";
import Card from "../components/card";
import Link from "next/link";
import privateRoute from "../components/private-route";
import { buttonReducers, quilReducers } from "../reducers/hompepage-reducers";
import useHomepage from "../functions/homepage-functions";
import { useSelector } from 'react-redux';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getQuil } from "../redux/home-feed-slice";


const Home = () => {
  const stateDispatch = useDispatch();
  const [initButtons, reducerButtons] = buttonReducers();
  const [initQuils, reducerQuils] = quilReducers();
  const [buttons, dispatch] = useReducer(reducerButtons, initButtons);
  const [quils, dispatchQuils] = useReducer(reducerQuils, initQuils);
  const [state, setState] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [stat] = useState(10);
  const { handleSendQuil, handleSendImage,
          handleSendVideo, handleSendMic, 
          getRecommend, mapQuils,
          mapRecommended } = useHomepage();
  const [ refresh, setRefresh ] = useState()
  const [user, setUser] = useState({});
  const recommended = useSelector(state => state.feed.recommended);

  useEffect(() => {
      (async() => {
        const response = await axios.get('http://localhost:3000/api/quil');
        stateDispatch(getQuil(response.data))
      })()
  }, [ refresh ]);

  useEffect(() => {
    toggle ? dispatch('open'): dispatch('close');
  },[toggle]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(currentUser);
    getRecommend();
  }, [ refresh ]);

  const search = () => state ? 'w-[15rem]' : 'w-0';

  return (
    <div className="flex flex-col h-[94vh] lg:h-[92vh] w-full overflow-x-hidden bg-[#eeeeee]">
      <main id="main-homepage" className=" w-full h-full p-2 xl:p-0 lg:pb-0 flex flex-col gap-x-4
       overflow-y-auto lg:flex lg:flex-row">
        {/* PROFILE-CARDS */}
        <div id="profile-cards" className="hidden lg:flex lg:w-[25%] row-span-2 xl:w-full lg:flex-shrink-0 flex-col h-full gap-2 overflow-y-auto">
          {/* PROFILE-CARD */}
          <div className='relative flex-shrink-0 h-[20rem] text-black shadow-lg rounded-xl overflow-hidden bg-white lg:flex flex-col justify-between'>
            <img id='cover-image' className='absolute w-full h-16 bg-teal-700 shadow-md object-cover' src='/spiderman-avi.jpg'/>
            <img className='z-10 w-[4rem] h-[4rem] rounded-full mx-auto mt-8 object-cover' src={user?.profile} alt=' '/>
            <span className='w-full flex flex-col items-center border-b border-gray-500 pb-2'>
              <p className='text-lg font-semibold'>{user?.fullname}</p>
              <p className='text-sm'>@{user?.displayname}</p>
              <p className='text-center'>Aliqua reprehenderit veniam sint ea ipsum.</p>
            </span>
            <div className='grid grid-cols-2 border-b border-gray-500 pb-3'>
              <span className='flex flex-col w-full items-center border-r border-gray-500'>
                <p className='font-bold'>1K</p>
                <p>Following</p>
              </span>
              <span className='flex flex-col w-full items-center'>
                <p className='font-bold'>510K</p>
                <p>Followers</p>
              </span>
            </div>
            <Link href='/profile'><a className='text-blue-400 my-4 w-fit mx-auto px-8'>My Profile</a></Link>
          </div>    
          {/* STATISTICS */}
          <div className='h-[16rem] flex-shrink-0 text-black shadow-lg rounded-xl overflow-hidden bg-white lg:flex flex-col p-4 gap-2 items-center'>
            <p className='text-lg font-semibold'>PROFILE STATS</p>
            <span className='flex flex-col items-center border-b border-gray-400 w-[70%] pb-2'>
              <p className='font-bold'>Likes</p>
              <p>129324</p>
            </span>
            <span className='flex flex-col items-center border-b border-gray-400 w-[70%] pb-2'>
              <p className='font-bold'>Unlikes</p>
              <p>4333</p>
            </span>
            <label className='flex flex-col items-center gap-1 w-[65%] pb-6'>
              <p className='font-bold'>Popularity {stat}%</p>
              <div id='progress-bar' className='w-full rounded-full h-[.5rem] overflow-hidden bg-gray-300'>
                <div style={{width: `${stat}%`}} className={`h-full rounded-full bg-cyan-500`}></div>
              </div>
            </label>
          </div>
        </div>
        {/* QUIL-CARDS */}
        <div className="flex gap-2 flex-col row-span-2 w-full h-full mx-auto overflow-y-auto">
          <div className="lg:hidden sticky top-0 flex flex-row justify-between items-center">
            <img className="h-[3.5rem]" src="/newLogo.png"/>
            <span className={`flex flex-row items-center border pr-[.5rem] rounded-full shadow-md overflow-hidden bg-white w-fit`}>
              <input className={`${search()} focus:outline-none outline-none border-none pl-2 transition-all h-[2rem]`}/>
              <button onClick={() => setState(!state)}><IoSearchOutline className="text-2xl my-[.5rem] font-bold mx-auto"/></button>
            </span>
          </div>
          {/* QUIL-DECK */}
          <div style={{gridTemplateColumns: '4rem 1fr'}} 
            className='lg:grid hidden rounded-xl gap-4 bg-white shadow-lg p-3 px-5'>
            <img className='w-[4rem] h-[4rem] rounded-full row-span-2 shadow-lg object-cover' src={user?.profile}/>
            <textarea className='flex-grow rounded-md resize-none bg-gray-200 border p-1 focus:outline-none focus:scale-[1.01]' 
            placeholder="What's on your mind?" value={quils.quilText} onChange={(e) => dispatchQuils({type:'quilText', payload: e.target.value})}/>
            <span className='grid grid-cols-4 place-items-center text-black'>
              <button className='w-[95%] h-full flex gap-2 flex-row items-center justify-center px-2 rounded-full border border-gray-300 hover:scale-[1.02]' 
              onClick={() => dispatch('image')}>
                <IoImageOutline/>
                <p>Photo</p>
              </button>
              <button className='w-[95%] h-full flex gap-2 flex-row items-center justify-center px-2 rounded-full border border-gray-300 hover:scale-[1.02]' 
              onClick={() => dispatch('video')}>
                <IoVideocamOutline/>
                <p>Video</p>
              </button>
              <button className='w-[95%] h-full flex gap-2 flex-row items-center justify-center px-2 rounded-full border border-gray-300 hover:scale-[1.02]' 
              onClick={() => dispatch('mic')}>
                <IoMicOutline/>
                <p>Mic</p>
              </button>
              <button className='w-[95%] h-full flex gap-2 flex-row items-center justify-center px-2 bg-cyan-500 rounded-full border border-cyan-500 hover:scale-[1.02]' 
              onClick={() => {
                        handleSendQuil(quils.quilText, (log) => setRefresh(log));
                        dispatchQuils({type:'quilText', payload: ''})
                      }}>
                <p>Send</p>
                <IoSend/>
              </button>
            </span>
          </div>
          {/* CARD-MAP */}
          <div id="quil-content" 
            className="card-map lg:shadow-lg bg-white border-2 border-[#ebebeb] rounded-2xl lg:rounded-b-none w-full flex-grow p-2 flex flex-col overflow-y-auto">
                { mapQuils(user?.uid, user?.profile, user?.displayname, (log) => setRefresh(log)) }
          </div>
        </div>
        {/* SUGGESTION-CARD */}
        <div className='hidden xl:flex p-2 px-3 w-full h-fit text-black shadow-lg rounded-xl bg-white flex-col'>
            <p className='text-lg mb-2 font-semibold'>People you may know</p>
            <div className='flex flex-col w-full gap-4'>
                { mapRecommended(recommended, user?.uid, (log) => setRefresh(log)) }
            </div>
        </div>

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
        <span >
          <div className={`${buttons.quilState ? 'grid' : 'hidden'} dialog-bg absolute w-full h-full  top-0 left-0 place-items-center`}>
            <div className={`${buttons.quilState ? 'flex' : 'hidden'} w-[90%] flex-col gap-2 bg-white py-4 rounded-xl`}>
              <button className="w-fit mr-2 self-end" onClick={() => dispatch('quil')}><IoClose className="text-2xl "/></button>
              <textarea value={quils.quilText} 
              onChange={(e) => dispatchQuils({type:'quilText', payload: e.target.value})}
              className='rounded-md w-11/12 h-[10rem] mx-auto resize-none bg-gray-200 border p-1 focus:outline-none' 
              placeholder="What's on your mind?"/>
              <button className="border-2 border-black w-fit mx-auto px-4 rounded" 
                      onClick={() => {
                        handleSendQuil(quils.quilText, (log) =>setRefresh(log));
                        dispatchQuils({type:'quilText', payload: ''});
                      }}>Send</button>
            </div>
          </div>
          <div className={`${buttons.imageState ? 'grid' : 'hidden'} dialog-bg absolute w-full h-full top-0 left-0 place-items-center`}>
            <div className={`${buttons.imageState ? 'flex' : 'hidden'} w-[90%] lg:w-[60%] xl:w-[40%] flex-col gap-2 bg-white py-4 rounded-xl`}>
              <button className="w-fit mr-2 self-end" onClick={() => dispatch('image')}><IoClose className="text-2xl "/></button>
              <textarea value={quils.imageCaption} onChange={(e) => dispatchQuils({type:'imageCaption', payload: e.target.value})} 
              className='rounded-md w-11/12 h-[5rem] mx-auto resize-none bg-gray-200 border p-1 focus:outline-none' 
              placeholder="Caption....."/>
              <input type='file' 
              onChange={(e) => dispatchQuils({type:'imageFile', payload: e.target.files[0]})} 
              className='rounded-md w-11/12 mx-auto resize-none bg-gray-200 border border-dashed border-black p-1'/>
              <div className=""></div>
              <button className="border-2 border-black w-fit mx-auto px-4 rounded" 
                      onClick={() => {
                        handleSendImage(quils.imageCaption, quils.imageFile, (log) => {
                          setRefresh(log)
                        });
                        dispatchQuils({type: 'imageFile', payload: ''})
                        dispatchQuils({type: 'imageCaption', payload: ''})
                      }}>Send</button>
            </div>
          </div>
          <div className={`${buttons.videoState ? 'grid' : 'hidden'} dialog-bg absolute w-full h-full top-0 left-0 place-items-center`}>
            <div className={`${buttons.videoState ? 'flex' : 'hidden'} w-[90%] lg:w-[60%] xl:w-[40%] flex-col gap-2 bg-white py-4 rounded-xl`}>
              <button className="w-fit mr-2 self-end" onClick={() => dispatch('video')}><IoClose className="text-2xl "/></button>
              <textarea value={quils.videoCaption} onChange={(e) => dispatchQuils({type:'videoCaption', payload: e.target.value})} 
              className='rounded-md w-11/12 h-[5rem] mx-auto resize-none bg-gray-200 border p-1 focus:outline-none' placeholder="Caption....."/>
              <input onChange={(e) => dispatchQuils({type:'videoFile', payload: e.target.files[0]})} 
              type='file' className='rounded-md w-11/12 mx-auto resize-none bg-gray-200 border border-dashed border-black p-1'/>
              <div className=""></div>
              <button className="border-2 border-black w-fit mx-auto px-4 rounded"
                      onClick={() => {
                              handleSendVideo(quils.videoCaption, quils.videoFile, (log) => {
                                setRefresh(log)
                              });
                              dispatchQuils({type: 'videoFile', payload: ''})
                              dispatchQuils({type: 'videoCaption', payload: ''})

                            }}>Send</button>
            </div>
          </div>
          <div className={`${buttons.micState ? 'grid' : 'hidden'} dialog-bg absolute w-full h-full top-0 left-0 place-items-center`}>
            <div className={`${buttons.micState ? 'flex' : 'hidden'} w-[90%] lg:w-[60%] xl:w-[40%] flex-col gap-2 bg-white py-4 rounded-xl`}>
              <button className="w-fit mr-2 self-end" onClick={() => dispatch('mic')}><IoClose className="text-2xl "/></button>
              <textarea value={quils.micCaption} onChange={(e) => dispatchQuils({type:'micCaption', payload: e.target.value})} 
              className='rounded-md w-11/12 h-[5rem] mx-auto resize-none bg-gray-200 border p-1 focus:outline-none' placeholder="Caption....."/>
              <input onChange={(e) => dispatchQuils({type:'micFile', payload: e.target.files[0]})}
              type='file' className='rounded-md w-11/12 mx-auto resize-none bg-gray-200 border border-dashed border-black p-1'/>
              <div className=""></div>
              <button className="border-2 border-black w-fit mx-auto px-4 rounded" 
                      onClick={() => {
                              handleSendMic(quils.micCaption, quils.micFile, (log) => {
                                setRefresh(log)
                              });
                              dispatchQuils({type: 'micFile', payload: ''})
                              dispatchQuils({type: 'micCaption', payload: ''})

                            }}>Send</button>
            </div>
          </div>
        </span>
      </main>
    </div>
  )
}


export default Home;
