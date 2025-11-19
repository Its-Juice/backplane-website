import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-float">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow"></span>
              <span className="text-sm font-medium text-muted">Next Generation Infrastructure</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Enterprise Cloud <br />
              <span className="text-gradient">Reimagined</span>
            </h1>

            <p className="text-xl text-muted mb-10 max-w-2xl leading-relaxed">
              Transform your business with our cutting-edge infrastructure platform.
              Scalable, secure, and reliable solutions designed for the modern web.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">Get Started Now</Link>
              <Link to="/services" className="btn btn-glass text-lg px-8 py-4">Explore Services</Link>
            </div>

            {/* Hero Visual */}
            <div className="mt-20 w-full relative">
              <div className="glass-panel p-4 rounded-2xl border border-white/10 shadow-2xl relative z-10">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full blur-[50px] opacity-50 animate-pulse"></div>
                  </div>
                  {/* Mock UI Elements */}
                  <div className="absolute top-8 left-8 right-8 bottom-8 border border-white/5 rounded-lg p-6 flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="w-1/3 h-32 glass-panel rounded-lg"></div>
                      <div className="w-2/3 h-32 glass-panel rounded-lg"></div>
                    </div>
                    <div className="flex-1 glass-panel rounded-lg"></div>
                  </div>
                </div>
              </div>
              {/* Glow behind visual */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl -z-10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Backplane</h2>
            <p className="text-muted text-lg">Built for performance, designed for scale, and secured for peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-muted leading-relaxed">
                Optimized for speed with edge computing capabilities that put your data closer to your users.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Bank-Grade Security</h3>
              <p className="text-muted leading-relaxed">
                Enterprise-level encryption and compliance standards built-in from the ground up.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glow-hover neon-border group">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Infinite Scalability</h3>
              <p className="text-muted leading-relaxed">
                Grow without limits. Our infrastructure automatically adapts to your traffic demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-white/2">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">99.99%</div>
              <div className="text-muted font-medium">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">500+</div>
              <div className="text-muted font-medium">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-muted font-medium">Expert Support</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">15+</div>
              <div className="text-muted font-medium">Global Regions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="glass-panel p-12 md:p-20 rounded-3xl text-center max-w-5xl mx-auto border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
              Join thousands of companies that trust Backplane for their mission-critical workloads.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-primary text-lg px-10 py-4 shadow-lg shadow-primary/25">Start Your Project</Link>
              <a href="tel:+1-800-BACKPLANE" className="btn btn-glass text-lg px-10 py-4">Talk to Sales</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
