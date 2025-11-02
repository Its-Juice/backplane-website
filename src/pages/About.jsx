function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <div className="page-header__content">
            <h1 id="page-title" className="page-header__title">
              About <span className="text-accent">Backplane</span>
            </h1>
            <p className="page-header__description">
              Learn about our mission to provide enterprise infrastructure solutions that transform businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-content__grid">
            <div className="about-content__text">
              <h2>Our Mission</h2>
              <p>Backplane exists to bridge the gap between complex enterprise infrastructure needs and practical, scalable solutions. We believe that every business deserves access to enterprise-grade technology infrastructure without the complexity and overhead traditionally associated with it.</p>
              
              <h2>Our Vision</h2>
              <p>To be the world's most trusted partner in enterprise infrastructure, enabling businesses of all sizes to achieve their full technological potential through reliable, secure, and innovative solutions.</p>
              
              <h2>Our Values</h2>
              <ul>
                <li><strong>Reliability:</strong> We build infrastructure that businesses can depend on</li>
                <li><strong>Innovation:</strong> We continuously evolve to meet emerging challenges</li>
                <li><strong>Partnership:</strong> We succeed when our clients succeed</li>
                <li><strong>Transparency:</strong> We believe in honest, clear communication</li>
                <li><strong>Security:</strong> We protect what matters most to our clients</li>
              </ul>
            </div>
            
            <div className="about-content__stats">
              <div className="about-stat">
                <div className="about-stat__number">2015</div>
                <div className="about-stat__label">Founded</div>
              </div>
              <div className="about-stat">
                <div className="about-stat__number">500+</div>
                <div className="about-stat__label">Enterprise Clients</div>
              </div>
              <div className="about-stat">
                <div className="about-stat__number">99.9%</div>
                <div className="about-stat__label">Uptime SLA</div>
              </div>
              <div className="about-stat">
                <div className="about-stat__number">24/7</div>
                <div className="about-stat__label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

