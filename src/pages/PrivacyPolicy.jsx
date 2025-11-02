import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__content">
            <h1 className="page-header__title">Privacy Policy</h1>
            <p className="page-header__description">
              Your privacy is fundamental to our enterprise infrastructure solutions. Learn how we protect and handle your data.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="privacy-policy" aria-labelledby="privacy-title">
        <div className="container">
          <div className="privacy-policy__content" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Last Updated */}
            <div className="policy-meta" style={{ background: 'var(--color-gray-800)', padding: 'var(--space-6)', borderRadius: 'var(--border-radius-lg)', marginBottom: 'var(--space-12)', borderLeft: '4px solid var(--color-white)' }}>
              <p style={{ margin: 0, color: 'var(--color-gray-200)', fontSize: 'var(--font-size-sm)' }}>
                <strong style={{ color: 'var(--color-white)' }}>Last Updated:</strong> November 1, 2025<br />
                <strong style={{ color: 'var(--color-white)' }}>Effective Date:</strong> November 1, 2026<br />
                <strong style={{ color: 'var(--color-white)' }}>Version:</strong> 1.0
              </p>
            </div>

            <div className="intro-section" style={{ marginBottom: 'var(--space-12)' }}>
              <h2 style={{ color: 'var(--color-white)', fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-6)' }}>Introduction</h2>
              <p style={{ color: 'var(--color-gray-200)', lineHeight: 'var(--line-height-relaxed)', marginBottom: 'var(--space-4)' }}>
                Backplane ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with our enterprise infrastructure platform.
              </p>
              <p style={{ color: 'var(--color-gray-200)', lineHeight: 'var(--line-height-relaxed)', marginBottom: 'var(--space-4)' }}>
                This policy applies to all users of our website, services, and platform, including visitors, customers, and business partners. By using our services, you consent to the data practices described in this policy.
              </p>
              <p style={{ color: 'var(--color-gray-200)', lineHeight: 'var(--line-height-relaxed)' }}>
                We are committed to complying with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant privacy regulations.
              </p>
            </div>

            <div style={{ background: 'var(--color-gray-800)', padding: 'var(--space-6)', borderRadius: 'var(--border-radius-lg)', marginBottom: 'var(--space-6)' }}>
              <p style={{ color: 'var(--color-gray-200)', lineHeight: 'var(--line-height-relaxed)' }}>
                For questions about this Privacy Policy, please contact us at <a href="mailto:privacy@backplane.com" style={{ color: 'var(--color-accent)' }}>privacy@backplane.com</a>
              </p>
            </div>

            {/* Footer CTA */}
            <div style={{ background: 'linear-gradient(135deg, var(--color-gray-800) 0%, var(--color-gray-700) 100%)', padding: 'var(--space-8)', borderRadius: 'var(--border-radius-xl)', textAlign: 'center', marginTop: 'var(--space-12)', border: '1px solid var(--color-gray-600)' }}>
              <h3 style={{ color: 'var(--color-white)', marginBottom: 'var(--space-4)' }}>Questions About Your Privacy?</h3>
              <p style={{ color: 'var(--color-gray-200)', marginBottom: 'var(--space-6)', lineHeight: 'var(--line-height-relaxed)' }}>Our privacy team is here to help. Contact us for any privacy-related questions or concerns.</p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn--primary btn--large">Contact Support</Link>
                <a href="mailto:privacy@backplane.com" className="btn btn--secondary btn--large">Email Privacy Team</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
