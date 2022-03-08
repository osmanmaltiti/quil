import React from 'react'
import { useRouter } from 'next/router'

const privateRoute = (WrappedComponent) => {
  return (props) => {
    if(typeof window !== "undefined") {
      const Router = useRouter();

      const user = localStorage.getItem("currentUser");
      
      if(!user){
        Router.replace("/sign");
        return null
      }

      return <WrappedComponent {...props} />
    }

    return null;
  };
};

export default privateRoute