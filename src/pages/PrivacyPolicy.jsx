import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-secondary opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Your privacy is fundamental to our enterprise infrastructure solutions. Learn how we protect and handle your data.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container">
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto">

            {/* Last Updated */}
            <div className="bg-white/5 p-6 rounded-xl mb-12 border-l-4 border-secondary">
              <p className="text-sm text-muted m-0">
                <strong className="text-white block mb-1">Last Updated:</strong> November 1, 2025<br />
                <strong className="text-white block mb-1 mt-2">Effective Date:</strong> November 1, 2026<br />
                <strong className="text-white block mb-1 mt-2">Version:</strong> 1.0
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
                <p className="text-muted leading-relaxed mb-4">
                  Backplane ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with our enterprise infrastructure platform.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  This policy applies to all users of our website, services, and platform, including visitors, customers, and business partners. By using our services, you consent to the data practices described in this policy.
                </p>
                <p className="text-muted leading-relaxed">
                  We are committed to complying with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant privacy regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
                <p className="text-muted leading-relaxed mb-4">
                  We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or communicate with us. This may include your name, email address, phone number, company name, and job title.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
                <p className="text-muted leading-relaxed mb-4">
                  We use the information we collect to provide, maintain, and improve our services, to process transactions, to send you technical notices and support messages, and to communicate with you about products, services, offers, and events.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white/5 p-6 rounded-xl">
              <p className="text-muted leading-relaxed">
                For questions about this Privacy Policy, please contact us at <a href="mailto:privacy@backplane.com" className="text-accent hover:text-white transition-colors">privacy@backplane.com</a>
              </p>
            </div>

            {/* Footer CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Questions About Your Privacy?</h3>
              <p className="text-muted mb-6">Our privacy team is here to help. Contact us for any privacy-related questions or concerns.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="btn btn-primary">Contact Support</Link>
                <a href="mailto:privacy@backplane.com" className="btn btn-glass">Email Privacy Team</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
