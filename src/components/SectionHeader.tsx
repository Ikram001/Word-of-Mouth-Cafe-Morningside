interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleItalic?: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  titleItalic,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '640px' : '100%',
        margin: align === 'center' ? '0 auto clamp(32px,6vw,56px)' : '0 0 clamp(24px,5vw,48px)',
      }}
    >
      {eyebrow && (
        <p
          className="deco-line"
          style={{
            justifyContent: align === 'center' ? 'center' : 'flex-start',
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            margin: '0 0 16px',
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: '-0.01em',
          color: dark ? 'var(--color-cream)' : 'var(--color-espresso)',
          margin: '0 0 16px',
        }}
      >
        {title}
        {titleItalic && (
          <>
            {' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-coffee-mid)' }}>{titleItalic}</em>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
            lineHeight: 1.7,
            color: dark ? 'rgba(250,246,240,0.65)' : 'var(--color-warm-gray)',
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
