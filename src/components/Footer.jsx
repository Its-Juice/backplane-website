import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer py-xl mt-lg border-t border-white/5" role="contentinfo" style={{ background: 'var(--gradient-dark)' }}>
      <div className="container">
        <div className="footer__content grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="footer__main col-span-1 md:col-span-1">
            <div className="footer__brand mb-lg">
              <Link to="/" className="footer__logo flex items-center gap-sm mb-sm" aria-label="Backplane - Home">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
                <span className="font-display font-bold text-xl tracking-tight">Backplane</span>
              </Link>
              <p className="footer__tagline text-muted text-sm">Enterprise Infrastructure Solutions for the modern web.</p>
            </div>
          </div>

          <div className="footer__nav-section">
            <h3 className="footer__nav-title font-bold text-white mb-md">Services</h3>
            <ul className="footer__nav-list flex flex-col gap-sm">
              <li><Link to="/services/cloud" className="text-muted hover:text-primary transition-colors text-sm">Cloud Infrastructure</Link></li>
              <li><Link to="/services/security" className="text-muted hover:text-primary transition-colors text-sm">Security Services</Link></li>
              <li><Link to="/services/data" className="text-muted hover:text-primary transition-colors text-sm">Data Management</Link></li>
              <li><Link to="/services/managed-services" className="text-muted hover:text-primary transition-colors text-sm">Managed Services</Link></li>
            </ul>
          </div>

          <div className="footer__nav-section">
            <h3 className="footer__nav-title font-bold text-white mb-md">Company</h3>
            <ul className="footer__nav-list flex flex-col gap-sm">
              <li><Link to="/about" className="text-muted hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors text-sm">Partners</a></li>
            </ul>
          </div>

          <div className="footer__nav-section">
            <h3 className="footer__nav-title font-bold text-white mb-md">Resources</h3>
            <ul className="footer__nav-list flex flex-col gap-sm">
              <li><a href="#" className="text-muted hover:text-primary transition-colors text-sm">Documentation</a></li>
              <li><Link to="/contact" className="text-muted hover:text-primary transition-colors text-sm">Support</Link></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom mt-xl pt-lg border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="footer__copyright text-muted text-sm">© 2025 Backplane. All rights reserved.</p>
          <ul className="footer__legal-links flex gap-md">
            <li><Link to="/privacy-policy" className="text-muted hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            <li><Link to="/tos" className="text-muted hover:text-white transition-colors text-sm">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

