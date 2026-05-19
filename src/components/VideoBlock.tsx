'use client'

interface VideoBlockProps {
  src?: string
  poster?: string
  caption?: string
  className?: string
}

/**
 * Reusable video block — drop in a src URL to activate.
 * Renders a styled placeholder when no src is provided.
 */
export default function VideoBlock({ src, poster, caption, className = '' }: VideoBlockProps) {
  return (
    <figure className={`w-full ${className}`}>
      {src ? (
        <video
          className="w-full rounded-[10px] object-cover"
          controls
          playsInline
          poster={poster}
          aria-label={caption ?? 'Case study video'}
        >
          <source src={src} />
          Your browser does not support the video element.
        </video>
      ) : (
        <div
          className="w-full rounded-[10px] flex flex-col items-center justify-center gap-3 py-16 border"
          style={{
            backgroundColor: 'rgba(43,92,230,0.06)',
            borderColor: 'rgba(43,92,230,0.13)',
            minHeight: '320px',
          }}
          aria-label={caption ?? 'Video placeholder'}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle
              cx="20"
              cy="20"
              r="19"
              stroke="rgba(43,92,230,0.3)"
              strokeWidth="1"
            />
            <path
              d="M16 14l12 6-12 6V14z"
              fill="rgba(43,92,230,0.3)"
            />
          </svg>
          <p
            className="text-[12px] font-light tracking-[0.06em] uppercase"
            style={{ color: 'rgba(43,92,230,0.4)' }}
          >
            {caption ?? 'Video coming soon'}
          </p>
        </div>
      )}
      {caption && src && (
        <figcaption
          className="mt-3 text-[12px] font-light leading-[1.65]"
          style={{ color: 'rgba(43,92,230,0.6)' }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
