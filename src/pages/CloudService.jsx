import { Link } from 'react-router-dom';

function CloudService() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Cloud <span className="text-gradient">Infrastructure</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Scalable cloud platforms that grow with your business. Enterprise-grade reliability and performance with global reach.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container">
          <div className="glass-panel p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-white">Enterprise Cloud Solutions</h2>
              <p className="text-lg text-muted leading-relaxed max-w-4xl">
                Transform your business with our comprehensive cloud infrastructure services. We design, implement, and manage scalable cloud solutions that adapt to your evolving needs while maintaining enterprise-grade security and performance.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Multi-Cloud Strategy</h3>
              <p className="text-muted">
                Deploy across AWS, Azure, Google Cloud, and private clouds with unified management and governance.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Auto-Scaling</h3>
              <p className="text-muted">
                Automatically scale resources up or down based on demand to optimize performance and costs.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Global CDN</h3>
              <p className="text-muted">
                Accelerate content delivery worldwide with our global network of edge locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="glass-panel p-12 rounded-3xl text-center max-w-4xl mx-auto border border-white/10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-xl text-muted mb-10">
              Let our cloud experts help you design and implement a cloud strategy that aligns with your business goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">Start Your Cloud Journey</Link>
              <Link to="/services" className="btn btn-glass text-lg px-8 py-4">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CloudService;
