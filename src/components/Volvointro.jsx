import React from 'react'
import './VolvoIntro.css'
import volvologo from '../assets/images/volvologo2.jfif'
import { Container, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const VolvoIntro = () => {
  return (
    <>
    <div className="flex">
         <div className="carName">
            <h1><span>Vol</span>vo </h1>
            <div className="nameinfo">
              <div>Country of origin</div> <div>Sweden</div>
            </div>
             <div className="yearinfo">
              <div>Morden year</div> <div>1927-</div>
            </div>
             <div className="serieinfo">
              <div>Series</div> <div>64</div>
            </div>
         </div>

          <div className="carLogo">
              <img src={volvologo} alt="" width={140} />
             <div className="nameinfo">
               <div>Registered in sweden</div>  <div>1,323,438</div>
             </div>
             <div className="serieinfo">
              <div>Current classifies</div>  <div>48,498</div>
             </div>
              
            </div>
    </div>

    <Container sx={{display:'flex',
       justifyContent:'space-around',
       flexWrap:'wrap',
       height:'20vh',
       margin:'40px 0px'
       }}>
      <Box>
        <Button sx={{padding:'7px 40px', backgroundColor:'gray', color:'white' }}>Statistic</Button>
      </Box>
      <Box>
        <Button sx={{padding:'7px 40px', backgroundColor:'gray', color:'white' }}><Link to='/Volvomap'>Map</Link></Button>
      </Box>
      <Box>
        <Button sx={{padding:'7px 40px', backgroundColor:'gray', color:'white' }}><Link to='/Volvotable'>Toplist</Link></Button>
      </Box>
      <Box>
        <Button sx={{padding:'7px 40px', backgroundColor:'gray', color:'white' }}><Link to='/Volvocard'>Images</Link></Button>
      </Box>

    </Container>
    </>
   
    
    
  )
}

export default VolvoIntro