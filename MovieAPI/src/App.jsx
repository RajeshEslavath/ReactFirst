import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import './App.css';
import Movies from './Pages/Movies';
import Contact from './Pages/Contact';
import About from './Pages/About';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Movies/>}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/contact' Component={Contact}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App