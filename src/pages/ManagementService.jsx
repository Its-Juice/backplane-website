import { Link } from 'react-router-dom';

function ManagementService() {
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
                  <span className="breadcrumb__current" aria-current="page">IT Management</span>
                </li>
              </ol>
            </nav>
            <h1 id="page-title" className="page-header__title">
              IT <span className="text-accent">Management</span>
            </h1>
            <p className="page-header__description">
              Comprehensive IT management solutions including help desk, system administration, and IT strategy consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview" aria-labelledby="overview-title">
        <div className="container">
          <div className="service-overview__content">
            <div className="service-overview__text">
              <h2 id="overview-title" className="section-title">Strategic IT Management Solutions</h2>
              <p className="service-overview__description">
                Optimize your IT operations with our comprehensive management services. From strategic planning to day-to-day operations, we ensure your technology infrastructure supports your business objectives.
              </p>
              <p className="service-overview__description">
                Our IT management experts provide the guidance and support needed to maximize technology investments while minimizing operational overhead.
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
              Complete IT management solutions designed to streamline operations and maximize efficiency.
            </p>
          </div>

          <div className="service-features__grid">
            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="16" fill="currentColor" opacity="0.2"/>
                  <path d="M24 12v12l8 8" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <circle cx="24" cy="24" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Proactive Monitoring</h3>
              <p className="service-feature__description">
                24/7 system monitoring with proactive issue detection and resolution to prevent downtime and optimize performance.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="32" height="32" rx="4" fill="currentColor" opacity="0.2"/>
                  <path d="M16 16h16v4H16zm0 8h12v4H16zm0 8h8v4H16z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Expert Support Team</h3>
              <p className="service-feature__description">
                Access to certified IT professionals for technical support, troubleshooting, and strategic guidance.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L44 12v12c0 8-6.5 16-20 20C14.5 40 8 32 8 24V12L24 4z" fill="currentColor" opacity="0.8"/>
                  <circle cx="24" cy="24" r="8" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Performance Optimization</h3>
              <p className="service-feature__description">
                Continuous performance tuning and optimization to ensure your systems operate at peak efficiency.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="6" width="36" height="36" rx="4" fill="currentColor" opacity="0.2"/>
                  <path d="M16 16h16l-2 8H18l-2-8zm8-8h4v4h-4v-4z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">System Maintenance</h3>
              <p className="service-feature__description">
                Regular system maintenance including updates, patches, and preventive care to ensure optimal performance and security.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 2L42 12v12c0 8-6.5 16-18 20C16.5 40 10 32 10 24V12L24 2z" fill="currentColor" opacity="0.2"/>
                  <path d="M24 10L34 16v8c0 4-2.7 8-10 10-7.3-2-10-6-10-10v-8l10-6z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Patch Management</h3>
              <p className="service-feature__description">
                Comprehensive patch management services to keep your systems secure and up-to-date with the latest improvements.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="18" fill="currentColor" opacity="0.2"/>
                  <path d="M20 20h8v8h-8zm4-12h8v4h-8z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Incident Response</h3>
              <p className="service-feature__description">
                Rapid incident response and resolution procedures to minimize impact and restore normal operations quickly.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta__content">
            <h2 id="cta-title" className="cta__title">Ready to Streamline Your IT?</h2>
            <p className="cta__description">
              Schedule a consultation with our IT management experts to assess your current operations and develop a strategic improvement plan.
            </p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn--primary">Schedule Consultation</Link>
              <Link to="/pricing" className="btn btn--outline">View Pricing</Link>
            </div>
            <div className="cta__contact-info">
              <p className="cta__phone">+1 (800) BACKPLANE</p>
              <p className="cta__email">management@backplane.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ManagementService;
