import { Link } from 'react-router-dom';

function InfrastructureService() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-primary opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
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
                <span className="text-white" aria-current="page">IT Infrastructure</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            IT <span className="text-gradient">Infrastructure</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Comprehensive enterprise infrastructure solutions including server management, storage, and network infrastructure.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container">
          <div className="glass-panel p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Enterprise Infrastructure Solutions</h2>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  Build and maintain a robust IT infrastructure that serves as the foundation for your business operations. Our comprehensive infrastructure services ensure optimal performance, reliability, and scalability.
                </p>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  From on-premises data centers to hybrid cloud environments, we design, implement, and manage infrastructure solutions that meet your specific business requirements.
                </p>
                <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="glass-panel p-8 rounded-2xl border border-white/10 relative z-10">
                  <div className="space-y-4">
                    {[
                      { label: 'Uptime Guarantee', value: '99.99%' },
                      { label: 'Response Time', value: '< 15min' },
                      { label: 'Global Locations', value: '24+' },
                      { label: 'Support', value: '24/7/365' }
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
              Complete IT infrastructure solutions designed to support your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Server Management</h3>
              <p className="text-muted">
                Comprehensive server administration including provisioning, monitoring, maintenance, and optimization for optimal performance.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Storage Solutions</h3>
              <p className="text-muted">
                Enterprise-grade storage solutions including SAN, NAS, and cloud storage with high availability and data protection.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Virtualization</h3>
              <p className="text-muted">
                Advanced virtualization solutions including VMware, Hyper-V, and container technologies for maximum resource efficiency.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Data Center Operations</h3>
              <p className="text-muted">
                Full-service data center management including power, cooling, physical security, and environmental monitoring.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Backup & Recovery</h3>
              <p className="text-muted">
                Comprehensive backup strategies and disaster recovery planning to protect your critical business data and ensure continuity.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">High Availability</h3>
              <p className="text-muted">
                Design and implement redundant systems with failover capabilities to ensure maximum uptime for critical applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="glass-panel p-12 rounded-3xl text-center max-w-4xl mx-auto border border-white/10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Infrastructure?</h2>
            <p className="text-xl text-muted mb-10">
              Schedule a consultation with our infrastructure experts to discuss your requirements and develop a customized solution.
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

export default InfrastructureService;
