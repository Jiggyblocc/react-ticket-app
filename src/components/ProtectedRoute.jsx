// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

/**
 * Component to guard routes that require authentication.
 * If the user is authenticated, it renders the child element.
 * Otherwise, it redirects them to the login page.
 */
const ProtectedRoute = ({ children }) => {
  // Access the authentication status from the context
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    // If the user is logged in (session token exists), show the page content
    return children;
  } else {
    // If NOT logged in, redirect them to the login page.
    // This satisfies the rule: If someone tries to sneak in without a key, the guard sends them back to the Security Desk (Login).
    return <Navigate to="/auth/login" replace />; 
  }
};

export default ProtectedRoute;