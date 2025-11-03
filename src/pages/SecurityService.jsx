import { Link } from 'react-router-dom';

function SecurityService() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <header className="page-header__content">
            <h1 id="page-title" className="page-header__title">
              Security <span className="text-accent">Services</span>
            </h1>
            <p className="page-header__description">
              Advanced security solutions to protect your infrastructure and data from evolving cyber threats.
            </p>
          </header>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview" aria-labelledby="overview-title">
        <div className="container">
          <header className="service-overview__header">
            <h2 id="overview-title" className="sr-only">Service Overview</h2>
          </header>
          
          <div className="service-overview__content">
            <div className="service-overview__text">
              <header className="service-overview__text-header">
                <h2>Enterprise Security Solutions</h2>
              </header>
              <div className="service-overview__text-body">
                <p className="service-overview__description">
                  Comprehensive cybersecurity solutions that protect your business from emerging threats. Our security-first approach ensures your infrastructure is fortified with enterprise-grade protection while maintaining operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="service-features" aria-labelledby="features-title">
        <div className="container">
          <header className="service-features__header">
            <h2 id="features-title" className="sr-only">Service Features</h2>
          </header>
          
          <div className="service-features__grid" role="list">
            <article className="service-feature" role="listitem">
              <header className="service-feature__header">
                <div className="service-feature__icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 2L2 14v20l22 12 22-12V14L24 2z" fill="currentColor" opacity="0.8"/>
                    <circle cx="24" cy="24" r="8" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="service-feature__title">Threat Detection</h3>
              </header>
              <div className="service-feature__content">
                <p className="service-feature__description">
                  Advanced threat detection with real-time monitoring and automated response to security incidents.
                </p>
              </div>
            </article>

            <article className="service-feature" role="listitem">
              <header className="service-feature__header">
                <div className="service-feature__icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="32" height="32" rx="4" fill="currentColor" opacity="0.8"/>
                    <circle cx="16" cy="16" r="4" fill="currentColor"/>
                    <circle cx="32" cy="16" r="4" fill="currentColor"/>
                    <circle cx="16" cy="32" r="4" fill="currentColor"/>
                    <circle cx="32" cy="32" r="4" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="service-feature__title">Zero-Trust Architecture</h3>
              </header>
              <div className="service-feature__content">
                <p className="service-feature__description">
                  Implement zero-trust security models that verify every user and device before granting access.
                </p>
              </div>
            </article>

            <article className="service-feature" role="listitem">
              <header className="service-feature__header">
                <div className="service-feature__icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4L44 12v12c0 8-6.5 16-20 20C14.5 40 8 32 8 24V12L24 4z" fill="currentColor" opacity="0.8"/>
                    <path d="M24 16L36 20v8c0 4-2.7 8-12 10-9.3-2-12-6-12-10v-8l12-4z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="service-feature__title">24/7 Monitoring</h3>
              </header>
              <div className="service-feature__content">
                <p className="service-feature__description">
                  Round-the-clock security monitoring with expert analysts ready to respond to threats immediately.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta__content">
            <header className="cta__header">
              <h2 id="cta-title" className="cta__title">Ready to Secure Your Infrastructure?</h2>
            </header>
            
            <div className="cta__body">
              <p className="cta__description">
                Let our security experts conduct a comprehensive assessment and implement a robust security strategy for your organization.
              </p>
            </div>
            
            <footer className="cta__actions">
              <div className="cta__cta-group">
                <Link to="/contact" className="btn btn--primary">Get Security Assessment</Link>
                <Link to="/services" className="btn btn--outline">View All Services</Link>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecurityService;
