import { Link } from 'react-router-dom';

function DataService() {
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
                  <span className="breadcrumb__current" aria-current="page">Data Management</span>
                </li>
              </ol>
            </nav>
            <h1 id="page-title" className="page-header__title">
              Data <span className="text-accent">Management</span>
            </h1>
            <p className="page-header__description">
              Comprehensive data solutions including backup, recovery, analytics, and data governance for enterprise organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview" aria-labelledby="overview-title">
        <div className="container">
          <div className="service-overview__content">
            <div className="service-overview__text">
              <h2 id="overview-title" className="section-title">Enterprise Data Solutions</h2>
              <p className="service-overview__description">
                Unlock the power of your data with our comprehensive data management services. We provide complete data lifecycle management from secure storage to advanced analytics and business intelligence.
              </p>
              <p className="service-overview__description">
                Our data experts ensure your organization's data is protected, accessible, and optimized to drive informed decision-making and business growth.
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
              Complete data management solutions designed to protect, optimize, and leverage your data assets.
            </p>
          </div>

          <div className="service-features__grid">
            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="8" width="24" height="32" rx="2" fill="currentColor" opacity="0.2"/>
                  <rect x="16" y="12" width="16" height="4" fill="currentColor"/>
                  <rect x="16" y="18" width="12" height="3" fill="currentColor"/>
                  <rect x="16" y="24" width="10" height="3" fill="currentColor"/>
                  <rect x="16" y="30" width="8" height="3" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Automated Backups</h3>
              <p className="service-feature__description">
                Comprehensive backup strategies with automated scheduling, verification, and offsite replication for complete data protection.
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
              <h3 className="service-feature__title">Real-time Analytics</h3>
              <p className="service-feature__description">
                Advanced analytics platforms providing real-time insights, predictive modeling, and data visualization for informed decision-making.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L44 12v12c0 8-6.5 16-20 20C14.5 40 8 32 8 24V12L24 4z" fill="currentColor" opacity="0.8"/>
                  <circle cx="24" cy="24" r="8" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Disaster Recovery</h3>
              <p className="service-feature__description">
                Comprehensive disaster recovery planning with rapid restoration capabilities to ensure business continuity and data availability.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="6" width="36" height="36" rx="4" fill="currentColor" opacity="0.2"/>
                  <path d="M16 16h16l-2 8H18l-2-8zm8-8h4v4h-4v-4z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Data Migration</h3>
              <p className="service-feature__description">
                Seamless data migration services with minimal downtime, data validation, and quality assurance for successful transitions.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 2L42 12v12c0 8-6.5 16-18 20C16.5 40 10 32 10 24V12L24 2z" fill="currentColor" opacity="0.2"/>
                  <path d="M24 10L34 16v8c0 4-2.7 8-10 10-7.3-2-10-6-10-10v-8l10-6z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Business Intelligence</h3>
              <p className="service-feature__description">
                Custom BI solutions with dashboards, reporting tools, and data visualization to transform data into actionable insights.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="18" fill="currentColor" opacity="0.2"/>
                  <path d="M18 18h12v12H18z" fill="currentColor"/>
                  <path d="M20 20h8v8h-8z" fill="#000000"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Compliance Reporting</h3>
              <p className="service-feature__description">
                Automated compliance reporting and data governance frameworks to meet regulatory requirements and industry standards.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta__content">
            <h2 id="cta-title" className="cta__title">Ready to Harness Your Data?</h2>
            <p className="cta__description">
              Schedule a consultation with our data experts to assess your current data infrastructure and develop a comprehensive data strategy.
            </p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn--primary">Schedule Consultation</Link>
              <Link to="/pricing" className="btn btn--outline">View Pricing</Link>
            </div>
            <div className="cta__contact-info">
              <p className="cta__phone">+1 (800) BACKPLANE</p>
              <p className="cta__email">data@backplane.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DataService;
