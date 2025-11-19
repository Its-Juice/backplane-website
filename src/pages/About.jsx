function About() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-secondary opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            About <span className="text-gradient">Backplane</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Learn about our mission to provide enterprise infrastructure solutions that transform businesses worldwide.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-2xl glow-hover neon-border">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
                <p className="text-muted leading-relaxed">
                  Backplane exists to bridge the gap between complex enterprise infrastructure needs and practical, scalable solutions. We believe that every business deserves access to enterprise-grade technology infrastructure without the complexity and overhead traditionally associated with it.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl glow-hover neon-border">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
                <p className="text-muted leading-relaxed">
                  To be the world's most trusted partner in enterprise infrastructure, enabling businesses of all sizes to achieve their full technological potential through reliable, secure, and innovative solutions.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl glow-hover neon-border">
                <h2 className="text-2xl font-bold mb-6 text-white">Our Values</h2>
                <ul className="space-y-4">
                  {[
                    { title: 'Reliability', desc: 'We build infrastructure that businesses can depend on' },
                    { title: 'Innovation', desc: 'We continuously evolve to meet emerging challenges' },
                    { title: 'Partnership', desc: 'We succeed when our clients succeed' },
                    { title: 'Transparency', desc: 'We believe in honest, clear communication' },
                    { title: 'Security', desc: 'We protect what matters most to our clients' }
                  ].map((value, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✦</span>
                      <div>
                        <strong className="text-white block">{value.title}</strong>
                        <span className="text-muted text-sm">{value.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="glass-panel p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-bold mb-8 text-center">Company Statistics</h2>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '2015', label: 'Founded' },
                    { number: '500+', label: 'Enterprise Clients' },
                    { number: '99.9%', label: 'Uptime SLA' },
                    { number: '24/7', label: 'Support Available' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                      <div className="text-sm text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 glass-panel p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-none text-center">
                <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
                <p className="text-muted mb-6 text-sm">
                  We're always looking for talented individuals to help us build the future of infrastructure.
                </p>
                <button className="btn btn-glass text-sm w-full">View Careers</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
