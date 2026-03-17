import type { Review } from '../types'

interface ReviewCardProps {
  review: Review
  variant?: 'light' | 'dark'
}

export default function ReviewCard({ review, variant = 'light' }: ReviewCardProps) {
  const isDark = variant === 'dark'
  const stars = parseInt(review.stars) || 5

  return (
    <div
      style={{
        backgroundColor: isDark ? 'rgba(250,246,240,0.06)' : 'white',
        border: isDark ? '1px solid rgba(212,168,83,0.15)' : '1px solid rgba(196,149,106,0.15)',
        borderRadius: '12px',
        padding: 'clamp(18px, 4vw, 28px) clamp(16px, 4vw, 28px) clamp(16px, 4vw, 24px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        boxShadow: isDark ? 'none' : '0 2px 12px rgba(28,15,7,0.06)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(-3px)'
        el.style.boxShadow = isDark
          ? '0 8px 24px rgba(0,0,0,0.3)'
          : '0 12px 32px rgba(28,15,7,0.12)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = isDark ? 'none' : '0 2px 12px rgba(28,15,7,0.06)'
      }}
    >
      {/* Stars */}
      <div style={{ display: 'flex', gap: '3px' }}>
        {Array.from({ length: stars }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold)">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      {review.text && (
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.92rem, 2.5vw, 1.05rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.65,
            margin: 0,
            color: isDark ? 'rgba(250,246,240,0.88)' : 'var(--color-espresso)',
          }}
        >
          "{review.text}"
        </p>
      )}

      {/* Reviewer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto' }}>
        <div>
          <p
            style={{
              margin: '0 0 2px',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: isDark ? 'var(--color-gold)' : 'var(--color-coffee)',
            }}
          >
            {review.reviewer}
          </p>
          {review.localGuide && (
            <p style={{ margin: 0, fontSize: '0.75rem', color: isDark ? 'rgba(250,246,240,0.4)' : 'var(--color-warm-gray)' }}>
              {review.localGuide.replace('Local Guide · ', '')}
            </p>
          )}
        </div>
        {review.date && (
          <span style={{ fontSize: '0.75rem', color: isDark ? 'rgba(250,246,240,0.35)' : 'var(--color-warm-gray-light)' }}>
            {review.date}
          </span>
        )}
      </div>
    </div>
  )
}
