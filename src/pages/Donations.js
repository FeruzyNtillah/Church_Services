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
import { donationsData } from './Data';

const Donations = () => {
  // State for sorting
  const [orderBy, setOrderBy] = useState('date');
  const [order, setOrder] = useState('desc');

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Sort function
  const sortedDonations = [...donationsData].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
    return 0;
  });

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'TZS'
    }).format(amount);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Donations
      </Typography>
      <Typography paragraph>
        The following are the church donations.
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
                  <strong>Donation ID</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'donorName'}
                  direction={orderBy === 'donorName' ? order : 'asc'}
                  onClick={() => handleSort('donorName')}
                >
                  <strong>Donor Name</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'amount'}
                  direction={orderBy === 'amount' ? order : 'desc'}
                  onClick={() => handleSort('amount')}
                >
                  <strong>Amount</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'date'}
                  direction={orderBy === 'date' ? order : 'desc'}
                  onClick={() => handleSort('date')}
                >
                  <strong>Date</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'paymentMethod'}
                  direction={orderBy === 'paymentMethod' ? order : 'asc'}
                  onClick={() => handleSort('paymentMethod')}
                >
                  <strong>Payment Method</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'purpose'}
                  direction={orderBy === 'purpose' ? order : 'asc'}
                  onClick={() => handleSort('purpose')}
                >
                  <strong>Purpose</strong>
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedDonations.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell>{donation.id}</TableCell>
                <TableCell>{donation.donorName}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{formatCurrency(donation.amount)}</TableCell>
                <TableCell>{donation.date}</TableCell>
                <TableCell>{donation.paymentMethod}</TableCell>
                <TableCell>{donation.purpose}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Donations;