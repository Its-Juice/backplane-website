import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'aria-current="page"' : '';
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header className="header" role="banner">
        <div className="container">
          <div className="header__content">
            {/* Logo */}
            <Link to="/" className="logo" aria-label="Backplane - Home">
              <img src="/assets/logo.svg" alt="Backplane Logo" className="logo__image" />
            </Link>

            {/* Main navigation */}
            <nav className="nav" role="navigation" aria-label="Main navigation">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link to="/" className="nav__link" aria-current={location.pathname === '/' ? 'page' : undefined}>Home</Link>
                </li>
                <li className="nav__item nav__item--dropdown">
                  <a className="nav__link nav__link--dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                  <ul className="nav__dropdown">
                    <li className="nav__dropdown-item">
                      <Link to="/services/cloud" className="nav__dropdown-link">Cloud Infrastructure</Link>
                    </li>
                    <li className="nav__dropdown-item">
                      <Link to="/services/infrastructure" className="nav__dropdown-link">IT Infrastructure</Link>
                    </li>
                    <li className="nav__dropdown-item">
                      <Link to="/services/network" className="nav__dropdown-link">Network Solutions</Link>
                    </li>
                    <li className="nav__dropdown-item">
                      <Link to="/services/security" className="nav__dropdown-link">Security Services</Link>
                    </li>
                    <li className="nav__dropdown-item">
                      <Link to="/services/data" className="nav__dropdown-link">Data Management</Link>
                    </li>
                    <li className="nav__dropdown-item">
                      <Link to="/services/management" className="nav__dropdown-link">IT Management</Link>
                    </li>
                    <li className="nav__dropdown-item">
                      <Link to="/services/managed-services" className="nav__dropdown-link">Managed Services</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav__item">
                  <Link to="/pricing" className="nav__link" aria-current={location.pathname === '/pricing' ? 'page' : undefined}>Pricing</Link>
                </li>
                <li className="nav__item">
                  <Link to="/about" className="nav__link" aria-current={location.pathname === '/about' ? 'page' : undefined}>About</Link>
                </li>
                <li className="nav__item">
                  <Link to="/contact" className="nav__link" aria-current={location.pathname === '/contact' ? 'page' : undefined}>Contact</Link>
                </li>
              </ul>
            </nav>

            {/* Mobile menu toggle */}
            <button 
              className="nav__toggle" 
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu" 
              aria-label="Toggle navigation menu"
              onClick={toggleMobileMenu}
            >
              <span className="nav__toggle-line"></span>
              <span className="nav__toggle-line"></span>
              <span className="nav__toggle-line"></span>
            </button>
          </div>

          {/* Mobile menu */}
          <div className="mobile-menu" id="mobile-menu" hidden={!isMobileMenuOpen}>
            <nav className="mobile-nav" role="navigation" aria-label="Mobile navigation">
              <ul className="mobile-nav__list">
                <li className="mobile-nav__item">
                  <Link to="/" className="mobile-nav__link" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/services" className="mobile-nav__link" onClick={closeMobileMenu}>Services Overview</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/services/cloud" className="mobile-nav__link mobile-nav__link--sub" onClick={closeMobileMenu}>Cloud Infrastructure</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/services/infrastructure" className="mobile-nav__link mobile-nav__link--sub" onClick={closeMobileMenu}>IT Infrastructure</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/services/network" className="mobile-nav__link mobile-nav__link--sub" onClick={closeMobileMenu}>Network Solutions</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/services/security" className="mobile-nav__link mobile-nav__link--sub" onClick={closeMobileMenu}>Security Services</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/services/data" className="mobile-nav__link mobile-nav__link--sub" onClick={closeMobileMenu}>Data Management</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/services/management" className="mobile-nav__link mobile-nav__link--sub" onClick={closeMobileMenu}>IT Management</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/services/managed-services" className="mobile-nav__link mobile-nav__link--sub" onClick={closeMobileMenu}>Managed Services</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/pricing" className="mobile-nav__link" onClick={closeMobileMenu}>Pricing</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/about" className="mobile-nav__link" onClick={closeMobileMenu}>About</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/contact" className="mobile-nav__link" onClick={closeMobileMenu}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

