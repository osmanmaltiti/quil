import axios from 'axios';
import React, { useReducer, useState } from 'react';
import { IoClose, IoPencilOutline } from 'react-icons/io5';
import Card from "../../components/card";
import privateRoute from '../../components/private-route';

const init = {
  editName: '', editBio: '',
  editProfilePhoto: '', editCoverPhoto: '',
  oldPassword: '', newPassword: '',
  confirmPassword: ''
}
const reducer = (state, action) => {
  switch(action.type){
    case 'editName':
      return {...state, editName: action.payload}
    case 'editBio':
      return {...state, editBio: action.payload}
    case 'editProfilePhoto':
      return {...state, editProfilePhoto: action.payload}
    case 'editCoverPhoto':
      return {...state, editCoverPhoto: action.payload}
    case 'oldPassword':
      return {...state, oldPassword: action.payload}
    case 'newPassword':
      return {...state, newPassword: action.payload}
    case 'confirmPassword':
      return {...state, confirmPassword: action.payload}
  }
}

const Profile = () => {
  const [update, dispatch] = useReducer(reducer, init);
  const [open, setOpen] = useState(false);
  const [openPass, setOpenPass] = useState(false);

  const handleUpdate = async() => {
    const newUpdate = {};
    update.editName !== '' ? newUpdate.name = update.editName : null;
    update.editBio !== '' ? newUpdate.bio = update.editBio : null;
    const updateResponse = await axios.post('http://localhost:3000/api/users/update', {update: newUpdate}, {
      params: { type: 'profile update'}
    });
    if(updateResponse) alert('Updated successfully')
  }

  const handlePasswordUpdate = async() => {
    const newPasswordUpdate = {};
    if( update.confirmPassword === update.newPassword){
      update.oldPassword !== '' ? newPasswordUpdate.oldPassword = update.oldPassword : null;
      update.newPassword !== '' ? newPasswordUpdate.password = update.newPassword : null;
      const updateResponse = await axios.post('http://localhost:3000/api/users/update', {update: newPasswordUpdate}, {
        params: { type: 'password update'}
      });
      if(updateResponse) alert('Updated successfully')
    } else {
      alert('Passwords do not match')
    }
  }

  return (
    <div id='main-profile' className='flex flex-col w-screen h-[94vh] lg:h-[92vh] overflow-x-hidden'>
      <div className='w-full h-full flex-grow'>
        <div style={{backgroundImage: 'url("/spiderman-avi.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}} className='w-full bg-green-400 rounded-b-3xl lg:rounded-none overflow-hidden mb-2'>
          <span className='relative py-6 w-full h-full flex flex-col backdrop-blur-sm'>
            <img className='bg-blue-400 w-[5rem] h-[5rem] rounded-full mx-auto object-cover' src='/spiderman-avi.jpg'/>
            <button className='fixed z-20 right-3 text-2xl bg-white rounded-full p-1' onClick={() => setOpen(true)}><IoPencilOutline/></button>
            <span className='flex flex-col bg-white w-fit mx-auto p-2 mt-1 rounded-xl'>
              <h2 className='mx-auto font-medium'>Spiderman</h2>
              <h3 className='mx-auto'>@yourfriendlyneighbourhood</h3>
              <p className='mx-auto'>Hey there miles morales here</p>
            </span>
          </span>
        </div>
        <div className='grid grid-cols-3 place-items-center w-full justify-around py-2 my-2 md:w-[80%] lg:w-[70%] xl:w-[70%] mx-auto md:bg-gray-100 md:rounded-xl md:shadow-lg'>
          <span className='flex flex-col w-full items-center '>
            <p className='text-xl'>10,000</p>
            <p className='font-medium'>Following</p>
          </span>
          <span className='flex flex-col w-full border-x border-gray-400 items-center'>
            <p className='text-xl'>10,000,000</p>
            <p className='font-medium'>Followers</p>
          </span>
          <span className='flex flex-col w-full items-center'>
            <p className='text-xl'>6023</p>
            <p className='font-medium'>Quils</p>
          </span>
        </div>
        <div className='w-full flex flex-col items-center md:w-[80%] lg:w-[70%] xl:w-[70%] mx-auto'>
          <h2 className='text-xl font-medium w-full text-center sticky top-0 z-10 bg-white'>Activities</h2>
          <span className='w-full sticky top-6 z-10 bg-white flex flex-row justify-around border-b border-gray-400 mb-2'>
            <button>Quils</button>
            <button>Media</button>
          </span>
          <div className='w-[90%] flex-grow'>
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
        <div id='updateProfile' className={`${open ? 'w-[80%]' : 'w-0'} overflow-y-scroll absolute flex flex-col h-[94vh] shadow-2xl bg-white top-0 right-0 z-10 pt-3 transition-all`}>
          <button className='self-end' onClick={() => setOpen(false)} ><IoClose className='text-3xl'/></button>
          <span className='mx-auto w-[95%]'>
            <p>Change Username</p>
            <input className=' px-2 border border-black w-full rounded' onChange={(e) => dispatch({type: 'editName', payload: e.target.value})}/>
          </span>
          <span className='mx-auto w-[95%]'>
            <p>Edit Bio</p>
            <textarea className='px-2 border resize-none h-[8rem] rounded border-black w-full' onChange={(e) => dispatch({type: 'editBio', payload: e.target.value})}/>
          </span>
          <span className='mx-auto w-[95%]'>
            <p>Change Profile Picture</p>
            <input className='border border-black w-full rounded' type='file' onChange={(e) => dispatch({type: 'editProfilePhoto', payload: e.target.files[0]})}/>
          </span>
          <span className='mx-auto w-[95%]'>
            <p>Change Cover Photo</p>
            <input className='border border-black w-full rounded' type='file' onChange={(e) => dispatch({type: 'editCoverPhoto', payload: e.target.files[0]})}/>
          </span>
          <button className='bg-blue-400 w-fit px-4 py-2 text-white mx-auto my-2 rounded' onClick={handleUpdate}>Save changes</button>
          <button className='text-blue-500 text-sm mx-auto' onClick={() => setOpenPass(!openPass)}>Change password</button>
          <div className='h-[13rem] w-full'>
            <span className={`${openPass ? 'h-[13rem]': 'h-0'} transition-all mx-auto overflow-x-hidden w-[95%] flex flex-col mt-2`}>
              <p>Old password</p>
              <input className=' px-2 border border-black w-full rounded' onChange={(e) => dispatch({type: 'oldPassword', payload: e.target.value})}/>
              <p>New password</p>
              <input className=' px-2 border border-black w-full rounded' onChange={(e) => dispatch({type: 'newPassword', payload: e.target.value})}/>
              <p>Confirm password</p>
              <input className=' px-2 border border-black w-full rounded' onChange={(e) => dispatch({type: 'confirmPassword', payload: e.target.value})}/>
              <button className='bg-red-600 w-fit px-4 py-1 text-white mx-auto my-2 rounded' onClick={handlePasswordUpdate}>Save changes</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default privateRoute(Profile)
