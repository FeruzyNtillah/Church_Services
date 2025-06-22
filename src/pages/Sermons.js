import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Avatar,
  Chip,
  Stack,
  Divider
} from '@mui/material';
import { PlayCircle, CalendarToday, Person } from '@mui/icons-material';

const Sermons = () => {
  // Hardcoded sermon data
  const sermons = [
    {
      id: 1,
      title: "The Power of Faith",
      speaker: "Pastor John Smith",
      date: "2023-06-15",
      duration: "45:22",
      category: "Inspiration",
      attendees: 125,
      thumbnail: "/sermon1.jpg"
    },
    {
      id: 2,
      title: "Finding Peace in Troubled Times",
      speaker: "Reverend Sarah Johnson",
      date: "2023-06-08",
      duration: "38:15",
      category: "Comfort",
      attendees: 98,
      thumbnail: "/sermon2.jpg"
    },
    {
      id: 3,
      title: "The Prodigal Son Revisited",
      speaker: "Pastor Michael Brown",
      date: "2023-06-01",
      duration: "52:40",
      category: "Teaching",
      attendees: 142,
      thumbnail: "/sermon3.jpg"
    },
    {
      id: 4,
      title: "Building Strong Communities",
      speaker: "Deacon Emily Wilson",
      date: "2023-05-25",
      duration: "41:05",
      category: "Community",
      attendees: 87,
      thumbnail: "/sermon4.jpg"
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Sermons
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Recent Sermons
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Browse our collection of spiritual teachings and messages
        </Typography>
        <Divider sx={{ my: 2 }} />
        
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Speaker</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Category</TableCell>
                <TableCell align="right">Attendees</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sermons.map((sermon) => (
                <TableRow key={sermon.id}>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar src={sermon.thumbnail} variant="rounded">
                        <PlayCircle />
                      </Avatar>
                      <Typography variant="body1">{sermon.title}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Person color="action" />
                      <Typography>{sermon.speaker}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <CalendarToday color="action" fontSize="small" />
                      <Typography>
                        {new Date(sermon.date).toLocaleDateString()}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{sermon.duration}</TableCell>
                  <TableCell>
                    <Chip label={sermon.category} size="small" color="primary" />
                  </TableCell>
                  <TableCell align="right">{sermon.attendees}</TableCell>
                  <TableCell>
                    <Chip 
                      label="Listen" 
                      size="small" 
                      variant="outlined"
                      clickable
                      icon={<PlayCircle fontSize="small" />}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Most Popular Sermons
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          {sermons.slice(0, 3).map((sermon) => (
            <Paper key={sermon.id} sx={{ p: 2, width: '100%' }}>
              <Avatar 
                src={sermon.thumbnail} 
                variant="rounded"
                sx={{ width: '100%', height: 120, mb: 1 }}
              >
                <PlayCircle sx={{ fontSize: 60 }} />
              </Avatar>
              <Typography variant="subtitle1">{sermon.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {sermon.speaker}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <Chip 
                  label={sermon.category} 
                  size="small" 
                  color="primary"
                  variant="outlined"
                />
                <Chip 
                  label={`${sermon.attendees} attendees`} 
                  size="small"
                />
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Sermons;