import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  Rating,
  Alert,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const FeedbackForm = ({ onClose }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { ...formData, rating });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose && onClose();
    }, 3000);
    setFormData({ name: "", email: "", message: "" });
    setRating(0);
  };

  return (
    <Paper
      elevation={6}
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 3,
        width: { xs: "95vw", sm: "420px", md: "480px" },
        maxHeight: "90vh",
        overflowY: "auto"
      }}
    >
      <Typography variant={isSmall ? "h6" : "h5"} fontWeight="bold" sx={{ mb: 1, color: "#111" }}>
        Share Your Feedback
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5 }}>
        We’d love to hear your thoughts, suggestions, or any issues you’ve experienced.
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            size={isSmall ? "small" : "medium"}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            variant="outlined"
            size={isSmall ? "small" : "medium"}
            required
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={isSmall ? 3 : 4}
            variant="outlined"
            size={isSmall ? "small" : "medium"}
            required
          />

          <Box sx={{ mt: 1 }}>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              How would you rate your experience?
            </Typography>
            <Rating
              name="rating"
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              size={isSmall ? "medium" : "large"}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            size={isSmall ? "medium" : "large"}
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "#333" },
              borderRadius: 3,
              py: 1.3,
              mt: 2,
              textTransform: "none",
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", sm: "1rem" }
            }}
          >
            Submit Feedback
          </Button>

          {submitted && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Thank you for your feedback! 💬
            </Alert>
          )}
        </Stack>
      </form>
    </Paper>
  );
};

export default FeedbackForm;
