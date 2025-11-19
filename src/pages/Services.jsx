import { Link } from 'react-router-dom';

function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Comprehensive enterprise infrastructure solutions designed to drive your business forward with cutting-edge technology and expert support.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Infrastructure Solutions</h2>
            <p className="text-muted max-w-2xl mx-auto">
              From cloud migration to security hardening, we provide end-to-end infrastructure services that scale with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud Infrastructure</h3>
              <p className="text-muted mb-6">
                Scalable cloud platforms that grow with your business. Enterprise-grade reliability and performance with global reach.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-muted"><span className="text-primary">✓</span> Multi-cloud strategy</li>
                <li className="flex items-center gap-2 text-sm text-muted"><span className="text-primary">✓</span> Auto-scaling capabilities</li>
                <li className="flex items-center gap-2 text-sm text-muted"><span className="text-primary">✓</span> Global CDN integration</li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full">Get Started</Link>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Network Security</h3>
              <p className="text-muted mb-6">
                Advanced security solutions to protect your infrastructure and data from evolving cyber threats.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-muted"><span className="text-secondary">✓</span> Threat detection & response</li>
                <li className="flex items-center gap-2 text-sm text-muted"><span className="text-secondary">✓</span> Zero-trust architecture</li>
                <li className="flex items-center gap-2 text-sm text-muted"><span className="text-secondary">✓</span> 24/7 monitoring</li>
              </ul>
              <Link to="/contact" className="btn btn-glass w-full">Learn More</Link>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Data Management</h3>
              <p className="text-muted mb-6">
                Comprehensive data solutions including backup, recovery, and analytics for informed decision-making.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-muted"><span className="text-accent">✓</span> Automated backups</li>
                <li className="flex items-center gap-2 text-sm text-muted"><span className="text-accent">✓</span> Real-time analytics</li>
                <li className="flex items-center gap-2 text-sm text-muted"><span className="text-accent">✓</span> Disaster recovery</li>
              </ul>
              <Link to="/contact" className="btn btn-glass w-full">Learn More</Link>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Managed Services</h3>
              <p className="text-muted mb-6">
                Expert managed services to optimize your operations and reduce technical overhead.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-muted"><span className="text-white">✓</span> Proactive monitoring</li>
                <li className="flex items-center gap-2 text-sm text-muted"><span className="text-white">✓</span> Expert support team</li>
                <li className="flex items-center gap-2 text-sm text-muted"><span className="text-white">✓</span> System maintenance</li>
              </ul>
              <Link to="/contact" className="btn btn-glass w-full">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white/2">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Additional Capabilities</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Specialized services to address your unique infrastructure challenges and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['DevOps & Automation', 'Digital Transformation', 'Compliance & Governance', 'Consulting Services'].map((service, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors text-center">
                <h3 className="font-bold mb-2">{service}</h3>
                <p className="text-sm text-muted">Specialized solutions tailored to your specific enterprise needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="glass-panel p-12 rounded-3xl text-center max-w-4xl mx-auto border border-white/10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-muted mb-10">
              Schedule a consultation with our experts to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">Schedule Consultation</Link>
              <Link to="/pricing" className="btn btn-glass text-lg px-8 py-4">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
