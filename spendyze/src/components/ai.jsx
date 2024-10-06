import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';

export default function AI() {
  return (
    <Box
      sx={{
        padding: '40px 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
        <Typography
        sx={{
            color: '#C39177',
            marginBottom:'50px', 
            fontFamily:'roboto', 
            fontSize: '30px'
            }}>
                AI Consultation
        </Typography>
      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="ai image.jpg" // Replace with an actual image URL
              alt="AI Consultation"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </Box>
        </Grid>

        {/* Description Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
                color: '#C39177', // Gold color for the title
              marginBottom: '20px',
              fontFamily: 'Roboto',
            }}
          >
            AI Consultation: Revolutionizing Your Finances
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#333',
              fontFamily: 'Arial',
              fontSize: '1.1rem',
              marginBottom: '20px',
              lineHeight: '1.6',
            }}
          >
            Our app features an AI-powered consultation system that provides personalized financial advice based on your spending and income patterns. Let AI guide you to better financial decisions and smarter saving strategies.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#C39177', // Gold color button
              color: '#ffffff',
              padding: '10px 30px',
              fontSize: '1rem',
              fontFamily: 'Roboto',
              '&:hover': {
                backgroundColor: '#C39177', // Slightly darker gold on hover
              },
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
