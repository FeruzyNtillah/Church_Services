import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome to Church Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Item>Upcoming Events</Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item>Recent Sermons</Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item>Donation Summary</Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;