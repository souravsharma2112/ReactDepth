
// import { useState } from 'react'
import { useState } from 'react';
import './App.css'

function App() {
  const [bgColor , setBgColor] = useState("")
  document.body.style.backgroundColor = bgColor;

  return (
    <>
      <div className="container">
          <div id="mainUL" className="flex gap-4">
              <button onClick={()=>{setBgColor("red")}} className="bg-red-600">Red</button>
              <button onClick={()=>{setBgColor("yellow")}} className="bg-yellow-300 text-black">Yellow</button>
              <button onClick={()=>{setBgColor("green")}} className="bg-green-400">Green</button>
              <button onClick={()=>{setBgColor("blue")}} className="bg-blue-600">Blue</button>
              <button onClick={()=>{setBgColor("#f71cff")}} className="bg-pink-500">Pink</button>
              <button onClick={()=>{setBgColor("purple")}} className="bg-purple-500">Purple</button>
              <button onClick={()=>{setBgColor("darkgray")}} className="bg-gray-400">Grey</button>
          </div>
      </div>
    </>
  )
}

export default App
