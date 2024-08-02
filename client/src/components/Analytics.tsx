import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, Typography, Divider, Grid, Box } from '@mui/material';
import { getAnalytics } from '../services/api';

const Analytics: React.FC = () => {
  const [analytics, setAnalytics] = useState<any>({});

  useEffect(() => {
    const fetchAnalytics = async () => {
      const response = await getAnalytics();
      setAnalytics(response.data);
    };
    fetchAnalytics();
  }, []);

  // Round average duration to 2 decimal places
  const averageDuration = analytics.averageDuration
    ? analytics.averageDuration.toFixed(2)
    : 'N/A';

  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardHeader title="Analytics" sx={{ backgroundColor: '#f5f5f5' }} />
      <Divider />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                People Currently in Building
              </Typography>
              <Typography variant="h6" color="primary">
                {analytics.currentPeopleCount}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Average Duration of Stay
              </Typography>
              <Typography variant="h6" color="primary">
                {averageDuration} minutes
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Peak Entry Time
              </Typography>
              <Typography variant="h6" color="primary">
                {analytics.peakEntryTime}:00
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Peak Exit Time
              </Typography>
              <Typography variant="h6" color="primary">
                {analytics.peakExitTime}:00
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Most Frequently Used Entry Gate
              </Typography>
              <Typography variant="h6" color="primary">
                {analytics.mostUsedEntryGate}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Most Frequently Used Exit Gate
              </Typography>
              <Typography variant="h6" color="primary">
                {analytics.mostUsedExitGate}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Analytics;
