import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Contexts
import { AuthProvider } from './context/AuthContext';

// Components
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Hero from './components/Hero';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import TicketManagementPage from './pages/TicketManagementPage'; // CRITICAL: Ensure this is imported
import TicketDetail from './pages/TicketDetail'; // CRITICAL: Ensure this is imported

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Hero />} />
            <Route path="/auth/:type" element={<AuthPage />} />

            {/* Protected Routes (Require Login) */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/tickets" 
              element={
                <ProtectedRoute>
                  {/* CRITICAL: Must render the TicketManagementPage component here */}
                  <TicketManagementPage /> 
                </ProtectedRoute>
              } 
            />
            
            {/* Protected Route for single ticket view/edit */}
            <Route 
                path="/tickets/:id" 
                element={
                    <ProtectedRoute>
                        {/* CRITICAL: Must render the TicketDetail component here */}
                        <TicketDetail /> 
                    </ProtectedRoute>
                } 
            />

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
