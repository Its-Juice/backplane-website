import { Link } from 'react-router-dom';

function InfrastructureService() {
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
                  <span className="breadcrumb__current" aria-current="page">IT Infrastructure</span>
                </li>
              </ol>
            </nav>
            <h1 id="page-title" className="page-header__title">
              IT <span className="text-accent">Infrastructure</span>
            </h1>
            <p className="page-header__description">
              Comprehensive enterprise infrastructure solutions including server management, storage, and network infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview" aria-labelledby="overview-title">
        <div className="container">
          <div className="service-overview__content">
            <div className="service-overview__text">
              <h2 id="overview-title" className="section-title">Enterprise Infrastructure Solutions</h2>
              <p className="service-overview__description">
                Build and maintain a robust IT infrastructure that serves as the foundation for your business operations. Our comprehensive infrastructure services ensure optimal performance, reliability, and scalability.
              </p>
              <p className="service-overview__description">
                From on-premises data centers to hybrid cloud environments, we design, implement, and manage infrastructure solutions that meet your specific business requirements.
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
              Complete IT infrastructure solutions designed to support your business operations.
            </p>
          </div>

          <div className="service-features__grid">
            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="32" height="32" rx="4" fill="currentColor" opacity="0.8"/>
                  <rect x="14" y="14" width="8" height="8" fill="currentColor"/>
                  <rect x="26" y="14" width="8" height="8" fill="currentColor"/>
                  <rect x="14" y="26" width="8" height="8" fill="currentColor"/>
                  <rect x="26" y="26" width="8" height="8" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Server Management</h3>
              <p className="service-feature__description">
                Comprehensive server administration including provisioning, monitoring, maintenance, and optimization for optimal performance.
              </p>
            </article>

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
              <h3 className="service-feature__title">Storage Solutions</h3>
              <p className="service-feature__description">
                Enterprise-grade storage solutions including SAN, NAS, and cloud storage with high availability and data protection.
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
              <h3 className="service-feature__title">Virtualization</h3>
              <p className="service-feature__description">
                Advanced virtualization solutions including VMware, Hyper-V, and container technologies for maximum resource efficiency.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="6" width="36" height="36" rx="4" fill="currentColor" opacity="0.2"/>
                  <path d="M16 16h16v4H16zm0 8h12v4H16zm0 8h8v4H16z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Data Center Operations</h3>
              <p className="service-feature__description">
                Full-service data center management including power, cooling, physical security, and environmental monitoring.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="18" fill="currentColor" opacity="0.2"/>
                  <path d="M24 12v12l8 8" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <circle cx="24" cy="24" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Backup & Recovery</h3>
              <p className="service-feature__description">
                Comprehensive backup strategies and disaster recovery planning to protect your critical business data and ensure continuity.
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
                Design and implement redundant systems with failover capabilities to ensure maximum uptime for critical applications.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta__content">
            <h2 id="cta-title" className="cta__title">Ready to Build Your Infrastructure?</h2>
            <p className="cta__description">
              Schedule a consultation with our infrastructure experts to discuss your requirements and develop a customized solution.
            </p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn--primary">Schedule Consultation</Link>
              <Link to="/pricing" className="btn btn--outline">View Pricing</Link>
            </div>
            <div className="cta__contact-info">
              <p className="cta__phone">+1 (800) BACKPLANE</p>
              <p className="cta__email">infrastructure@backplane.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfrastructureService;
