import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'motion/react'
import { menuItems, menuCategories } from '../data/cafeData'
import type { MenuCategory } from '../data/cafeData'
import SectionHeader from '../components/SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All')
  const headerSection = useScrollReveal()

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Menu – Word of Mouth Morningside</title>
        <meta name="description" content="Our seasonal menu features exceptional coffee, homemade food, cakes, and drinks. Made fresh daily at Word of Mouth Morningside." />
      </Helmet>

      {/* Page Hero */}
      <div
        style={{
          paddingTop: 'clamp(96px, 15vw, 120px)',
          paddingBottom: 'clamp(36px, 8vw, 64px)',
          backgroundColor: 'var(--color-espresso)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background texture circles */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px',
          borderRadius: '50%', border: '1px solid rgba(212,168,83,0.08)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-120px', left: '-60px', width: '500px', height: '500px',
          borderRadius: '50%', border: '1px solid rgba(212,168,83,0.05)',
          pointerEvents: 'none',
        }} />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '12px',
          }}
        >
          Fresh daily
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 400,
            color: 'var(--color-cream)',
            margin: '0 0 12px',
          }}
        >
          Our <em style={{ fontStyle: 'italic', color: 'rgba(196,149,106,0.9)' }}>Menu</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ color: 'rgba(250,246,240,0.55)', fontSize: '1rem', margin: 0 }}
        >
          Seasonal ingredients · Homemade with love
        </motion.p>
      </div>

      {/* Filter tabs */}
      <div
        style={{
          position: 'sticky',
          top: '60px',
          zIndex: 50,
          backgroundColor: 'rgba(250,246,240,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(196,149,106,0.2)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 clamp(12px, 4vw, 24px)',
            display: 'flex',
            gap: '0',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {menuCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                position: 'relative',
                padding: 'clamp(14px,3vw,18px) clamp(12px,3vw,20px)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: activeCategory === cat ? 600 : 400,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: activeCategory === cat ? 'var(--color-coffee)' : 'var(--color-warm-gray)',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="menu-underline"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'var(--color-coffee)',
                    borderRadius: '2px 2px 0 0',
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Menu grid */}
      <div
        ref={headerSection.ref}
        className="page-container"
        style={{
          paddingTop: 'clamp(40px, 8vw, 64px)',
          paddingBottom: 'clamp(60px, 10vw, 100px)',
        }}
      >
        {/* Category heading */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {activeCategory !== 'All' && (
              <div style={{ marginBottom: '40px' }}>
                <SectionHeader
                  eyebrow={activeCategory}
                  title={
                    activeCategory === 'Coffee' ? 'Brewed with care' :
                    activeCategory === 'Food' ? 'Made fresh daily' :
                    activeCategory === 'Cakes' ? 'Baked in-house' :
                    'Something to sip'
                  }
                  align="left"
                />
              </div>
            )}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
                gap: '20px',
              }}
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={`${item.name}-${activeCategory}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid rgba(196,149,106,0.15)',
                    borderRadius: '12px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    boxShadow: '0 2px 10px rgba(28,15,7,0.05)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'default',
                  }}
                  whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(28,15,7,0.1)' }}
                >
                  {/* Badge + category */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-warm-gray-light)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {item.category}
                    </span>
                    {item.badge && (
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 600,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: 'var(--color-coffee)',
                          backgroundColor: 'rgba(212,168,83,0.12)',
                          padding: '3px 8px',
                          borderRadius: '99px',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Name + price */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.2rem',
                        fontWeight: 500,
                        color: 'var(--color-espresso)',
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {item.name}
                    </h3>
                    {item.price && (
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: 'var(--color-coffee-mid)',
                          flexShrink: 0,
                        }}
                      >
                        {item.price}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: 'var(--color-warm-gray)',
                    }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dietary note */}
        <div
          style={{
            marginTop: '64px',
            padding: '24px 28px',
            backgroundColor: 'var(--color-cream-dark)',
            borderRadius: '12px',
            borderLeft: '3px solid var(--color-gold)',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-charcoal)' }}>
            <strong>Dietary requirements?</strong> Our team is happy to accommodate allergies and dietary preferences. Please speak to any member of staff and we'll do our best to help.
            Prices and availability may change seasonally.
          </p>
        </div>
      </div>
    </>
  )
}
