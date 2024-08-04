// src/components/EnquiryTable.js
import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const EnquiryTable = ({ data }) => {
  return (
    <Paper style={{ padding: '1rem' }}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
            New Enquiry
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
              <TableCell>Enquiry ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.enquiryId}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default EnquiryTable;
