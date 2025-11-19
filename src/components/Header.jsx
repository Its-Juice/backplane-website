import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header glass-panel" role="banner" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0 }}>
        <div className="container">
          <div className="header__content flex justify-between items-center py-lg">
            {/* Logo */}
            <Link to="/" className="logo flex items-center gap-sm" aria-label="Backplane - Home">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
              <span className="font-display font-bold text-xl tracking-tight">Backplane</span>
            </Link>

            {/* Main navigation */}
            <nav className="nav hidden md:flex" role="navigation" aria-label="Main navigation">
              <ul className="nav__list flex gap-lg items-center">
                <li className="nav__item">
                  <Link to="/" className="nav__link text-muted hover:text-white transition-colors">Home</Link>
                </li>
                <li className="nav__item nav__item--dropdown relative group">
                  <button className="nav__link nav__link--dropdown text-muted hover:text-white transition-colors flex items-center gap-xs" aria-haspopup="true" aria-expanded="false">
                    Services
                    <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  <div className="nav__dropdown absolute top-full left-0 mt-2 w-64 glass-panel p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                    <ul className="flex flex-col gap-2">
                      <li><Link to="/services/cloud" className="block p-2 rounded hover:bg-white/5 text-sm text-muted hover:text-white">Cloud Infrastructure</Link></li>
                      <li><Link to="/services/infrastructure" className="block p-2 rounded hover:bg-white/5 text-sm text-muted hover:text-white">IT Infrastructure</Link></li>
                      <li><Link to="/services/network" className="block p-2 rounded hover:bg-white/5 text-sm text-muted hover:text-white">Network Solutions</Link></li>
                      <li><Link to="/services/security" className="block p-2 rounded hover:bg-white/5 text-sm text-muted hover:text-white">Security Services</Link></li>
                      <li><Link to="/services/data" className="block p-2 rounded hover:bg-white/5 text-sm text-muted hover:text-white">Data Management</Link></li>
                      <li><Link to="/services/management" className="block p-2 rounded hover:bg-white/5 text-sm text-muted hover:text-white">IT Management</Link></li>
                      <li><Link to="/services/managed-services" className="block p-2 rounded hover:bg-white/5 text-sm text-muted hover:text-white">Managed Services</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="nav__item">
                  <Link to="/pricing" className="nav__link text-muted hover:text-white transition-colors">Pricing</Link>
                </li>
                <li className="nav__item">
                  <Link to="/about" className="nav__link text-muted hover:text-white transition-colors">About</Link>
                </li>
              </ul>
            </nav>

            <div className="hidden md:flex items-center gap-md">
              <Link to="/contact" className="btn btn-primary glow-hover">Get Started</Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="nav__toggle md:hidden p-2 text-white"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              onClick={toggleMobileMenu}
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`mobile-menu fixed inset-0 top-[80px] glass-panel z-50 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} id="mobile-menu">
            <nav className="mobile-nav p-8" role="navigation" aria-label="Mobile navigation">
              <ul className="mobile-nav__list flex flex-col gap-lg">
                <li className="mobile-nav__item">
                  <Link to="/" className="text-2xl font-bold text-white" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/services" className="text-2xl font-bold text-white" onClick={closeMobileMenu}>Services</Link>
                  <ul className="pl-4 mt-4 flex flex-col gap-4 border-l border-white/10">
                    <li><Link to="/services/cloud" className="text-muted" onClick={closeMobileMenu}>Cloud Infrastructure</Link></li>
                    <li><Link to="/services/security" className="text-muted" onClick={closeMobileMenu}>Security</Link></li>
                  </ul>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/pricing" className="text-2xl font-bold text-white" onClick={closeMobileMenu}>Pricing</Link>
                </li>
                <li className="mobile-nav__item">
                  <Link to="/about" className="text-2xl font-bold text-white" onClick={closeMobileMenu}>About</Link>
                </li>
                <li className="mobile-nav__item mt-8">
                  <Link to="/contact" className="btn btn-primary w-full text-center" onClick={closeMobileMenu}>Get Started</Link>
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
