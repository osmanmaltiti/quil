import React from 'react'

const SuggestionCard = () => {
  return (
    <div className='hidden xl:flex p-2 px-3 w-[20rem] text-black shadow-lg rounded-xl bg-white flex-col'>
        <p className='text-lg mb-2 font-semibold'>People you may know</p>
        <div className='flex flex-col w-full gap-4'>
            <div className='flex flex-row justify-center gap-2 w-full'>
                <img className='h-[3rem] w-[3rem] rounded-full object-cover' src='/spiderman-avi.jpg'/>
                <span className='flex flex-col w-[75%] overflow-x-hidden'>
                    <p className=''>Spiderman</p>
                    <p className='text-sm font-light'>@friendlyneighborhood</p>
                </span>
                <button className='px-3 py-1 ml-2 rounded-full self-center h-fit bg-gray-400 text-black'>Follow</button>
            </div>

            <div className='flex flex-row justify-center gap-2 w-full'>
                <img className='h-[3rem] w-[3rem] rounded-full object-cover' src='/spiderman-avi.jpg'/>
                <span className='flex flex-col w-[75%] overflow-x-hidden'>
                    <p className=''>Spiderman</p>
                    <p className='text-sm font-light'>@friendlyneighborhood</p>
                </span>
                <button className='px-3 py-1 ml-2 rounded-full self-center h-fit bg-gray-400 text-black'>Follow</button>
            </div>

            <div className='flex flex-row justify-center gap-2 w-full'>
                <img className='h-[3rem] w-[3rem] rounded-full object-cover' src='/spiderman-avi.jpg'/>
                <span className='flex flex-col w-[75%] overflow-x-hidden'>
                    <p className=''>Spiderman</p>
                    <p className='text-sm font-light'>@friendlyneighborhood</p>
                </span>
                <button className='px-3 py-1 ml-2 rounded-full self-center h-fit bg-gray-400 text-black'>Follow</button>
            </div>

            <div className='flex flex-row justify-center gap-2 w-full'>
                <img className='h-[3rem] w-[3rem] rounded-full object-cover' src='/spiderman-avi.jpg'/>
                <span className='flex flex-col w-[75%] overflow-x-hidden'>
                    <p className=''>Spiderman</p>
                    <p className='text-sm font-light'>@friendlyneighborhood</p>
                </span>
                <button className='px-3 py-1 ml-2 rounded-full self-center h-fit bg-gray-400 text-black'>Follow</button>
            </div>

            <div className='flex flex-row justify-center gap-2 w-full'>
                <img className='h-[3rem] w-[3rem] rounded-full object-cover' src='/spiderman-avi.jpg'/>
                <span className='flex flex-col w-[75%] overflow-x-hidden'>
                    <p className=''>Spiderman</p>
                    <p className='text-sm font-light'>@friendlyneighborhood</p>
                </span>
                <button className='px-3 py-1 ml-2 rounded-full self-center h-fit bg-gray-400 text-black'>Follow</button>
            </div>

            <div className='flex flex-row justify-center gap-2 w-full'>
                <img className='h-[3rem] w-[3rem] rounded-full object-cover' src='/spiderman-avi.jpg'/>
                <span className='flex flex-col w-[75%] overflow-x-hidden'>
                    <p className=''>Spiderman</p>
                    <p className='text-sm font-light'>@friendlyneighborhood</p>
                </span>
                <button className='px-3 py-1 ml-2 rounded-full self-center h-fit bg-gray-400 text-black'>Follow</button>
            </div>
        </div>
    </div>
  )
}

export default SuggestionCard