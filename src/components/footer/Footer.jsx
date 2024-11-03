import React from 'react';
import './footer.css';
import {
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="brand-info">
          <h3 className="brand-title">Career Nexus</h3>
          <p className="brand-description">
            A one-stop learning platform for job search, skill courses, and job postings by admins.
          </p>
        </div>
        
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: info@skillsikho.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Skill Street, Delhi</p>
        </div>
        
        <div className="social-links">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><AiFillFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><AiFillTwitterSquare /></a>
            <a href="https://instagram.com" aria-label="Instagram"><AiFillInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Career Nexus All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
