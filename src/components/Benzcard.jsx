import React from 'react'
import './Benzcard.css'
import benzaid from '../assets/images/1406-147169807_tiny.mp4'
import { Box, Container } from '@mui/material'
import Imagecollage from '../components/Imagecollage'
import { Typography } from '@mui/material';
import Appbar from "../components/Appbar"

const Benzcard = () => {
  return (
    <>
    <Appbar/>
    < Container className='all' sx={{width: 2000,marginTop:'70px'}}>
      <Typography variant='h3'sx={{ paddingLeft:'10px'}} ><span>Som</span>e Car Display</Typography>
    <div className="flex2">
        <div className="vid">
            <video src={benzaid}
            width={640}
            height={450}
            autoPlay
            controls
            loop
            muted
            playsInline
            ></video>
        </div>
       <Box className='collection' >
         <Imagecollage/>
       </Box>
    </div>
    </Container>
    </>
  )
}

export default Benzcard