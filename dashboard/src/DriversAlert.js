import React, { useState } from 'react';
import { Card, CardContent, TextField, Typography, Box, Grid, Paper } from '@mui/material';

// Mock data for potholes
const potholeData = [
  { id: 1, depth: '2 cm', location: 'Location A' },
  { id: 2, depth: '5 cm', location: 'Location B' },
  // Add more data as needed
];

const DriversAlert = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');

  const handleDepartureChange = (event) => {
    setDeparture(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  // Simulating data based on inputs
  const numberOfPotholes = potholeData.length;
  const averageDepth = numberOfPotholes > 0
    ? (potholeData.reduce((total, pothole) => total + parseFloat(pothole.depth.replace(' cm', '')), 0) / numberOfPotholes).toFixed(2)
    : 0;
  const roadSafety = numberOfPotholes > 10 ? 'Unsafe' : 'Safe';

  return (
    <Card sx={{ boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Drivers Alert
        </Typography>
        <Typography variant="body1" paragraph>
          This section provides crucial information for drivers regarding road conditions based on pothole data. By entering your departure and destination locations, you can assess road safety, including the number and average depth of potholes, to plan your journey accordingly.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Departure Location"
              variant="outlined"
              fullWidth
              margin="normal"
              value={departure}
              onChange={handleDepartureChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Destination Location"
              variant="outlined"
              fullWidth
              margin="normal"
              value={destination}
              onChange={handleDestinationChange}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography variant="h6" gutterBottom>
            Pothole Information
          </Typography>
          <Paper variant='outlined' sx={{ padding: 2 }}>
            <Typography variant="body1">Number of Potholes: {numberOfPotholes}</Typography>
            <Typography variant="body1">Average Depth: {averageDepth} cm</Typography>
            <Typography variant="body1">Road Safety: {roadSafety}</Typography>
          </Paper>
        </Box>
        <Box mt={2}>
          <Typography variant="h6" gutterBottom>
            Map
          </Typography>
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default DriversAlert;
