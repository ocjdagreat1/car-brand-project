import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Volvo from './pages/Volvo'
import Mercedes from './pages/Mercedes'
import Benzcard from './components/Benzcard'
import Benzmap from './components/Benzmap'
import Benztable from './components/Benztable'
import Volvocard from './components/Volvocard'
import Volvomap from './components/Volvomap'
import Volvotable from './components/Volvotable'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AboutUs from './pages/AboutUs'

import Cookies from './components/Cookies'
import Digital from './components/Digital'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/dashboard' element ={<Dashboard/>}/>
        <Route path='/brand/volvo' element={<Volvo/>}/>
        <Route path='/brand/Mercedes' element={<Mercedes/>}/>
        <Route path='/Benzmap' element={<Benzmap/>}/>
        <Route path='/Benzcard' element={<Benzcard/>}/>
        <Route path='/Benztable' element={<Benztable/>}/>
        <Route path='/Volvomap' element={<Volvomap/>}/>
        <Route path='/Volvocard' element={<Volvocard/>}/>
        <Route path='/Volvotable' element={<Volvotable/>}/>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/cookies' element={<Cookies />}/>
        <Route path='/digital' element={<Digital />}/>

        {/* Your brand route */}
        <Route path='/brand/volvo' element={<Volvo />} />

        {/* Other branch routes */}
        
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
