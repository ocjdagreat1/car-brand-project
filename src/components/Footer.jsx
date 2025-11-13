import React from "react";
import { Box, Typography, Grid, Button, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom"; // Import from React Router
import CarLogo from "../assets/images/logo.svg";
import AppStore from "../assets/images/apple.png";
import GooglePlay from "../assets/images/google.png";


const Footer = () => {
  const links = [
    { label: "About us", path: "/AboutUs" }, 
    { label: "About cookies", path: "/cookies" },
    { label: "Digital Service Book", path: "/" },
    { label: "Inpection Date", path: "/" },
    { label: "Terms of use", path: "/terms" },
    
  ];
  

  return (
    <Box
      sx={{
        backgroundColor: "#1c1c1c",
        color: "white",
        py: 3,
        px: 2,
        textAlign: "center",
      }}
    >
      {/* App store badges */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={AppStore}
          alt="App Store"
          sx={{ height: 35, cursor: "pointer" }}
        />
        <Box
          component="img"
          src={GooglePlay}
          alt="Google Play"
          sx={{ height: 35, cursor: "pointer" }}
        />
      </Box>

      {/* Logo */}
      <Box
        component="img"
        src={CarLogo}
        alt="Car.info logo"
        sx={{
          height: 35,
          my: 2,
          transition: "filter 0.3s ease",
          "&:hover": {
            filter:
              'brightness(0) saturate(100%) invert(63%) sepia(98%) saturate(744%) hue-rotate(360deg) brightness(105%) contrast(101%)',
            cursor: "pointer",
          },
        }}
      />

     
     
      <Typography
        variant="h6"
        sx={{
          mt: 3,
          mb: 1,
          fontWeight: 600,
          letterSpacing: 1,
          color: "#ffa500",
          textTransform: "uppercase",
          textDecoration:"underline"
        }}
      >
        Quick-Navigation
      </Typography>

      {/* Links */}
      <Grid
        container
        justifyContent="center"
        spacing={6}
        sx={{
          mt: 1,
          mb: 3,
          maxWidth: "850px",
          mx: "auto",
        }}
      >
        {links.map(({ label, path }) => (
          <Grid
            item
            key={label}
            xs={12}
            sm="auto"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MuiLink
              component={Link} // React Router link
              to={path}
              underline="hover"
              sx={{
                color: "white",
                fontSize: 16,
                fontWeight: 500,
                transition: "color 0.3s",
                "&:hover": { color: "#ffa500" },
              }}
            >
              {label}
            </MuiLink>
          </Grid>
        ))}
      </Grid>

      {/* Feedback button */}
      <Button
        variant="outlined"
        size="small"
        sx={{
          borderColor: "#fff",
          color: "#fff",
          textTransform: "none",
          mt: 1,
          "&:hover": {
            borderColor: "#ffa500",
            color: "#ffa500",
          },
        }}
      >
        Give us feedback
      </Button>

      {/* Footer copyright */}
      <Typography
        variant="caption"
        sx={{
          display: "block",
          color: "#fff",
          mt: 2,
          fontSize: "0.8rem",
        }}
      >
        © 2025 Car.info. Publishers: Opara Chibuike Justine (Lead Developer) and team members.
      </Typography>
    </Box>
  );
};

export default Footer;
