import React, { useEffect } from 'react';
import { Box, Typography, Button, TextField, Select, MenuItem, IconButton,FormControl, InputLabel } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/tourname.jpg'
import { useNavigate } from 'react-router-dom'; 


export const Homepage = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/v1/tours/top-5-cheap');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
        <Box sx={{ minHeight: '100vh', padding: '20px' }}>
          
          <Box
            component="header"
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 1000,
              backgroundColor: 'white',
              padding: '10px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto'}} />

            <Box sx={{ display: 'flex', gap: 8 }}>
              <Button>Destinations</Button>
              <Button>Travel Lists</Button>
              <Button>Travel Deals</Button>
              <Button>About Us</Button>
              </Box>
              <Box sx={{ display: 'flex', gap: 3}}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => navigate('/login')}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
            
          </Box>

          {/* Main Banner */}
          <Box sx={{ textAlign: 'center', margin: '40px 0' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '10px', color: 'black' }}>
              Find your tour
            </Typography>
            <Typography variant="body1" sx={{ color: 'black', marginTop: '20px' }}>
              Have a dream destination in mind? Whether you want to follow your appetite to Tuscany or go wild in America's greatest national parks, our guided tour packages will get you there.
            </Typography>
          </Box>

          {/* Filters with Dropdowns */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: '30px' }}>
            <FormControl variant="outlined" sx={{ minWidth: 150 }}>
              <InputLabel>Destinations</InputLabel>
              <Select label="Destinations">
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Africa">Africa</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: 150 }}>
              <InputLabel>Dates</InputLabel>
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: 150 }}>
              <InputLabel>Duration</InputLabel>
              <Select label="Duration">
                <MenuItem value="1 Week">1 Week</MenuItem>
                <MenuItem value="2 Weeks">2 Weeks</MenuItem>
                <MenuItem value="1 Month">1 Month</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: 150 }}>
              <InputLabel>Price</InputLabel>
              <Select label="Price">
                <MenuItem value="$1000">$1000</MenuItem>
                <MenuItem value="$2000">$2000</MenuItem>
                <MenuItem value="$3000">$3000</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: 150 }}>
              <InputLabel>Activity level</InputLabel>
              <Select label="Activity level">
                <MenuItem value="Easy">Easy</MenuItem>
                <MenuItem value="Moderate">Moderate</MenuItem>
                <MenuItem value="Challenging">Challenging</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: 150 }}>
              <InputLabel>Sort</InputLabel>
              <Select label="Sort">
                <MenuItem value="Price Low to High">Price Low to High</MenuItem>
                <MenuItem value="Price High to Low">Price High to Low</MenuItem>
                <MenuItem value="Popularity">Popularity</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Form Section */}
         
        </Box>
  );
};

export default Homepage;
