import React from 'react'
import Home from './Components/Home'
import { useState } from 'react'
import Random from './Components/Random'
import Tag from './Components/Tag'

function App() {
  const [selectedpage,setSelectedPage]=useState("")
  return (
    <div className='bg-black h-[80rem]'>
      {selectedpage ==="" && <Home setSelectedPage={setSelectedPage}/>}
      {selectedpage ==="Random" && <Random setSelectedPage={setSelectedPage}/>}
      {selectedpage ==="Tag" && <Tag setSelectedPage={setSelectedPage}/>}
    </div>
  )
}

export default App
