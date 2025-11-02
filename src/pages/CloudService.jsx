import { Link } from 'react-router-dom';

function CloudService() {
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
                  <span className="breadcrumb__current" aria-current="page">Cloud Infrastructure</span>
                </li>
              </ol>
            </nav>
            <h1 id="page-title" className="page-header__title">
              Cloud <span className="text-accent">Infrastructure</span>
            </h1>
            <p className="page-header__description">
              Scalable cloud platforms that grow with your business. Enterprise-grade reliability and performance with global reach.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview" aria-labelledby="overview-title">
        <div className="container">
          <div className="service-overview__content">
            <div className="service-overview__text">
              <h2 id="overview-title" className="section-title">Enterprise Cloud Solutions</h2>
              <p className="service-overview__description">
                Transform your business with our comprehensive cloud infrastructure services. We design, implement, and manage cloud solutions that provide the scalability, security, and performance your enterprise demands.
              </p>
              <p className="service-overview__description">
                From initial migration strategy to ongoing optimization, our cloud experts ensure your infrastructure supports business growth while maintaining cost efficiency and operational excellence.
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
              Comprehensive cloud infrastructure solutions tailored to your business needs.
            </p>
          </div>

          <div className="service-features__grid">
            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 2L2 14v20l22 12 22-12V14L24 2z" fill="currentColor" opacity="0.8"/>
                  <circle cx="24" cy="24" r="8" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Multi-Cloud Strategy</h3>
              <p className="service-feature__description">
                Deploy across AWS, Azure, and Google Cloud with optimized workload placement and cost management.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L44 12v12c0 8-6.5 16-20 20C14.5 40 8 32 8 24V12L24 4z" fill="currentColor"/>
                  <path d="M20 16h8v4h-8zm0 8h8v4h-8z" fill="#000000"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Auto-Scaling</h3>
              <p className="service-feature__description">
                Dynamic resource allocation that scales automatically based on demand, ensuring optimal performance and cost efficiency.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.2"/>
                  <path d="M24 8v16l8 8" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <circle cx="24" cy="24" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Global CDN</h3>
              <p className="service-feature__description">
                Accelerate content delivery worldwide with our integrated CDN solutions for reduced latency and improved user experience.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="32" height="32" rx="4" fill="currentColor" opacity="0.2"/>
                  <path d="M16 20h16v4H16zm0 8h10v4H16z" fill="currentColor"/>
                  <circle cx="12" cy="20" r="2" fill="#00ff00"/>
                  <circle cx="12" cy="28" r="2" fill="#00ff00"/>
                </svg>
              </div>
              <h3 className="service-feature__title">99.9% Uptime SLA</h3>
              <p className="service-feature__description">
                Enterprise-grade reliability with guaranteed uptime, redundant infrastructure, and proactive monitoring.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L44 20v8c0 8-6.5 16-20 16S4 36 4 28v-8L24 4z" fill="currentColor" opacity="0.2"/>
                  <path d="M24 12L36 20v4c0 4-2.7 8-12 8s-12-4-12-8v-4l12-8z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Disaster Recovery</h3>
              <p className="service-feature__description">
                Comprehensive backup and disaster recovery planning to ensure business continuity in any scenario.
              </p>
            </article>

            <article className="service-feature">
              <div className="service-feature__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="32" height="32" rx="4" fill="currentColor" opacity="0.2"/>
                  <path d="M16 20h16l-2 8H18l-2-8zm8-8h4v4h-4v-4z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="service-feature__title">Cost Optimization</h3>
              <p className="service-feature__description">
                Advanced analytics and optimization strategies to minimize cloud costs while maximizing performance and reliability.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process" aria-labelledby="process-title">
        <div className="container">
          <div className="section-header">
            <h2 id="process-title" className="section-title">Our Process</h2>
            <p className="section-description">
              A proven methodology to ensure successful cloud infrastructure deployment and management.
            </p>
          </div>

          <div className="process-steps">
            <article className="process-step">
              <div className="process-step__number">01</div>
              <div className="process-step__content">
                <h3 className="process-step__title">Assessment & Planning</h3>
                <p className="process-step__description">
                  We analyze your current infrastructure, identify migration opportunities, and develop a comprehensive cloud strategy aligned with your business objectives.
                </p>
              </div>
            </article>

            <article className="process-step">
              <div className="process-step__number">02</div>
              <div className="process-step__content">
                <h3 className="process-step__title">Migration & Implementation</h3>
                <p className="process-step__description">
                  Our experts handle the complex migration process with minimal downtime, ensuring data integrity and business continuity throughout the transition.
                </p>
              </div>
            </article>

            <article className="process-step">
              <div className="process-step__number">03</div>
              <div className="process-step__content">
                <h3 className="process-step__title">Optimization & Management</h3>
                <p className="process-step__description">
                  Continuous monitoring, performance tuning, and cost optimization to ensure your cloud infrastructure delivers maximum value to your business.
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
            <h2 id="cta-title" className="cta__title">Ready to Transform Your Infrastructure?</h2>
            <p className="cta__description">
              Schedule a consultation with our cloud experts to discuss your specific requirements and create a customized cloud strategy.
            </p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn--primary">Schedule Consultation</Link>
              <Link to="/pricing" className="btn btn--outline">View Pricing</Link>
            </div>
            <div className="cta__contact-info">
              <p className="cta__phone">+1 (800) BACKPLANE</p>
              <p className="cta__email">cloud@backplane.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CloudService;

