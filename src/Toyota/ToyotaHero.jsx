import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  Paper,
} from "@mui/material";
import Toyota1 from "../assets/car-images/toyota1.jpg"
import { Link, Links } from "react-router-dom";
import "../pages/Inspection/style.css"

const ToyotaDashboard = () => {
  return (
    <Box sx={{ display: "flex", margin:0, padding:0,}}>
      <Link to="/" >Home</Link>
      <Box sx={{ flex: 1, paddingTop: 12, paddingLeft:0,}}>
        <Typography
        className="short-underline"
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Toyota
        </Typography>

        {[
          { series: "Country Of Origin", year: "Japan" },
          { series: "Model Year", year: "1936-"},
          { series: "Series", year: "169" },
        ].map((row, index) => (
           <Box
           key={index}
          sx={{
              mb: 3,
              p: 0,
              pl:0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              borderBottom:'0.5px solid #2c2c2c'
            }}
            elevation={0}>
            <Typography>{row.series}</Typography>
            <Typography>{row.year}</Typography>
          </Box>
        ))}
      </Box>
       <Box
        sx={{
          width:'50%',
          p: 3,
          display: "grid",
        }}
      >
        <Box
          component="img"
          src="https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_001.jpg"
          alt="Toyota Logo"
          sx={{
            width: "18vh",
            height: "14vh",
            justifySelf:"flex-end",
            paddingTop:12,
          }}
          />
        <Box> 
         
          <Box
          sx={{
              mb: 3,
              p: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              borderBottom:'0.5px solid #2c2c2c'
            }}
            elevation={0}>
            <Typography>Registered in Sweden</Typography>
            <Typography>477,622</Typography>
          </Box>
          <Box
          sx={{
              mb: 3,
              p: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              borderBottom:'0.5px solid #2c2c2c'
            }}
            elevation={0}>
            <Typography>Current Classifieds</Typography>
            <Typography>17,442</Typography>
          </Box>
          
        </Box>
        
         
      </Box>

    </Box>
  );
};

export default ToyotaDashboard;