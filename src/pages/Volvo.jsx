import React from 'react'
import { Container } from '@mui/material'
import Appbar from '../components/Appbar'
import Volvointro from '../components/Volvointro'
import Volvocard from '../components/Volvocard'
import Volvotable from '../components/Volvotable'
import Volvomap from '../components/Volvomap'
import Aboutvolvo from '../components/Aboutvolvo'
import Volvodealerprofile from '../components/Volvodealerprofile'


const Volvo = () => {
  return (
    <>
       <Appbar />
     <Container maxWidth='2000' sx={{paddingTop:'70px', width:'90%' }}>
       <Volvointro/>
      <Volvocard/>
      <Volvotable/>
      <Volvodealerprofile/>
      <Volvomap/>
      <Aboutvolvo/>
     </Container>
    </>
  )
}

export default Volvo