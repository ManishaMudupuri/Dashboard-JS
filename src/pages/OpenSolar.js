// src/pages/OpenSolar.js
import React from 'react';
import { Box, Typography, TextField, InputAdornment } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const OpenSolar = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
      <Box
        component="img"
        sx={{ height: 100, mb: 4 }}
        alt="Proven Energy Logo"
        src="/banner.png"
      />
      <TextField
        variant="outlined"
        placeholder="Enter new project address..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          ),
        }}
        sx={{ width: '50%' }}
      />
      <Typography variant="body2" sx={{ mt: 4 }}>
        You are using <strong>OpenSolar Lite</strong>
      </Typography>
    </Box>
  );
};

export default OpenSolar;
