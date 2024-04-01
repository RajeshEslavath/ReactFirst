import React from 'react'
import './App.css'
import Home from './Home';
import Contact from './Contact';
import {Route,Routes} from 'react-router-dom'
import Header from './Header'
import NotFound from './NotFound';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
      <Route
          path='/home' element={<Home/>} ></Route>
      
      <Route
          path='/contact' element={<Contact/>} ></Route>
      <Route
          path='*' element={<NotFound/>}></Route>
    </Routes>
    </div>
  )
}

export default App