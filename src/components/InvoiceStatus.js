// src/components/InvoiceStatus.js
import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const statuses = [
  { label: 'Draft'},
  { label: 'Unpaid'},
  { label: 'Overdue'},
  { label: 'Paid'},
  { label: 'Cancelled'},
  { label: 'All'},
  { label: 'Recurring'},
  { label: 'Templates'},
  { label: 'Failed Syncing'},
];

const StatusBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  marginBottom: theme.spacing(2),
}));

const InvoiceStatus = () => {
  return (
    <StatusBox>
      {statuses.map((status) => (
        <Chip
          key={status.label}
          label={
            <Typography variant="body2" component="span">
              {status.label}
            </Typography>
          }
          sx={{
            backgroundColor: status.color || 'grey',
            color: 'white',
            padding: '8px',
          }}
        />
      ))}
    </StatusBox>
  );
};

export default InvoiceStatus;
