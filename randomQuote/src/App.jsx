import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() 
{
  const [quote,setQuote]=useState("")
  const [author,setAuthor]=useState('')
  const [btnClick,setbtnClick]=useState(0)
  useEffect(()=>
  {
    axios.get(`https://api.quotable.io/random`)
    .then((data)=>
    {
      setQuote(data.data.content);
      setAuthor(data.data.author);
    })
  },[btnClick])
  return (
    <>
      <div className="quotation">
        <blockquote>{quote}</blockquote>
        <cite>-{author}</cite><br/>
        <button onClick={()=>setbtnClick(btnClick+1)}>Refresh</button>
      </div>
    </>
  )
}

export default App
