import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Contact() {
  return (
    <Box
      sx={{
        backgroundColor: '#AA6C39', // Light gold background
        padding: '40px',
        borderRadius: '16px', // Curved edges
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '0 auto',
        marginTop: '40px',
      }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          color: '#000', // Black color for the title
          marginBottom: '20px',
          fontFamily: 'Roboto',
        }}
      >
        Spendyze
      </Typography>

      {/* Contact Information */}
      <Typography variant="h6" sx={{ color: '#000', marginBottom: '10px' }}>
        Founder: John Doe
      </Typography>
      <Typography variant="body1" sx={{ color: '#000', marginBottom: '10px' }}>
        Address: 123 Spendyze Lane, City, Country
      </Typography>
      <Typography variant="body1" sx={{ color: '#000', marginBottom: '10px' }}>
        Contact Number: +1 (234) 567-8901
      </Typography>
      <Typography variant="body1" sx={{ color: '#000', marginBottom: '10px' }}>
        Email: info@spendyze.com
      </Typography>
    </Box>
  );
}
