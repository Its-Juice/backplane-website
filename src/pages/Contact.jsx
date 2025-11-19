import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-primary opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Ready to transform your infrastructure? Contact our experts for a free consultation and customized solution proposal.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-panel p-8 rounded-2xl neon-border">
                <h2 className="text-2xl font-bold mb-8 text-white">Send us a Message</h2>

                <form className="space-y-6" action="mailto:contact@backplane.com" method="post" encType="text/plain" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-muted mb-2">First Name <span className="text-accent">*</span></label>
                      <input type="text" id="firstName" name="firstName" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" required autoComplete="given-name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-muted mb-2">Last Name <span className="text-accent">*</span></label>
                      <input type="text" id="lastName" name="lastName" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" required autoComplete="family-name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email Address <span className="text-accent">*</span></label>
                      <input type="email" id="email" name="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" required autoComplete="email" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-muted mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" autoComplete="tel" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-muted mb-2">Company Name</label>
                    <input type="text" id="company" name="company" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" autoComplete="organization" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-muted mb-2">Service Interest</label>
                      <select id="service" name="service" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none">
                        <option value="" className="bg-gray-900">Select a service</option>
                        <option value="cloud-infrastructure" className="bg-gray-900">Cloud Infrastructure</option>
                        <option value="network-security" className="bg-gray-900">Network Security</option>
                        <option value="data-management" className="bg-gray-900">Data Management</option>
                        <option value="managed-services" className="bg-gray-900">Managed Services</option>
                        <option value="consulting" className="bg-gray-900">Consulting Services</option>
                        <option value="other" className="bg-gray-900">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-muted mb-2">Project Budget Range</label>
                      <select id="budget" name="budget" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none">
                        <option value="" className="bg-gray-900">Select budget range</option>
                        <option value="under-10k" className="bg-gray-900">Under $10,000</option>
                        <option value="10k-25k" className="bg-gray-900">$10,000 - $25,000</option>
                        <option value="25k-50k" className="bg-gray-900">$25,000 - $50,000</option>
                        <option value="50k-100k" className="bg-gray-900">$50,000 - $100,000</option>
                        <option value="over-100k" className="bg-gray-900">Over $100,000</option>
                        <option value="not-sure" className="bg-gray-900">Not sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message <span className="text-accent">*</span></label>
                    <textarea id="message" name="message" rows="5" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" required placeholder="Tell us about your project requirements, timeline, and any specific challenges you need to address..."></textarea>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" name="newsletter" className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary" />
                      <span className="text-sm text-muted group-hover:text-white transition-colors">Subscribe to our newsletter for infrastructure insights and company updates</span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" name="privacy" required className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary" />
                      <span className="text-sm text-muted group-hover:text-white transition-colors">
                        I agree to the <Link to="/privacy-policy" className="text-primary hover:text-primary-light">Privacy Policy</Link> <span className="text-accent">*</span>
                      </span>
                    </label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="btn btn-primary px-8 py-3">Send Message</button>
                    <button type="reset" className="btn btn-glass px-8 py-3">Clear Form</button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-2xl">
                <h2 className="text-xl font-bold mb-6 text-white">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Headquarters</h3>
                      <p className="text-muted text-sm">
                        123 Enterprise Plaza<br />
                        Suite 4500<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Phone</h3>
                      <p className="text-muted text-sm space-y-1">
                        <a href="tel:+1-800-BACKPLANE" className="block hover:text-primary transition-colors">+1 (800) BACKPLANE</a>
                        <a href="tel:+1-415-555-0123" className="block hover:text-primary transition-colors">+1 (415) 555-0123</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Email</h3>
                      <p className="text-muted text-sm space-y-1">
                        <a href="mailto:contact@backplane.com" className="block hover:text-primary transition-colors">contact@backplane.com</a>
                        <a href="mailto:sales@backplane.com" className="block hover:text-primary transition-colors">sales@backplane.com</a>
                        <a href="mailto:support@backplane.com" className="block hover:text-primary transition-colors">support@backplane.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Business Hours</h3>
                      <p className="text-muted text-sm">
                        Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                        Saturday: 10:00 AM - 2:00 PM PST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
                <h3 className="text-xl font-bold mb-4 text-white">Need Immediate Assistance?</h3>
                <p className="text-muted mb-6 text-sm">
                  For urgent infrastructure issues, our emergency support is available 24/7.
                </p>
                <a href="tel:+1-800-BACKPLANE" className="btn btn-primary w-full text-center bg-red-600 hover:bg-red-700 border-none">Call Emergency Support</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="glass-panel p-12 rounded-3xl text-center max-w-4xl mx-auto border border-white/10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-muted mb-10">
              Join thousands of companies that trust Backplane for their enterprise infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/pricing" className="btn btn-primary text-lg px-8 py-4">View Pricing</Link>
              <Link to="/services" className="btn btn-glass text-lg px-8 py-4">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
