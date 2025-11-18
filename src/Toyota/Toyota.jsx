import React from 'react'
import Appbar from '../components/Appbar.jsx'
import ToyotaHero from './ToyotaHero.jsx'
import ImageStack from "./ImageStack.jsx"
import { Box } from '@mui/material'
import Description from './Description.jsx'

const Toyota = () => {
  return (
<<<<<<< HEAD
    <Box sx={{minHeight:"200vh"}}>
=======
    <Box sx={{backgroundColor:"#ffff",minHeight:"200vh"}}>
>>>>>>> 288447b9080e6bc3d6427f59452a23fea631492b
        <Appbar/>
        <ToyotaHero/>
        <ImageStack/>
        <Description/>
    </Box>
  )
}

export default Toyota