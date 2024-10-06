import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ContactSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        borderRadius: '16px',
        overflow: 'hidden', // Ensure curved edges are maintained
        margin: '0 auto',
        marginTop:'30px',
        maxWidth: '1200px', // Set a max width for the entire section
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Title Area */}
      <Box
        sx={{
          flex: '0 0 40%', // 40% width
          backgroundColor: '#8B4513', // Brown background
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#FFFFFF', // White color for the title
            textAlign: 'center',
            fontFamily: 'Roboto',
          }}
        >
          Spendyze
        </Typography>
      </Box>

      {/* Details Area */}
      <Box
        sx={{
          flex: '0 0 60%', // 60% width
          backgroundColor: '#FFFFFF', // White background
          padding: '20px',
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
          Founder: John Doe
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
          Address: 123 Spendyze Lane, City, Country
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
          Contact Number: +1 (234) 567-8901
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
          Email: info@spendyze.com
        </Typography>
      </Box>
    </Box>
  );
}
