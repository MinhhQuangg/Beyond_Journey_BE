import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toursquare } from "../assets";
import {
  showToastError,
  showToastSuccess,
} from "../components/common/ShowToast";

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
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/v1/users/signup",
        data
      );
      if (response.data.status === "success") {
        showToastSuccess(response.data.status);
        navigate("/login");
      }
    } catch (err) {
      showToastError(err.response?.data?.message);
      setErrorMessage(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#f5f5f2",
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
          src={toursquare}
          alt="Logo"
          style={{ width: "40%", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </Box>
      <Box
        sx={{
          width: "25%",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            fontSize: "36px",
            fontWeight: "bold",
            mb: "18px",
          }}
        >
          Sign up
        </Typography>
        <Typography sx={{ mb: "20px", textAlign: "left", fontSize: "16px" }}>
          Already have an account? &nbsp;
          <Typography
            component="button"
            onClick={() => navigate("/login")}
            sx={{ color: "#3991cd" }}
          >
            Log in
          </Typography>
        </Typography>

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

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <Typography
            sx={{
              pb: "12px",
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Name
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            sx={{ mb: 2 }}
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
            onBlur={() => trigger("name")}
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

          <TextField
            variant="outlined"
            size="small"
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
            size="small"
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
            size="small"
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
          <Box display="grid" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                fontWeight: "bold",
                padding: "5px 30px",
                borderRadius: "50px",
                fontSize: "16px",
                marginTop: 2,
                bgcolor: "#15919B",
                ":hover": { bgcolor: "#0C6478" },
              }}
              disabled={!isValid}
            >
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
