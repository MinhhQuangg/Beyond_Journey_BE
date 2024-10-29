import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import logo from "../assets/logobackground.jpg";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f2",
      }}
    >
      {/* Logo on the top-left corner */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "150px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </Box>
      {/* Main Content Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          maxWidth: 400,
          width: "100%",
        }}
      >
        {/* Header */}
        <Typography
          fontWeight="bold"
          gutterBottom
          sx={{ mb: "18px", fontSize: "36px" }}
        >
          Reset your password
        </Typography>

        {/* Instructions */}
        <Box sx={{ mb: "24px" }}>
          <Typography
            variant="body1"
            color="textSecondary"
            textAlign="left"
            sx={{ mb: "12px" }}
          >
            Fear not. We'll email you instructions to reset your password.
          </Typography>
        </Box>
        <Box sx={{ mb: "24px" }}>
          <Typography
            sx={{
              pb: "12px",
              textAlign: "left",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Email
          </Typography>
          {/* Input Field */}
          <TextField variant="outlined" fullWidth sx={{ mb: "24px" }} />
        </Box>

        {/* Reset Password Button */}
        <Box sx={{ display: "flex" }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              bgcolor: "#3991cd",
              ":hover": { bgcolor: "#5d5a7d" },
              borderRadius: "38px",
              maxWidth: "250px",
              lineHeight: "40px",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 42px",
              mr: "18px",
            }}
          >
            Reset Password
          </Button>

          {/* Return to Login Link */}
          <Link
            href="#"
            underline="always"
            sx={{ mt: 1, color: "#3991cd" }}
            onClick={() => navigate("/login")}
          >
            Return to login
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
