import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Typography,
  TextField,
  CircularProgress,
  Divider,
  useMediaQuery,
  Link as MuiLink,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import Logo from "../assets/images/logo.svg";

const LoginPage = () => {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  // ✅ Responsive helper
  const isMobile = useMediaQuery("(max-width:600px)");

  // ✅ States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://students-learning-api.onrender.com/api/auth/login",
        { email, password }
      );

      const userData = res.data.user || res.data;
      const token = res.data.token;

      if (userData) {
        loginUser(userData, token);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err?.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#333",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
        px: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 1,
          width: isMobile ? "95%" : 420,
          boxShadow: 4,
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
          <Typography variant="h6" fontWeight={600} sx={{ color: "white" }}>
            {!error ? "Login Here" : error}
          </Typography>
        </Box>

        {/* FORM CONTENT */}
        <Box sx={{ padding: 3 }}>
          <Typography fontSize={14} fontWeight={600} mb={0.5}>
            Email
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            sx={{ mb: 2 }}
          />

          <Typography fontSize={14} fontWeight={600} mb={0.5}>
            Password
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            sx={{ mb: 2 }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              backgroundColor: "#495057",
              textTransform: "none",
              fontWeight: 600,
              mb: 2,
              ":hover": { backgroundColor: "black" },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </Button>

          <Button
            fullWidth
            variant="contained"
            startIcon={<GoogleIcon />}
            sx={{
              backgroundColor: "#d64937",
              textTransform: "none",
              fontWeight: 600,
              mb: 2,
              ":hover": { backgroundColor: "#bf3d2f" },
            }}
          >
            Google
          </Button>

          <Button
            fullWidth
            variant="contained"
            startIcon={<FacebookIcon />}
            sx={{
              backgroundColor: "#3b5998",
              textTransform: "none",
              fontWeight: 600,
              mb: 2,
              ":hover": { backgroundColor: "#334c86" },
            }}
          >
            Facebook
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<AppleIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderWidth: 2,
              ":hover": { borderWidth: 2, backgroundColor: "#f5f5f5" },
              mb: 2,
            }}
          >
            Apple
          </Button>

          <Divider sx={{ my: 2 }} />

          <Typography fontSize={14} textAlign="center" mt={1} color="#000000cc">
            No account?{" "}
            <MuiLink
              component={RouterLink}
              to="/register"
              sx={{
                color: "rgba(255,0,0,1)",
                textDecoration: "none",
                fontWeight: 600,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Click here to register
            </MuiLink>
          </Typography>

          <Typography fontSize={14} textAlign="center" mt={1} color="#000000cc">
            Forgot your password?{" "}
            <MuiLink
              component={RouterLink}
              to="/reset-password"
              sx={{
                color: "rgba(255,0,0,1)",
                textDecoration: "none",
                fontWeight: 600,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Reset it here
            </MuiLink>
          </Typography>

          <Typography fontSize={13} textAlign="center" mt={3} color="#00000099">
            <MuiLink
              component={RouterLink}
              to="/"
              sx={{
                color: "#555",
                textDecoration: "none",
                fontWeight: 600,
                "&:hover": {
                  color: "#000",
                  textDecoration: "underline",
                },
              }}
            >
              ← Back to Home
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
