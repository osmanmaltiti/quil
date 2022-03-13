import React, { useEffect, useState } from 'react'
import { NavbarDesktop, NavbarMobile } from "../components/navbar";
import useMedia from "../hooks/useMedia";

const Layout = ({children}) => {
  const lg = useMedia('(min-width: 1024px)');
  const [user, setUser] = useState({});
  
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(currentUser);
  }, []);

  return (
    <div className='w-screen h-screen overflow-x-hidden font-mons'>
      { lg ? <NavbarDesktop name={user.displayname} profile={user.profile}/> : <NavbarMobile/> }
      { children }
    </div>
  )
}

export default Layout