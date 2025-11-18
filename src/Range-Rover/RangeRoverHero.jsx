
import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  Paper,
} from "@mui/material";
import { Link, Links } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import "../pages/Inspection/style.css"

const ToyotaDashboard = () => {
  return (
    
    <Box sx={{ display: "flex", margin:0, padding:0,}}>
     
      <Box sx={{ flex: 1, paddingTop: 12, paddingLeft:0, }}>
        <Typography
          className="short-underline"
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Land Rover 
        </Typography>

        {[
          { series: "Country Of Origin", Image: "https://s.car.info/g/flags/svg/mini/gb.svg", year: "United Kingdom" },
          { series: "Model Year", year: "1946-"},
          { series: "Series", year: "13" },
        ].map((row, index) => (
           <Box
           key={index}
          sx={{
              bgcolor: "#ffff",
              
              mb: 3,
              p: 0,
              pl:0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              "&:hover": { bgcolor: "#2c2c2c" },
              borderBottom:'0.5px solid #2c2c2c'
            }}
            elevation={0}>
            <Typography>{row.series}</Typography>
            <Typography>{row.image}</Typography>
            <Typography>{row.year}</Typography>
          </Box>
        ))}
      </Box>
       <Box
        sx={{
          width:'50%',
          bgcolor: "#ffff",
          p: 3,
          display: "grid",
        }}
      >
        <Box
          component="img"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEhUTEhIVFhUVGBgYGRYRFxgYFRgYFhUWFxUVGBgaHSohGxwlGxUXIjEhJSotLi4wFyAzODMtNyguLisBCgoKDg0OGxAQGismICItLTItLS0tMjItKy03LS0vLS0rLS0tLTctLTIvLS0yLS0tLS0tLS0tLS0tLS0rLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAgMEAQj/xABOEAABAwIDBAUIBgcFBAsAAAABAAIDBBEFEiEGMUFRBxMiYXEUMkJScoGRoSMzYoKSsUNTVKKywcI0c5PS00Sj8PEVFhckJTVjg5TD0f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAC0RAQACAgEDAgIKAwAAAAAAAAABAgMRIQQSMUFRgbETFCJhkZKh0eHwQnHB/9oADAMBAAIRAxEAPwDcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBF1VNVHGM0j2sHN7g0fEqPdtBB6GeT+6je5v47ZfmglUUK7G5D5lM7/3Xsb/CXH5LrOJ1R9CFvi57/wClqCeRV01lWf0kI8IXfzlXHyqq/XN90Q/zILIirRrKn9c3/DH/AOoMRqh6cR8YnfykQWVFXW4zUDeyJ3gXN/zLujx93pQH7j2u/iyoJxFGR45CfOzs9tjrfiFx817aeqjfqx7XeyQfyQdyIiAiIgIiICIiAiIgIiICIhQF1zztY0ue4NaN5cQAPeVGy4o59204DuBlffqx7NtZD4WHeo7EZaanb19ZMNNz5yNDyjYNAe5ov4oJB+Ml31ETn/bk+jj9xIzO9zbd66XxTv8ArJyB6sAyD3uN3+8EKjVXSLPUPMWF0b5nfrZmnKOR6sEEDve5vgofGcNmdrjOLNiB18lhOd9j6PUxae8h3io2ynLHpz/fdcq/HcKpXHrJousG8Amab32zP+KhKjpRgLslNS1EzuFw1gPgLud+6qqzFcIp9KbD31BH6SteGsPeI2Ag+9oXyXb/ABDLlhMF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"
          alt="Land Rover Logo"
          sx={{
            width: "18vh",
            height: "14vh",
            borderRadius: 2,
            mt:"auto",
            paddingTop:12,
            marginLeft:"auto",
          }}
          />
        <Box> 
          
          <Box
          sx={{
              bgcolor: "#ffff",
              
              mb: 3,
              p: 0,
              display: "grid",
              justifyContent:"space-between",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              "&:hover": { bgcolor: "#2c2c2c" },
              borderBottom:'0.5px solid #2c2c2c'
            }}
            elevation={0}>
            <Typography>Registered in Sweden</Typography>
            <Typography>20,660</Typography>
          </Box>
          <Box
          sx={{
              bgcolor: "#ffff",
              
              mb: 3,
              p: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              "&:hover": { bgcolor: "#2c2c2c" },
              borderBottom:'0.5px solid #2c2c2c'
            }}
            elevation={0}>
            <Typography>Current Classifieds</Typography>
            <Typography>2,472</Typography>
          </Box>
          
        </Box>
        
         
      </Box>

    </Box>
  );
};

export default ToyotaDashboard;