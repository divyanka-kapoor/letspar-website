'use client';

import { useState } from 'react';

interface EmailCaptureProps {
  variant?: 'hero' | 'footer';
  buttonText?: string;
}

export default function EmailCapture({
  variant = 'hero',
  buttonText = 'Get Early Access'
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      // Buttondown API integration
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage("You're on the list! We'll notify you at launch. 🎉");
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Connection error. Please try again.');
    }
  };

  const isHero = variant === 'hero';

  return (
    <div className={`w-full ${isHero ? 'max-w-lg' : 'max-w-md'}`} role="form" aria-label="Email signup form">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <label htmlFor={`email-${variant}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${variant}`}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== 'idle') setStatus('idle');
          }}
          placeholder="your@email.com"
          disabled={status === 'loading' || status === 'success'}
          aria-describedby={message ? `status-${variant}` : undefined}
          aria-invalid={status === 'error'}
          className={`
            flex-1 min-w-0 text-base
            ${isHero ? 'input-field' : 'input-field-dark'}
            ${status === 'error' ? 'border-red-400' : ''}
            ${status === 'success' ? 'border-green-500 bg-green-50' : ''}
            disabled:opacity-60 disabled:cursor-not-allowed
          `}
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          aria-busy={status === 'loading'}
          className={`
            btn-primary whitespace-nowrap
            ${status === 'loading' ? 'opacity-80 cursor-wait' : ''}
            ${status === 'success' ? 'bg-green-500 cursor-default' : ''}
            disabled:transform-none
          `}
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12" cy="12" r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Joining...
            </span>
          ) : status === 'success' ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You&apos;re In!
            </span>
          ) : (
            buttonText
          )}
        </button>
      </form>

      {/* Status Message - aria-live for screen readers */}
      {message && (
        <p
          id={`status-${variant}`}
          role="status"
          aria-live="polite"
          className={`
            mt-3 text-sm text-center animate-fade-in-up
            ${status === 'error' ? 'text-red-600' : ''}
            ${status === 'success' ? 'text-green-700' : ''}
          `}
        >
          {message}
        </p>
      )}
    </div>
  );
}
