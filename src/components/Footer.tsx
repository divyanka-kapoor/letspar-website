'use client';

import Link from 'next/link';
import EmailCapture from './EmailCapture';

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    isPlaceholder: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    isPlaceholder: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: '#',
    isPlaceholder: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream" role="contentinfo">
      {/* Final CTA Section */}
      <section aria-labelledby="cta-heading" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to stop freezing?
          </h2>
          <p className="text-lg text-cream/70 mb-8">
            Join the Wit List and be first to train with Quip.
          </p>

          {/* Email Capture */}
          <div className="flex justify-center mb-8">
            <EmailCapture variant="footer" buttonText="Join the Wit List" />
          </div>

          {/* Platform Badges */}
          <div className="inline-flex items-center justify-center gap-2 text-sm text-cream/60">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>iOS</span>
            <span className="text-cream/30" aria-hidden="true">·</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.523 2.383a.535.535 0 00-.67.178l-1.87 2.69a7.252 7.252 0 00-5.966 0l-1.87-2.69a.535.535 0 10-.879.61l1.753 2.52A7.175 7.175 0 005 11.5h14a7.175 7.175 0 00-3.021-5.809l1.753-2.52a.535.535 0 00.209-.788zM9 9.5a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0zM5 13v6a2 2 0 002 2h10a2 2 0 002-2v-6H5z" />
            </svg>
            <span>Android</span>
            <span className="text-cream/30 mx-1" aria-hidden="true">—</span>
            <span className="text-cream/40">Coming January 2026</span>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <nav className="flex items-center gap-6" aria-label="Social media links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.isPlaceholder ? undefined : "_blank"}
                rel={link.isPlaceholder ? undefined : "noopener noreferrer"}
                onClick={link.isPlaceholder ? (e) => e.preventDefault() : undefined}
                aria-disabled={link.isPlaceholder}
                className={`
                  text-cream/60 transition-colors
                  ${link.isPlaceholder
                    ? 'cursor-not-allowed opacity-50'
                    : 'hover:text-goldenrod'
                  }
                `}
                aria-label={`${link.name}${link.isPlaceholder ? ' (coming soon)' : ''}`}
              >
                {link.icon}
              </a>
            ))}
          </nav>

          {/* Legal Links */}
          <nav className="flex items-center gap-4 text-sm" aria-label="Legal">
            <Link
              href="/privacy"
              className="text-cream/60 hover:text-goldenrod transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-cream/30" aria-hidden="true">·</span>
            <Link
              href="/terms"
              className="text-cream/60 hover:text-goldenrod transition-colors"
            >
              Terms of Service
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-cream/40">
            © {new Date().getFullYear()} Wit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
