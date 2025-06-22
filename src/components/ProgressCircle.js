import React from 'react';
import { Box, Typography } from '@mui/material';

const ProgressCircle = ({ 
  progress = 0.75, 
  size = 40,
  color = "#1976D2",
  backgroundColor = "#E3F2FD"
}) => {
  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress * circumference);

  return (
    <Box position="relative" width={size} height={size}
      display="flex" alignItems="center" justifyContent="center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
           style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={radius} cy={radius} r={radius - 2}
                fill="none" stroke={backgroundColor} strokeWidth="4" />
        <circle cx={radius} cy={radius} r={radius - 2}
                fill="none" stroke={color} strokeWidth="4"
                strokeDasharray={circumference} 
                strokeDashoffset={offset}
                strokeLinecap="round" />
      </svg>
      <Box position="absolute">
        <Typography variant="h5" fontWeight="bold" color={color}>
          {Math.round(progress * 100)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressCircle;