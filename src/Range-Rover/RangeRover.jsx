import React from 'react'
import Appbar from '../components/Appbar.jsx'
import RangeRoverHero from './RangeRoverHero.jsx'
import ImageStack from "./ImageStack.jsx"
import { Box } from '@mui/material'
import Description from './Description.jsx'

const RangeRover = () => {
  return (
    <Box sx={{backgroundColor:"#ffff",minHeight:"200vh"}}>
        <Appbar/>
        <RangeRoverHero/>
        <ImageStack/>
        <Description/>
    </Box>
  )
}

export default RangeRover