import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import EvStationIcon from "@mui/icons-material/EvStation";

const FindYourCharge = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        textAlign: "center",
        py: 6,
        px: 2,
      }}
    >
      {/* 🌍 Interactive World Map */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: isMobile ? "300px" : "450px",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 2,
          mb: 4,
        }}
      >
        <iframe
          title="World Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d66918407.04116414!2d0!3d10!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1698012345678!5m2!1sen!2s"
        ></iframe>
      </Box>

      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
        Find Your Car Brand
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 700, mx: "auto", mb: 4 }}
      >
        View the network of  Supercars and Destination Cars available near you.
      </Typography>

      {/* Buttons */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ mb: 6, flexWrap: "wrap" }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            "&:hover": { backgroundColor: "#333" },
            px: 4,
          }}
          href="https://www.google.com/maps"
          target="_blank"
        >
          View Network
        </Button>
        <Button
          variant="outlined"
          sx={{
            backgroundColor:"black",
            color: "white",
            borderColor: "#ccc",
            px: 4,
            "&:hover": { borderColor: "black" },
          }}
          href="https://about.google/products/maps/"
          target="_blank"
        >
          Learn More
        </Button>
      </Stack>

      {/* Charger Stats */}
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent="center"
        spacing={isMobile ? 3 : 8}
        alignItems="center"
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h5" fontWeight="bold">
            34,167
          </Typography>
          <FlashOnIcon sx={{ color: "red" }} />
          <Typography color="text.secondary">Super Cars</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h5" fontWeight="bold">
            10,457
          </Typography>
          <EvStationIcon sx={{ color: "gray" }} />
          <Typography color="text.secondary">Destination Cars</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FindYourCharge;
