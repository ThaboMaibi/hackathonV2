import * as React from 'react';
import './index.css';
import { Grid, Typography, Stack } from '@mui/material';
import Home from './Home';

export default function App() {
  return (
    <Grid 
      container 
      spacing={1} 
      justifyContent="center" 
      alignItems="center"
    >
      <Grid item xs={12}>
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%'} }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
              mt:5
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
              Detection System
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            A demonstration on how pothole detection can be used for accurate data collection, pothole management by governments, and alerting drivers on unsafe roads.
          </Typography>
        </Stack>
      </Grid>
      <Grid 
        item 
        xs={8} 
        sx={{ justifySelf: 'center', alignSelf: 'center' }}
      >
        <Home/>
      </Grid>
    </Grid>
  );
}
