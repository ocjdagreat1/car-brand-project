import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
  Container,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import USAflag from "../assets/images/us.svg";
import GermanFlag from "../assets/images/de.svg";
import FrenchFlag from "../assets/images/fr.svg";
import SwedenFlag from "../assets/images/sweden-flag.svg";
import JapanFlag from "../assets/images/jp.svg";
import EnglishFlag from "../assets/images/gb.svg";
import Volvo from "../assets/images/volvo.jpg";
import Toyota from "../assets/images/toyota.jpg";
import Benz from "../assets/images/benz.jpg";
import LandRover from "../assets/images/land-rover.jpg";
import Ford from "../assets/images/ford.jpg";
import Peugeot from "../assets/images/peugeot.jpg";

// ✅ Brand Data
const brands = [
  {
    name: "Volvo",
    year: "1927",
    logo: Volvo,
    flag: SwedenFlag,
    followers: "1.4M",
    country: "Sweden",
    slug: "volvo",
  },
  {
    name: "Peugeot",
    year: "1932",
    logo: Peugeot,
    flag: FrenchFlag,
    followers: "999.7k",
    country: "France",
    slug: "peugeot",
  },
  {
    name: "LandRover",
    year: "1948",
    logo: LandRover,
    flag: EnglishFlag,
    followers: "381.9k",
    country: "Britain",
    slug: "land-rover",
  },
  {
    name: "Ford",
    year: "1903",
    logo: Ford,
    flag: USAflag,
    followers: "980k",
    country: "United States",
    slug: "ford",
  },
  {
    name: "Toyota",
    year: "1937",
    logo: Toyota,
    flag: JapanFlag,
    followers: "2.1M",
    country: "Japan",
    slug: "toyota",
  },
  {
    name: "Mercedes Benz",
    year: "1936",
    logo: Benz,
    flag: GermanFlag,
    followers: "1.7M",
    country: "Germany",
    slug: "mercedes-benz",
  },
];

// ✅ Country List
const countries = [
  { label: "All countries", code: "" },
  { label: "Sweden", code: "se" },
  { label: "Germany", code: "de" },
  { label: "Britain", code: "gb" },
  { label: "Japan", code: "jp" },
  { label: "United States", code: "us" },
  { label: "France", code: "fr" },
];

const BrandList = () => {
  const [search, setSearch] = React.useState("");
  const [country, setCountry] = React.useState(null);
  const navigate = useNavigate();

  const filteredBrands = brands.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) &&
      (!country?.label ||
        country.label === "All countries" ||
        b.country === country.label)
  );

  const handleCardClick = (brandSlug) => {
    navigate(`/brand/${brandSlug}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h6"
        sx={{
          mt: 3,
          mb: 3,
          fontWeight: 600,
          letterSpacing: 1,
          color: "black",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Car Brands
      </Typography>

      {/* 🔍 Search and Country Filter */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          mb: 5,
        }}
      >
        <TextField
          placeholder="Search brands..."
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: 300 }}
        />

        <Autocomplete
          options={countries}
          getOptionLabel={(option) => option.label}
          value={country}
          onChange={(e, newValue) => setCountry(newValue)}
          renderOption={(props, option) => (
            <Box
              component="li"
              {...props}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              {option.code && (
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code}.png`}
                  alt=""
                />
              )}
              {option.label}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="All countries of origin"
              size="small"
              sx={{ width: 250 }}
            />
          )}
        />
      </Box>

      {/* 🧩 Brand Cards - Fixed layout */}
      <Grid container spacing={3}>
        {filteredBrands.map((brand, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              onClick={() => handleCardClick(brand.slug)}
              sx={{
                cursor: "pointer",
                textAlign: "center",
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "0.3s",
                minHeight: 250,
                maxHeight: 250,
                "&:hover": {
                  boxShadow: 6,
                  transform: "translateY(-5px)",
                },
              }}
            >
              {/* Logo Section */}
              <Box
                sx={{
                  height: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1,
                  flexShrink: 0,
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Content Section */}
              <CardContent sx={{ 
                p: 0, 
                flexGrow: 1, 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "space-between" 
              }}>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '1.1rem' }}>
                    {brand.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {brand.year}
                  </Typography>
                </Box>

                {/* Footer - Spread to both ends */}
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around", // This spreads items to both ends
                      alignItems: "center",
                      width: "100%",
                      px: 1,
                    }}
                  >
                    <Avatar
                      src={brand.flag}
                      sx={{ width: 24, height: 24,px:10 }}
                      alt={brand.country}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        bgcolor: "grey.200",
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        fontWeight: 500,
                        fontSize: '0.8rem',
                      }}
                    >
                      {brand.followers}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BrandList;