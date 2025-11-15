import React from 'react'
import MercedesIntro from '../components/MercedesIntro'
import Benzcard from '../components/Benzcard'
import Benztable from '../components/Benztable'
import Benzmap from '../components/Benzmap'
import Aboutbenz from '../components/Aboutbenz'
import { Container } from '@mui/material'
import Appbar from '../components/Appbar'
import Benzdealerprofile from '../components/Benzdealerprofie'

const Mercedes = () => {
  return (
    <>
    <Appbar/>
    <Container maxWidth='2000px' sx={{paddingTop:'70px', width:'90%' }}>
     <a href="#">Home</a>
    <MercedesIntro/>
    <Benzcard />
    <Benztable/>
    <Benzdealerprofile/>
    <Benzmap/>
    <Aboutbenz/>
    </Container>
    </>
  )
}

export default Mercedes