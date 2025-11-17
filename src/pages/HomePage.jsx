import React from 'react'
import AppBar from '../components/Appbar'
import Hero from '../components/Hero'
import InfoCards from '../components/InfoCards'
import Driving from '../components/Driving'
import Map from '../components/Map'


const HomePage = () => {
  return (
    <div>
      <AppBar/>
      <Hero/>
      <InfoCards/>
      <Driving/>
      <Map/>
      
    </div>
  )
}

export default HomePage