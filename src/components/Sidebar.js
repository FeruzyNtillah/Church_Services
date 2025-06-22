import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider,
  Box,
  useTheme
} from '@mui/material';
import { 
  Home, 
  Event, 
  LibraryBooks, 
  AttachMoney, 
  People 
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{
        width: 250,
        height: '100vh',
        borderRight: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <List sx={{ py: 0 }}>
          {[
            { icon: <Home />, text: "Home", path: "/" },
            { icon: <Event />, text: "Events", path: "/events" },
            { icon: <LibraryBooks />, text: "Sermons", path: "/sermons" },
            { icon: <AttachMoney />, text: "Donations", path: "/donations" },
            { icon: <People />, text: "Add members", path: "/add-members" },
            { icon: <People />, text: "Members", path: "/members" },
          ].map((item, index) => (
            <ListItem 
              button 
              component={Link} 
              to={item.path}
              key={index}
              sx={{
                py: 1.5,
                px: 3,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
                '&.Mui-selected': {
                  backgroundColor: theme.palette.action.selected,
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  variant: 'body1',
                  fontWeight: 'medium'
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
    </Box>
  );
};

export default Sidebar;