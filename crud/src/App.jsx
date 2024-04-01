import React, { useState } from 'react'
import './App.css'
import Movies from './Movies'
import Form from './Form';

function App() 
{
  const [formOpen, setFormOpen]=useState(false)

  const openForm=()=>{
    setFormOpen(true)
  }
  const closeForm =() =>
  {
    setFormOpen(false)
  }

  return (
    <>
      <button className='py-2 px-5 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75 mt-4 mb-4 ms-4' 
        onClick={openForm}> Add New </button>
      <div className='App h-300 bg-gradient-to-r from-purple-500 to-pink-500 py-4 px-5 rounded rounded-5'>
        <Movies/>
        <Form isOpen={formOpen} onClose={closeForm}/>
      </div>
    </>
  )
}

export default App
