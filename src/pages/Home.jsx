import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero hero--clean" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__content hero__content--clean">
            <h1 id="hero-title" className="hero__title hero__title--clean">
              Enterprise Infrastructure
              <span className="hero__title-accent">Made Simple</span>
            </h1>
            <p className="hero__description hero__description--clean">
              Transform your business with our cutting-edge infrastructure platform. 
              Scalable, secure, and reliable solutions designed for modern enterprises.
            </p>
            <div className="hero__actions hero__actions--clean">
              <Link to="/contact" className="btn btn--primary btn--large">Get Started</Link>
              <Link to="/services" className="btn btn--secondary btn--large">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-props" aria-labelledby="value-title">
        <div className="container">
          <div className="section-header section-header--clean">
            <h2 id="value-title" className="section-title section-title--clean">Why Choose Backplane</h2>
          </div>

          <div className="value-props__grid">
            <article className="value-prop">
              <div className="value-prop__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 2L2 14v20l22 12 22-12V14L24 2z" fill="currentColor" opacity="0.8"/>
                  <circle cx="24" cy="24" r="8" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="value-prop__title">Proven Expertise</h3>
              <p className="value-prop__description">
                500+ companies trust us with their infrastructure. Our track record speaks for itself.
              </p>
            </article>

            <article className="value-prop">
              <div className="value-prop__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="32" height="32" rx="4" fill="currentColor" opacity="0.8"/>
                  <circle cx="16" cy="16" r="4" fill="currentColor"/>
                  <circle cx="32" cy="16" r="4" fill="currentColor"/>
                  <circle cx="16" cy="32" r="4" fill="currentColor"/>
                  <circle cx="32" cy="32" r="4" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="value-prop__title">Enterprise Security</h3>
              <p className="value-prop__description">
                Bank-grade security with 99.9% uptime guarantee and 24/7 monitoring.
              </p>
            </article>

            <article className="value-prop">
              <div className="value-prop__icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L44 12v12c0 8-6.5 16-20 20C14.5 40 8 32 8 24V12L24 4z" fill="currentColor" opacity="0.8"/>
                  <path d="M24 16L36 20v8c0 4-2.7 8-12 10-9.3-2-12-6-12-10v-8l12-4z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="value-prop__title">Scalable Solutions</h3>
              <p className="value-prop__description">
                Grow from startup to enterprise without changing your infrastructure partner.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trust-indicators" aria-labelledby="trust-title">
        <div className="container">
          <div className="trust-indicators__grid">
            <div className="trust-stat">
              <div className="trust-stat__number">99.9%</div>
              <div className="trust-stat__label">Uptime SLA</div>
            </div>
            <div className="trust-stat">
              <div className="trust-stat__number">24/7</div>
              <div className="trust-stat__label">Support</div>
            </div>
            <div className="trust-stat">
              <div className="trust-stat__number">500+</div>
              <div className="trust-stat__label">Enterprise Clients</div>
            </div>
            <div className="trust-stat">
              <div className="trust-stat__number">15+</div>
              <div className="trust-stat__label">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta cta--clean" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta__content">
            <h2 id="cta-title" className="cta__title">Ready to Transform Your Infrastructure?</h2>
            <p className="cta__description">
              Join thousands of companies that trust Backplane for their enterprise infrastructure needs.
            </p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn--primary btn--large">Start Your Project</Link>
              <a href="tel:+1-800-BACKPLANE" className="btn btn--outline btn--large">Call Sales</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

