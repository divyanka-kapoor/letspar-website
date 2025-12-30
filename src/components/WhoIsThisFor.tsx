const personas = [
  {
    emoji: '👨‍💼',
    title: 'Freeze in meetings?',
    description: 'When your boss makes a joke and you just... stare.',
  },
  {
    emoji: '💬',
    title: 'Hate small talk?',
    description: 'Turn awkward silences into memorable moments.',
  },
  {
    emoji: '🎤',
    title: 'Think of comebacks too late?',
    description: '"I should have said..." — Train to say it NOW.',
  },
  {
    emoji: '🤫',
    title: 'Want to practice privately?',
    description: 'No audience. No judgment. Just you and Quip.',
  },
];

export default function WhoIsThisFor() {
  return (
    <section
      aria-labelledby="audience-heading"
      className="py-24 px-6 bg-gradient-to-b from-white to-cream"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="audience-heading"
            className="text-3xl sm:text-4xl font-bold text-espresso"
          >
            Is this you?
          </h2>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
          {personas.map((persona, index) => (
            <article
              key={persona.title}
              role="listitem"
              className="
                glass-card rounded-2xl p-6
                flex items-start gap-4
                transform transition-all duration-300
                hover:scale-[1.02] hover:shadow-lg
                animate-fade-in-up
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Emoji Icon */}
              <div
                className="flex-shrink-0 w-14 h-14 bg-goldenrod/20 rounded-xl flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-3xl">{persona.emoji}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-espresso mb-2">
                  {persona.title}
                </h3>
                <p className="text-sm text-chocolate/70">
                  {persona.description}
                </p>
              </div>

              {/* Checkmark */}
              <div className="flex-shrink-0 text-goldenrod" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
