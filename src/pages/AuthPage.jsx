// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import styles from './AuthPage.module.css'; // Import the dedicated CSS Module

const ErrorMessage = ({ message }) => (
  message ? <p className={styles.errorText}>{message}</p> : null
);

const AuthPage = () => {
  const { login, signup } = useAuth();
  const location = useLocation();
  
  // Determine if we are on the /login or /signup path using the URL
  const isLogin = location.pathname.includes('login');
  const title = isLogin ? 'Account Login' : 'Create Account';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // Only for signup
  const [formError, setFormError] = useState(''); 
  const [validationErrors, setValidationErrors] = useState({}); 
  
  const validateForm = () => {
    const errors = {};
    setFormError('');
    
    if (!email) errors.email = 'Email is required.';
    if (!password) errors.password = 'Password is required.';
    // Only check for username if we are on the signup page
    if (!isLogin && !username) errors.username = 'Username is required.';
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isLogin) {
      // **Mock Login credentials: 'test@user.com' / 'password'**
      const success = login(email, password);
      if (!success) {
        setFormError('Login failed: Invalid email or password.'); 
      }
    } else {
      // Mock signup logic (just redirects to login on success)
      signup(username, email, password); 
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <h2 className={styles.authTitle}>{title}</h2>

        <ErrorMessage message={formError} /> 

        <form onSubmit={handleSubmit}>
          
          {!isLogin && (
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.formInput}
              />
              <ErrorMessage message={validationErrors.username} />
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.formInput}
            />
            <ErrorMessage message={validationErrors.email} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.formInput}
            />
            <ErrorMessage message={validationErrors.password} />
          </div>

          <button type="submit" className={styles.submitButton}>
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>

        <div className={styles.switchLink}>
          {isLogin ? (
            <p>
              Don't have an account? <Link to="/auth/signup">Sign up here</Link>
            </p>
          ) : (
            <p>
              Already have an account? <Link to="/auth/login">Login here</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;