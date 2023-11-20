import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer-container">
        <div className="footer-row">
          
          {/* Address Section */}
          <div className="footer-column address-section">
            <h5>Address</h5>
            <p>207 Charleson Dr, Charlotte, NC, 28262</p>
          </div>

          {/* Timings Section */}
          <div className="footer-column hours-section">
            <h5>Hours</h5>
            <p>Monday: 9:00AM - 10:30PM</p>
            <p>Tuesday: 9:00AM - 10:30PM</p>
            <p>Wenesday: 9:00AM - 10:30PM</p>
            <p>Thurday: 9:00AM - 10:30PM</p>
            <p>Friday: 9:00AM - 10:30PM</p>
            <p>Saturday: 9:00AM - 10:30PM</p>
            <p>Sunday: 9:00AM - 10:30PM</p>
          </div>

          {/* Contact Section */}
          <div className="footer-column contact-section">
            <h5>Contact Us</h5>
            <p>Phone: +1 919-592-2367</p>
            <p>Location: North Carolina, Charlotte</p>
          </div>
        </div>

        <div className="footer-row">
          <div className="footer-column copyright-section">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Jigna-Kitchen. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
