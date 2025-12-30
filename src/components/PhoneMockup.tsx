import Image from 'next/image';

export default function PhoneMockup() {
  return (
    <div className="relative animate-float" aria-hidden="true">
      {/* Phone Frame */}
      <div className="relative w-[280px] h-[580px] bg-espresso-dark rounded-[3rem] p-2 shadow-2xl">
        {/* Inner Screen Border */}
        <div className="relative w-full h-full bg-gradient-to-br from-espresso via-espresso-dark to-espresso rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-espresso-dark rounded-b-2xl z-20" />

          {/* Screen Content */}
          <div className="relative w-full h-full flex flex-col items-center pt-10 pb-4 px-4">
            {/* Status Bar */}
            <div className="absolute top-2 left-0 right-0 flex justify-center px-8 text-cream/60 text-xs">
              <span>3:02</span>
            </div>

            {/* Title Section */}
            <div className="text-center mb-2 mt-4">
              <h2 className="text-2xl font-bold text-cream mb-1">Quip</h2>
              <p className="text-goldenrod text-xs font-semibold">Level 1: Observation</p>
              <p className="text-cream/60 text-[10px] mt-1 px-2">
                Point out something funny about the situation
              </p>
            </div>

            {/* Spacer to push Quip to center */}
            <div className="flex-1" />

            {/* Quip Mascot - Centered */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <div className="absolute inset-0 bg-goldenrod/20 rounded-full blur-xl animate-pulse-glow" />
              <img
                src="/letspar-website/quip.webp"
                alt=""
                width={112}
                height={112}
                className="relative object-contain drop-shadow-lg"
              />
            </div>

            {/* Spacer to push button to bottom */}
            <div className="flex-1" />

            {/* Start Training Button - positioned just above nav */}
            <button className="w-full max-w-[200px] py-3 bg-gradient-to-r from-goldenrod to-golden-light rounded-xl text-espresso-dark font-bold text-sm shadow-lg mb-16">
              Start Training
            </button>

            {/* Bottom Navigation Dock */}
            <div className="absolute bottom-3 left-3 right-3">
              <div className="bg-chocolate/40 backdrop-blur-md rounded-2xl px-2 py-2 flex justify-around">
                {/* Journey - Compass icon */}
                <div className="flex flex-col items-center justify-center px-3 py-1 rounded-xl bg-goldenrod/30">
                  <svg className="w-5 h-5 text-goldenrod" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" stroke="none" />
                  </svg>
                  <span className="text-[8px] mt-0.5 text-goldenrod">Journey</span>
                </div>

                {/* Arena - Swords icon */}
                <div className="flex flex-col items-center justify-center px-3 py-1 rounded-xl">
                  <svg className="w-5 h-5 text-cream/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[8px] mt-0.5 text-cream/50">Arena</span>
                </div>

                {/* Lab - Flask icon */}
                <div className="flex flex-col items-center justify-center px-3 py-1 rounded-xl">
                  <svg className="w-5 h-5 text-cream/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v6.5a1.5 1.5 0 01-.5 1.1L4 14.5A3.5 3.5 0 007 21h10a3.5 3.5 0 003-6.5l-4.5-3.9a1.5 1.5 0 01-.5-1.1V3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6" />
                  </svg>
                  <span className="text-[8px] mt-0.5 text-cream/50">Lab</span>
                </div>

                {/* Vault - Lock icon */}
                <div className="flex flex-col items-center justify-center px-3 py-1 rounded-xl">
                  <svg className="w-5 h-5 text-cream/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  <span className="text-[8px] mt-0.5 text-cream/50">Vault</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-goldenrod/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-goldenrod/5 rounded-full blur-2xl" />
    </div>
  );
}
