// src/contexts/AuthContext.js
import React, { useContext, useState, createContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signIn = (email, password) => {
    // Hardcoded credentials for demonstration
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
      setCurrentUser({ email });
      return true;
    } else {
      return false;
    }
  };

  const signOut = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
