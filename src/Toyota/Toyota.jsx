import React from 'react'
import Appbar from '../components/Appbar.jsx'
import ToyotaHero from './ToyotaHero.jsx'
import ImageStack from "./ImageStack.jsx"
import { Box } from '@mui/material'
import Description from './Description.jsx'

const Toyota = () => {
  return (
    <Box sx={{backgroundColor:"#121212",minHeight:"200vh"}}>
        <Appbar/>
        <ToyotaHero/>
        <ImageStack/>
        <Description/>
    </Box>
  )
}

export default Toyota