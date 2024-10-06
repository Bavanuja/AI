import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function StylishMessageBox() {
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    features: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <Box
      component="form"
      sx={{
        padding: '20px',
        backgroundColor: '#fff',
        textAlign: 'center',
        borderRadius: '16px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
        maxWidth: '400px',
        margin: '0 auto',
        border: '2px solid #FFD700', // Gold border for styling
        position: 'relative',
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" sx={{ marginBottom: '16px', color: '#333' }}>
        Feedback
      </Typography>

      {/* Name Field */}
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        fullWidth
        size="small"
        value={formData.name}
        onChange={handleChange}
        sx={{ marginBottom: '12px' }}
      />

      {/* Occupation Field */}
      <TextField
        label="Occupation"
        name="occupation"
        variant="outlined"
        fullWidth
        size="small"
        value={formData.occupation}
        onChange={handleChange}
        sx={{ marginBottom: '12px' }}
      />

      {/* Features to Update Field */}
      <TextField
        label="Features"
        name="features"
        variant="outlined"
        fullWidth
        multiline
        rows={2}
        size="small"
        value={formData.features}
        onChange={handleChange}
        sx={{ marginBottom: '12px' }}
      />

      {/* Feedback Field */}
      <TextField
        label="Feedback"
        name="feedback"
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        size="small"
        value={formData.feedback}
        onChange={handleChange}
        sx={{ marginBottom: '16px' }}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: '#FFD700', // Gold color for the button
          color: '#000',
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: '#FFC300',
          },
        }}
      >
        Submit
      </Button>

      {/* Decorative Shapes */}
      <Box
        sx={{
          position: 'absolute',
          width: '60%',
          height: '100%',
          top: '0',
          left: '0',
          backgroundColor: '#FFD700',
          borderRadius: '16px',
          opacity: 0.2,
          zIndex: -1,
        }}
      />
    </Box>
  );
}
