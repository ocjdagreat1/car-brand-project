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
          Toyota In Sweden
        </Typography>

        <Typography sx={{ lineHeight: 1.8,  maxWidth: "100%" }}>
          There are 477,617 registered vehicles from Toyota in Sweden, of which 17,532 are for sale with current classifieds right now.
        </Typography>
        <Typography sx={{ mt: 3, lineHeight: 1.8,  maxWidth: "100%" }}>
            <ul>
                <li>Toyota for sale in Sweden</li>
            </ul>
             <ul>
                <li>Statistics on Toyota passenger cars registered in Sweden</li>
            </ul>
             <ul>
                <li>Map over the distribution of Toyota in Sweden</li>
            </ul>
        </Typography>
        
        </Box>
       <Box sx={{p:2,flex:1}}>
         <Typography
         className='short-underline'
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
            
          }}
        >
          About Toyota
        </Typography>


        <Typography sx={{ lineHeight: 1.8,  maxWidth: "100%" }}>
          The first Toyota, an   AA was built in 1936, but the company was founded in 1937 and is today one of the world's largest car makers. During the 40s and 50s Toyota were predominantly making cars for its domestic market and East Asia, but the Crown was introduced in the USA 1957, and some years later in Europe. Toyota, like many of the Japanese brands, were looked upon as odd cars in Europe and the US for many years, but through persistence and by  gaining a well deserved reputation for quality, Toyota is today one of the largest car makers in the world.
        </Typography>

        <Typography sx={{ mt: 3, lineHeight: 1.8,  maxWidth: "100%" }}>
           1997 the Toyota Priuswas launched, the world's first mass produced hybrid car, and it with it Toyota has been a couple of steps ahead of the competition in terms of making more environmentally friendly cars, a lead that other car makers are catching up right now. 
        </Typography>
        

        <Typography sx={{ lineHeight: 1.8, maxWidth: "100%" }}>
          The first Toyota, an   AA was built in 1936, but the company was founded in 1937 and is today one of the world's largest car makers. During the 40s and 50s Toyota were predominantly making cars for its domestic market and East Asia, but the Crown was introduced in the USA 1957, and some years later in Europe. Toyota, like many of the Japanese brands, were looked upon as odd cars in Europe and the US for many years, but through persistence and by  gaining a well deserved reputation for quality, Toyota is today one of the largest car makers in the world.
        </Typography>

        <Typography sx={{ mt: 3, lineHeight: 1.8, maxWidth: "100%" }}>
           1997 the Toyota Priuswas launched, the world's first mass produced hybrid car, and it with it Toyota has been a couple of steps ahead of the competition in terms of making more environmentally friendly cars, a lead that other car makers are catching up right now. 
        </Typography>
        <Typography sx={{  lineHeight: 1.8, maxWidth: "100%" }}>

            Among Toyota's most famous models you find Corolla, Crown and Land Cruiser
        </Typography>
        </Box>

    </Box>

  )
}

export default Description