import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Box, Alert, CircularProgress, Paper,
} from '@mui/material';
import { useAuth } from '../auth/AuthProvider';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    setError('');
    setNotice('');
    setLoading(true);

    try {
      await resetPassword(email);
      setNotice('Check your email for a password reset link.');
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, mt: 10 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Forgot Password
        </Typography>
        <form onSubmit={handleReset}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {notice && <Alert severity="success" sx={{ mt: 2 }}>{notice}</Alert>}
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

          <Box mt={2}>
            <Button type="submit" variant="contained" fullWidth disabled={loading}>
              {loading ? <CircularProgress size={24} /> : 'Send Reset Link'}
            </Button>
          </Box>

          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              <Link to="/login">Back to Login</Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
