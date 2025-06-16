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
  Box
} from '@mui/material';
import { membersData } from './Data';

const Members = () => {
  // State for sorting
  const [orderBy, setOrderBy] = useState('joinDate');
  const [order, setOrder] = useState('asc');

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Sort function
  const sortedMembers = [...membersData].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Members Directory
      </Typography>
      <Typography paragraph>
        The Church Members are illustrated below:
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: 1000, marginTop: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={() => handleSort('id')}
                >
                  <strong>Member ID</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleSort('name')}
                >
                  <strong>Name</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'joinDate'}
                  direction={orderBy === 'joinDate' ? order : 'asc'}
                  onClick={() => handleSort('joinDate')}
                >
                  <strong>Join Date</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'ageGroup'}
                  direction={orderBy === 'ageGroup' ? order : 'asc'}
                  onClick={() => handleSort('ageGroup')}
                >
                  <strong>Age Group</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'gender'}
                  direction={orderBy === 'gender' ? order : 'asc'}
                  onClick={() => handleSort('gender')}
                >
                  <strong>Gender</strong>
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
            {sortedMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.id}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.joinDate}</TableCell>
                <TableCell>{member.ageGroup}</TableCell>
                <TableCell>{member.gender}</TableCell>
                <TableCell>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '12px',
                    backgroundColor: member.status === 'Active' ? '#f0f8ff' : '#fff0f0',
                    color: member.status === 'Active' ? '#006400' : '#8b0000',
                    fontSize: '0.875rem'
                  }}>
                    {member.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Members;