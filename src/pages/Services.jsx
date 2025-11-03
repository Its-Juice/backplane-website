import { Link } from 'react-router-dom';

function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <header className="page-header__content">
            <h1 id="page-title" className="page-header__title">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="page-header__description">
              Comprehensive enterprise infrastructure solutions designed to drive your business forward with cutting-edge technology and expert support.
            </p>
          </header>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview" aria-labelledby="overview-title">
        <div className="container">
          <header className="section-header">
            <h2 id="overview-title" className="section-title">Infrastructure Solutions</h2>
            <p className="section-description">
              From cloud migration to security hardening, we provide end-to-end infrastructure services that scale with your business.
            </p>
          </header>

          <div className="services__grid" role="list">
            <article className="service-card service-card--featured" role="listitem">
              <div className="service-card__icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 2L2 14v20l22 12 22-12V14L24 2z" fill="currentColor" opacity="0.8"/>
                  <circle cx="24" cy="24" r="8" fill="currentColor"/>
                </svg>
              </div>
              <div className="service-card__content">
                <header className="service-card__header">
                  <h3 className="service-card__title">Cloud Infrastructure</h3>
                </header>
                <div className="service-card__body">
                  <p className="service-card__description">
                    Scalable cloud platforms that grow with your business. Enterprise-grade reliability and performance with global reach.
                  </p>
                  <ul className="service-card__features">
                    <li>Multi-cloud strategy and deployment</li>
                    <li>Auto-scaling capabilities</li>
                    <li>Global CDN integration</li>
                    <li>99.9% uptime SLA</li>
                    <li>Disaster recovery planning</li>
                    <li>Cost optimization strategies</li>
                  </ul>
                </div>
                <footer className="service-card__cta">
                  <Link to="/contact" className="btn btn--primary">Get Started</Link>
                </footer>
              </div>
            </article>

            <article className="service-card" role="listitem">
              <div className="service-card__icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="32" height="32" rx="4" fill="currentColor" opacity="0.8"/>
                  <circle cx="16" cy="16" r="4" fill="currentColor"/>
                  <circle cx="32" cy="16" r="4" fill="currentColor"/>
                  <circle cx="16" cy="32" r="4" fill="currentColor"/>
                  <circle cx="32" cy="32" r="4" fill="currentColor"/>
                </svg>
              </div>
              <div className="service-card__content">
                <header className="service-card__header">
                  <h3 className="service-card__title">Network Security</h3>
                </header>
                <div className="service-card__body">
                  <p className="service-card__description">
                    Advanced security solutions to protect your infrastructure and data from evolving cyber threats.
                  </p>
                  <ul className="service-card__features">
                    <li>Threat detection & response</li>
                    <li>Zero-trust architecture</li>
                    <li>24/7 monitoring</li>
                    <li>Vulnerability assessments</li>
                    <li>Compliance management</li>
                    <li>Security awareness training</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="service-card" role="listitem">
              <div className="service-card__icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L44 12v12c0 8-6.5 16-20 20C14.5 40 8 32 8 24V12L24 4z" fill="currentColor" opacity="0.8"/>
                  <path d="M24 16L36 20v8c0 4-2.7 8-12 10-9.3-2-12-6-12-10v-8l12-4z" fill="currentColor"/>
                </svg>
              </div>
              <div className="service-card__content">
                <header className="service-card__header">
                  <h3 className="service-card__title">Data Management</h3>
                </header>
                <div className="service-card__body">
                  <p className="service-card__description">
                    Comprehensive data solutions including backup, recovery, and analytics for informed decision-making.
                  </p>
                  <ul className="service-card__features">
                    <li>Automated backups</li>
                    <li>Real-time analytics</li>
                    <li>Disaster recovery</li>
                    <li>Data migration services</li>
                    <li>Business intelligence</li>
                    <li>Compliance reporting</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="service-card" role="listitem">
              <div className="service-card__icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="6" width="36" height="36" rx="4" fill="currentColor" opacity="0.8"/>
                  <rect x="12" y="12" width="24" height="24" rx="2" fill="currentColor"/>
                  <circle cx="18" cy="18" r="2" fill="#000000"/>
                  <circle cx="30" cy="18" r="2" fill="#000000"/>
                  <path d="M18 26L30 26" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="service-card__content">
                <header className="service-card__header">
                  <h3 className="service-card__title">Managed Services</h3>
                </header>
                <div className="service-card__body">
                  <p className="service-card__description">
                    Expert managed services to optimize your operations and reduce technical overhead.
                  </p>
                  <ul className="service-card__features">
                    <li>Proactive monitoring</li>
                    <li>Expert support team</li>
                    <li>Performance optimization</li>
                    <li>System maintenance</li>
                    <li>Patch management</li>
                    <li>Incident response</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services" aria-labelledby="additional-title">
        <div className="container">
          <header className="section-header">
            <h2 id="additional-title" className="section-title">Additional Capabilities</h2>
            <p className="section-description">
              Specialized services to address your unique infrastructure challenges and requirements.
            </p>
          </header>

          <div className="additional-services__grid" role="list">
            <article className="additional-service" role="listitem">
              <header className="additional-service__header">
                <h3 className="additional-service__title">DevOps & Automation</h3>
              </header>
              <div className="additional-service__content">
                <p className="additional-service__description">
                  Streamline your development and deployment processes with modern DevOps practices and automation tools.
                </p>
              </div>
            </article>

            <article className="additional-service" role="listitem">
              <header className="additional-service__header">
                <h3 className="additional-service__title">Digital Transformation</h3>
              </header>
              <div className="additional-service__content">
                <p className="additional-service__description">
                  Guide your organization through digital transformation initiatives with strategic planning and execution.
                </p>
              </div>
            </article>

            <article className="additional-service" role="listitem">
              <header className="additional-service__header">
                <h3 className="additional-service__title">Compliance & Governance</h3>
              </header>
              <div className="additional-service__content">
                <p className="additional-service__description">
                  Ensure regulatory compliance with industry standards and implement robust governance frameworks.
                </p>
              </div>
            </article>

            <article className="additional-service" role="listitem">
              <header className="additional-service__header">
                <h3 className="additional-service__title">Consulting Services</h3>
              </header>
              <div className="additional-service__content">
                <p className="additional-service__description">
                  Strategic consulting to align your infrastructure investments with business objectives.
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
              <h2 id="cta-title" className="cta__title">Ready to Transform Your Infrastructure?</h2>
            </header>
            
            <div className="cta__body">
              <p className="cta__description">
                Schedule a consultation with our experts to discuss your specific requirements and create a customized solution.
              </p>
            </div>
            
            <footer className="cta__actions">
              <div className="cta__cta-group">
                <Link to="/contact" className="btn btn--primary">Schedule Consultation</Link>
                <Link to="/pricing" className="btn btn--outline">View Pricing</Link>
              </div>
            </footer>
            
            <div className="cta__contact-info">
              <p className="cta__phone">+1 (800) BACKPLANE</p>
              <p className="cta__email">contact@backplane.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
