// src/pages/Dashboard.js
import React from 'react';
import BarChartComponent from '../components/BarChartComponent';
import LineChartComponent from '../components/LineChartComponent';
import PieChartComponent from '../components/PieChartComponent';
import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Customer Purchases
            </Typography>
            <BarChartComponent />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Employee Sales
            </Typography>
            <LineChartComponent />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Region Sales
            </Typography>
            <PieChartComponent />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
