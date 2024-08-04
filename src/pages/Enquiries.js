// src/pages/Enquiries.js
import React from 'react';
import { Box, Chip, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const sampleEnquiries = [
  { name: 'John Doe', email: 'john.doe@example.com', phone: '0412345678', recieved: '2024-01-01', location: 'Sarah Thompson', source:'123 King Street, Sydney, NSW 2000', status: 'Pending' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '0423456789', recieved: '2024-02-02', location: 'Liam Brown', source:'456 Collins Street, Melbourne, VIC 3000', status: 'Completed' },
  { name: 'Alice Johnson', email: 'alice.johnson@example.com', phone: '0434567890', recieved: '2024-03-03', location: 'Olivia Williams', source:'789 Queen Street, Brisbane, QLD 4000', status: 'In Progress' },
  { name: 'Bob Brown', email: 'bob.brown@example.com', phone: '0445678901', recieved: '2024-04-04', location: 'Noah Smith', source:'321 North Terrace, Adelaide, SA 5000', status: 'Pending' }
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#2C3E50',
    color: theme.palette.common.white,
  fontWeight: 'bold',
}));

const Enquiries = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Enquiries
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
        {['To Do', 'Done'].map((status, index) => (
          <Chip
            key={index}
            label={`${status}`}
            sx={{ backgroundColor: 'grey', color: 'white', padding: '8px' }}
          />
        ))}
      </Box>
      <Button variant="contained" style={{ backgroundColor: '#4CAF50', marginBottom: '20px' }}>
        New Enquiry
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Recieved</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>Source</StyledTableCell>
              <StyledTableCell>Action Taken</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleEnquiries.map((enquiry) => (
              <TableRow key={enquiry.name}>
                <TableCell>{enquiry.name}</TableCell>
                <TableCell>{enquiry.phone}</TableCell>
                <TableCell>{enquiry.email}</TableCell>
                <TableCell>{enquiry.recieved}</TableCell>
                <TableCell>{enquiry.location}</TableCell>
                <TableCell>{enquiry.source}</TableCell>
                <TableCell>
                <Chip label={enquiry.status} sx={{ backgroundColor: '#7ECACD', color: 'white' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Enquiries;
