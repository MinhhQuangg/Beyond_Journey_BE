import React from "react";
import { NavBar } from "../components/NavBar";
import { Box, Typography } from "@mui/material";
import { Footer } from "../components/Footer";

export const Homepage = () => {
  return (
    <Box height="2000px">
      <NavBar />
      <Box sx={{ textAlign: "center", margin: "40px 0" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginTop: "10px", color: "black" }}
        >
          Find your tour
        </Typography>
        <Typography variant="body1" sx={{ color: "black", marginTop: "20px" }}>
          Have a dream destination in mind? Whether you want to follow your
          appetite to Tuscany or go wild in America's greatest national parks,
          our guided tour packages will get you there.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginBottom: "30px",
        }}
      ></Box>
      <Footer />
    </Box>
  );
};

export default Homepage;
