import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Sermons from './pages/Sermons';
import Donations from './pages/Donations';
import Members from './pages/Members';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/sermons" element={<Sermons />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/members" element={<Members />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </Router>
  );
}

export default App;