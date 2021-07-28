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
            className="footer-input"
            type="email" 
            name="email" 
            placeholder="Enter Your Email" 
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
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Follow Us</h2>
            <Link to="/">
              <i class="fab fa-facebook-square" />  Facebook
            </Link>
            <Link to="/">
              <i class="fab fa-instagram" />  Instagram
            </Link>
            <Link to="/" className="social-media-icon">
              <i class="fab fa-linkedin"/>  LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="p footer-bottom-text">Website Created by Chase Sheaff</div>
      </div>
    </div>
  )
}

export default Footer
