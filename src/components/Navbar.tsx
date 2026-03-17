import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Coffee } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Find Us" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div
      style={{
        width: "22px",
        height: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "block",
          height: "2px",
          width: "100%",
          backgroundColor: "var(--color-cream)",
          borderRadius: "2px",
          transformOrigin: "center",
        }}
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.18 }}
        style={{
          display: "block",
          height: "2px",
          width: "100%",
          backgroundColor: "var(--color-cream)",
          borderRadius: "2px",
        }}
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "block",
          height: "2px",
          width: "100%",
          backgroundColor: "var(--color-cream)",
          borderRadius: "2px",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* CSS for media queries — can't do md: Tailwind classes without content scan */}
      <style>{`
        .nav-desktop-links { display: none; }
        .nav-hamburger-btn { display: flex; }
        @media (min-width: 768px) {
          .nav-desktop-links { display: flex; }
          .nav-hamburger-btn { display: none; }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          transition: "background 0.4s ease, border-color 0.4s ease",
          backgroundColor: isOpen
            ? "transparent"
            : scrolled
              ? "rgba(28,15,7,0.97)"
              : "transparent",
          backdropFilter: scrolled && !isOpen ? "blur(12px)" : "none",
          borderBottom:
            scrolled && !isOpen
              ? "1px solid rgba(212,168,83,0.15)"
              : "1px solid transparent",
        }}>
        <nav
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 32px)",
            height: scrolled ? "60px" : "76px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "height 0.4s ease",
          }}>
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              position: "relative",
              zIndex: 210,
            }}>
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <Coffee size={20} style={{ color: "var(--color-gold)" }} />
            </motion.div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.05rem, 4vw, 1.35rem)",
                fontWeight: 500,
                color: "var(--color-cream)",
                letterSpacing: "0.01em",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}>
              Word of Mouth
            </span>
          </Link>

          {/* Desktop nav — hidden below 768px via .nav-desktop-links CSS above */}
          <ul
            className="nav-desktop-links"
            style={{
              alignItems: "center",
              gap: "4px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  style={({ isActive }) => ({
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    fontWeight: 400,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    padding: "8px 13px",
                    borderRadius: "4px",
                    color: isActive
                      ? "var(--color-gold)"
                      : "rgba(250,246,240,0.78)",
                    background: isActive
                      ? "rgba(212,168,83,0.1)"
                      : "transparent",
                    transition: "color 0.2s, background 0.2s",
                    whiteSpace: "nowrap",
                  })}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="tel:+441316297759"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "8px 18px",
                  borderRadius: "4px",
                  border: "1px solid var(--color-gold)",
                  color: "var(--color-gold)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  marginLeft: "6px",
                  transition: "background 0.2s, color 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "var(--color-gold)";
                  el.style.color = "var(--color-espresso)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "transparent";
                  el.style.color = "var(--color-gold)";
                }}>
                Call Us
              </a>
            </li>
          </ul>

          {/* Hamburger — visible below 768px via .nav-hamburger-btn CSS above */}
          <button
            className="nav-hamburger-btn"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "11px",
              position: "relative",
              zIndex: 210,
              touchAction: "manipulation",
              flexShrink: 0,
            }}>
            <HamburgerIcon open={isOpen} />
          </button>
        </nav>
      </header>

      {/* ── Mobile slide-in panel ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 190,
                backgroundColor: "rgba(8,4,2,0.65)",
                backdropFilter: "blur(3px)",
              }}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(300px, 82vw)",
                zIndex: 195,
                backgroundColor: "var(--color-espresso)",
                borderLeft: "1px solid rgba(212,168,83,0.18)",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
              }}>
              {/* Panel header */}
              <div
                style={{
                  height: "76px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 24px",
                  borderBottom: "1px solid rgba(212,168,83,0.1)",
                  flexShrink: 0,
                }}>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                  }}>
                  <Coffee size={18} style={{ color: "var(--color-gold)" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      color: "var(--color-cream)",
                      letterSpacing: "0.01em",
                    }}>
                    Word of Mouth
                  </span>
                </Link>
              </div>

              {/* Nav links */}
              <nav
                style={{ flex: 1, padding: "8px 0" }}
                aria-label="Mobile navigation">
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {navLinks.map(({ to, label }, i) => (
                    <motion.li
                      key={to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + i * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}>
                      <NavLink
                        to={to}
                        end={to === "/"}
                        onClick={() => setIsOpen(false)}
                        style={({ isActive }) => ({
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "15px 24px",
                          fontFamily: "var(--font-display)",
                          fontSize: "1.55rem",
                          fontWeight: 400,
                          textDecoration: "none",
                          color: isActive
                            ? "var(--color-gold)"
                            : "var(--color-cream)",
                          borderBottom: "1px solid rgba(212,168,83,0.07)",
                          letterSpacing: "-0.01em",
                        })}>
                        {label}
                        <span
                          style={{
                            fontSize: "0.9rem",
                            opacity: 0.3,
                            marginLeft: "8px",
                          }}>
                          →
                        </span>
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Panel footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38 }}
                style={{
                  padding: "20px 24px 28px",
                  borderTop: "1px solid rgba(212,168,83,0.1)",
                  flexShrink: 0,
                }}>
                <a
                  href="tel:+441316297759"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "13px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(212,168,83,0.1)",
                    border: "1px solid rgba(212,168,83,0.22)",
                    color: "var(--color-gold)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    marginBottom: "10px",
                  }}>
                  📞 +44 131 629 7759
                </a>
                <p
                  style={{
                    margin: 0,
                    textAlign: "center",
                    fontSize: "0.72rem",
                    color: "rgba(250,246,240,0.3)",
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.04em",
                  }}>
                  Open daily · 9 AM – 4:30 PM
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
