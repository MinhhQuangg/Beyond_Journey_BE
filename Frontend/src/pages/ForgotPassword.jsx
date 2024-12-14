import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toursquare } from "../assets";
import {
  showToastError,
  showToastSuccess,
} from "../components/common/ShowToast";

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
        showToastSuccess(response.data.success);
        setErrorMessage("");
        reset({ email: "" });
      }
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "An error occurred.");
      setSuccessMessage("");
      showToastError(err.response?.data?.message);
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
          top: "40px",
          left: "40px",
        }}
      >
        <img
          src={toursquare}
          alt="Logo"
          style={{ cursor: "pointer" }}
          className="w-[170px] h-[150px]"
          onClick={() => navigate("/")}
        />
      </Box>
      {/* Main Content Box */}
      <Box
        sx={{
          width: "25%",
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // padding: "0 20px",
          }}
        >
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="primary"
            sx={{
              bgcolor: "#15919B",
              ":hover": { bgcolor: "#0C6478" },
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
