import React from 'react'
import { Box,Typography  } from '@mui/material'

const Description = () => {
  return (
    <Box sx={{ display:'flex',flex:1, p:4, gap:2}}>
       <Box sx={{p:2,flex:1}}>
         <Typography
         className='short-underline'
          variant="h5"
          sx={{
          
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Land Rover In Sweden
        </Typography>

        <Typography sx={{ lineHeight: 1.8,  maxWidth: "100%" }}>
          There are 20,660 registered vehicles from Land Rover in Sweden, of which 2,445 are for sale with current classifieds right now.
        </Typography>
        <Typography sx={{ mt: 3, lineHeight: 1.8,maxWidth: "100%" }}>
            <ul>
                <li>Land Rover for sale in Sweden</li>
            </ul>
             <ul>
                <li>Statistics on Land Rover passenger cars registered in Sweden</li>
            </ul>
             <ul>
                <li>Map over the distribution of Land Rover in Sweden</li>
            </ul>
        </Typography>
        
        </Box>
       

    </Box>

  )
}

export default Description