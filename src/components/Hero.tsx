'use client';

import Image from 'next/image';
import EmailCapture from './EmailCapture';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById('audience-heading');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Header with LetSpar Logo - Top Left */}
      <header className="absolute top-6 left-6 z-20 animate-fade-in-up">
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-espresso">Let</span>
          <span className="gradient-text">Spar</span>
        </span>
      </header>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 bg-goldenrod/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-goldenrod/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Content */}
          <div className="flex-1 text-center lg:text-left">

            {/* Sparky Mascot - Mobile only */}
            <div className="mb-8 animate-float lg:hidden">
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src="/sparky.webp"
                  alt="Sparky the cockatoo mascot wearing a tuxedo - Your AI Wit Coach"
                  width={128}
                  height={128}
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </div>

            {/* Main Headline */}
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-espresso mb-4 animate-fade-in-up">
              Train Your{' '}
              <span className="gradient-text">Wit.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-chocolate font-medium mb-6 animate-fade-in-up delay-100">
              Never Fumble a Comeback Again.
            </p>

            {/* Email Capture */}
            <div className="flex justify-center lg:justify-start mb-3 animate-fade-in-up delay-300">
              <EmailCapture variant="hero" buttonText="Get Early Access" />
            </div>

            {/* Privacy Note - Left aligned with padding */}
            <p className="text-xs text-chocolate/60 lg:text-left lg:pl-2 text-center animate-fade-in-up delay-300">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="hidden lg:flex flex-shrink-0 justify-center animate-fade-in-up delay-300">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Clickable */}
      <button
        onClick={handleScrollToFeatures}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-goldenrod transition-colors focus:outline-none focus:ring-2 focus:ring-goldenrod/50 rounded-full p-1"
        aria-label="Scroll to features section"
      >
        <svg
          className="w-6 h-6 text-chocolate/40 hover:text-goldenrod transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </section>
  );
}
