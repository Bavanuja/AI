import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function About() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Full screen height
        textAlign: 'center',
        padding: '20px',
      }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize:'200px',
          color: '#AA6C39 ', // Gold color
          marginBottom: '20px',
        }}
      >
        Spendyze
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.2rem',
          fontFamily: 'Arial',
          color: '#333', // Elegant dark gray
          maxWidth: '600px', // Restrict the width for better readability
          marginBottom: '30px',
        }}
      >
        Spendyze is your ultimate expense management tool. Effortlessly track your spending, manage your income, and stay on top of your financial goals, all in one place.
      </Typography>

      {/* Visit App Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#864E22', // Gold color
          color: '#ffffff',
          fontFamily: 'Roboto',
          fontSize: '1rem',
          padding: '10px 20px',
          '&:hover': {
                backgroundColor: '#C39177', // Slightly darker gold on hover
              },
        }}
      >
        Visit App
      </Button>
    </Box>
  );
}
