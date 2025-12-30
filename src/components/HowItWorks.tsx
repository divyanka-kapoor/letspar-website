const steps = [
  {
    number: 1,
    emoji: '🎤',
    title: 'Sparky throws a curveball',
    example: '"You look like someone who rehearses their coffee order."',
    color: 'from-goldenrod/20 to-goldenrod/5',
  },
  {
    number: 2,
    emoji: '⏱️',
    title: 'You respond (voice)',
    example: '10 seconds. Just like real life.',
    color: 'from-espresso/10 to-espresso/5',
  },
  {
    number: 3,
    emoji: '📊',
    title: 'Get instant coaching',
    example: 'Score + technique breakdown + savage alternative',
    color: 'from-chocolate/10 to-chocolate/5',
  },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="howitworks-heading" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="howitworks-heading" className="text-3xl sm:text-4xl font-bold text-espresso mb-4">
            How It Works
          </h2>
          <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
            Simple. Fast. Effective.
          </p>
        </div>

        {/* Steps */}
        <ol className="space-y-8" role="list">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step Card */}
              <div
                className={`
                  bg-gradient-to-r ${step.color}
                  rounded-2xl p-6 sm:p-8
                  flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6
                  border border-espresso/5
                  transform transition-all duration-300
                  hover:scale-[1.02] hover:shadow-lg
                `}
              >
                {/* Step Number */}
                <div
                  className="flex-shrink-0 w-12 h-12 bg-goldenrod rounded-full flex items-center justify-center text-espresso-dark font-bold text-xl shadow-md"
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl" aria-hidden="true">{step.emoji}</span>
                    <h3 className="text-xl font-bold text-espresso">
                      <span className="sr-only">Step {step.number}: </span>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-chocolate/80 text-base sm:text-lg">
                    {step.example}
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden sm:block absolute left-6 top-full h-8 w-0.5 bg-gradient-to-b from-goldenrod/50 to-transparent"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <ul className="inline-flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-chocolate/60" role="list">
            <li className="flex items-center gap-2">
              <span className="text-goldenrod" aria-hidden="true">✓</span>
              <span>Timed & untimed modes</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-goldenrod" aria-hidden="true">✓</span>
              <span>Real-time AI feedback</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
