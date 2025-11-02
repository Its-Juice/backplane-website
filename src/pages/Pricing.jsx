import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <div className="page-header__content">
            <h1 id="page-title" className="page-header__title">
              Pricing <span className="text-accent">Plans</span>
            </h1>
            <p className="page-header__description">
              Flexible enterprise infrastructure pricing plans designed to scale with your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-plans" aria-labelledby="pricing-title">
        <div className="container">
          <div className="section-header">
            <h2 id="pricing-title" className="section-title">Choose Your Plan</h2>
            <p className="section-description">
              Transparent pricing with no hidden fees. Scale up or down as your business evolves.
            </p>
          </div>

          <div className="pricing__grid">
            <article className="pricing-card">
              <div className="pricing-card__header">
                <h3 className="pricing-card__name">Starter</h3>
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">$2,499</span>
                  <span className="pricing-card__period">/month</span>
                </div>
                <p className="pricing-card__description">
                  Perfect for growing businesses ready to scale their infrastructure.
                </p>
              </div>
              
              <div className="pricing-card__features">
                <h4 className="pricing-card__features-title">What's included:</h4>
                <ul className="pricing-card__features-list">
                  <li>Cloud infrastructure setup</li>
                  <li>Basic security monitoring</li>
                  <li>24/7 support</li>
                  <li>Monthly performance reports</li>
                  <li>99.9% uptime SLA</li>
                </ul>
              </div>
              
              <div className="pricing-card__cta">
                <Link to="/contact" className="btn btn--secondary">Get Started</Link>
              </div>
            </article>

            <article className="pricing-card pricing-card--featured">
              <div className="pricing-card__badge">Most Popular</div>
              <div className="pricing-card__header">
                <h3 className="pricing-card__name">Professional</h3>
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">$7,999</span>
                  <span className="pricing-card__period">/month</span>
                </div>
                <p className="pricing-card__description">
                  Advanced infrastructure solutions for established enterprises.
                </p>
              </div>
              
              <div className="pricing-card__features">
                <h4 className="pricing-card__features-title">Everything in Starter, plus:</h4>
                <ul className="pricing-card__features-list">
                  <li>Multi-cloud deployment</li>
                  <li>Advanced security suite</li>
                  <li>Dedicated account manager</li>
                  <li>Weekly performance reports</li>
                  <li>Priority support</li>
                  <li>Custom integrations</li>
                </ul>
              </div>
              
              <div className="pricing-card__cta">
                <Link to="/contact" className="btn btn--primary">Get Started</Link>
              </div>
            </article>

            <article className="pricing-card">
              <div className="pricing-card__header">
                <h3 className="pricing-card__name">Enterprise</h3>
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">Custom</span>
                  <span className="pricing-card__period">pricing</span>
                </div>
                <p className="pricing-card__description">
                  Tailored solutions for large-scale enterprise requirements.
                </p>
              </div>
              
              <div className="pricing-card__features">
                <h4 className="pricing-card__features-title">Everything in Professional, plus:</h4>
                <ul className="pricing-card__features-list">
                  <li>Custom infrastructure design</li>
                  <li>White-glove implementation</li>
                  <li>Dedicated support team</li>
                  <li>Real-time reporting</li>
                  <li>99.99% uptime SLA</li>
                  <li>On-site consulting</li>
                  <li>Custom development</li>
                </ul>
              </div>
              
              <div className="pricing-card__cta">
                <Link to="/contact" className="btn btn--secondary">Contact Sales</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;

