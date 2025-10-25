// src/pages/LandingPage.jsx
import React from 'react';
import Hero from '../components/Hero'; // Import the Hero component

/**
 * The LandingPage component serves as the main entry page (route '/').
 * It displays the Hero section.
 */
const LandingPage = () => {
    // We render the existing Hero component here
    return (
        <Hero />
    );
};

export default LandingPage;