import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { cafeData, parsedHours } from '../data/cafeData'
import { useIsToday } from '../hooks/useScrollReveal'
import { useScrollReveal } from '../hooks/useScrollReveal'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const socialConfig = [
  { icon: <InstagramIcon />, label: 'Instagram', match: 'instagram' },
  { icon: <FacebookIcon />, label: 'Facebook', match: 'facebook' },
]

function HoursRow({ day, hours }: { day: string; hours: string }) {
  const isToday = useIsToday(day)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        borderRadius: '8px',
        backgroundColor: isToday ? 'rgba(212,168,83,0.12)' : 'transparent',
        border: isToday ? '1px solid rgba(212,168,83,0.25)' : '1px solid transparent',
        marginBottom: '4px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          fontWeight: isToday ? 600 : 400,
          color: isToday ? 'var(--color-coffee)' : 'var(--color-charcoal)',
        }}
      >
        {day}
        {isToday && (
          <span
            style={{
              marginLeft: '8px',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-coffee)',
              backgroundColor: 'rgba(212,168,83,0.2)',
              padding: '2px 7px',
              borderRadius: '99px',
            }}
          >
            Today
          </span>
        )}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: isToday ? 'var(--color-coffee)' : 'var(--color-warm-gray)',
        }}
      >
        {hours}
      </span>
    </div>
  )
}

export default function ContactPage() {
  const infoSection = useScrollReveal()
  const mapSection = useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Contact & Location – Word of Mouth Morningside</title>
        <meta name="description" content="Find Word of Mouth Morningside at 41 Morningside Rd, Edinburgh. Open daily 9AM–4:30PM. Call us on +44 131 629 7759." />
      </Helmet>

      {/* Hero */}
      <div
        style={{
          paddingTop: 'clamp(96px, 15vw, 120px)',
          paddingBottom: 'clamp(36px, 8vw, 60px)',
          backgroundColor: 'var(--color-espresso)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '12px' }}
        >
          41 Morningside Road
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 400, color: 'var(--color-cream)', margin: '0 0 12px' }}
        >
          Find <em style={{ fontStyle: 'italic', color: 'rgba(196,149,106,0.9)' }}>Us</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          style={{ color: 'rgba(250,246,240,0.5)', fontSize: '0.95rem', margin: 0 }}
        >
          Edinburgh's Morningside neighbourhood
        </motion.p>
      </div>

      {/* Main content */}
      <div className="page-container" style={{ paddingTop: 'clamp(40px, 8vw, 64px)', paddingBottom: 'clamp(60px, 10vw, 100px)' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(32px, 6vw, 64px)',
          alignItems: 'start',
        }}
      >
        {/* Left: Info */}
        <motion.div
          ref={infoSection.ref}
          initial={{ opacity: 0, x: -30 }}
          animate={infoSection.isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Address */}
          <div
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(196,149,106,0.15)',
              borderRadius: '16px',
              padding: 'clamp(20px, 5vw, 32px)',
              marginBottom: '24px',
              boxShadow: '0 2px 12px rgba(28,15,7,0.05)',
            }}
          >
            <div style={{ display: 'flex', gap: '14px', marginBottom: '24px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(212,168,83,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-coffee)',
                  flexShrink: 0,
                }}
              >
                <MapPin size={18} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-espresso)', margin: '0 0 6px' }}>
                  Our Location
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-warm-gray)' }}>
                  41 Morningside Rd<br />
                  Edinburgh EH10 4DR<br />
                  United Kingdom
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', marginBottom: '24px', alignItems: 'center' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(212,168,83,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-coffee)',
                  flexShrink: 0,
                }}
              >
                <Phone size={18} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-espresso)', margin: '0 0 4px' }}>
                  Phone
                </h3>
                <a
                  href={`tel:${cafeData.phone}`}
                  style={{ color: 'var(--color-coffee-mid)', fontSize: '0.9rem', textDecoration: 'none', fontFamily: 'var(--font-body)' }}
                >
                  +44 131 629 7759
                </a>
              </div>
            </div>

            <a
              href={cafeData.google_map_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                justifyContent: 'center',
                backgroundColor: 'var(--color-espresso)',
                color: 'var(--color-cream)',
                padding: '13px 20px',
                borderRadius: '8px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-coffee)')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-espresso)')}
            >
              <ExternalLink size={15} /> Open in Google Maps
            </a>

            {/* Social links */}
            {cafeData.socials.length > 0 && (
              <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
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
                        gap: '8px',
                        flex: 1,
                        justifyContent: 'center',
                        padding: '10px',
                        borderRadius: '8px',
                        border: '1px solid rgba(196,149,106,0.2)',
                        color: 'var(--color-warm-gray)',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.color = 'var(--color-coffee)'
                        el.style.borderColor = 'rgba(196,149,106,0.5)'
                        el.style.background = 'rgba(212,168,83,0.06)'
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.color = 'var(--color-warm-gray)'
                        el.style.borderColor = 'rgba(196,149,106,0.2)'
                        el.style.background = 'transparent'
                      }}
                    >
                      {social.icon}
                      {social.label}
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Hours */}
          <div
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(196,149,106,0.15)',
              borderRadius: '16px',
              padding: 'clamp(20px, 5vw, 32px)',
              boxShadow: '0 2px 12px rgba(28,15,7,0.05)',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(212,168,83,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-coffee)',
                  flexShrink: 0,
                }}
              >
                <Clock size={18} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-espresso)', margin: 0 }}>
                Opening Hours
              </h3>
            </div>
            {parsedHours.map(({ day, hours }) => (
              <HoursRow key={day} day={day} hours={hours} />
            ))}
            <p style={{ marginTop: '16px', marginBottom: 0, fontSize: '0.8rem', color: 'var(--color-warm-gray-light)', fontStyle: 'italic' }}>
              Hours may vary on public holidays.
            </p>
          </div>
        </motion.div>

        {/* Right: Map */}
        <motion.div
          ref={mapSection.ref}
          initial={{ opacity: 0, x: 30 }}
          animate={mapSection.isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(196,149,106,0.2)',
              boxShadow: '0 8px 30px rgba(28,15,7,0.1)',
              position: 'sticky',
              top: '88px',
            }}
          >
            <iframe
              src={cafeData.google_map_embed}
              width="100%"
              height="480"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Word of Mouth Morningside location map"
            />
          </div>

          {/* Getting here note */}
          <div
            style={{
              marginTop: '20px',
              padding: '20px 24px',
              backgroundColor: 'var(--color-cream-dark)',
              borderRadius: '12px',
              borderLeft: '3px solid var(--color-gold)',
            }}
          >
            <p style={{ margin: '0 0 6px', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 500, color: 'var(--color-espresso)' }}>
              Getting Here
            </p>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-warm-gray)' }}>
              We're right on Morningside Road, easily accessible by Lothian Buses routes 5, 11, 15, 16 & 23. Street parking is available nearby.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  )
}
