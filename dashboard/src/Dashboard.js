import React, { useState } from 'react';
import { Card, CardContent, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import pt1 from './images/pt1.jpg'
import pt2 from './images/pt2.jpg'
import pt3 from './images/pt3.jpg'
import pt4 from './images/pt4.jpg'
import pt5 from './images/pt5.jpg'
import pt6 from './images/pt6.jpg'
import pt7 from './images/pt7.jpg'
import pt8 from './images/pt8.jpg'
import pt9 from './images/pt9.jpg'



const potholesData = [
  { id: 1, image: pt1, location: 'Location A', volume: 10, cementBag: 5, price: 100 },
  { id: 2, image: pt2, location: 'Location B', volume: 20, cementBag: 10, price: 200 },
  { id: 3, image: pt3, location: 'Location A', volume: 10, cementBag: 5, price: 100 },
  { id: 4, image: pt4, location: 'Location B', volume: 20, cementBag: 10, price: 200 },
  { id: 5, image: pt5, location: 'Location A', volume: 10, cementBag: 5, price: 100 }
  // Add more data as needed
];

const Dashboard = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredPotholes = potholesData.filter(pothole =>
    pothole.location.toLowerCase().includes(search.toLowerCase())
  );

  const totalCement = filteredPotholes.reduce((total, pothole) => total + pothole.cementBag, 0);
  const totalPrice = filteredPotholes.reduce((total, pothole) => total + pothole.price, 0);

  return (
    <Card elevation={5}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" paragraph>
          This dashboard allows government authorities to manage and prioritize pothole repairs. It provides a clear overview of potholes' locations, required materials, and associated costs, enabling efficient resource allocation and monitoring.
        </Typography>
        <TextField
          label="Search by Location"
          variant="outlined"
          fullWidth
          margin="normal"
          value={search}
          onChange={handleSearchChange}
        />
        <TableContainer component={Paper} variant='outlined' >
          <Table>
            <TableHead sx={{backgroundColor:'lightgrey'}}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Image</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Location</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Volume</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Cement Bag</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPotholes.map((pothole) => (
                <TableRow key={pothole.id}>
                  <TableCell>
                    <img src={pothole.image} alt={`Pothole ${pothole.id}`} style={{ width: 100, height: 100 }} />
                  </TableCell>
                  <TableCell>{pothole.location}</TableCell>
                  <TableCell>{pothole.volume}</TableCell>
                  <TableCell>{pothole.cementBag}</TableCell>
                  <TableCell>R{pothole.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Card mt={2} variant='outlined' sx={{mt:5}}>
          <CardContent>
          <Typography variant="h6">Total Cement Bag Required: {totalCement}</Typography>
          <Typography variant="h6">Total Price Required: R{totalPrice}</Typography>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
