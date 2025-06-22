import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, Event, LibraryBooks, AttachMoney, People } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: 250 }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/events">
          <ListItemIcon><Event /></ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={Link} to="/sermons">
          <ListItemIcon><LibraryBooks /></ListItemIcon>
          <ListItemText primary="Sermons" />
        </ListItem>
        <ListItem button component={Link} to="/donations">
          <ListItemIcon><AttachMoney /></ListItemIcon>
          <ListItemText primary="Donations" />
        </ListItem>
        <ListItem button component={Link} to="/Addmembers">
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Add members" />
        </ListItem>
        <ListItem button component={Link} to="/members">
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Members" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;