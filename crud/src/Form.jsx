import React from 'react'

const Form = ({isOpen,onClose}) => 
{
    if(!isOpen)
        return null;

  return (
    <div className='absolute top-2/4 left-2/4 p-10 z-50 bg-white border border-black'>
        <h3>Enter Movie Details</h3>
        <form action="" className=' relative form p-5'>
            <input type="text" 
            className="form-control-plaintext h-10 w-28 rounded" 
            placeholder="Enter the movie name" />
            <br/>
            <input type="url" 
            className="form-control-plaintext" 
            placeholder="Enter the Image Url" />
            <br/>
            <input type="number" 
            className="form-control-plaintext" 
            placeholder="Enter the released year" />
            <br/>
            <button className='bg-black hover:bg-white text-white hover:text-black mt-4 rounded rounded-3xl p-2'>submit</button>
        </form>
    </div>
  )
}

export default Form