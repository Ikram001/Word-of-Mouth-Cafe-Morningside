import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Coffee,
  Leaf,
  Heart,
} from "lucide-react";
import { cafeData } from "../data/cafeData";
import ReviewCard from "../components/ReviewCard";
import SectionHeader from "../components/SectionHeader";
import Carousel from "../components/Carousel";
import { useScrollReveal } from "../hooks/useScrollReveal";
import type { Review } from "../types";

gsap.registerPlugin(ScrollTrigger);

// Crisp Unsplash hero — cosy café interior, Edinburgh-feel warm tones
const HERO_BG =
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=85&auto=format&fit=crop";

// All google-hosted café photos for carousels
const galleryPhotos = cafeData.photoUrls;

// Reviews: 4+ stars, has real text, deduped
const carouselReviews: Review[] = cafeData.reviews
  .filter(
    (r) => r.text && r.text.length > 20 && r.reviewer && parseInt(r.stars) >= 4,
  )
  .filter(
    (r, i, arr) =>
      arr.findIndex((x) => x.text === r.text && x.reviewer === r.reviewer) ===
      i,
  );

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);

  const aboutSection = useScrollReveal();
  const featuresSection = useScrollReveal();
  const gallerySection = useScrollReveal();
  const reviewsSection = useScrollReveal();
  const ctaSection = useScrollReveal();

  useEffect(() => {
    if (!heroImgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(heroImgRef.current, {
        yPercent: 22,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Word of Mouth Morningside – Edinburgh Café</title>
        <meta
          name="description"
          content="A beloved neighbourhood café at 41 Morningside Rd, Edinburgh. Exceptional coffee, homemade food, and staff that treat every guest like family. Open 7 days, 9AM–4:30PM."
        />
        <meta property="og:title" content="Word of Mouth Morningside" />
        <meta
          property="og:description"
          content="Neighbourhood café in Edinburgh's Morningside. Coffee, food, cakes, and community."
        />
        <meta property="og:image" content={HERO_BG} />
      </Helmet>

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          height: "100svh",
          minHeight: "560px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div
          ref={heroImgRef}
          style={{
            position: "absolute",
            inset: "-25%",
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(20,10,4,0.52) 0%, rgba(20,10,4,0.3) 50%, rgba(20,10,4,0.75) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 20px",
            width: "100%",
            maxWidth: "820px",
          }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.62rem, 2vw, 0.72rem)",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              marginBottom: "14px",
            }}>
            Morningside · Edinburgh · Est. 2020
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 11vw, 6rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--color-cream)",
              margin: "0 0 8px",
            }}>
            Word of Mouth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem, 4.5vw, 1.9rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(250,246,240,0.72)",
              margin: "0 0 24px",
            }}>
            where every cup tells a story
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(212,168,83,0.15)",
              border: "1px solid rgba(212,168,83,0.3)",
              borderRadius: "999px",
              padding: "7px 16px",
              marginBottom: "28px",
              backdropFilter: "blur(8px)",
            }}>
            <Star size={13} fill="var(--color-gold)" stroke="none" />
            <span
              style={{
                color: "var(--color-cream)",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}>
              {cafeData.rating}
            </span>
            <span
              style={{ color: "rgba(250,246,240,0.5)", fontSize: "0.78rem" }}>
              · {cafeData.reviewCount} reviews
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
            <Link
              to="/menu"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "var(--color-gold)",
                color: "var(--color-espresso)",
                padding: "13px 24px",
                borderRadius: "4px",
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.8rem, 2.5vw, 0.875rem)",
                fontWeight: 600,
                textDecoration: "none",
                minHeight: "44px",
                touchAction: "manipulation",
                transition: "background 0.2s",
              }}>
              View Menu <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(250,246,240,0.4)",
                color: "var(--color-cream)",
                padding: "13px 24px",
                borderRadius: "4px",
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.8rem, 2.5vw, 0.875rem)",
                fontWeight: 400,
                textDecoration: "none",
                backdropFilter: "blur(8px)",
                minHeight: "44px",
                touchAction: "manipulation",
                transition: "border-color 0.2s",
              }}>
              <MapPin size={15} /> Find Us
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            position: "absolute",
            bottom: "28px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}>
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              color: "rgba(250,246,240,0.4)",
              textTransform: "uppercase",
            }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "28px",
              background:
                "linear-gradient(to bottom, rgba(212,168,83,0.6), transparent)",
            }}
          />
        </motion.div>
      </section>

      {/* ─── INFO STRIP ─── */}
      <section
        style={{
          backgroundColor: "var(--color-espresso-light)",
          borderTop: "1px solid rgba(212,168,83,0.2)",
          borderBottom: "1px solid rgba(212,168,83,0.2)",
        }}>
        <div
          className="info-strip"
          style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {[
            {
              icon: <Clock size={15} />,
              label: "Open Daily",
              value: "9 AM – 4:30 PM",
            },
            {
              icon: <MapPin size={15} />,
              label: "Location",
              value: "Morningside, Edinburgh",
            },
            {
              icon: <Star size={15} />,
              label: "Rating",
              value: `${cafeData.rating} / 5`,
            },
            {
              icon: <Coffee size={15} />,
              label: "Speciality",
              value: "Coffee & Food",
            },
          ].map(({ icon, label, value }, i) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "clamp(14px,3vw,20px) clamp(12px,3vw,20px)",
                borderRight: i < 3 ? "1px solid rgba(212,168,83,0.1)" : "none",
                minWidth: 0,
              }}>
              <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>
                {icon}
              </span>
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(250,246,240,0.4)",
                    fontFamily: "var(--font-body)",
                  }}>
                  {label}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(0.72rem, 2vw, 0.88rem)",
                    color: "var(--color-cream)",
                    fontFamily: "var(--font-body)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section
        ref={aboutSection.ref}
        style={{ padding: "clamp(56px, 10vw, 130px) 0" }}>
        <div
          className="page-container grid-2col"
          style={{ alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={aboutSection.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <p
              className="deco-line"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginBottom: "14px",
              }}>
              Our Story
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--color-espresso)",
                margin: "0 0 18px",
              }}>
              A place to slow down{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-coffee-mid)",
                }}>
                & savour
              </em>
            </h2>
            <p
              style={{
                fontSize: "clamp(0.88rem, 2vw, 1rem)",
                lineHeight: 1.8,
                color: "var(--color-warm-gray)",
                marginBottom: "14px",
              }}>
              Tucked into the quiet elegance of Morningside, Word of Mouth is
              more than a café — it's your neighbourhood living room. We opened
              with one belief: great coffee and honest food, served with genuine
              warmth, can make any morning better.
            </p>
            <p
              style={{
                fontSize: "clamp(0.88rem, 2vw, 1rem)",
                lineHeight: 1.8,
                color: "var(--color-warm-gray)",
                marginBottom: "28px",
              }}>
              Our menu is seasonal and simple — crafted fresh every morning with
              locally sourced ingredients. Whether you're a regular or a
              first-timer, we'll always treat you like family.
            </p>
            <Link
              to="/menu"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--color-coffee)",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid var(--color-latte)",
                paddingBottom: "2px",
              }}>
              Explore our menu <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={aboutSection.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows:
                "clamp(150px, 28vw, 220px) clamp(110px, 20vw, 170px)",
              gap: "8px",
            }}>
            {galleryPhotos.slice(0, 4).map((url, i) => (
              <div
                key={i}
                className="img-zoom"
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  gridColumn: i === 0 ? "1 / -1" : undefined,
                  gridRow: i === 0 ? "1" : "2",
                }}>
                <img
                  src={url}
                  alt={`Word of Mouth café ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section
        ref={featuresSection.ref}
        style={{
          backgroundColor: "var(--color-cream-dark)",
          padding: "clamp(56px, 10vw, 112px) 0",
        }}>
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresSection.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <SectionHeader
              eyebrow="Why we're loved"
              title="More than just"
              titleItalic="coffee"
              subtitle="Everything we do is guided by one principle: make people feel at home."
            />
          </motion.div>
          <div className="grid-features">
            {[
              {
                icon: <Coffee size={20} />,
                title: "Exceptional Coffee",
                desc: "Sourced from ethical roasters, dialled in daily. From silky flat whites to clean filter coffees.",
              },
              {
                icon: <Leaf size={20} />,
                title: "Fresh & Seasonal",
                desc: "Our kitchen works with local suppliers every morning to create food that's honest and delicious.",
              },
              {
                icon: <Heart size={20} />,
                title: "True Hospitality",
                desc: "You'll be remembered. Our staff create connections that turn first visits into lasting rituals.",
              },
              {
                icon: <Star size={20} />,
                title: "4.8★ Community Loved",
                desc: "191 five-star reviews and counting. See what your neighbours are saying about us.",
              },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresSection.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.1 }}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "clamp(18px,4vw,28px) clamp(16px,3vw,24px)",
                  border: "1px solid rgba(196,149,106,0.15)",
                  boxShadow: "0 2px 12px rgba(28,15,7,0.05)",
                }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(212,168,83,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-coffee)",
                    marginBottom: "14px",
                  }}>
                  {icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1rem, 3vw, 1.2rem)",
                    fontWeight: 500,
                    color: "var(--color-espresso)",
                    margin: "0 0 8px",
                  }}>
                  {title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(0.82rem, 2vw, 0.88rem)",
                    lineHeight: 1.65,
                    color: "var(--color-warm-gray)",
                  }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY CAROUSEL ─── */}
      <section
        ref={gallerySection.ref}
        style={{
          padding: "clamp(56px, 10vw, 112px) 0",
          backgroundColor: "var(--color-cream)",
        }}>
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={gallerySection.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <SectionHeader
              eyebrow="Our Space"
              title="A glimpse"
              titleItalic="inside"
              subtitle="Step into the warmth of Word of Mouth — photos straight from our corner of Edinburgh."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gallerySection.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}>
            <Carousel
              items={galleryPhotos.slice(0, 42)}
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
              autoPlay
              autoPlayInterval={3500}
              renderItem={(url, i) => (
                <div
                  key={i}
                  className="img-zoom"
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    width: "100%",
                    boxShadow: "0 4px 16px rgba(28,15,7,0.08)",
                  }}>
                  <img
                    src={url}
                    alt={`Café gallery ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              )}
            />
          </motion.div>
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <Link
              to="/gallery"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--color-coffee)",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid var(--color-latte)",
                paddingBottom: "2px",
              }}>
              See full gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS CAROUSEL ─── */}
      <section
        ref={reviewsSection.ref}
        style={{
          backgroundColor: "var(--color-espresso)",
          padding: "clamp(56px, 10vw, 112px) 0",
        }}>
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={reviewsSection.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <SectionHeader
              eyebrow="What people say"
              title="Heard through the"
              titleItalic="neighbourhood"
              dark
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reviewsSection.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}>
            <Carousel
              items={carouselReviews}
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
              autoPlay
              autoPlayInterval={5000}
              dark
              renderItem={(review, i) => (
                <div key={i}>
                  <ReviewCard review={review} variant="dark" />
                </div>
              )}
            />
          </motion.div>
          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link
              to="/reviews"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(212,168,83,0.4)",
                color: "var(--color-gold)",
                padding: "12px 24px",
                borderRadius: "4px",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 400,
                textDecoration: "none",
                minHeight: "44px",
                touchAction: "manipulation",
              }}>
              Read all {cafeData.reviewCount} reviews <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        ref={ctaSection.ref}
        style={{
          padding: "clamp(56px, 10vw, 112px) 0",
          textAlign: "center",
          background:
            "linear-gradient(135deg, var(--color-cream) 0%, var(--color-cream-dark) 100%)",
        }}>
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={ctaSection.isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            style={{ maxWidth: "560px", margin: "0 auto" }}>
            <p
              className="deco-line"
              style={{
                justifyContent: "center",
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginBottom: "12px",
              }}>
              Come find us
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 6vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--color-espresso)",
                margin: "0 0 14px",
              }}>
              Your morning ritual{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-coffee-mid)",
                }}>
                awaits
              </em>
            </h2>
            <p
              style={{
                fontSize: "clamp(0.88rem, 2vw, 1rem)",
                color: "var(--color-warm-gray)",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}>
              Open every day. No reservations needed. Just follow the smell of
              freshly brewed coffee down Morningside Road.
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "var(--color-espresso)",
                  color: "var(--color-cream)",
                  padding: "13px 24px",
                  borderRadius: "4px",
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.82rem, 2.5vw, 0.875rem)",
                  fontWeight: 500,
                  textDecoration: "none",
                  minHeight: "44px",
                  touchAction: "manipulation",
                }}>
                <MapPin size={15} /> Get Directions
              </Link>
              <a
                href={`tel:${cafeData.phone}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid rgba(28,15,7,0.25)",
                  color: "var(--color-espresso)",
                  padding: "13px 24px",
                  borderRadius: "4px",
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.82rem, 2.5vw, 0.875rem)",
                  fontWeight: 400,
                  textDecoration: "none",
                  minHeight: "44px",
                  touchAction: "manipulation",
                }}>
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
