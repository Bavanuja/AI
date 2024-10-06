import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

export default function Feature() {
  const features = [
    {
      image: 'home.jpg', // Replace with actual image URL
      description: 'Update your income and expenses',
    },
    {
      image: 'report.jpg',
      description: 'Get the report of you financialization',
    },
    {
      image: 'ai.jpg',
      description: 'Feel free to get AI advice',
    },
    {
      image: 'profie.jpg',
      description: 'Set your profile as your comfort',
    },
  ];

  return (
    
    <Box
      sx={{
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
        <Typography
        sx={{
            color: '#C39177',
            marginBottom:'50px', 
            fontFamily:'roboto', 
            fontSize: '30px'
            }}>
                Features
        </Typography>
      <Grid container spacing={2}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3}
           key={index}
           > 
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
              }}
            >
              {/* Image */}
              <img
                src={feature.image}
                alt={`Feature ${index + 1}`}
                style={{
                  width: '200px',
                  height: '400px',
                  objectFit: 'cover',
                  marginBottom: '20px',
                  borderRadius: '8px',
                  border: '2px solid #AA6C39'
                }}
              />

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'roboto',
                  fontSize: '20px',
                  color: '#AA6C39',
                  maxWidth: '200px', // Limit text width for readability
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
