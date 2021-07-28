import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-newsletter">
        <p className="footer-newsletter-heading">
          Sign Up to Recieve Our School Newsletter
        </p>
        <p className="footer-newsletter-text">
          Get all the upcoming events and important school updates.
        </p>
        <div className="input-areas">
          <input 
            type="email" 
            name="email" 
            placeholder="email" 
            className="footerinput" 
          />
          <Button buttonStyle="btn--outline">Sign Up</Button>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/react-template/admission">Join Our School</Link>
            <Link to="/react-template/about">Curriculum</Link>
            <Link to="/react-template/get-involved">Support Our School</Link>
            <Link to="/react-template/jobs">Jobs</Link>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Follow Our School</h2>
            <Link to="https://www.facebook.com/">
              <i class="fab fa-facebook-f"></i>
              Facebook
            </Link>
            <Link to="https://www.instagram.com/">Instagram</Link>
            <Link to="https://www.linkedin.com/">LinkedIn</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
