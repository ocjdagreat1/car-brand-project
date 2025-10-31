import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import Benz from "../assets/car-images/benz1.jpg"
import Ford from "../assets/car-images/ford3.jpg"
import Toyota from "../assets/car-images/toyota1.jpg"
import Peugeot from "../assets/car-images/peugeot1.jpg"
import Volvo from "../assets/car-images/volvo1.jpg"
import LandRover from "../assets/car-images/landrover1.jpg"

const slides = [
  {
    image:Benz,
    model: 'Mercedes-Benz Vision Iconic ',
    subtitle: "450 hp 2025",
    note: "Lease Prices Increase by up to $80/mo on Nov. 4",
  },
  {
    image:Toyota,
    model: "Toyota RAV4 Hybrid(NA)",
    subtitle: "230 hp 2.5 E-CVT",
    note: "Advanced technology meets rugged utility",
  },
  {
    image:Peugeot,
    model: "Peugeot E-308 SW",
    subtitle: "156 hp ",
    note: "A recreational, sporty toy of the people",
  },
  {
    image:Volvo,
    model: "Volvo S90 Recharge T8 AWD Geartronic",
    subtitle: "392hp",
    note: " focused on growing on the export markets",
  },
  {
    image:LandRover,
    model: "Land Rover Defender Octa Automatic ",
    subtitle: "635hp, 2025",
    note: "Advanced technology matched with premium comfort and design",
  },
  {
    image:Ford,
    model: "Ford Mondeo 2.0 EcoBoost SelectShift ",
    subtitle: "238hp, 2022",
    note: "Unmatched strength and speed",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ position: "relative", height: "100vh",mt:5, overflow: "hidden" }}>
      {/* Slide Image */}
      <Box
        component="img"
        src={slides[index].image}
        alt="slide"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          transition: "opacity 1s ease-in-out",
        }}
      />

      {/* Centered Content */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
        }}
      >
       <Typography
          variant="h4"
          sx={{ mb: 1, fontWeight: "bold", textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}
        >
          {slides[index].model}
        </Typography>

        {/* Text */}
        <Typography
          variant="h5"
          sx={{ mb: 1, fontWeight: "bold", textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}
        >
          {slides[index].subtitle}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mb: 4,
            opacity: 0.9,
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {slides[index].note}
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#3b82f6",
              px: 4,
              py: 1,
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": { bgcolor: "#2563eb" },
            }}
          >
            Order Now
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "black",
              px: 4,
              py: 1,
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": { bgcolor: "#f3f4f6" },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Arrows */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 20,
          transform: "translateY(-50%)",
          color: "white",
          bgcolor: "rgba(0,0,0,0.4)",
          "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          color: "white",
          bgcolor: "rgba(0,0,0,0.4)",
          "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 25,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: i === index ? "white" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
