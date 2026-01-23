import { useState } from 'react'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div >
     <p> {count}</p>
      <button onClick = { ()=>{setCount(count+1)}}>
      <p className = 'text-2xl text-indigo-600' >this is just an test </p>
      </button>
     </div>
    </>
  )
}

export default App
