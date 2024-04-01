import React, { useState } from 'react'
import { mainContext } from './main'
import Component from './Component'

const App = () => {
  const [count,setCount]=useState(0)
  
  return (
    <div style={{width:"800px", height:"700px", border:"4px solid red", padding:"100px"}}>
      <button onClick={()=>setCount(count+1)}>Incresment</button><br/>
      <mainContext.Provider value={count}>
      <Component/>
      </mainContext.Provider>
    </div>
  )
}

export default App