import { useState } from 'react'
import './App.css'

function App() 
{
  const [count,setCount]=useState(0);
  return (
   <div>
    <p>Counter&nbsp;:&nbsp;{count}</p>
    <div className='btn'>
    <button onClick={()=>(count>=50)?setCount(count):setCount(count+1)}>+</button>
    <button onClick={()=>(count==0)?setCount(count):setCount(count-1)}>-</button>
    <button onClick={()=>(count>0)?setCount(0):setCount(0)}>rest</button>
    </div>
   </div>
  )
}

export default App
