import React, { useState } from "react";
import Random from "./Random";

function Home({setSelectedPage}) {
    

  return (
    <div>

      <h1 className="text-center text-9xl font-bold text-white">GIF Generator</h1>
      <div className="flex w-200 mx-auto mt-35 gap-10 ">
        <div className="w-100 border h-70 flex justify-center items-center border-red-950 hover:border-white  hover: shadow-lg  hover:shadow-red-900 rounded-md transition-all duration-1000">
          <h1 onClick={()=>{setSelectedPage("Random")}} className="text-4xl font-bold  text-white cursor-pointer  hover:text-red-500  transition-all duration-700">Create Random GIF</h1>
        </div>

        <div className="w-100 border h-70 flex justify-center items-center  border-red-950 hover:border-white hover: shadow-lg  hover:shadow-red-900 rounded-md transition-all duration-1000 ">
          <h1 onClick={()=>{setSelectedPage("Tag")}}  className="text-4xl font-bold   text-white cursor-pointer  hover:text-red-500 transition-all duration-700 ">Create Custom GIF</h1>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
