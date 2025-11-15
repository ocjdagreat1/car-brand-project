import React from 'react'
import './MercedesIntro.css'
import benzlogo from '../assets/images/benzlogo.PNG'
import { Container, Box, Button, } from '@mui/material'
import { Link } from 'react-router-dom'

const MercedesIntro = () => {
  return (
    <>
    <div className="flex">
         <div className="carName">
            <h1><span>Merce</span>des-Benz </h1>
            <div className="nameinfo">
              <div>Country of origin</div> <div>Germany</div>
            </div>
             <div className="yearinfo">
              <div>Morden year</div> <div>1926-</div>
            </div>
             <div className="serieinfo">
              <div>Series</div> <div>101</div>
            </div>
         </div>

          <div className="carLogo">
              <img src={benzlogo} alt="" width={150} />
             <div className="nameinfo">
               <div>Registered in sweden</div>  <div>323,4938</div>
             </div>
             <div className="serieinfo">
              <div>Current classifies</div>  <div>23498</div>
             </div>
              
            </div>
    </div>

    
    <Container sx={{display:'flex',
       justifyContent:'space-around',
       flexWrap:'wrap',
       margin:'40px 0px',
       height:'12vh'
       }}>
      <Box>
        <Button sx={{padding:'7px 40px', backgroundColor:'gray', color:'white' }}>Statistic</Button>
      </Box>
      <Box>
        <Button sx={{padding:'7px 40px', backgroundColor:'gray', color:'white' }}><Link to='/Benzmap'>Map</Link></Button>
      </Box>
      <Box>
        <Button sx={{padding:'7px 40px', backgroundColor:'gray', color:'white' }}><Link to='/Benztable'>Toplist</Link></Button>
      </Box>
      <Box>
        <Button sx={{padding:'7px 40px', backgroundColor:'gray', color:'white' }}><Link to='/Benzcard'>Images</Link></Button>
      </Box>

    </Container>

    </>
    
    
  )
}

export default MercedesIntro