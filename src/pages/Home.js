import React from 'react';
import {
  Typography,
  Container,
  Box,
  Paper,
  Grid,
  Avatar,
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const StatCard = ({ title, value, icon, color }) => (
  <Paper
    elevation={3}
    sx={{
      display: 'flex',
      alignItems: 'center',
      p: 3,
      borderRadius: 3,
      backgroundColor: '#f9f9f9',
    }}
  >
    <Avatar sx={{ bgcolor: color, mr: 2 }}>
      {icon}
    </Avatar>
    <Box>
      <Typography variant="subtitle2" color="textSecondary">
        {title}
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        {value}
      </Typography>
    </Box>
  </Paper>
);

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Church Dashboard
      </Typography>

      <Grid container spacing={4} mt={1}>
        <Grid item xs={12} md={6} lg={4}>
          <StatCard
            title="Total Members"
            value="120"
            icon={<GroupIcon />}
            color="primary.main"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <StatCard
            title="New Members This Month"
            value="5"
            icon={<PersonAddIcon />}
            color="success.main"
          />
        </Grid>
        {/* Add more StatCards here as needed */}
      </Grid>

      {/* Add charts or summary sections here if desired */}
      <Box mt={5}>
        <Paper sx={{ p: 3, borderRadius: 3 }}>
          <Typography variant="h6" gutterBottom>
            Welcome to the Church Member Information System
          </Typography>
          <Typography color="textSecondary">
            Manage and monitor member data, view growth trends, and stay organized
            with all church records in one place.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
