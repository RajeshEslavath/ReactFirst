import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'


const Header = () => {
  return (
    <div>
        <button>
            <Link to='/Home'>Home</Link>
        </button>
        <button>
            <Link to='/About'>About</Link>
        </button>
        <button>
            <Link to='/Contact'>Contact</Link>
        </button>
    </div>
  )
}

export default Header