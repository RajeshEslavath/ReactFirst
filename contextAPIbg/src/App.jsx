import React, { useState } from 'react'

const App = () => 
{
  const [mode,setMode]=useState("")
  const [textcolor,settextColor]=useState("")
  const [darkMode,setdarkMode]=useState("")

  const toggleDarkMode=()=>
  {
    setdarkMode(prevMode=>prevMode)
    darkMode?(setMode("black"),settextColor("white")):(setMode("white"),settextColor("blackz"))
  }
  return (
    <div>

    </div>
  )
}

export default App