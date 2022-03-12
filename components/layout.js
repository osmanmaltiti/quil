import React from 'react'
import { NavbarDesktop, NavbarMobile } from "../components/navbar";
import useMedia from "../hooks/useMedia";

const Layout = ({children}) => {
  const lg = useMedia('(min-width: 1024px)');

  return (
    <div className='w-screen h-screen overflow-x-hidden font-mons'>
      { lg ? <NavbarDesktop/> : <NavbarMobile/> }
      { children }
    </div>
  )
}

export default Layout