import React, { useRef, useState } from "react";
import { Box, Button, Typography, Container, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import DrivingVideo from "../assets/car-images/driving.mp4";
import RedCarImage from "../assets/car-images/carwoman.avif";

const TeslaFeaturesSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoToggle = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2, // ✅ gap between video and image
          width: "100%",
        }}
      >
        {/* LEFT SECTION - VIDEO */}
        <Box
          sx={{
            position: "relative",
            flex: 2,
            height: { xs: 400, md: 550 },
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          <video
            ref={videoRef}
            src={DrivingVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* ✅ Play Button Overlay */}
          <IconButton
            onClick={handleVideoToggle}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(255,255,255,0.75)",
              width: 70,
              height: 70,
              borderRadius: "50%",
              "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
            }}
          >
            <PlayArrowIcon sx={{ fontSize: 45, color: "#000" }} />
          </IconButton>

          {/* TEXT + BUTTONS */}
          <Box
            sx={{
              position: "absolute",
              bottom: 30,
              left: 30,
              color: "#fff",
              pb: 1, // ✅ slight gap from edge
            }}
          >
            <Typography variant="h4" fontWeight={600} sx={{ mb: 2 }}>
              Full Self-Driving (Supervised)
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3b82f6",
                  textTransform: "none",
                  px: 3,
                }}
              >
                Demo Drive
              </Button>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  textTransform: "none",
                  px: 3,
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>

        {/* RIGHT SECTION - IMAGE */}
        <Box
          sx={{
            position: "relative",
            flex: 1,
            height: { xs: 400, md: 550 },
            backgroundImage: `url(${RedCarImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
          }}
        >
          {/* TEXT + BUTTON */}
          <Box
            sx={{
              position: "absolute",
              bottom: 30,
              left: 30,
              color: "#fff",
              pb: 1, // ✅ slight spacing from bottom
            }}
          >
            <Typography variant="h4" fontWeight={600} sx={{ mb: 2 }}>
              Features That Come Standard
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3b82f6",
                textTransform: "none",
                px: 3,
              }}
            >
              Discover
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TeslaFeaturesSection;
