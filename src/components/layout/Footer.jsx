import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-wrapper">

        {/* Company Info */}
        <div className="footer-section">
          <h3>Kala Kaleshwara Sounds & Shamiyana</h3>
          <p>
            Divine Sound. Grand Celebrations.
          </p>
          <p className="text-muted">
            Serving Gajendragada and surrounding areas with premium event solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services/wedding">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 Gajendragada, Gadag, Karnataka</p>
          <p>
            📞 <a href="tel:+919986690087">Call Now (9986690087)</a>
          </p>
          <p>
            💬 <a href="https://wa.me/917483761587" target="_blank">
              WhatsApp (7483761587)
            </a>
          </p>
          <p>
            📧 <a href="mailto:kirantalikoti08@email.com">Email Us</a>
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Kala Kaleshwara Sounds & Shamiyana. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;