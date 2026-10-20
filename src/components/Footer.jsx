import {
  FaEye,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <a href="/" className="footer-logo">
            <FaEye className="footer-logo-icon" />
            Kanpur eye center
          </a>

          <p className="footer-description">
            Your vision, our priority. We are committed to providing quality eye
            care and helping you maintain healthy vision with personalized
            attention.
          </p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/doctors">Our Doctor</a>
            </li>
            <li>
              <a href="/equipment">Our Equipment</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Eye Care Services</h3>

          <ul>
            <li>
              <a href="/services">Eye Examination</a>
            </li>
            <li>
              <a href="/services">Vision Testing</a>
            </li>
            <li>
              <a href="/services">Retina Evaluation</a>
            </li>
            <li>
              <a href="/services">Spectacle Prescription</a>
            </li>
            <li>
              <a href="/services">General Eye Care</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-column footer-contact">
          <h3>Contact Information</h3>

          <div className="footer-contact-item">
            <FaMapMarkerAlt />
            <p>MIG-12 NEW , Near Shastri Chowk, Kanpur Nagar </p>
          </div>

          <div className="footer-contact-item">
            <FaPhoneAlt />
            <a href="tel:+918299172910">+91 82991 72910</a>
          </div>

          <div className="footer-contact-item">
            <FaEnvelope />
            <a href="mailto:info@example.com">info@example.com</a>
          </div>

          <div className="footer-contact-item">
            <FaClock />
            <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EyeCare. All rights reserved.</p>

        <p className="footer-bottom-text">Caring for your vision, every day.</p>
      </div>
    </footer>
  );
}

export default Footer;
