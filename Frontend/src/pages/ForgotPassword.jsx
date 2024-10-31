import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toursquare } from "../assets";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
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
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          maxWidth: "25%",
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
            Fear not. Please enter the email address. We'll email you
            instructions to reset your password.
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
          <TextField
            variant="outlined"
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
              marginLeft: "5%",
            }}
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
              marginRight: "5%",
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
