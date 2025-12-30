'use client';

import EmailCapture from '@/components/EmailCapture';
import Link from 'next/link';

const journey = [
  {
    phase: 'before',
    emoji: '😰',
    title: 'The Freeze',
    subtitle: 'Where you are now',
    points: [
      'Your brain goes blank when you need it most',
      '"I should have said..." 3 hours later in the shower',
      'Awkward silences that haunt you for days',
      'Replaying conversations and cringing',
    ],
  },
  {
    phase: 'during',
    emoji: '🔥',
    title: 'The Training',
    subtitle: 'Your transformation',
    points: [
      'Voice-first practice that mirrors real conversations',
      'AI-coached rounds with instant feedback',
      'Build muscle memory for quick thinking',
      'Safe space to fail, learn, and improve',
    ],
  },
  {
    phase: 'after',
    emoji: '⚡',
    title: 'The Fire',
    subtitle: 'Who you become',
    points: [
      'Quick, witty responses become second nature',
      'Confidence in any social situation',
      'No more replaying—just commanding the room',
      'The person everyone loves talking to',
    ],
  },
];

export default function FreezeToFirePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="py-6 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-espresso">Let</span>
            <span className="gradient-text">Spar</span>
          </Link>
          <Link
            href="/"
            className="text-chocolate hover:text-espresso transition-colors text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-espresso mb-6 animate-fade-in-up">
            From <span className="text-chocolate/60">Freeze</span> to{' '}
            <span className="gradient-text">Fire</span>
          </h1>
          <p className="text-xl text-chocolate/70 max-w-2xl mx-auto animate-fade-in-up delay-100">
            The journey from &quot;I should have said...&quot; to &quot;Did you hear what I said?&quot;
          </p>
        </div>
      </section>

      {/* Journey Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {journey.map((stage, index) => (
              <article
                key={stage.phase}
                className={`
                  rounded-3xl p-8 transform transition-all duration-300
                  hover:scale-[1.02] hover:shadow-xl
                  animate-fade-in-up
                  ${stage.phase === 'before' ? 'bg-espresso/5 border-2 border-espresso/10' : ''}
                  ${stage.phase === 'during' ? 'bg-gradient-to-br from-goldenrod/20 to-goldenrod/5 border-2 border-goldenrod/30' : ''}
                  ${stage.phase === 'after' ? 'bg-gradient-to-br from-goldenrod/30 to-golden-light/20 border-2 border-goldenrod/50 shadow-lg' : ''}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Emoji */}
                <div className="text-6xl mb-4">{stage.emoji}</div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-espresso mb-1">
                  {stage.title}
                </h2>
                <p className={`text-sm font-medium mb-6 ${
                  stage.phase === 'after' ? 'text-goldenrod' : 'text-chocolate/60'
                }`}>
                  {stage.subtitle}
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {stage.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-3 text-chocolate/80"
                    >
                      <span className={`flex-shrink-0 mt-1 ${
                        stage.phase === 'before' ? 'text-espresso/40' : 'text-goldenrod'
                      }`}>
                        {stage.phase === 'before' ? '✗' : '✓'}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Arrow for progression (on desktop) */}
                {index < journey.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-goldenrod/40 text-3xl">
                    →
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-cream to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-espresso mb-4">
            Ready to make the leap?
          </h2>
          <p className="text-lg text-chocolate/70 mb-8">
            Join the waitlist and be among the first to transform your wit.
          </p>
          <div className="flex justify-center">
            <EmailCapture variant="hero" buttonText="Get Early Access" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-espresso/10">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/" className="text-chocolate/60 hover:text-espresso transition-colors text-sm">
            © {new Date().getFullYear()} LetSpar. All rights reserved.
          </Link>
        </div>
      </footer>
    </main>
  );
}
