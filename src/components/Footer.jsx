import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <Link to="/" className="footer__logo" aria-label="Backplane - Home">
                <img src="/assets/logo.svg" alt="Backplane Logo" className="footer__logo-image" />
              </Link>
              <p className="footer__tagline">Enterprise Infrastructure Solutions</p>
            </div>

            <nav className="footer__nav" aria-label="Footer navigation">
              <div className="footer__nav-section">
                <h3 className="footer__nav-title">Services</h3>
                <ul className="footer__nav-list">
                  <li><Link to="/services/cloud" className="footer__nav-link">Cloud Infrastructure</Link></li>
                  <li><Link to="/services/security" className="footer__nav-link">Security Services</Link></li>
                  <li><Link to="/services/data" className="footer__nav-link">Data Management</Link></li>
                  <li><Link to="/services/managed-services" className="footer__nav-link">Managed Services</Link></li>
                  <li><Link to="/services/infrastructure" className="footer__nav-link">IT Infrastructure</Link></li>
                  <li><Link to="/services/network" className="footer__nav-link">Network Solutions</Link></li>
                  <li><Link to="/services/management" className="footer__nav-link">IT Management</Link></li>
                </ul>
              </div>

              <div className="footer__nav-section">
                <h3 className="footer__nav-title">Company</h3>
                <ul className="footer__nav-list">
                  <li><Link to="/about" className="footer__nav-link">About Us</Link></li>
                  <li><a href="#" className="footer__nav-link">Careers</a></li>
                  <li><a href="#" className="footer__nav-link">Press</a></li>
                  <li><a href="#" className="footer__nav-link">Partners</a></li>
                </ul>
              </div>

              <div className="footer__nav-section">
                <h3 className="footer__nav-title">Resources</h3>
                <ul className="footer__nav-list">
                  <li><a href="#" className="footer__nav-link">Documentation</a></li>
                  <li><Link to="/contact" className="footer__nav-link">Support</Link></li>
                  <li><a href="#" className="footer__nav-link">Case Studies</a></li>
                  <li><a href="#" className="footer__nav-link">Blog</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="footer__bottom">
            <div className="footer__legal">
              <p className="footer__copyright">© 2025 Backplane. All rights reserved.</p>
              <ul className="footer__legal-links">
                <li><Link to="/privacy-policy" className="footer__legal-link">Privacy Policy</Link></li>
                <li><Link to="/tos" className="footer__legal-link">Terms of Service</Link></li>
                <li><a href="#" className="footer__legal-link">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

