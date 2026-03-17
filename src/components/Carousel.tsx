import { useState, useRef, useCallback, useEffect } from 'react'
import { motion} from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  itemsPerView?: { mobile: number; tablet: number; desktop: number }
  autoPlay?: boolean
  autoPlayInterval?: number
  dark?: boolean
  className?: string
}

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return width
}

export default function Carousel<T>({
  items,
  renderItem,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  autoPlay = false,
  autoPlayInterval = 4000,
  dark = false,
}: CarouselProps<T>) {
  const [index, setIndex] = useState(0)
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef(0)
  const width = useWindowWidth()

  const perView =
    width < 640 ? itemsPerView.mobile
    : width < 1024 ? itemsPerView.tablet
    : itemsPerView.desktop

  const maxIndex = Math.max(0, items.length - perView)

  const prev = useCallback(() => setIndex(i => Math.max(0, i - 1)), [])
  const next = useCallback(() => setIndex(i => Math.min(maxIndex, i + 1)), [maxIndex])

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return
    const id = setInterval(() => {
      setIndex(i => {
        if (i >= maxIndex) return 0
        return i + 1
      })
    }, autoPlayInterval)
    return () => clearInterval(id)
  }, [autoPlay, autoPlayInterval, maxIndex])

  // Touch / drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX
    setDragging(true)
  }
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging) return
    const delta = dragStart.current - e.clientX
    if (delta > 40) next()
    else if (delta < -40) prev()
    setDragging(false)
  }

  const pct = (100 / perView)
  const translateX = -(index * pct)

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Track */}
      <div
        style={{ overflow: 'hidden', userSelect: 'none', cursor: dragging ? 'grabbing' : 'grab' }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <motion.div
          animate={{ x: `${translateX}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 35, mass: 0.8 }}
          style={{ display: 'flex', willChange: 'transform' }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: `${100 / perView}%`,
                paddingRight: i < items.length - 1 ? '16px' : '0',
                boxSizing: 'border-box',
              }}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '28px',
        }}
      >
        {/* Dots */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === index ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.3s ease, background 0.3s ease',
                backgroundColor:
                  i === index
                    ? 'var(--color-gold)'
                    : dark
                    ? 'rgba(250,246,240,0.25)'
                    : 'rgba(28,15,7,0.18)',
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: `1px solid ${dark ? 'rgba(212,168,83,0.3)' : 'rgba(28,15,7,0.18)'}`,
              background: 'transparent',
              color: dark
                ? index === 0 ? 'rgba(250,246,240,0.2)' : 'var(--color-gold)'
                : index === 0 ? 'rgba(28,15,7,0.2)' : 'var(--color-espresso)',
              cursor: index === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            disabled={index === maxIndex}
            aria-label="Next"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: `1px solid ${dark ? 'rgba(212,168,83,0.3)' : 'rgba(28,15,7,0.18)'}`,
              background: 'transparent',
              color: dark
                ? index === maxIndex ? 'rgba(250,246,240,0.2)' : 'var(--color-gold)'
                : index === maxIndex ? 'rgba(28,15,7,0.2)' : 'var(--color-espresso)',
              cursor: index === maxIndex ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
