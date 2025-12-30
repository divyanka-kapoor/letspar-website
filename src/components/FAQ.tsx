'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Is this just for roasting people?',
    answer: "Nope! While playful banter is part of it, LetSpar is really about building verbal agility. You'll learn techniques like observation, self-deprecation, and clever redirects. It's about being quick and witty, not mean.",
  },
  {
    question: 'Do I need to be funny already?',
    answer: "Absolutely not. That's the whole point! Wit is a trainable skill, not a gift you're born with. Sparky will coach you through techniques used by comedians and quick thinkers. You'll build the muscle memory for cleverness.",
  },
  {
    question: 'What if I\'m an introvert?',
    answer: "Perfect. LetSpar is designed for private practice. No awkward comedy classes, no improv nights with strangers. Just you, your phone, and an AI coach. Practice at home, shine in public.",
  },
  {
    question: 'How is my voice data handled?',
    answer: 'Your voice is processed in real-time to provide feedback, then immediately discarded. We never store your voice recordings. Your practice sessions are private—we only keep your scores and progress, not your actual responses.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="py-24 px-6 bg-cream"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-espresso mb-4"
          >
            Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-lg text-chocolate/70">
            Everything you need to know before joining the waitlist.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              role="listitem"
              className="glass-card rounded-xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-espresso/5 transition-colors"
              >
                <span className="font-semibold text-espresso pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 text-goldenrod transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`
                  overflow-hidden transition-all duration-300
                  ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="px-5 pb-5 text-chocolate/70 border-t border-espresso/5 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Question CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-chocolate/60">
            Still have questions?{' '}
            <a
              href="mailto:hello@letspar.com"
              className="text-goldenrod hover:underline font-medium"
            >
              Reach out to us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
