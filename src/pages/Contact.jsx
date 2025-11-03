import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <header className="page-header__content">
            <h1 id="page-title" className="page-header__title">
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="page-header__description">
              Ready to transform your infrastructure? Contact our experts for a free consultation and customized solution proposal.
            </p>
          </header>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="contact-section" aria-labelledby="contact-title">
        <div className="container">
          <header className="contact__header">
            <h2 id="contact-title" className="sr-only">Contact Us</h2>
          </header>
          
          <div className="contact__grid">
            {/* Contact Form */}
            <article className="contact__form-container">
              <header className="contact-form__header">
                <h2 className="contact__title">Send us a Message</h2>
              </header>
              
              <form className="contact__form" action="mailto:contact@backplane.com" method="post" enctype="text/plain" noValidate>
                <fieldset className="form__fieldset">
                  <legend className="sr-only">Contact Information</legend>
                  
                  <div className="form__row">
                    <div className="form__field">
                      <label htmlFor="firstName" className="form__label">First Name <span className="form__required" aria-label="required">*</span></label>
                      <input type="text" id="firstName" name="firstName" className="form__input" required aria-describedby="firstName-error" autoComplete="given-name" />
                      <div id="firstName-error" className="form__error" role="alert" aria-live="polite"></div>
                    </div>
                    <div className="form__field">
                      <label htmlFor="lastName" className="form__label">Last Name <span className="form__required" aria-label="required">*</span></label>
                      <input type="text" id="lastName" name="lastName" className="form__input" required aria-describedby="lastName-error" autoComplete="family-name" />
                      <div id="lastName-error" className="form__error" role="alert" aria-live="polite"></div>
                    </div>
                  </div>

                  <div className="form__field">
                    <label htmlFor="email" className="form__label">Email Address <span className="form__required" aria-label="required">*</span></label>
                    <input type="email" id="email" name="email" className="form__input" required aria-describedby="email-error" autoComplete="email" />
                    <div id="email-error" className="form__error" role="alert" aria-live="polite"></div>
                  </div>

                  <div className="form__field">
                    <label htmlFor="company" className="form__label">Company Name</label>
                    <input type="text" id="company" name="company" className="form__input" autoComplete="organization" />
                  </div>

                  <div className="form__field">
                    <label htmlFor="phone" className="form__label">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="form__input" autoComplete="tel" />
                  </div>
                </fieldset>

                <fieldset className="form__fieldset">
                  <legend className="sr-only">Project Details</legend>
                  
                  <div className="form__field">
                    <label htmlFor="service" className="form__label">Service Interest</label>
                    <select id="service" name="service" className="form__select">
                      <option value="">Select a service</option>
                      <option value="cloud-infrastructure">Cloud Infrastructure</option>
                      <option value="network-security">Network Security</option>
                      <option value="data-management">Data Management</option>
                      <option value="managed-services">Managed Services</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form__field">
                    <label htmlFor="budget" className="form__label">Project Budget Range</label>
                    <select id="budget" name="budget" className="form__select">
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                  </div>

                  <div className="form__field">
                    <label htmlFor="message" className="form__label">Message <span className="form__required" aria-label="required">*</span></label>
                    <textarea id="message" name="message" className="form__textarea" rows="5" required aria-describedby="message-error" placeholder="Tell us about your project requirements, timeline, and any specific challenges you need to address..."></textarea>
                    <div id="message-error" className="form__error" role="alert" aria-live="polite"></div>
                  </div>
                </fieldset>

                <fieldset className="form__fieldset">
                  <legend className="sr-only">Preferences</legend>
                  
                  <div className="form__field form__field--checkbox">
                    <label className="form__checkbox-label" htmlFor="newsletter">
                      <input type="checkbox" id="newsletter" name="newsletter" className="form__checkbox" />
                      <span className="form__checkbox-text">Subscribe to our newsletter for infrastructure insights and company updates</span>
                    </label>
                  </div>

                  <div className="form__field form__field--checkbox">
                    <label className="form__checkbox-label" htmlFor="privacy">
                      <input type="checkbox" id="privacy" name="privacy" className="form__checkbox" required aria-describedby="privacy-error" />
                      <span className="form__checkbox-text">
                        I agree to the <Link to="/privacy-policy" className="form__link">Privacy Policy</Link> <span className="form__required" aria-label="required">*</span>
                      </span>
                    </label>
                    <div id="privacy-error" className="form__error" role="alert" aria-live="polite"></div>
                  </div>
                </fieldset>

                <footer className="form__actions">
                  <button type="submit" className="btn btn--primary btn--large">Send Message</button>
                  <button type="reset" className="btn btn--secondary btn--large">Clear Form</button>
                </footer>
              </form>
            </article>

            {/* Contact Information */}
            <aside className="contact__info" aria-labelledby="contact-info-title">
              <header className="contact-info__header">
                <h2 id="contact-info-title" className="contact__title">Contact Information</h2>
              </header>
              
              <address className="contact__address" style={{ fontStyle: 'normal' }}>
                <div className="contact__info-item">
                  <div className="contact__info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" fill="currentColor" opacity="0.8"/>
                      <circle cx="12" cy="10" r="3" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="contact__info-content">
                    <h3 className="contact__info-title">Headquarters</h3>
                    <p className="contact__info-text">
                      123 Enterprise Plaza<br />
                      Suite 4500<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" fill="currentColor" opacity="0.8"/>
                    </svg>
                  </div>
                  <div className="contact__info-content">
                    <h3 className="contact__info-title">Phone</h3>
                    <p className="contact__info-text">
                      <a href="tel:+1-800-BACKPLANE" className="contact__link">+1 (800) BACKPLANE</a><br />
                      <a href="tel:+1-415-555-0123" className="contact__link">+1 (415) 555-0123</a>
                    </p>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="currentColor" opacity="0.8"/>
                      <polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="contact__info-content">
                    <h3 className="contact__info-title">Email</h3>
                    <p className="contact__info-text">
                      <a href="mailto:contact@backplane.com" className="contact__link">contact@backplane.com</a><br />
                      <a href="mailto:sales@backplane.com" className="contact__link">sales@backplane.com</a><br />
                      <a href="mailto:support@backplane.com" className="contact__link">support@backplane.com</a>
                    </p>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.8"/>
                      <polyline points="12,6 12,12 16,14" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="contact__info-content">
                    <h3 className="contact__info-title">Business Hours</h3>
                    <p className="contact__info-text">
                      Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 2:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </address>

              <div className="contact__cta">
                <header className="contact-cta__header">
                  <h3 className="contact__cta-title">Need Immediate Assistance?</h3>
                </header>
                <div className="contact-cta__content">
                  <p className="contact__cta-text">
                    For urgent infrastructure issues, our emergency support is available 24/7.
                  </p>
                </div>
                <footer className="contact-cta__actions">
                  <a href="tel:+1-800-BACKPLANE" className="btn btn--primary">Call Emergency Support</a>
                </footer>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta__content">
            <header className="cta__header">
              <h2 id="cta-title" className="cta__title">Ready to Transform Your Infrastructure?</h2>
            </header>
            
            <div className="cta__body">
              <p className="cta__description">
                Join thousands of companies that trust Backplane for their enterprise infrastructure needs.
              </p>
            </div>
            
            <footer className="cta__actions">
              <div className="cta__cta-group">
                <Link to="/pricing" className="btn btn--primary">View Pricing</Link>
                <Link to="/services" className="btn btn--outline">Explore Services</Link>
              </div>
            </footer>
            
            <div className="cta__contact-info">
              <p className="cta__phone">+1 (800) BACKPLANE</p>
              <p className="cta__email">contact@backplane.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
