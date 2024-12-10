import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toursquare } from "../assets";
import {
  showToastError,
  showToastSuccess,
} from "../components/common/ShowToast";

export const Login = () => {
  const formContext = useForm();
  const { register, handleSubmit, formState, watch } = formContext;
  const { errors } = formState;
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
      showToastSuccess(response.data.status);
    } catch (err) {
      showToastError(err.response?.data?.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const email = watch("email");
  const password = watch("password");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "100vh",
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
          <Typography sx={{ mb: 2, textAlign: "left", fontSize: "16px" }}>
            Need an account? &nbsp;
            <Typography
              component="button"
              onClick={() => navigate("/signup")}
              sx={{ color: "#3991cd" }}
            >
              Create an account
            </Typography>
          </Typography>
        </Box>
        <form>
          <Box marginBottom="15px">
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
            <TextField
              variant="standard"
              size="small"
              type="email"
              fullWidth
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
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
              variant="standard"
              size="small"
              type={showPassword ? "text" : "password"}
              fullWidth
              sx={{ mb: 2 }} // Margin bottom for spacing
              {...register("password", { required: "Password is required" })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              {...register("remember")}
              sx={{ p: 0.5, color: "#15919B" }}
            />
            <Typography sx={{ fontSize: "14px" }}>Remember me</Typography>
          </Box>
          <Box display="grid" justifyItems="center">
            <Button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              sx={{
                bgcolor: "#15919B",
                ":hover": { bgcolor: "#0C6478" },
                fontWeight: "bold",
                borderRadius: "20px",
                fontSize: "16px",
                margin: "30px 0 20px 0",
                width: "70%",
                padding: "5px 30px",
              }}
              disabled={
                loading ||
                !email ||
                !password ||
                !!errors.email ||
                !!errors.password
              }
            >
              LOG IN
            </Button>
          </Box>
        </form>
        <Typography
          sx={{
            fontSize: "16px",
            mb: "28px",
            color: "#3991cd",
          }}
          component="button"
          onClick={() => navigate("/forgotpassword")}
        >
          Forgot password?
        </Typography>
        <Divider />
        <Box sx={{ pt: "20px" }}>
          <Typography sx={{ fontSize: "13px", paddingBottom: "10px" }}>
            Or, if you created your account with Google:
          </Typography>
          <Box display="grid" justifyItems="center" color="black">
            <Button
              sx={{
                padding: " 0 18px",
                fontSize: "12px",
                borderColor: "#ddd",
                border: "1px solid #ddd",
                borderRadius: "20px",
                color: "black",
              }}
            >
              <Box display="absolute">
                <img
                  src="https://img.icons8.com/color/24/000000/google-logo.png"
                  alt="Google"
                />
              </Box>
              &nbsp; Continue with Google
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
