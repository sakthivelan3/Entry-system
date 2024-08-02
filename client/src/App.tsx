import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import EntryExitForm from './components/EntryExitForm';
import PeopleList from './components/PeopleList';
import History from './components/History';
import Analytics from './components/Analytics';

const App: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          backgroundColor: '#e3f2fd',
          padding: 2,
          borderRadius: 1,
          textAlign: 'center',
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: '#1976d2' }}
        >
          Building Entry System
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <EntryExitForm />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <PeopleList />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <History />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Analytics />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
