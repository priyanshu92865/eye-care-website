import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/Images/Logo.jpg" alt="EyeCare Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>

        <li>
          <Link to="/doctors" onClick={closeMenu}>
            Doctors
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>

        <li className="mobile-login">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=KANPUR+EYE+CENTRE%2C+M.I.G%2C+NEW%2C+Barra+2%2C+Kanpur%2C+Uttar+Pradesh"
            onClick={closeMenu}
          >
            Location
          </a>
        </li>
      </ul>

      {/* Desktop Login Button */}
      <div className="navbar-button">
        <a href="/contact">Location</a>
      </div>

      {/* Hamburger Menu */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        type="button"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
