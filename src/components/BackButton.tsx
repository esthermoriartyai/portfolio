'use client'

import Link from 'next/link'

export default function BackButton() {
  return (
    <Link
      href="/#work"
      className="inline-flex items-center gap-2 text-[12px] font-light tracking-[0.01em] transition-opacity hover:opacity-70"
      style={{ color: 'rgba(43,92,230,0.6)' }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M10 12L6 8L10 4"
          stroke="rgba(43,92,230,0.6)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to work
    </Link>
  )
}
