import { Link } from 'react-router-dom';

function TermsOfService() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__content">
            <h1 className="page-header__title">Terms of Service</h1>
            <p className="page-header__description">
              Legal terms and conditions governing the use of Backplane's enterprise infrastructure platform and services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="terms-of-service" aria-labelledby="terms-title">
        <div className="container">
          <div className="terms-of-service__content" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Last Updated */}
            <div className="policy-meta" style={{ background: 'var(--color-gray-800)', padding: 'var(--space-6)', borderRadius: 'var(--border-radius-lg)', marginBottom: 'var(--space-12)', borderLeft: '4px solid var(--color-white)' }}>
              <p style={{ margin: 0, color: 'var(--color-gray-200)', fontSize: 'var(--font-size-sm)' }}>
                <strong style={{ color: 'var(--color-white)' }}>Last Updated:</strong> November 1, 2025<br />
                <strong style={{ color: 'var(--color-white)' }}>Effective Date:</strong> November 1, 2025<br />
                <strong style={{ color: 'var(--color-white)' }}>Version:</strong> 1.0
              </p>
            </div>

            <div className="intro-section" style={{ marginBottom: 'var(--space-12)' }}>
              <h2 style={{ color: 'var(--color-white)', fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-6)' }}>Acceptance of Terms</h2>
              <p style={{ color: 'var(--color-gray-200)', lineHeight: 'var(--line-height-relaxed)', marginBottom: 'var(--space-4)' }}>
                Welcome to Backplane. These Terms of Service ("Terms") govern your access to and use of Backplane's enterprise infrastructure platform, website, and related services (collectively, the "Service") operated by Backplane ("us", "we", or "our").
              </p>
              <p style={{ color: 'var(--color-gray-200)', lineHeight: 'var(--line-height-relaxed)', marginBottom: 'var(--space-4)' }}>
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
              </p>
              <p style={{ color: 'var(--color-gray-200)', lineHeight: 'var(--line-height-relaxed)', marginBottom: 'var(--space-4)' }}>
                These Terms apply to all visitors, users, and others who access or use the Service, including but not limited to customers, partners, and authorized representatives of enterprise organizations.
              </p>
            </div>

            <div style={{ background: 'var(--color-gray-800)', padding: 'var(--space-6)', borderRadius: 'var(--border-radius-lg)', marginBottom: 'var(--space-6)' }}>
              <p style={{ color: 'var(--color-gray-200)', lineHeight: 'var(--line-height-relaxed)' }}>
                For questions about these Terms of Service, please contact us at <a href="mailto:legal@backplane.com" style={{ color: 'var(--color-accent)' }}>legal@backplane.com</a>
              </p>
            </div>

            {/* Footer CTA */}
            <div style={{ background: 'linear-gradient(135deg, var(--color-gray-800) 0%, var(--color-gray-700) 100%)', padding: 'var(--space-8)', borderRadius: 'var(--border-radius-xl)', textAlign: 'center', marginTop: 'var(--space-12)', border: '1px solid var(--color-gray-600)' }}>
              <h3 style={{ color: 'var(--color-white)', marginBottom: 'var(--space-4)' }}>Questions About Our Terms?</h3>
              <p style={{ color: 'var(--color-gray-200)', marginBottom: 'var(--space-6)', lineHeight: 'var(--line-height-relaxed)' }}>Our legal team is here to help clarify any questions you may have about these Terms of Service.</p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn--primary btn--large">Contact Support</Link>
                <a href="mailto:legal@backplane.com" className="btn btn--secondary btn--large">Email Legal Team</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default TermsOfService;
