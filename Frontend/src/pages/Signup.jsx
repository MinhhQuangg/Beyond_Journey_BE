import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  ThemeProvider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import theme from "../context/theme";
import logo from "../assets/logobackground.jpg";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    trigger,
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/v1/users/signup",
        data
      );
      if (response.data.status === "success") navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#f5f5f2", // Light background
          padding: "20px",
        }}
      >
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
        <Box
          sx={{
            width: "100%",
            maxWidth: "500px",
            padding: "40px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              mb: 2,
              textAlign: "left",
              fontSize: "30px",
              fontWeight: "bold",
              mb: "6px",
            }}
          >
            Sign up for BeyondJourney
          </Typography>
          <Typography sx={{ mb: "20px", textAlign: "left", fontSize: "13px" }}>
            Already have an account?{" "}
            <Link
              component="button"
              onClick={() => navigate("/login")}
              sx={{ color: "#3991cd" }}
              underline="hover"
            >
              Log in
            </Link>
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* First Name */}
            <Typography
              sx={{
                pb: "12px",
                textAlign: "left",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              First Name
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              {...register("firstName", { required: "First Name is required" })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              onBlur={() => trigger("firstName")}
            />
            <Typography
              sx={{
                pb: "12px",
                textAlign: "left",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Last Name
            </Typography>

            {/* Last Name */}
            <TextField
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              {...register("lastName", { required: "Last Name is required" })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              onBlur={() => trigger("lastName")}
            />
            <Typography
              sx={{
                pb: "12px",
                textAlign: "left",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Phone Number
            </Typography>

            {/* Phone Number */}
            <TextField
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              {...register("phoneNumber", {
                required: "Phone Number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number must contain only numbers",
                },
                minLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
              })}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              onBlur={() => trigger("phoneNumber")}
            />

            {/* Email */}
            <Typography
              sx={{
                pb: "12px",
                textAlign: "left",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Email
            </Typography>
            <TextField
              variant="outlined"
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

            {/* Password */}
            <Typography
              sx={{
                pb: "12px",
                textAlign: "left",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Password
            </Typography>
            <TextField
              type="password"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
              onBlur={() => trigger("password")}
            />

            {/* Confirm Password */}
            <Typography
              sx={{
                pb: "12px",
                textAlign: "left",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Confirm Password
            </Typography>
            <TextField
              type="password"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              {...register("passwordConfirm", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
              onBlur={() => trigger("passwordConfirm")}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                py: 1.5,
                fontWeight: "bold",
                marginTop: 2,
                backgroundColor: "#3991cd",
                ":hover": { backgroundColor: "#5d5a7d" },
              }}
              disabled={!isValid}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SignUp;
