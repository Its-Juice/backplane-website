import { Link } from 'react-router-dom';

function DataService() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-secondary opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Data <span className="text-gradient">Management</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Comprehensive data solutions including backup, recovery, and analytics for informed decision-making.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container">
          <div className="glass-panel p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary opacity-10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-white">Enterprise Data Solutions</h2>
              <p className="text-lg text-muted leading-relaxed max-w-4xl">
                Secure, reliable, and intelligent data management solutions that protect your valuable information while providing insights for strategic decision-making. From automated backups to advanced analytics, we ensure your data works for you.
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
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Automated Backups</h3>
              <p className="text-muted">
                Scheduled, automated backups with cross-region redundancy and point-in-time recovery options.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Real-Time Analytics</h3>
              <p className="text-muted">
                Process and analyze data in real-time to gain immediate insights and make data-driven decisions.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Disaster Recovery</h3>
              <p className="text-muted">
                Comprehensive disaster recovery planning with tested failovers and business continuity procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="glass-panel p-12 rounded-3xl text-center max-w-4xl mx-auto border border-white/10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
            <p className="text-xl text-muted mb-10">
              Let our data experts help you implement a comprehensive data management strategy that protects and empowers your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">Get Data Solutions</Link>
              <Link to="/services" className="btn btn-glass text-lg px-8 py-4">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DataService;
