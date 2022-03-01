import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ( {children} ) => {
  return (
    <div className='flex flex-col gap-4 w-screen h-screen'>
        <Navbar/>
            {children}
        <Footer/>
    </div>
  )
}

export default Layout