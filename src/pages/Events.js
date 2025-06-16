import React, { useState } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Box,
  Chip
} from '@mui/material';
import { eventsData } from './Data';

const Events = () => {
  // State for sorting
  const [orderBy, setOrderBy] = useState('date');
  const [order, setOrder] = useState('asc');

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Sort function
  const sortedEvents = [...eventsData].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
    return 0;
  });

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'default';
      case 'Upcoming': return 'primary';
      case 'Scheduled': return 'secondary';
      case 'Planned': return 'info';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Church Events
      </Typography>
      <Typography paragraph>
        Upcoming and past events at our church.
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: 1000, marginTop: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'title'}
                  direction={orderBy === 'title' ? order : 'asc'}
                  onClick={() => handleSort('title')}
                >
                  <strong>Event Title</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'date'}
                  direction={orderBy === 'date' ? order : 'asc'}
                  onClick={() => handleSort('date')}
                >
                  <strong>Date</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'time'}
                  direction={orderBy === 'time' ? order : 'asc'}
                  onClick={() => handleSort('time')}
                >
                  <strong>Time</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'location'}
                  direction={orderBy === 'location' ? order : 'asc'}
                  onClick={() => handleSort('location')}
                >
                  <strong>Location</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'type'}
                  direction={orderBy === 'type' ? order : 'asc'}
                  onClick={() => handleSort('type')}
                >
                  <strong>Event Type</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'status'}
                  direction={orderBy === 'status' ? order : 'asc'}
                  onClick={() => handleSort('status')}
                >
                  <strong>Status</strong>
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedEvents.map((event) => (
              <TableRow key={event.id}>
                <TableCell sx={{ fontWeight: 'bold' }}>{event.title}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>{event.time}</TableCell>
                <TableCell>{event.location}</TableCell>
                <TableCell>{event.type}</TableCell>
                <TableCell>
                  <Chip
                    label={event.status}
                    color={getStatusColor(event.status)}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Events;