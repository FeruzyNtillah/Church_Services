import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.white?.[100] || "#FFFFFF" }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography 
          variant="h6" 
          sx={{ color: colors.white?.[100] || "#FFFFFF" }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h6"
          fontStyle="italic"
          sx={{ color: colors.white?.[100] || "#FFFFFF" }}
        >
          {increase}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="10px">
        <Box 
          position="relative" 
          width="100%" 
          height="8px" 
          borderRadius="4px" 
          backgroundColor={colors.grey?.[300] || "#F5F5F5"}
        >
          <Box
            height="100%"
            borderRadius="4px"
            backgroundColor={colors.blueAccent?.[500] || "#5F9E9E"}
            width={`${progress * 100}%`}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;