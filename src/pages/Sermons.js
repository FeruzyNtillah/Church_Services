import React from 'react';
import { Typography } from '@mui/material';

const Sermons = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Sermons
      </Typography>
      <Typography paragraph>
        This is where you can manage and view all sermons.
      </Typography>
      {/* Add your sermons content here */}
    </div>
  );
};

export default Sermons;