// src/components/Layout.jsx
import React from 'react';
import Header from './Header'; // We'll create Header next
import './Layout.css'; // For the max-width styling

/**
 * The Layout component provides a consistent structure for every page.
 * It includes the Header/Navbar and wraps the content in a max-width container.
 */
const Layout = ({ children }) => {
  return (
    <>
      {/* The Header/Navbar will be consistent across all pages */}
      <Header /> 
      
      {/* The main-content class enforces the max-width: 1440px rule */}
      <main className="main-content">
        {children}
      </main>
      
      {/* You can add a Footer here later */}
    </>
  );
};

export default Layout;