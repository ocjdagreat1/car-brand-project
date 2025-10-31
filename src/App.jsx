import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Dashboard  from './pages/Dashboard'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/dashboard' element ={<Dashboard/>}/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App
