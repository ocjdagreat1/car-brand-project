import React from 'react'
import './Volvocard.css'
import Volvoaid from '../assets/images/volvovideo2.mp4'
import { Box, Container } from '@mui/material'
import { Typography } from '@mui/material';
import Volvoimagecollection from '../components/Volvoimagecollection'
import Appbar from "../components/Appbar"

const Volvocard = () => {
  return (
    <>
    <Appbar/>
    < Container className='all' sx={{width: 2000,marginTop:"70px"}}>
      <Typography variant='h3'sx={{ paddingLeft:'10px'}} ><span>Som</span>e Car Display</Typography>
    <div className="flex2">
        <div className="vid">
            <video src={Volvoaid}
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
         <Volvoimagecollection/>
       </Box>
    </div>

    </Container>
    </>
  )
}

export default Volvocard