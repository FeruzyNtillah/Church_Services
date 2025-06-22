import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';
import { supabase } from '../supabase';

const AddMember = () => {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    const {  error } = await supabase.from('members').insert([form]);

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg('Member added successfully!');
      setForm({ full_name: '', email: '', phone: '', address: '' });
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Add Church Member
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="full_name"
            fullWidth
            margin="normal"
            required
            value={form.full_name}
            onChange={handleChange}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            required
            value={form.email}
            onChange={handleChange}
          />

          <TextField
            label="Phone"
            name="phone"
            fullWidth
            margin="normal"
            required
            value={form.phone}
            onChange={handleChange}
          />

          <TextField
            label="Address"
            name="address"
            fullWidth
            margin="normal"
            multiline
            rows={2}
            value={form.address}
            onChange={handleChange}
          />

          {errorMsg && <Alert severity="error" sx={{ mt: 2 }}>{errorMsg}</Alert>}
          {successMsg && <Alert severity="success" sx={{ mt: 2 }}>{successMsg}</Alert>}

          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Add Member'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AddMember;
