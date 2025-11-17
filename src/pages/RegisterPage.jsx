import React, { useState,useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
  CircularProgress
} from "@mui/material";
import Logo from "../assets/images/logo.svg"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
const [loading,setLoading]=useState(false);
  const [error,setError]= useState(false);
  const navigate = useNavigate();

  const form ={firstName,lastName,email,password,phoneNumber,address}

const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const  data  = await axios.post(
        "https://students-learning-api.onrender.com/api/auth/",
        form
      );
      console.log(data);
      navigate("/login");
    } catch (error) {
      console.error(error);
      const errMsg =
        error.response?.data?.message ||
        error.message ||
        "Registration failed. Please try again.";
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  
  

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#2b2b2b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 400,
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
       {/* HEADER */}
               <Box
                 sx={{
                   backgroundColor: "#5b5a5aff",
                   padding: 2.5,
                   textAlign: "center",
                 }}
               >
                 <Box
                   component="img"
                   src={Logo}
                   alt="logo"
                   sx={{
                     height: 45,
                     mb: 1,
                     transition: "filter 0.3s ease",
                     "&:hover": {
                       filter:
                         "brightness(0) saturate(100%) invert(63%) sepia(98%) saturate(744%) hue-rotate(360deg) brightness(105%) contrast(101%)",
                       cursor: "pointer",
                     },
                   }}
                 />
                 <Typography variant="h6" fontWeight={600} sx={{color:"white"}}>
                   {error ? error : "Register New Account"}
                   
                 </Typography>
               </Box>

        <Divider />

        {/* Form */}
        <Box sx={{ p: 3 }}>
          <form onSubmit={handleRegister}>
            <TextField
              label="Firstname"
              name="firstname"
              value={firstName}
               onChange={(e) => setFirstName(e.target.value)}
              fullWidth
              size="small"
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Lastname"
              name="lastname"
              value={lastName}
               onChange={(e) => setLastName(e.target.value)}
              fullWidth
              size="small"
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="E-mail"
              name="email"
              type="email"
              value={email}
               onChange={(e) => setEmail(e.target.value)}
              fullWidth
              size="small"
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={password}
               onChange={(e) => setPassword(e.target.value)}
              fullWidth
              size="small"
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Phonenumber"
              name="phonenumber"
              value={phoneNumber}
               onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Address"
              name="address"
              value={address}
               onChange={(e) => setAddress(e.target.value)}
              fullWidth
              size="small"
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              fullWidth
              sx={{
                textTransform: "none",
                fontWeight: 500,
                py: 1,
                backgroundColor: "#3b3b3b",
                "&:hover": { backgroundColor: "#2a2a2a" },
              }}
            >
             {loading ? <CircularProgress size={24} color="inherit" /> : "Click to Register"}
            </Button>
          </form>

          {/* Footer */}
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              textAlign: "center",
              color: "black",
              fontSize: "0.9rem",
            }}
          >
            Do you already have an account?{" "}
            <a
              href="/login"
              style={{ color: "#f9a825", textDecoration: "none" }}
            >
              click here to login
            </a>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
