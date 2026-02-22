import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo/logo.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-wrapper">

        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="KKSS Logo" />
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Call Button */}
        <a href="tel:+919986690087" className="btn-primary call-btn">
          9986690087
        </a>

        {/* Mobile Menu Button */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="tel:+919986690087" className="btn-primary">
            9986690087
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;