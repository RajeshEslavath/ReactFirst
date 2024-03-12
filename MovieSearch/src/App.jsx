import { useEffect } from 'react'
import { useState } from 'react'
import Movies from './Movies'
import './App.css'

function App()
{
  const [searchTerm,setSearchTerm]=useState('')
  const [moviesList,setMoviesList]=useState([])
  useEffect(()=>
  {
    async function fetchData(){
      const resposne= await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=e3277b8e`)
      console.log(resposne)
      const data = await resposne.json()
      console.log(data)
      setMoviesList(data.search)
    }
    fetchData()
  },[searchTerm])
  return (
    <>
    <div>
      <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      <Movies moviesList={moviesList}/>
    </div>
    </>
  )
}
export default App