const features = [
  {
    emoji: '🎯',
    title: 'Voice-First Training',
    description: 'Speak your comebacks out loud.',
    detail: 'Real conversations happen with your voice, not your keyboard. Train the way you actually communicate.',
  },
  {
    emoji: '🧠',
    title: 'AI-Powered Coaching',
    description: 'Hundreds of practice rounds with instant feedback.',
    detail: 'Like muscle memory, but for your wit. Practice until quick thinking becomes instinct.',
  },
  {
    emoji: '⚡',
    title: 'Trust Your Instinct',
    description: 'Quick, witty responses. Every time.',
    detail: 'No more awkward silences. No more replaying conversations. Just confidence.',
  },
];

export default function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="py-24 px-6 bg-gradient-to-b from-cream to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-espresso mb-4">
            From Freeze to Fire
          </h2>
          <p className="text-lg text-chocolate/70 max-w-2xl mx-auto italic">
            We built Wit because we were tired of thinking of the perfect comeback in the shower.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              role="listitem"
              className={`
                glass-card rounded-2xl p-8 text-center
                transform transition-all duration-300
                hover:scale-105 hover:shadow-xl
                animate-fade-in-up
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4" aria-hidden="true">{feature.emoji}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-espresso mb-3">
                {feature.title}
              </h3>

              {/* Main Description */}
              <p className="text-lg font-medium text-chocolate mb-3">
                {feature.description}
              </p>

              {/* Detail */}
              <p className="text-sm text-chocolate/60">
                {feature.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
