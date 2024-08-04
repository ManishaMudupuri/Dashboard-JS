// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItemIcon, ListItemText, Divider, Toolbar, Avatar, ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import RoomIcon from '@mui/icons-material/Room';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TimerIcon from '@mui/icons-material/Timer';
import PersonIcon from '@mui/icons-material/Person';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import { styled } from '@mui/material/styles';

const SidebarContainer = styled('div')(({ theme }) => ({
  width: 240,
  backgroundColor: '#2C3E50',
  color: 'white',
  height: '100vh',
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: '#4CAF50',
}));

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Toolbar>
        <StyledAvatar>UN</StyledAvatar>
        <ListItemText primary="Proven Energy" />
      </Toolbar>
      <Divider />
      <List>
        <ListItemButton component={Link} to="/dashboard">
          <ListItemIcon><HomeIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/enquiries">
          <ListItemIcon><AssignmentIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Enquiries" />
        </ListItemButton>
        <ListItemButton component={Link} to="/jobs">
          <ListItemIcon><AssignmentIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Jobs" />
        </ListItemButton>
        <ListItemButton component={Link} to="/opensolar">
          <ListItemIcon><SolarPowerIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="OpenSolar" />
        </ListItemButton>
        <ListItemButton component={Link} to="/map">
          <ListItemIcon><RoomIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Map" />
        </ListItemButton>
        <ListItemButton component={Link} to="/invoices">
          <ListItemIcon><ReceiptIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Invoices" />
        </ListItemButton>
        <ListItemButton component={Link} to="/quotes">
          <ListItemIcon><ReceiptIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Quotes" />
        </ListItemButton>
        <ListItemButton component={Link} to="/purchaseorders">
          <ListItemIcon><ShoppingCartIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="PurchaseOrders" />
        </ListItemButton>
        <ListItemButton component={Link} to="/customers">
          <ListItemIcon><PersonIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
