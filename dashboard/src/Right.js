import React from 'react';
import { Box, Typography, Button, TextField, Grid, Paper, Stack } from '@mui/material';

const Right = () => {
  const handleSearch = () => {
    // Implement search logic here
    console.log('Search button clicked');
  };

  return (
    <Box sx={{ padding: 4 }}>
    <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '100%' } }}>
      <Typography
        variant="h1"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignSelf: 'center',
          textAlign: 'center',
          fontSize: 'clamp(3.5rem, 10vw, 4rem)',
        }}
      >
        Road Pothole &nbsp;
        <Typography
          component="span"
          variant="h1"
          sx={{
            fontSize: 'clamp(3rem, 10vw, 4rem)',
            color: (theme) =>
              theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
          }}
        >
          Detection
        </Typography>
      </Typography>
      <Typography
        textAlign="center"
        color="text.secondary"
        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
      >
      Explore roads with a significant number of potholes. Use the search button to find specific areas, or view the embedded map below to see where potholes are most prevalent.
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignSelf="center"
        spacing={1}
        useFlexGap
        sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
      >
        <TextField
          id="outlined-basic"
          hiddenLabel
          size="small"
          variant="outlined"
          aria-label="Enter your email address"
          placeholder="Your location address"
          inputProps={{
            autoComplete: 'off',
            'aria-label': 'Enter your location address',
          }}
        />
        <Button variant="contained" color="primary">
          Search by location
        </Button>
      </Stack>
    </Stack>
      
      <Grid container spacing={2} mt={5}>
        <Grid item xs={12}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6">Pothole Summary</Typography>
            <Box mt={2} textAlign="center">
              <Typography variant="body2">
                Victoria St: 12 potholes
              </Typography>
              <Typography variant="body2">
                Another Location: 8 potholes
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.3224323740023!2d18.86849487648838!3d-33.93283427320229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb24269ca8859%3A0x52c314ae0c0e33e6!2sVictoria%20St%2C%20Stellenbosch%20Central%2C%20Stellenbosch%2C%207599!5e0!3m2!1sen!2sza!4v1723563889644!5m2!1sen!2sza" 
              width="100%" 
              height="400px" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Pothole Map"
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Right;
