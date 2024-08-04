// src/components/JobTable.js
import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const JobTable = ({ data }) => {
  return (
    <Paper style={{ padding: '1rem' }}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
            New Job
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={9} style={{ textAlign: 'right' }}>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Job</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>Job Status</TableCell>
              <TableCell>Job Address</TableCell>
              <TableCell>Scheduled</TableCell>
              <TableCell>Staff</TableCell>
              <TableCell>Invoice Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.jobId}</TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell>{row.reference}</TableCell>
                <TableCell>{row.jobStatus}</TableCell>
                <TableCell>{row.jobAddress}</TableCell>
                <TableCell>{row.scheduled}</TableCell>
                <TableCell>{row.staff}</TableCell>
                <TableCell>{row.invoiceStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default JobTable;
