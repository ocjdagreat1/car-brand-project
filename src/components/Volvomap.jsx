import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './Volvomap.css'

function FreeMap() {
  return (
    <Card sx={{ maxWidth: 1300, margin: "20px auto" }}>
      <CardContent>
        <Typography className="h1" variant="h4" gutterBottom>
          Locate Mercedes Company Here
        </Typography>
        <Box sx={{ height: 450, width: "auto" }}>
          <MapContainer
            center={[48.7758, 9.1829]} 
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />
            <Marker position={[48.7758, 9.1829]}>
              <Popup>📍Mercedes-Benz company, germany</Popup>
            </Marker>
          </MapContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

export default FreeMap;