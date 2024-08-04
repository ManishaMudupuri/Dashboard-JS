// src/pages/PurchaseOrders.js
import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Chip, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const samplePurchaseOrders = [
  { orderNo: 'PO00266', supplier: 'BayWa RE', reference: 'SO TBC', linkedBill: 'JB06244', status: 'Approved Bills', job: 'JB06244', orderDate: '01 May 2024', deliveryDate: '01 May 2024', total: '7,788.00', sent: 'Yes' },
  { orderNo: 'PO00231', supplier: 'Sherriff Electrical - Toowoomba', reference: 'JB06244', linkedBill: 'JB06244', status: 'Draft P/O', job: 'JB06244', orderDate: '25 Mar 2024', deliveryDate: '25 Mar 2024', total: '704.86', sent: 'Yes' },
  { orderNo: 'PO00213', supplier: 'Officeworks', reference: 'ians for testi', linkedBill: 'JB06244', status: 'Unbilled P/O', job: 'JB06244', orderDate: '04 Mar 2024', deliveryDate: '04 Mar 2024', total: '179.00', sent: 'Yes' },
  { orderNo: 'PO00211', supplier: 'Sherriff Electrical - Toowoomba', reference: 'JB06244', linkedBill: 'JB06244', status: 'Draft Bills', job: 'JB06244', orderDate: '28 Feb 2024', deliveryDate: '28 Feb 2024', total: '0.00', sent: 'Yes' },
  { orderNo: 'PO00267', supplier: 'Solar Distribution', reference: 'SD12345', linkedBill: 'JB06245', status: 'Billed P/O', job: 'JB06245', orderDate: '10 May 2024', deliveryDate: '12 May 2024', total: '3,450.50', sent: 'No' },
  { orderNo: 'PO00268', supplier: 'Green Energy Solutions', reference: 'GE56789', linkedBill: 'JB06246', status: 'Billed P/O', job: 'JB06246', orderDate: '15 May 2024', deliveryDate: '18 May 2024', total: '6,789.00', sent: 'No' },
  { orderNo: 'PO00269', supplier: 'Renewable Energy Co.', reference: 'RE65432', linkedBill: 'JB06247', status: 'Draft Bills', job: 'JB06247', orderDate: '20 May 2024', deliveryDate: '22 May 2024', total: '4,320.00', sent: 'Yes' },
  { orderNo: 'PO00270', supplier: 'Eco Power Supplies', reference: 'EP98765', linkedBill: 'JB06248', status: 'Approved Bills', job: 'JB06248', orderDate: '25 May 2024', deliveryDate: '27 May 2024', total: '2,150.00', sent: 'No' },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#2C3E50',
  color: theme.palette.common.white,
  fontWeight: 'bold',
}));

const PurchaseOrders = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Purchase Orders
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
        {['Draft P/O', 'Unbilled P/O', 'Billed P/O', 'All P/O', 'Draft Bills', 'Approved Bills', 'All Bills'].map((status, index) => (
          <Chip
            key={index}
            label={`${status}`}
            sx={{ backgroundColor: 'grey', color: 'white', padding: '8px' }}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#4CAF50' }}>
          New Purchase Order
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
        <TableHead>
            <TableRow>
              <StyledTableCell>Order No</StyledTableCell>
              <StyledTableCell>Supplier</StyledTableCell>
              <StyledTableCell>Reference</StyledTableCell>
              <StyledTableCell>Linked Bill</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Job</StyledTableCell>
              <StyledTableCell>Order Date</StyledTableCell>
              <StyledTableCell>Delivery Date</StyledTableCell>
              <StyledTableCell>Total</StyledTableCell>
              <StyledTableCell>Sent</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {samplePurchaseOrders.map((order) => (
              <TableRow key={order.orderNo}>
                <TableCell>{order.orderNo}</TableCell>
                <TableCell>{order.supplier}</TableCell>
                <TableCell>{order.reference}</TableCell>
                <TableCell>{order.linkedBill}</TableCell>
                <TableCell>
                  <Chip label={order.status} sx={{ backgroundColor: '#7ECACD', color: 'white' }} />
                </TableCell>
                <TableCell>{order.job}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>{order.deliveryDate}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.sent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PurchaseOrders;
