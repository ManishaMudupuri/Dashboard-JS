// src/pages/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, Avatar, Badge } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';

const containerStyle = {
  width: '70%',
  height: '100vh'
};

const center = {
  lat: -25.274398,
  lng: 133.775136
};

const jobs = [
  { id: 'J001', customer: 'John Doe', status: 'Completed', address: '123 Main St', lat: -33.8688, lng: 151.2093 },
  { id: 'J002', customer: 'Jane Smith', status: 'In Progress', address: '456 Oak St', lat: -37.8136, lng: 144.9631 }
];

const staff = [
  { name: 'Alice', status: 'Online', avatar: 'A' },
  { name: 'Bob', status: 'Offline', avatar: 'B' },
  { name: 'Charlie', status: 'Online', avatar: 'C' },
  { name: 'Dave', status: 'Online', avatar: 'D' },
  { name: 'Eve', status: 'Offline', avatar: 'E' }
];

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '30%',
  height: '100vh',
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(2),
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column'
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    backgroundColor: '#2C3E50',
    color: theme.palette.common.white,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const MapPage = () => {
  return (
    <Box sx={{ padding: '2rem', display: 'flex' }}>
      <SidebarContainer>
        <Typography variant="h4" gutterBottom>
          Map
        </Typography>
        <StyledTypography variant="h6">Jobs</StyledTypography>
        <List>
          {jobs.map((job) => (
            <ListItem key={job.id}>
              <ListItemIcon><AssignmentIcon /></ListItemIcon>
              <ListItemText primary={job.customer} secondary={job.status} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <StyledTypography variant="h6">Staff</StyledTypography>
        <List>
          {staff.map((member) => (
            <ListItem key={member.name}>
              <ListItemIcon>
                <Badge
                  color={member.status === 'Online' ? 'success' : 'default'}
                  variant="dot"
                  overlap="circular"
                >
                  <Avatar>{member.avatar}</Avatar>
                </Badge>
              </ListItemIcon>
              <ListItemText primary={member.name} secondary={member.status} />
            </ListItem>
          ))}
        </List>
      </SidebarContainer>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
        >
          {jobs.map((job) => (
            <Marker key={job.id} position={{ lat: job.lat, lng: job.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default MapPage;
