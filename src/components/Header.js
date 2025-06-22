import React from 'react';
import { AppBar, Toolbar, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <AppBar 
      position="static" 
      sx={{ 
        mb: 4,
        backgroundColor: colors.primary[700] // Set AppBar background to primary 700
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            color: colors.grey[100] // Set text color to white
          }}
        >
          Church Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;