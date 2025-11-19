import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Pricing <span className="text-gradient">Plans</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Flexible enterprise infrastructure pricing plans designed to scale with your business needs.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Scale up or down as your business evolves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="glass-panel p-8 rounded-2xl flex flex-col glow-hover">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">$2,499</span>
                  <span className="text-muted">/month</span>
                </div>
                <p className="text-muted mt-4 text-sm">
                  Perfect for growing businesses ready to scale their infrastructure.
                </p>
              </div>

              <div className="flex-grow mb-8">
                <h4 className="text-sm font-bold mb-4 text-white">What's included:</h4>
                <ul className="space-y-3">
                  {[
                    'Cloud infrastructure setup',
                    'Basic security monitoring',
                    '24/7 support',
                    'Monthly performance reports',
                    '99.9% uptime SLA'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted">
                      <span className="text-primary">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="btn btn-glass w-full text-center">Get Started</Link>
            </div>

            {/* Professional Plan */}
            <div className="glass-panel p-8 rounded-2xl flex flex-col relative transform md:-translate-y-4 border border-primary/50 shadow-[0_0_30px_rgba(var(--color-primary),0.2)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-primary">Professional</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">$7,999</span>
                  <span className="text-muted">/month</span>
                </div>
                <p className="text-muted mt-4 text-sm">
                  Advanced infrastructure solutions for established enterprises.
                </p>
              </div>

              <div className="flex-grow mb-8">
                <h4 className="text-sm font-bold mb-4 text-white">Everything in Starter, plus:</h4>
                <ul className="space-y-3">
                  {[
                    'Multi-cloud deployment',
                    'Advanced security suite',
                    'Dedicated account manager',
                    'Weekly performance reports',
                    'Priority support',
                    'Custom integrations'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted">
                      <span className="text-secondary">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="btn btn-primary w-full text-center">Get Started</Link>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-panel p-8 rounded-2xl flex flex-col glow-hover">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">Custom</span>
                </div>
                <p className="text-muted mt-4 text-sm">
                  Tailored solutions for large-scale enterprise requirements.
                </p>
              </div>

              <div className="flex-grow mb-8">
                <h4 className="text-sm font-bold mb-4 text-white">Everything in Professional, plus:</h4>
                <ul className="space-y-3">
                  {[
                    'Custom infrastructure design',
                    'White-glove implementation',
                    'Dedicated support team',
                    'Real-time reporting',
                    '99.99% uptime SLA',
                    'On-site consulting',
                    'Custom development'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted">
                      <span className="text-accent">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="btn btn-glass w-full text-center">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;

