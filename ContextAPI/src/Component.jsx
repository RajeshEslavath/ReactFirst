import React, { useContext, useState } from 'react'
import Component1 from './Component1'
import { mainContext } from './main'

const Component = () => 
{
  const [countt,setCountt]=useState(useContext(mainContext))
  return (
    <div style={{width:"600px", height:"500px", border:"4px solid green", padding:"100px"}}>
        <Component1/>
    </div>
  )
}

export default Component