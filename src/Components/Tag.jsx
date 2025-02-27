import axios from "axios";
import React, { useEffect, useState } from "react";

import Spinner from "./Spinner";
const API_KEY = "dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW";

const Tag = ({setSelectedPage}) => {
  const [gif, setGif] = useState("");
  const [loading, setloading] = useState(false);
  const [tag, setTag] = useState("");

  async function fetchData() {
    setloading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-1/2  rounded-lg border border-black flex flex-col items-center gap-y-5 mx-auto">
      <h1 className=" font-bold text-3xl text-white  "> Search GIF</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <input
        type="text"
        className="w-10/12 opacity-90 text-lg rounded-md py-2 bg-white text-center  transition-all duration-500 "
        onChange={changeHandler}
        placeholder="Enter GIf"
      />

      <button
        onClick={clickHandler}
        className="w-10/12 opacity-90 text-lg rounded-md py-2 bg-white mb-5  hover:bg-red-500 cursor-pointer hover:text-white transition-all duration-500"
      >
        Generate
      </button>
      <button onClick={()=>{setSelectedPage("")}} className="w-10/12 opacity-90 text-lg rounded-md py-2 bg-white mb-5  hover:bg-red-500 cursor-pointer hover:text-white transition-all duration-500 -mt-5">Home</button>
    </div>
  );
};

export default Tag;
