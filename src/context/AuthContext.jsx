// src/context/AuthContext.jsx (The file App.jsx is looking for)
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

const SESSION_KEY = 'ticketapp_session';
const MOCK_TOKEN = 'mock-jwt-token-12345'; // Simple mock token

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(SESSION_KEY);
    if (token === MOCK_TOKEN) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, password) => {
    // Mock login logic
    if (email === 'test@user.com' && password === 'password') {
      localStorage.setItem(SESSION_KEY, MOCK_TOKEN);
      setIsAuthenticated(true);
      navigate('/dashboard'); 
      return true;
    } 
    return false;
  };

  const signup = (username, email, password) => {
    // Mock signup logic
    console.log('Mock Signup successful:', { username, email });
    navigate('/auth/login');
    return true;
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
    navigate('/'); 
  };

  const value = {
    isAuthenticated,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};