    import React from 'react';
    import { Box, Typography, Button, TextField, ThemeProvider, Select, MenuItem, FormControl, InputLabel,IconButton } from '@mui/material';
    import SearchIcon from '@mui/icons-material/Search';
    import AccountCircleIcon from '@mui/icons-material/AccountCircle';
    import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
    import { useForm, Controller } from 'react-hook-form';
    import { DatePicker } from '@mui/x-date-pickers/DatePicker'; 
    import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; 
    import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; 
    import theme from '../theme';
    import logo from '../Logo/tourname.jpg'; 
    import { useNavigate } from 'react-router-dom'; 

    export const Homepage = () => {
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <ThemeProvider theme={theme}> 
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box sx={{ minHeight: '100vh', padding: '20px' }}>
            
            {/* Sticky Navigation Bar */}
            <Box
                component="header"
                sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',

                }}
            >
                
                <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto'}} />
                <Box sx={{gap: 8,display: 'flex'}}>
                <Typography>Destinations</Typography>
                <Button sx={{ boxShadow: 'none' }}>Travel Styles</Button>
                <Button>Travel Deals</Button>
                <Button>About Us</Button>
                </Box>
                <Box sx={{gap: 2, display:'flex'}}>
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
                Have a dream destination in mind? Whether you want to follow your appetite to Vietnam or go wild in America's greatest national parks, our guided tour packages will get you there.
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
                <InputLabel></InputLabel>
                <Controller
                    name="date"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                    <DatePicker
                        {...field}
                        label="Dates"
                        renderInput={(params) => <TextField {...params} />}
                    />
                    )}
                />
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
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Controller
                    name="destination"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                    <TextField {...field} label="Destination" variant="outlined" />
                    )}
                />
                <Controller
                    name="date"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                    <TextField {...field} label="Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
                    )}
                />
                <Controller
                    name="duration"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                    <TextField {...field} label="Duration" variant="outlined" />
                    )}
                />
                <Controller
                    name="price"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                    <TextField {...field} label="Price" variant="outlined" />
                    )}
                />
                <Controller
                    name="activityLevel"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                    <TextField {...field} label="Activity Level" variant="outlined" />
                    )}
                />
                <Button variant="contained" type="submit" color="primary">Search</Button>
                </form>
            </Box>
            </Box>
        </LocalizationProvider> 
        </ThemeProvider>
    );
    };

    export default Homepage;
