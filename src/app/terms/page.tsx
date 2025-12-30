import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - LetSpar',
  description: 'Terms of Service for LetSpar - AI-powered wit training app',
};

export default function TermsOfService() {
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

        <h1 className="text-4xl font-bold text-espresso mb-8">Terms of Service</h1>

        <div className="prose prose-lg text-chocolate/80 space-y-6">
          <p className="text-sm text-chocolate/60">Last updated: January 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using LetSpar, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">2. Description of Service</h2>
            <p>
              LetSpar is an AI-powered application designed to help users improve their wit,
              conversational skills, and quick thinking through voice-based practice sessions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">3. User Conduct</h2>
            <p>You agree to use LetSpar responsibly and not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Use the service for any illegal or harmful purposes</li>
              <li>Attempt to circumvent safety features or content moderation</li>
              <li>Share content that is abusive, harassing, or discriminatory</li>
              <li>Reverse engineer or attempt to extract the AI models</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">4. Content Guidelines</h2>
            <p>
              LetSpar is designed for practicing clever, witty responses. The service includes
              content moderation to prevent genuinely harmful content. Playful roasts and banter
              are encouraged; genuine harassment is not.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of LetSpar are owned by LetSpar and are
              protected by intellectual property laws. You retain ownership of your voice responses,
              but grant us a license to process them for service delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">6. Disclaimer</h2>
            <p>
              LetSpar is provided &quot;as is&quot; without warranties of any kind. We do not guarantee
              that the service will be uninterrupted or error-free. AI feedback is for entertainment
              and practice purposes; use your own judgment in real-world situations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              LetSpar shall not be liable for any indirect, incidental, special, or consequential
              damages arising from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">8. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the service after
              changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mt-8 mb-4">9. Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href="mailto:support@letspar.com" className="text-goldenrod hover:underline">
                support@letspar.com
              </a>
            </p>
          </section>

          <div className="border-t border-espresso/10 pt-8 mt-12">
            <p className="text-sm text-chocolate/60">
              These terms are subject to change. Please check back periodically for updates.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
