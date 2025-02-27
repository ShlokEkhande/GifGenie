import axios from "axios";
import React, { useEffect, useState } from "react";

import Spinner from "./Spinner";
const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW'

const Random = ({setSelectedPage}) => {
  const [gif, setGif] = useState("");
  const [loading, setloading] = useState(false);

  async function fetchData() {
    setloading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const output = await axios.get(url);
    const imageSource = output.data.data.images.downsized_large.url;
    console.log(imageSource);
    setGif(imageSource);
    setloading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }
  return (
    <div className="w-1/2  rounded-lg border mx-auto border-black flex flex-col items-center gap-y-5">
      <h1 className=" font-bold text-3xl text-white ">Random GIF </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <button
        onClick={clickHandler}
        className="w-10/12 opacity-90 text-lg rounded-md py-2 bg-white mb-5 hover:bg-red-500 cursor-pointer hover:text-white transition-all duration-500"
      >
        Generate
      </button>

      <button onClick={()=>{setSelectedPage("")}} className=" w-10/12 opacity-90 text-lg rounded-md py-2 bg-white mb-5 hover:bg-red-500 cursor-pointer transition-all duration-500 hover:text-white">Home</button>
    </div>
  );
};

export default Random;
