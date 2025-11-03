function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <header className="page-header__content">
            <h1 id="page-title" className="page-header__title">
              About <span className="text-accent">Backplane</span>
            </h1>
            <p className="page-header__description">
              Learn about our mission to provide enterprise infrastructure solutions that transform businesses worldwide.
            </p>
          </header>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content" aria-labelledby="about-content-title">
        <div className="container">
          <div className="about-content__grid">
            <div className="about-content__text">
              <header className="about-content__header">
                <h2 id="about-content-title" className="sr-only">Our Story</h2>
              </header>
              
              <article className="about-section">
                <header className="about-section__header">
                  <h2>Our Mission</h2>
                </header>
                <div className="about-section__content">
                  <p>Backplane exists to bridge the gap between complex enterprise infrastructure needs and practical, scalable solutions. We believe that every business deserves access to enterprise-grade technology infrastructure without the complexity and overhead traditionally associated with it.</p>
                </div>
              </article>
              
              <article className="about-section">
                <header className="about-section__header">
                  <h2>Our Vision</h2>
                </header>
                <div className="about-section__content">
                  <p>To be the world's most trusted partner in enterprise infrastructure, enabling businesses of all sizes to achieve their full technological potential through reliable, secure, and innovative solutions.</p>
                </div>
              </article>
              
              <article className="about-section">
                <header className="about-section__header">
                  <h2>Our Values</h2>
                </header>
                <div className="about-section__content">
                  <ul className="about-values">
                    <li>
                      <strong>Reliability:</strong> We build infrastructure that businesses can depend on
                    </li>
                    <li>
                      <strong>Innovation:</strong> We continuously evolve to meet emerging challenges
                    </li>
                    <li>
                      <strong>Partnership:</strong> We succeed when our clients succeed
                    </li>
                    <li>
                      <strong>Transparency:</strong> We believe in honest, clear communication
                    </li>
                    <li>
                      <strong>Security:</strong> We protect what matters most to our clients
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            
            <aside className="about-content__stats" aria-labelledby="stats-title">
              <header className="about-stats__header">
                <h2 id="stats-title" className="sr-only">Company Statistics</h2>
              </header>
              
              <div className="about-stats__grid" role="list">
                <div className="about-stat" role="listitem">
                  <div className="about-stat__number" aria-label="Founded in 2015">2015</div>
                  <div className="about-stat__label">Founded</div>
                </div>
                <div className="about-stat" role="listitem">
                  <div className="about-stat__number" aria-label="500 plus enterprise clients">500+</div>
                  <div className="about-stat__label">Enterprise Clients</div>
                </div>
                <div className="about-stat" role="listitem">
                  <div className="about-stat__number" aria-label="99.9 percent uptime SLA">99.9%</div>
                  <div className="about-stat__label">Uptime SLA</div>
                </div>
                <div className="about-stat" role="listitem">
                  <div className="about-stat__number" aria-label="24 by 7 support available">24/7</div>
                  <div className="about-stat__label">Support Available</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
