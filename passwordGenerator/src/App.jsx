import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [numberInclude, setNumberInclude] = useState(false);
  const [charInclude, setCharInclude] = useState(false);
  const [length, setLength] = useState(8);
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberInclude) str += "1234567890";
    if (charInclude) str += "~!@#$%?^&_";
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);

      console.log(pass);
    }
    setPassword(pass)
  }, [length, charInclude, numberInclude, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(passwordGenerator,[numberInclude,charInclude,length,setPassword])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input className="outline-none w-full py-1 px-3" type="text" readOnly value={password} placeholder='Password' />
          <button onClick={copyPasswordToClipboard} className=" bg-blue-600 px-3 py-1 shrink-0 ">Copy</button>
        </div>
       <div className="flex justify-between  items-center">
       <div className="flex text-sm gap-x-2">
          <input className="cursor-pointer " type="range" name="range" id="rangeBox" min={6} max={100} value={length} onChange={(event) => { setLength(event.target.value) }} />
          <label htmlFor="range">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input onClick={()=>{setNumberInclude(!numberInclude)}} type="checkbox" name="numBox" id="numberCheck" />
          <label htmlFor="numBox">Number</label>
          <input onClick={() => {
            setCharInclude(!charInclude)
            console.log("a", charInclude)
          }
          } type="checkbox" name="charBox" id="charCheck" />
          <label htmlFor="charBox">Character</label>
        </div>
       </div>

      </div>
    </>
  )
}

export default App
