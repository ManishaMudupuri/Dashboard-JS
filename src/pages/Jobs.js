// src/pages/Jobs.js
import React from 'react';
import { Box, Chip, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const sampleJobs = [
  { job: 'J001', customer: 'John Doe', reference: 'Ref001', status: 'Completed', address: '123 Main St', scheduled: '2024-01-01', staff: 'Staff A', invoice: 'Invoiced' },
  { job: 'J002', customer: 'Jane Smith', reference: 'Ref002', status: 'In Progress', address: '456 Oak St', scheduled: '2024-02-02', staff: 'Staff B', invoice: 'Pending' },
  { job: 'J003', customer: 'Alice Johnson', reference: 'Ref003', status: 'Scheduled', address: '789 Pine St', scheduled: '2024-03-03', staff: 'Staff C', invoice: 'Not Invoiced' },
  { job: 'J004', customer: 'Bob Brown', reference: 'Ref004', status: 'Pending', address: '101 Maple St', scheduled: '2024-04-04', staff: 'Staff D', invoice: 'Pending' }
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#2C3E50',
    color: theme.palette.common.white,
  fontWeight: 'bold',
}));

const Jobs = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Jobs
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
        {['Jobs', 'Recurring Jobs', 'Job Templates', 'Service Reminders'].map((status, index) => (
          <Chip
            key={index}
            label={`${status}`}
            sx={{ backgroundColor: 'grey', color: 'white', padding: '8px' }}
          />
        ))}
      </Box>
      <Button variant="contained" style={{ backgroundColor: '#4CAF50', marginBottom: '20px' }}>
        New Job
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Job</StyledTableCell>
              <StyledTableCell>Customer</StyledTableCell>
              <StyledTableCell>Reference</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Scheduled</StyledTableCell>
              <StyledTableCell>Staff</StyledTableCell>
              <StyledTableCell>Invoice</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleJobs.map((job) => (
              <TableRow key={job.job}>
                <TableCell>{job.job}</TableCell>
                <TableCell>{job.customer}</TableCell>
                <TableCell>{job.reference}</TableCell>
                <TableCell>
                <Chip label={job.status} sx={{ backgroundColor: '#7ECACD', color: 'white' }} />
                </TableCell>
                <TableCell>{job.address}</TableCell>
                <TableCell>{job.scheduled}</TableCell>
                <TableCell>{job.staff}</TableCell>
                <TableCell>{job.invoice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Jobs;
