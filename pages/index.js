import React from "react";
import { IoAdd, IoSearchCircleOutline, IoSearchOutline } from "react-icons/io5";
import Card from "../components/card";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#fdfdfd]">
      <Navbar/>
      <main className="relative w-full h-screen p-2 flex flex-col gap-4">
        <span className="sticky top-0 flex flex-row justify-between items-center">
          <p className="font-bold text-5xl">Quil</p>
          <IoSearchOutline className="text-2xl font-bold"/>
        </span>
        <div id="quil-content" className="bg-white rounded-2xl w-full flex-grow p-2 flex flex-col gap-2 overflow-y-auto">
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
        <button id="float-button" className="absolute bottom-[6rem] shadow-md right-4 bg-cyan-600 p-2 opacity-60 hover:opacity-100 rounded-full">
          <IoAdd className="text-4xl text-white"/>
        </button>
      </main>
    </div>
  )
}


export default Home;
