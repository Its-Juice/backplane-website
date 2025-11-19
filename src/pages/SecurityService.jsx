import { Link } from 'react-router-dom';

function SecurityService() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500 opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Security <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Advanced security solutions to protect your infrastructure and data from evolving cyber threats.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container">
          <div className="glass-panel p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 opacity-10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-white">Enterprise Security Solutions</h2>
              <p className="text-lg text-muted leading-relaxed max-w-4xl">
                Comprehensive cybersecurity solutions that protect your business from emerging threats. Our security-first approach ensures your infrastructure is fortified with enterprise-grade protection while maintaining operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Threat Detection</h3>
              <p className="text-muted">
                Advanced threat detection with real-time monitoring and automated response to security incidents.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Zero-Trust Architecture</h3>
              <p className="text-muted">
                Implement zero-trust security models that verify every user and device before granting access.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">24/7 Monitoring</h3>
              <p className="text-muted">
                Round-the-clock security monitoring with expert analysts ready to respond to threats immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="glass-panel p-12 rounded-3xl text-center max-w-4xl mx-auto border border-white/10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Infrastructure?</h2>
            <p className="text-xl text-muted mb-10">
              Let our security experts conduct a comprehensive assessment and implement a robust security strategy for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">Get Security Assessment</Link>
              <Link to="/services" className="btn btn-glass text-lg px-8 py-4">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecurityService;
