// src/pages/Quotes.js
import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Chip, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const sampleQuotes = [
    { quoteNo: 'QT01874', customer: 'Robert Steger', reference: 'Additional 2kW System', status: 'Accepted', delivery: 'Viewed', job: '11. Invoice', acceptedDate: '29 Jul 2024', grossProfit: '1,592.72', total: '7,230.00' },
    { quoteNo: 'QT01875', customer: 'Jessica Davis', reference: 'Panel Cleaning', status: 'Draft', delivery: 'Viewed', job: '6. Maintenance', acceptedDate: '01 Aug 2024', grossProfit: '800.50', total: '3,200.00' },
    { quoteNo: 'QT01876', customer: 'Daniel Johnson', reference: 'Battery Installation', status: 'Accepted', delivery: 'Unsent', job: '13. Install', acceptedDate: '02 Aug 2024', grossProfit: '2,500.00', total: '9,800.00' },
    { quoteNo: 'QT01877', customer: 'Linda Brown', reference: 'System Inspection', status: 'Declined', delivery: 'Viewed', job: '7. Inspection', acceptedDate: '03 Aug 2024', grossProfit: '1,200.00', total: '5,000.00' },
    { quoteNo: 'QT01878', customer: 'James Wilson', reference: 'Inverter Replacement', status: 'Cancelled', delivery: 'Viewed', job: '10. Replacement', acceptedDate: '04 Aug 2024', grossProfit: '1,750.00', total: '7,000.00' },
  ];
  
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#2C3E50',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  }));

const Quotes = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Quotes
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
        {['Draft', 'Awaiting Acceptance', 'Accepted', 'Declined', 'Cancelled', 'All', 'Templates'].map((status, index) => (
          <Chip
            key={index}
            label={`${status}`}
            sx={{ backgroundColor: 'grey', color: 'white', padding: '8px' }}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#4CAF50' }}>
          New Quote
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchIcon />
          <InputBase placeholder="Search…" sx={{ ml: 1 }} />
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <StyledTableCell>Quote No</StyledTableCell>
              <StyledTableCell>Customer</StyledTableCell>
              <StyledTableCell>Reference</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Delivery</StyledTableCell>
              <StyledTableCell>Job</StyledTableCell>
              <StyledTableCell>Accepted Date</StyledTableCell>
              <StyledTableCell>Gross Profit</StyledTableCell>
              <StyledTableCell>Total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleQuotes.map((quote) => (
              <TableRow key={quote.quoteNo}>
                <TableCell>{quote.quoteNo}</TableCell>
                <TableCell>{quote.customer}</TableCell>
                <TableCell>{quote.reference}</TableCell>
                <TableCell>
                  <Chip label={quote.status} sx={{ backgroundColor: '#7ECACD', color: 'white' }} />
                </TableCell>
                <TableCell>{quote.delivery}</TableCell>
                <TableCell>{quote.job}</TableCell>
                <TableCell>{quote.acceptedDate}</TableCell>
                <TableCell>{quote.grossProfit}</TableCell>
                <TableCell>{quote.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Quotes;
