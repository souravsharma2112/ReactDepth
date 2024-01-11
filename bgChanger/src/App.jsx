
// import { useState } from 'react'
import './App.css'

function App() {
  function setColor() {
    document.body.style.backgroundColor = "red";
    const mainUL= document.querySelector("#mainUL");
    console.log(mainUL.childNodes[0].children[0])
  }
  return (
    <>
      <div className="container">
          <ul id="mainUL" className="flex gap-4">
            <li  className="boxes">
              <button onClick={setColor} className="bg-red-600">Red</button>
            </li>
            <li className="boxes ">
              <button className="bg-yellow-300 text-black">Yellow</button>
            </li>
            <li className="boxes">
              <button className="bg-green-400">Green</button>
            </li>
            <li className="boxes">
              <button className="bg-blue-600">Blue</button>
            </li>
            <li className="boxes">
              <button className="bg-pink-500">Pink</button>
            </li>
            <li className="boxes">
              <button className="bg-purple-500">Purple</button>
            </li>
            <li className="boxes">
              <button className="bg-gray-400">Grey</button>
            </li>
          </ul>
      </div>
    </>
  )
}

export default App
