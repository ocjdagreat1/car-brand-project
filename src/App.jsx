import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Dashboard  from './pages/Dashboard'
import Volvo from './pages/Volvo'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'





function App() {


  return (
    <>

      
      <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/register' element ={<RegisterPage/>}/>
        <Route path='/dashboard' element ={<Dashboard/>}/>
        <Route path='/brand/volvo' element={<Volvo/>}/>
        
      </Routes>
      <Footer/>

    </>
  )
}

export default App
