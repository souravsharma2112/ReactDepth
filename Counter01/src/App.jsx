import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  
  return (
    <>
      <div>
        <h1>Counter Update</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => count < 20 ? setCount(count + 1) : setCount(20)}>
          Add count is {count}
        </button>
        <button onClick={() => count <= 0 ? setCount(0) : setCount(count-1)}>
          Remove count is {count}
        </button>
      </div>
    </>
  )
}

export default App
