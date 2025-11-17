import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";

import CarsImage from "../assets/car-images/benz1.jpg";
import MeetingImage from "../assets/car-images/ford2.jpg";

const InfoCards = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
        <Grid container spacing={3}>

          {/* --- CARD 1 --- */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 2,
                p: 2,
                borderRadius: 2,
                height: "100%",
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
                transition: "all 0.35s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Current Offers
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore limited-time offers on  vehicles.
                </Typography>

                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 1.5,
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>

              <CardMedia
                component="img"
                image={CarsImage}
                alt="Cars"
                sx={{
                  width: { xs: "100%", md: 220 },
                  height: 250,
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />
            </Card>
          </Grid>

          {/* --- CARD 2 --- */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 2,
                p: 2,
                borderRadius: 2,
                height: "100%",
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
                transition: "all 0.35s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Annual Shareholder Meeting
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your vote shapes the future of Cars.
                </Typography>

                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 1.5,
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>

              <CardMedia
                component="img"
                image={MeetingImage}
                alt="Meeting"
                sx={{
                  width: { xs: "100%", md: 220 },
                  height: 250,
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />
            </Card>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default InfoCards;
