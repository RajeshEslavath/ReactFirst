import { useState } from 'react'

function App() 
{
  const [count,setCount]=useState(0);
  function add()
  {
    setCount(count+1);
  }
  return (
   <div>
    <p>counter:{count}</p>
    <button onClick={add}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
    <button>rest</button>
   </div>
  )
}

export default App
