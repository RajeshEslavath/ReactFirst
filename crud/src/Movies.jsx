import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Movies = () => 
{
    const [movies,setMovies]=useState([])
    useEffect(()=>
    {
        axios.get("http://localhost:3000/movies")
        .then((data)=>setMovies(data.data))
    },[])
    const handleDelete=(id)=>
    {
        axios.delete(`http://localhost:3000/movies/${id}`)
        .then((res)=>
        {
          let newMovies = movies.filter((m)=>m.id!==id);
          setMovies(newMovies);
        })
    }
  return (
    <>
      <div className='Movies h-200 bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row flex-flow-col  py-4 px-4 rounded rounded-md gap-4'>
        {movies && movies.map((m,i)=>(
            <div key={i} className='Movie backdrop-contrast-100 bg-white/40 rounded   flex flex-row flex-col py-4 px-4 '>
                <img className= 'h-20 w-150  rounded rounded-4 ' src={m.Poster} alt={m.Title}/>
                <h2>{m.Title}</h2>
                <p>{m.Year}</p>
                <button>✒️</button>
                <button onClick={()=>handleDelete(m.id)}>❌</button>
            </div>
        ))
        }
    </div>
    </>
  )
}

export default Movies