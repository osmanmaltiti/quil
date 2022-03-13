import React from 'react'
import { useRouter } from 'next/router'

const privateRoute = (WrappedComponent) => {
  return (props) => {
    if(typeof window !== "undefined") {
      const Router = useRouter();

      const user = JSON.parse(localStorage.getItem("userAuth"));
      
      if(!user){
        Router.replace("/sign");
        return null
      }
      if(user.auth){
        return <WrappedComponent {...props} />
      }
      else{
        Router.replace("/sign");
        return null
      }
    }

    return null;
  };
};

export default privateRoute