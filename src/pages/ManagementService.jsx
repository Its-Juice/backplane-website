import { Link } from 'react-router-dom';

function ManagementService() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-secondary opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
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
                <span className="text-white" aria-current="page">IT Management</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            IT <span className="text-gradient">Management</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Comprehensive IT management solutions including help desk, system administration, and IT strategy consulting.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container">
          <div className="glass-panel p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Strategic IT Management Solutions</h2>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  Optimize your IT operations with our comprehensive management services. From strategic planning to day-to-day operations, we ensure your technology infrastructure supports your business objectives.
                </p>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  Our IT management experts provide the guidance and support needed to maximize technology investments while minimizing operational overhead.
                </p>
                <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-20 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="glass-panel p-8 rounded-2xl border border-white/10 relative z-10">
                  <div className="space-y-4">
                    {[
                      { label: 'Strategic Planning', value: 'Quarterly' },
                      { label: 'Cost Reduction', value: 'Avg 25%' },
                      { label: 'Efficiency Gain', value: 'Avg 40%' },
                      { label: 'Support Coverage', value: '24/7/365' }
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
              Complete IT management solutions designed to streamline operations and maximize efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Proactive Monitoring</h3>
              <p className="text-muted">
                24/7 system monitoring with proactive issue detection and resolution to prevent downtime and optimize performance.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Expert Support Team</h3>
              <p className="text-muted">
                Access to certified IT professionals for technical support, troubleshooting, and strategic guidance.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Performance Optimization</h3>
              <p className="text-muted">
                Continuous performance tuning and optimization to ensure your systems operate at peak efficiency.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">System Maintenance</h3>
              <p className="text-muted">
                Regular system maintenance including updates, patches, and preventive care to ensure optimal performance and security.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Patch Management</h3>
              <p className="text-muted">
                Comprehensive patch management services to keep your systems secure and up-to-date with the latest improvements.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Incident Response</h3>
              <p className="text-muted">
                Rapid incident response and resolution procedures to minimize impact and restore normal operations quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="glass-panel p-12 rounded-3xl text-center max-w-4xl mx-auto border border-white/10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Streamline Your IT?</h2>
            <p className="text-xl text-muted mb-10">
              Schedule a consultation with our IT management experts to assess your current operations and develop a strategic improvement plan.
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

export default ManagementService;
