import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function AboutPage() {
  const section1 = useScrollReveal()
  const section2 = useScrollReveal()
  const section3 = useScrollReveal()

  return (
    <>
      <Helmet>
        <title>About – Word of Mouth Morningside</title>
        <meta name="description" content="Learn about Word of Mouth Morningside — our story, our values, and the people behind your favourite neighbourhood café." />
      </Helmet>

      {/* ─── HERO ─── */}
      <div
        style={{
          paddingTop: 'clamp(96px, 15vw, 120px)',
          paddingBottom: 'clamp(40px, 8vw, 64px)',
          backgroundColor: 'var(--color-espresso)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(212,168,83,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '10px' }}
        >
          Our story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 8vw, 4.5rem)', fontWeight: 400, color: 'var(--color-cream)', margin: '0 0 10px' }}
        >
          About <em style={{ fontStyle: 'italic', color: 'rgba(196,149,106,0.9)' }}>Us</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          style={{ color: 'rgba(250,246,240,0.5)', fontSize: '0.9rem', margin: 0 }}
        >
          Morningside · Edinburgh · Est. 2020
        </motion.p>
      </div>

      {/* ─── INTRO ─── */}
      <section
        ref={section1.ref}
        style={{ padding: 'clamp(56px, 10vw, 100px) 0', backgroundColor: 'var(--color-cream)' }}
      >
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={section1.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                lineHeight: 1.55,
                color: 'var(--color-coffee-mid)',
                marginBottom: '32px',
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.85, color: 'var(--color-warm-gray)', marginBottom: '20px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.85, color: 'var(--color-warm-gray)' }}>
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── TWO-COL SECTION ─── */}
      <section
        ref={section2.ref}
        style={{ padding: 'clamp(56px, 10vw, 100px) 0', backgroundColor: 'var(--color-cream-dark)' }}
      >
        <div className="page-container grid-2col" style={{ alignItems: 'center' }}>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={section2.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '14px' }}>
              Who we are
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--color-espresso)', margin: '0 0 20px' }}>
              Lorem ipsum{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-coffee-mid)' }}>dolor sit</em>
            </h2>
            <p style={{ fontSize: 'clamp(0.88rem, 2vw, 1rem)', lineHeight: 1.8, color: 'var(--color-warm-gray)', marginBottom: '16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p style={{ fontSize: 'clamp(0.88rem, 2vw, 1rem)', lineHeight: 1.8, color: 'var(--color-warm-gray)' }}>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Ut labore et dolore magnam aliquam quaerat voluptatem. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>
          </motion.div>

          {/* Stats / values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={section2.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {[
              { number: '2020', label: 'Est. in Morningside' },
              { number: '4.8★', label: 'Google rating from 191 reviews' },
              { number: '7', label: 'Days a week, 9AM–4:30PM' },
              { number: '100%', label: 'Locally sourced, made fresh daily' },
            ].map(({ number, label }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px 24px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  border: '1px solid rgba(196,149,106,0.15)',
                  boxShadow: '0 2px 8px rgba(28,15,7,0.04)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--color-coffee)', flexShrink: 0, minWidth: '70px' }}>
                  {number}
                </span>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-warm-gray)', lineHeight: 1.4 }}>
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section
        ref={section3.ref}
        style={{ padding: 'clamp(56px, 10vw, 100px) 0', backgroundColor: 'var(--color-espresso)' }}
      >
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={section3.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 52px)' }}
          >
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '12px' }}>
              What we stand for
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 5vw, 3rem)', fontWeight: 400, color: 'var(--color-cream)', margin: 0 }}>
              Our <em style={{ fontStyle: 'italic', color: 'rgba(196,149,106,0.85)' }}>values</em>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '16px' }}>
            {[
              { title: 'Community', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud exercitation laboris.' },
              { title: 'Quality', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.' },
              { title: 'Warmth', body: 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.' },
              { title: 'Honesty', body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.' },
            ].map(({ title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={section3.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.1 }}
                style={{
                  padding: 'clamp(20px, 4vw, 28px)',
                  backgroundColor: 'rgba(250,246,240,0.05)',
                  border: '1px solid rgba(212,168,83,0.12)',
                  borderRadius: '12px',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--color-gold)', margin: '0 0 10px' }}>
                  {title}
                </h3>
                <p style={{ margin: 0, fontSize: 'clamp(0.83rem, 2vw, 0.9rem)', lineHeight: 1.7, color: 'rgba(250,246,240,0.6)' }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
