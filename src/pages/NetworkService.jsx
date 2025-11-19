import { Link } from 'react-router-dom';

function NetworkService() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[800px] h-[800px] bg-accent opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container relative z-10 text-center">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li><span className="text-white/20">/</span></li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li><span className="text-white/20">/</span></li>
              <li>
                <span className="text-white" aria-current="page">Network Solutions</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Network <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Advanced networking solutions including SD-WAN, network security, and performance optimization for enterprise environments.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container">
          <div className="glass-panel p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Enterprise Network Solutions</h2>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  Transform your network infrastructure with our comprehensive networking solutions. We design, implement, and manage networks that deliver exceptional performance, security, and reliability.
                </p>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  From SD-WAN deployment to network security optimization, our networking experts ensure your enterprise connectivity supports business growth and enables digital transformation.
                </p>
                <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-20 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="glass-panel p-8 rounded-2xl border border-white/10 relative z-10">
                  <div className="space-y-4">
                    {[
                      { label: 'Network Uptime', value: '99.999%' },
                      { label: 'Latency', value: '< 5ms' },
                      { label: 'Bandwidth', value: '100 Gbps+' },
                      { label: 'Security', value: 'Zero Trust' }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center p-4 rounded-xl bg-white/5">
                        <span className="text-muted">{stat.label}</span>
                        <span className="text-xl font-bold text-white">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What's Included</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Comprehensive networking solutions designed for modern enterprise requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">SD-WAN Solutions</h3>
              <p className="text-muted">
                Software-defined WAN solutions for optimized connectivity, improved performance, and reduced costs across multiple sites.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Network Security</h3>
              <p className="text-muted">
                Advanced network security including firewalls, intrusion detection, and threat prevention for comprehensive protection.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Performance Optimization</h3>
              <p className="text-muted">
                Network optimization services including traffic shaping, bandwidth management, and QoS implementation for optimal performance.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Multi-Site Connectivity</h3>
              <p className="text-muted">
                Seamless connectivity solutions for multi-location enterprises with secure, high-performance networking.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">High Availability</h3>
              <p className="text-muted">
                Redundant network architecture with failover capabilities to ensure maximum uptime and business continuity.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Network Monitoring</h3>
              <p className="text-muted">
                24/7 network monitoring and management with proactive issue detection and resolution for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="glass-panel p-12 rounded-3xl text-center max-w-4xl mx-auto border border-white/10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Network?</h2>
            <p className="text-xl text-muted mb-10">
              Schedule a consultation with our network experts to discuss your connectivity requirements and develop a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">Schedule Consultation</Link>
              <Link to="/pricing" className="btn btn-glass text-lg px-8 py-4">View Pricing</Link>
            </div>
            <div className="mt-8 text-sm text-muted">
              <p className="mb-1">Or call us directly:</p>
              <p className="text-xl font-bold text-white">+1 (800) BACKPLANE</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NetworkService;
