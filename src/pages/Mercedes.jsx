import React from 'react'
import MercedesIntro from '../components/MercedesIntro'
import Benzcard from '../components/Benzcard'
import Benztable from '../components/Benztable'
import Benzmap from '../components/Benzmap'
import Aboutbenz from '../components/Aboutbenz'
import { Container } from '@mui/material'
import Appbar from '../components/Appbar'
import Benzdealerprofile from '../components/Benzdealerprofie'
import {Link} from "react-router-dom"

const Mercedes = () => {
  return (
    <>
    <Appbar/>
    <Container maxWidth='2000px' sx={{paddingTop:'70px', width:'90%' }}>
     <Link to  ="/" style={{textDecoration:"none",color:"Black"}}>Home</Link>
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