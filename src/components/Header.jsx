import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

// Temporary CSS for the header to enforce max-width centering
const headerStyles = {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
};

const navLinkStyles = { 
    marginLeft: '15px', 
    textDecoration: 'none', 
    color: '#4a5568', // Default gray
    fontWeight: '500',
    transition: 'color 0.2s'
};

const Header = () => {
    const { isAuthenticated, logout } = useAuth(); 
    const location = useLocation();

    // Function to check if a path is currently active for styling
    const isActive = (path) => location.pathname === path || (path === '/tickets' && location.pathname.startsWith('/tickets/'));

    return (
        <header>
            <div style={headerStyles}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#1a202c' }}>
                        TicketMaster Pro
                    </Link>
                </div>
                
                <nav style={{ display: 'flex', alignItems: 'center' }}>
                    {isAuthenticated ? (
                        <>
                            {/* Link to Dashboard */}
                            <Link 
                                to="/dashboard" 
                                style={{ 
                                    ...navLinkStyles, 
                                    color: isActive('/dashboard') ? '#0070f3' : navLinkStyles.color,
                                    fontWeight: isActive('/dashboard') ? '700' : '500'
                                }}
                            >
                                Dashboard
                            </Link>

                            {/* Link to Ticket Management */}
                            <Link 
                                to="/tickets" 
                                style={{ 
                                    ...navLinkStyles, 
                                    color: isActive('/tickets') ? '#0070f3' : navLinkStyles.color,
                                    fontWeight: isActive('/tickets') ? '700' : '500'
                                }}
                            >
                                Tickets
                            </Link>
                            
                            {/* Logout Button */}
                            <button 
                                onClick={logout} 
                                style={{ 
                                    marginLeft: '25px', 
                                    padding: '8px 15px', 
                                    cursor: 'pointer', 
                                    border: '1px solid #0070f3', 
                                    borderRadius: '5px', 
                                    backgroundColor: 'transparent', 
                                    color: '#0070f3', 
                                    fontWeight: '600' 
                                }}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        // Login link for non-authenticated users
                        <Link to="/auth/login" style={{ textDecoration: 'none', color: '#0070f3', fontWeight: '600' }}>
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
