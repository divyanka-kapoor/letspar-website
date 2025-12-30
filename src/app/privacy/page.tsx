import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Wit',
  description: 'Privacy Policy for Wit - AI-powered wit training app',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-20 px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-chocolate hover:text-goldenrod transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-espresso mb-8">Privacy Policy</h1>

        <div className="prose prose-lg text-chocolate/80 space-y-6">
          <p className="text-sm text-chocolate/60">Last updated: January 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">1. Information We Collect</h2>
            <p>
              Wit collects minimal information needed to provide our wit training service:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Email address:</strong> When you sign up for our waitlist or create an account</li>
              <li><strong>Voice recordings:</strong> Temporarily processed for AI feedback (not stored permanently)</li>
              <li><strong>Usage data:</strong> Anonymous statistics to improve the app experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provide AI-powered feedback on your responses</li>
              <li>Track your progress and maintain your training history</li>
              <li>Send you updates about Wit (only if you opt in)</li>
              <li>Improve our service and develop new features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">3. Voice Data Handling</h2>
            <p>
              Your voice recordings are processed in real-time to provide feedback. We do <strong>not</strong> store
              your voice recordings permanently. Audio is transcribed, analyzed, and immediately discarded.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information. All data transmission
              is encrypted using TLS/SSL protocols.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access your personal data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">6. Contact Us</h2>
            <p>
              For any privacy-related questions, please contact us at{' '}
              <a href="mailto:privacy@trywit.app" className="text-goldenrod hover:underline">
                privacy@trywit.app
              </a>
            </p>
          </section>

          <div className="border-t border-espresso/10 pt-8 mt-12">
            <p className="text-sm text-chocolate/60">
              This privacy policy may be updated from time to time. We will notify you of any significant changes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
