import React from "react";
import { Link } from 'react-router-dom'; // <-- ADD THIS IMPORT
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" data-testid="hero-section">
      {/* Decorative circle */}
      <div className="hero-circle" data-testid="hero-circle"></div>

      {/* Hero content */}
      <div className="hero-content" data-testid="hero-content">
        <h1 className="hero-title" data-testid="hero-title">
          TicketMaster Pro
        </h1>
        <p className="hero-subtitle" data-testid="hero-subtitle">
          Manage your tickets effortlessly — create, track, and resolve in one place.
        </p>
        <div className="hero-buttons" data-testid="hero-buttons">
          
          {/* REPLACED BUTTON WITH LINK to="/auth/signup" */}
          <Link 
            to="/auth/signup" 
            className="btn-primary" 
            data-testid="btn-get-started"
          >
            Get Started
          </Link>
          
          {/* REPLACED BUTTON WITH LINK to="/auth/login" */}
          <Link 
            to="/auth/login" 
            className="btn-secondary" 
            data-testid="btn-login"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Placeholder illustration using inline SVG */}
      <div className="hero-image-placeholder" data-testid="hero-image">
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="150" fill="#0070f3" />
          <text x="50%" y="50%" textAnchor="middle" fill="white" dy=".3em">
            Hero
          </text>
        </svg>
      </div>

      {/* Wavy SVG background */}
      <svg
        className="hero-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#f0f4ff"
          d="M0,64L60,80C120,96,240,128,360,133.3C480,139,600,117,720,106.7C840,96,960,96,1080,101.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;