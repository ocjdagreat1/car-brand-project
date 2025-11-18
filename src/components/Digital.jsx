import React from 'react'
import './Degital.css'
import { Container } from '@mui/material'

const Digital = () => {
  return (
   <Container>
     <div className='degital-body'>
        <h1><span>Sear</span>ch digital service book</h1>
        <hr />
    <div className="digital-box">
        <div className='lp'>
        <p>License plate</p>
        <div className='searchbtn'>
            <div><button>N</button></div><div><input type="text" /></div>
        </div>
        </div>

        <div className='example'>
            <h4>EXAMPLE</h4>
            <p>Example AB, Stockholm, sweden</p>
            <p>mileage</p>
            <p>Service Compleated</p>
            <p>Body inspection Completed</p>
        </div>
    </div>
    <hr />

    <p>A digital service book contains detailed information (usually in English) about when the car was serviced, by which company, current mileage and a detailed list of exactly what was done.</p>
    <div className="bottombox">
        Digital service books are only available to users with a professional license and digital service book subscription. <a href="#">Become a professional user</a>
    </div>
    
    </div>
   </Container>
  )
}

export default Digital