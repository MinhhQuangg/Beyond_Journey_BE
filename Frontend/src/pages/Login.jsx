import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Checkbox,
  Divider,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logobackground.jpg";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    setLoading(true); // Set loading to true
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        data
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const email = watch("email");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#f5f5f2",
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

      {/* Centered Login Form */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "350px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ mb: "30px" }}>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "36px",
              fontWeight: "bold",
              mb: "18px",
            }}
          >
            Log in
          </Typography>
          <Typography sx={{ mb: 2, textAlign: "left", fontSize: "13px" }}>
            Need an account?{" "}
            <Link
              component="button"
              onClick={() => navigate("/signup")}
              sx={{ color: "#3991cd" }}
              underline="hover"
            >
              Create an account
            </Link>
          </Typography>
        </Box>
        <Typography
          sx={{
            mb: "12px",
            textAlign: "left",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Username or Email
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            sx={{ mb: "24px", paddingRight: "15px", minHeight: "46px" }}
            OutlinedInput={{ sx: { fontSize: "0.875rem" } }}
            {...register("email", {
              required: "Email is required",
              validate: (value) =>
                value.includes("@") || "Email must contain an @ symbol",
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
            onBlur={() => trigger("email")}
          />
          <Typography
            sx={{
              mb: "12px",
              textAlign: "left",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Password
          </Typography>
          <TextField
            type={showPassword ? "text" : "password"}
            fullWidth
            sx={{ mb: "24px", paddingRight: "15px" }}
            InputProps={{
              sx: { fontSize: "0.875rem" },
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={togglePasswordVisibility}
                    edge="end"
                    sx={{ minWidth: 0, color: "#3991cd" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                </InputAdornment>
              ),
            }}
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
          />

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Checkbox
              {...register("remember")}
              sx={{ p: 0.5, color: "#3991cd" }}
            />
            <Typography sx={{ fontSize: "16px" }}>Keep me logged in</Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              fontWeight: "bold",
              backgroundColor: "#3991cd",
              ":hover": { backgroundColor: "#5d5a7d" },
              fontSize: "16px",
              mb: "30px",
            }}
            disabled={loading || !email || !!errors.email || !!errors.password}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Log in"
            )}
          </Button>
        </form>
        <Link
          sx={{
            fontSize: "14px",
            mb: "28px",
            color: "#3991cd",
          }}
          component="button"
          onClick={() => navigate("/login/forgot")}
          underline="hover"
        >
          Forgot password?
        </Link>
        <Divider />
        <Box sx={{ pt: "20px" }}>
          <Typography sx={{ fontSize: "13px", paddingBottom: "10px" }}>
            Or, if you created your account with Google:
          </Typography>

          <Button
            fullWidth
            sx={{
              lineHeight: "1.75",
              fontWeight: "bold",
              fontSize: "12px",
              color: "#3991cd",
              borderColor: "#ddd",
              backgroundColor: "#fff",
              ":hover": { backgroundColor: "#f5f5f5" },
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50px",
            }}
          >
            <img
              src="https://img.icons8.com/color/24/000000/google-logo.png"
              alt="Google"
            />
            &nbsp; Continue with Google
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
