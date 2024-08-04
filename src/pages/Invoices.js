// src/pages/Invoices.js
import React from 'react';
import { Box, Chip, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import InvoiceStatus from '../components/InvoiceStatus';
import { styled } from '@mui/material/styles';

const sampleInvoices = [
  { id: 'INV001', customer: 'John Doe', amount: '$1000', status: 'Paid' },
  { id: 'INV002', customer: 'Jane Smith', amount: '$2000', status: 'Unpaid' },
  { id: 'INV003', customer: 'Alice Johnson', amount: '$1500', status: 'Overdue' },
  { id: 'INV004', customer: 'Bob Brown', amount: '$2500', status: 'Draft' },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#2C3E50',
    color: theme.palette.common.white,
  fontWeight: 'bold',
}));

const Invoices = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Invoices
      </Typography>
      <InvoiceStatus />
      <Button variant="contained" style={{ backgroundColor: '#4CAF50'}} sx={{ marginBottom: '20px' }}>
        New Invoice
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Invoice ID</StyledTableCell>
              <StyledTableCell>Customer</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleInvoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>
                <Chip label={invoice.status} sx={{ backgroundColor: '#7ECACD', color: 'white' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Invoices;
