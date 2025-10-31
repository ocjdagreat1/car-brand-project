import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Dashboard  from './pages/Dashboard'
import Volvo from './pages/Volvo'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/dashboard' element ={<Dashboard/>}/>
        <Route path='/Volvo' element={<Volvo/>}/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App
