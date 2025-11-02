import { Link } from 'react-router-dom';

function NetworkService() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <div className="page-header__content">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <ol className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <Link to="/" className="breadcrumb__link">Home</Link>
                </li>
                <li className="breadcrumb__item">
                  <Link to="/services" className="breadcrumb__link">Services</Link>
                </li>
                <li className="breadcrumb__item">
                  <span className="breadcrumb__current" aria-current="page">Network Solutions</span>
                </li>
              </ol>
            </nav>
            <h1 id="page-title" className="page-header__title">
              Network <span className="text-accent">Solutions</span>
            </h1>
            <p className="page-header__description">
              Advanced networking solutions including SD-WAN, network security, and performance optimization for enterprise environments.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview" aria-labelledby="overview-title">
        <div className="container">
          <div className="service-overview__content">
            <div className="service-overview__text">
              <h2 id="overview-title" className="section-title">Enterprise Network Solutions</h2>
              <p className="service-overview__description">
                Transform your network infrastructure with our comprehensive networking solutions. We design, implement, and manage networks that deliver exceptional performance, security, and reliability.
              </p>
              <p className="service-overview__description">
                From SD-WAN deployment to network security optimization, our networking experts ensure your enterprise connectivity supports business growth and enables digital transformation.
              </p>
            </div>
            <div className="service-overview__cta">
              <Link to="/contact" className="btn btn--primary btn--large">Get Started Today</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="service-features" aria-labelledby="features-title">
        <div className="container">
          <div className="section-header">
            <h2 id="features-title" className="section-title">What's Included</h2>
            <p className="section-description">
              Comprehensive networking solutions designed for modern enterprise requirements.
            </p>
          </div>

          <div className="service-features__grid">
            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="18" fill="currentColor" opacity="0.2"/>
                  <circle cx="24" cy="24" r="8" fill="currentColor"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  <circle cx="36" cy="12" r="3" fill="currentColor"/>
                  <circle cx="12" cy="36" r="3" fill="currentColor"/>
                  <circle cx="36" cy="36" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">SD-WAN Solutions</h3>
              <p className="service-feature__description">
                Software-defined WAN solutions for optimized connectivity, improved performance, and reduced costs across multiple sites.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="32" height="32" rx="4" fill="currentColor" opacity="0.2"/>
                  <path d="M16 16h16v4H16zm0 8h12v4H16zm0 8h8v4H16z" fill="currentColor"/>
                  <circle cx="12" cy="20" r="2" fill="#ff4444"/>
                  <circle cx="12" cy="28" r="2" fill="#ff4444"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Network Security</h3>
              <p className="service-feature__description">
                Advanced network security including firewalls, intrusion detection, and threat prevention for comprehensive protection.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L44 24L24 44L4 24L24 4z" fill="currentColor" opacity="0.2"/>
                  <path d="M24 10L36 24L24 38L12 24L24 10z" fill="currentColor"/>
                  <circle cx="24" cy="24" r="4" fill="#000000"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Performance Optimization</h3>
              <p className="service-feature__description">
                Network optimization services including traffic shaping, bandwidth management, and QoS implementation for optimal performance.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="6" width="36" height="36" rx="4" fill="currentColor" opacity="0.2"/>
                  <circle cx="16" cy="16" r="3" fill="currentColor"/>
                  <circle cx="32" cy="16" r="3" fill="currentColor"/>
                  <circle cx="16" cy="32" r="3" fill="currentColor"/>
                  <circle cx="32" cy="32" r="3" fill="currentColor"/>
                  <path d="M18 18L30 30M30 18L18 30" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Multi-Site Connectivity</h3>
              <p className="service-feature__description">
                Seamless connectivity solutions for multi-location enterprises with secure, high-performance networking.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 2L42 12v12c0 8-6.5 16-18 20C16.5 40 10 32 10 24V12L24 2z" fill="currentColor" opacity="0.2"/>
                  <path d="M24 10L34 16v8c0 4-2.7 8-10 10-7.3-2-10-6-10-10v-8l10-6z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">High Availability</h3>
              <p className="service-feature__description">
                Redundant network architecture with failover capabilities to ensure maximum uptime and business continuity.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="16" fill="currentColor" opacity="0.2"/>
                  <path d="M24 12v12l8 8" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <circle cx="24" cy="24" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Network Monitoring</h3>
              <p className="service-feature__description">
                24/7 network monitoring and management with proactive issue detection and resolution for optimal performance.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta__content">
            <h2 id="cta-title" className="cta__title">Ready to Optimize Your Network?</h2>
            <p className="cta__description">
              Schedule a consultation with our network experts to discuss your connectivity requirements and develop a customized solution.
            </p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn--primary">Schedule Consultation</Link>
              <Link to="/pricing" className="btn btn--outline">View Pricing</Link>
            </div>
            <div className="cta__contact-info">
              <p className="cta__phone">+1 (800) BACKPLANE</p>
              <p className="cta__email">network@backplane.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NetworkService;
