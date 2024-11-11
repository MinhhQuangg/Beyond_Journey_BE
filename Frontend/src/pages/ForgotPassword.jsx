import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toursquare } from "../assets";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    reset,
  } = useForm({ mode: "onChange" });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/v1/users/forgotPassword",
        data
      );
      if (response.data.status === "success") {
        setSuccessMessage(
          "Success! Please check your email for reset instructions."
        );
        setErrorMessage("");
        reset({ email: "" });
      }
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "An error occurred.");
      setSuccessMessage("");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
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
          src={toursquare}
          alt="Logo"
          style={{ width: "40%", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </Box>
      {/* Main Content Box */}
      <Box
        sx={{
          width: "20%",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          textAlign: "left",
        }}
      >
        {/* Header */}
        <Typography
          fontWeight="bold"
          gutterBottom
          sx={{ mb: "18px", fontSize: "36px" }}
        >
          Forgot your password
        </Typography>

        {/* Instructions */}
        <Box sx={{ mb: "36px" }}>
          <Typography variant="body1" color="textSecondary" textAlign="left">
            Fear not. Please enter your email address. We'll email you
            instructions to reset your password.
          </Typography>
        </Box>

        {/* Display success message if present */}
        {successMessage && (
          <Typography
            sx={{
              color: "green",
              fontSize: "14px",
              textAlign: "left",
              mb: 2,
            }}
          >
            {successMessage}
          </Typography>
        )}

        {/* Display error message if present */}
        {errorMessage && (
          <Typography
            sx={{
              color: "red",
              fontSize: "14px",
              textAlign: "left",
              mb: 2,
            }}
          >
            {errorMessage}
          </Typography>
        )}

        <Box margin="40px 0">
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
          <TextField
            variant="standard"
            size="small"
            fullWidth
            sx={{ mb: 2 }}
            {...register("email", {
              required: "Email is required",
              validate: (value) =>
                value.includes("@") || 'Email must include "@"',
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            onBlur={() => trigger("email")}
          />
        </Box>

        {/* Reset Password Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="primary"
            sx={{
              bgcolor: "#3991cd",
              ":hover": { bgcolor: "#5d5a7d" },
              borderRadius: "20px",
              textAlign: "center",
              fontSize: "16px",
              padding: "5px 30px",
            }}
            disabled={!isValid}
          >
            Reset Password
          </Button>

          {/* Return to Login Link */}
          <Link
            href="#"
            underline="always"
            sx={{
              mt: 1,
              color: "#3991cd",
              fontSize: "16px",
              marginLeft: "20px",
            }}
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
