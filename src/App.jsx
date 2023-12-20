import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello</h1>
    <span data-testid="span"> {count} </span>
    <input type="text" />
    <button onClick={()=>setCount((prev)=>prev +1)}>Submit</button>
    </>
  )
}

export default App
