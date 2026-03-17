import { Link } from 'react-router-dom'
import { Coffee, MapPin, Phone, Clock } from 'lucide-react'
import { cafeData } from '../data/cafeData'

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const socialConfig = [
  { icon: <InstagramIcon />, label: 'Instagram', match: 'instagram' },
  { icon: <FacebookIcon />, label: 'Facebook', match: 'facebook' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-espresso)',
        color: 'var(--color-cream)',
        borderTop: '1px solid rgba(212,168,83,0.2)',
      }}
    >
      {/* Main footer */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: 'clamp(40px, 8vw, 64px) clamp(16px, 4vw, 24px) clamp(32px, 6vw, 48px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: 'clamp(28px, 6vw, 48px)',
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Coffee size={20} style={{ color: 'var(--color-gold)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--color-cream)' }}>
              Word of Mouth
            </span>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(250,246,240,0.6)', maxWidth: '260px', margin: '0 0 16px' }}>
            A neighbourhood café in the heart of Morningside, Edinburgh. Where every cup tells a story.
          </p>

          {/* Stars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
            {[1, 2, 3, 4, 5].map(i => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold)">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
            <span style={{ fontSize: '0.8rem', color: 'var(--color-gold)', marginLeft: '4px' }}>
              {cafeData.rating} · {cafeData.reviewCount} reviews
            </span>
          </div>

          {/* Social icons — reads from cafeData.socials */}
          {cafeData.socials.length > 0 && (
            <div style={{ display: 'flex', gap: '8px' }}>
              {cafeData.socials.map(url => {
                const social = socialConfig.find(s => url.includes(s.match))
                if (!social) return null
                return (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.label}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      border: '1px solid rgba(212,168,83,0.2)',
                      color: 'rgba(250,246,240,0.5)',
                      textDecoration: 'none',
                      transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.color = 'var(--color-gold)'
                      el.style.borderColor = 'rgba(212,168,83,0.5)'
                      el.style.background = 'rgba(212,168,83,0.08)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.color = 'rgba(250,246,240,0.5)'
                      el.style.borderColor = 'rgba(212,168,83,0.2)'
                      el.style.background = 'transparent'
                    }}
                  >
                    {social.icon}
                  </a>
                )
              })}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)', margin: '0 0 20px' }}>
            Explore
          </h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/menu', label: 'Our Menu' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/reviews', label: 'Reviews' },
              { to: '/contact', label: 'Find Us' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  style={{ color: 'rgba(250,246,240,0.65)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-gold)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,246,240,0.65)')}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)', margin: '0 0 20px' }}>
            Hours
          </h4>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <Clock size={15} style={{ color: 'var(--color-latte)', flexShrink: 0, marginTop: '3px' }} />
            <div>
              <p style={{ margin: '0 0 4px', fontSize: '0.9rem', color: 'var(--color-cream)' }}>Monday – Sunday</p>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(250,246,240,0.6)' }}>9:00 AM – 4:30 PM</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)', margin: '0 0 20px' }}>
            Visit
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <MapPin size={15} style={{ color: 'var(--color-latte)', flexShrink: 0, marginTop: '3px' }} />
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(250,246,240,0.65)', lineHeight: 1.6 }}>
                41 Morningside Rd<br />Edinburgh EH10 4DR<br />United Kingdom
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Phone size={15} style={{ color: 'var(--color-latte)', flexShrink: 0 }} />
              <a
                href={`tel:${cafeData.phone}`}
                style={{ fontSize: '0.875rem', color: 'rgba(250,246,240,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-gold)')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,246,240,0.65)')}
              >
                +44 131 629 7759
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(250,246,240,0.08)',
          padding: '16px clamp(16px, 4vw, 24px)',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          fontSize: 'clamp(0.72rem, 2vw, 0.78rem)',
        }}
      >
        <p style={{ margin: 0, fontSize: '0.78rem', color: 'rgba(250,246,240,0.35)' }}>
          © {currentYear} Word of Mouth Morningside. All rights reserved.
        </p>
        <p style={{ margin: 0, fontSize: '0.78rem', color: 'rgba(250,246,240,0.35)' }}>
          Made by{' '}
          <a
            href="mailto:markizin.management@gmail.com"
            style={{ color: 'rgba(250,246,240,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-gold)')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,246,240,0.45)')}
          >
            Marki Zin
          </a>
        </p>
        <a
          href={cafeData.google_map_link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.78rem', color: 'rgba(250,246,240,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-gold)')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,246,240,0.35)')}
        >
          View on Google Maps ↗
        </a>
      </div>
    </footer>
  )
}
