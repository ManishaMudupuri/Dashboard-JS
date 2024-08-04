// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import Jobs from './pages/Jobs';
import OpenSolar from './pages/OpenSolar';
import Map from './pages/Map';
import SignIn from './components/SignIn';
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './contexts/AuthContext';
import Invoices from './pages/Invoices';
import Quotes from './pages/Quotes'; 
import PurchaseOrders from './pages/PurchaseOrders'; 

import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navbar className="header" />
          <Sidebar className="sidebar" />
          <main className="main">
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/enquiries" element={<Enquiries />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/opensolar" element={<OpenSolar />} />
                <Route path="/map" element={<Map />} /> 
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/purchaseorders" element={<PurchaseOrders />} />
              </Route>
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
