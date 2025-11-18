import React from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import "./style.css"


export default function InspectionBody() {
  return (
    <Box
      sx={{
        background: "#ffffff",
        px: { xs: 3, md: 10 },
        py: 6,
        fontFamily: "Inter, Arial, sans-serif",
        paddingTop:15,
      }}
    >
      {/* Title */}
      <Typography
        className="short-underline"
        sx={{
          fontSize: "34px",
          fontWeight: 700,
          color: "#1b1b1b",
          mb: "6px",
        }}
      >
        When should my car be inspected?
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          color: "#545454",
          mb: 4,
          maxWidth: "520px",
          lineHeight: "1.5",
        }}
      >
        Enter your registration number to find the date by which your car must be inspected at the latest.
      </Typography>

       <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "25px 20px",
        borderTop: "1px solid #ddd",
        borderBottom: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ marginBottom: "10px", fontWeight: 500 }}
      >
        License plate
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Select
            defaultValue="S"
            sx={{
              width: "60px",
              height: "40px",
              background: "#007bff",
              color: "white",
              fontWeight: 600,
              fontSize: "18px",
              borderRadius: "4px",
              "& fieldset": { border: "none" },
            }}
          >
            <MenuItem value="S">S</MenuItem>
            <MenuItem value="N">N</MenuItem>
          </Select>

        <TextField
          placeholder="ABC123"
          size="small"
          sx={{
            width: 200,
            backgroundColor: "white",
          }}
        />
      </Box>
    </Box>

      <Box
      sx={{
        border: "1px solid #d6a972",
        backgroundColor: "#fdf7f0",
        borderRadius: "6px",
        padding: "16px 20px",
        maxWidth: "900px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: "#8a4f19",
          fontSize: "16px",
        }}
      >
        Transportstyrelsen (The Swedish Transport Agency) does not send out a
        summons when it is time to inspect a vehicle. You yourself are responsible
        for having your car inspected at the right time.
      </Typography>
    </Box>

    

        </Box>

         );
  




}