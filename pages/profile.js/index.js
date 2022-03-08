import React from 'react';
import { IoMenu } from 'react-icons/io5';
import Card from "../../components/card";
import privateRoute from '../../components/private-route';

const Profile = () => {
  return (
    <div id='main-profile' className='flex flex-col w-screen h-[92vh] overflow-x-hidden'>
      <div className='w-full h-full flex-grow'>
        <div style={{backgroundImage: 'url("/spiderman-avi.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}} className='w-full bg-green-400 rounded-b-3xl lg:rounded-none overflow-hidden mb-2'>
          <span className='relative py-6 w-full h-full flex flex-col backdrop-blur-sm'>
            <img className='bg-blue-400 w-[5rem] h-[5rem] rounded-full mx-auto object-cover' src='/spiderman-avi.jpg'/>
            <button className='fixed z-20 right-3 text-2xl bg-white rounded-full p-1'><IoMenu/></button>
            <span className='flex flex-col bg-white w-fit mx-auto p-2 mt-1 rounded-xl'>
              <h2 className='mx-auto font-medium'>Spiderman</h2>
              <h3 className='mx-auto'>@yourfriendlyneighbourhood</h3>
              <p className='mx-auto'>Hey there miles morales here</p>
            </span>
          </span>
        </div>
        <div className='grid grid-cols-3 place-items-center w-full justify-around py-2 my-2 md:w-[80%] lg:w-[70%] xl:w-[70%] mx-auto md:bg-gray-100 md:rounded-xl md:shadow-lg'>
          <span className='flex flex-col w-full items-center '>
            <p>10,000</p>
            <p>Following</p>
          </span>
          <span className='flex flex-col w-full border-x border-gray-400 items-center'>
            <p>10,000,000</p>
            <p>Followers</p>
          </span>
          <span className='flex flex-col w-full items-center'>
            <p>6023</p>
            <p>Quils</p>
          </span>
        </div>
        <div className='w-full flex flex-col items-center md:w-[80%] lg:w-[70%] xl:w-[70%] mx-auto'>
          <h2 className='text-xl font-medium'>Activities</h2>
          <span className='w-full flex flex-row justify-around border-b border-gray-400 mb-2'>
            <button>Quils</button>
            <button>Media</button>
          </span>
          <div id='quil-content' className='w-[90%] flex-grow'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default privateRoute(Profile)