import React from 'react';
import { Box, CssBaseline, IconButton, useTheme } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const theme = useTheme();
  const [showScrollButtons, setShowScrollButtons] = React.useState(false);

  const handleScroll = (direction) => {
    const sidebar = document.getElementById('sidebar-content');
    if (sidebar) {
      sidebar.scrollBy({
        top: direction === 'up' ? -100 : 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      {/* Sidebar with scroll controls */}
      <Box
        sx={{
          width: 250,
          position: 'relative',
          overflow: 'hidden',
          borderRight: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
        }}
        onMouseEnter={() => setShowScrollButtons(true)}
        onMouseLeave={() => setShowScrollButtons(false)}
      >
        {/* Scroll up button */}
        {showScrollButtons && (
          <IconButton
            onClick={() => handleScroll('up')}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              backgroundColor: theme.palette.background.paper,
              boxShadow: 1,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              }
            }}
          >
            <KeyboardArrowUp />
          </IconButton>
        )}

        {/* Sidebar content with scroll */}
        <Box
          id="sidebar-content"
          sx={{
            height: '100%',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              width: '0.4em',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: theme.palette.background.paper,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            },
          }}
        >
          <Sidebar />
        </Box>

        {/* Scroll down button */}
        {showScrollButtons && (
          <IconButton
            onClick={() => handleScroll('down')}
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              zIndex: 1,
              backgroundColor: theme.palette.background.paper,
              boxShadow: 1,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              }
            }}
          >
            <KeyboardArrowDown />
          </IconButton>
        )}
      </Box>

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          backgroundColor: theme.palette.background.default,
          p: 3
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;