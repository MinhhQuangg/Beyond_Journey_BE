import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Link, Checkbox, FormControlLabel, ThemeProvider } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import logo from '../Logo/toursquare.jpg'; 
import theme from '../theme';
import pic1 from './pic/pic4.jpg';
import pic2 from './pic/pic5.jpg';
import pic3 from './pic/pic6.jpg';

const images = [pic1, pic2, pic3];

export const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [bgImage, setBgImage] = useState(images[0]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000); 
    return () => clearInterval(intervalId);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    // Optionally, navigate after a successful signup
    navigate('/dashboard');  // Adjust the path according to your project
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        minHeight: '100vh',
      }}>
        {/* Left side with rotating background Image */}
        <Box
          sx={{
            width: '50%',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 0.5s ease-in-out',
          }}
        />

        {/* Right side with Sign Up Form */}
        <Box
          sx={{
            flexGrow: 1,  
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',  
          }}
        >
          <Box sx={{
            width: '100%',
            maxWidth: '400px',
            backgroundColor: '#fff',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}>
            {/* Logo at the top */}
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <img src={logo} alt="Logo" style={{ width: '128px', height: 'auto', marginBottom: '20px' }} />
            </Box>

            <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
              Create your account
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                {...register('email', { required: 'Email is required' })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />

              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                {...register('password', { required: 'Password is required' })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ''}
              />

              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                {...register('confirmPassword', { required: 'Please confirm your password' })}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
              />

              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                {...register('firstName', { required: 'First Name is required' })}
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ''}
              />

              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                {...register('lastName', { required: 'Last Name is required' })}
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ''}
              />

              <FormControlLabel
                control={<Checkbox {...register('terms', { required: 'You must agree to the terms' })} />}
                label="I agree to the Terms and Conditions"
              />
              {errors.terms && (
                <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                  {errors.terms.message}
                </Typography>
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ py: 1.5, fontWeight: 'bold' }}
              >
                Sign Up
              </Button>
            </form>

            <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
              Already have an account?{' '}
              <Link
                component="button"
                onClick={() => navigate('/login')}  // Navigate to login page
                underline="hover"
              >
                Log in here
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SignUp;
