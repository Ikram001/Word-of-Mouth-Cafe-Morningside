import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { cafeData } from "../data/cafeData";
import ReviewCard from "../components/ReviewCard";
import { useScrollReveal } from "../hooks/useScrollReveal";

// All reviews that have: a star rating ≥ 4, have actual review text (not just owner reply), deduped
const qualityReviews = cafeData.reviews
  .filter((r) => {
    const stars = parseInt(r.stars);
    if (isNaN(stars) || stars < 4) return false;
    if (!r.text || r.text.trim().length === 0) return false;
    // Filter out reviews where the "text" is clearly just the owner's reply echoed back
    const isOwnerEcho = r.text === r.ownerReply;
    if (isOwnerEcho) return false;
    return true;
  })
  .filter(
    (r, i, arr) =>
      arr.findIndex((x) => x.text === r.text && x.reviewer === r.reviewer) ===
      i,
  )
  .sort((a, b) => parseInt(b.stars) - parseInt(a.stars));

export default function ReviewsPage() {
  const gridSection = useScrollReveal();

  const avgRating = parseFloat(cafeData.rating);

  const ratingBreakdown = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: qualityReviews.filter((r) => parseInt(r.stars) === stars).length,
  }));
  const totalShown = qualityReviews.length;

  return (
    <>
      <Helmet>
        <title>Reviews – Word of Mouth Morningside</title>
        <meta
          name="description"
          content={`${cafeData.rating} stars from ${cafeData.reviewCount} reviews. Read what our customers say about Word of Mouth Morningside café in Edinburgh.`}
        />
      </Helmet>

      {/* ─── HERO ─── */}
      <div
        style={{
          paddingTop: "clamp(96px, 15vw, 120px)",
          paddingBottom: "clamp(32px, 7vw, 52px)",
          backgroundColor: "var(--color-espresso)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(212,168,83,0.08) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            marginBottom: "10px",
          }}>
          Our community
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 8vw, 4.5rem)",
            fontWeight: 400,
            color: "var(--color-cream)",
            margin: "0 0 10px",
          }}>
          What People{" "}
          <em style={{ fontStyle: "italic", color: "rgba(196,149,106,0.9)" }}>
            Say
          </em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          style={{
            color: "rgba(250,246,240,0.5)",
            fontSize: "0.9rem",
            margin: 0,
          }}>
          {cafeData.reviewCount} Google reviews · {cafeData.rating} average
          rating
        </motion.p>
      </div>

      {/* ─── RATING SUMMARY ─── */}
      <div
        style={{
          backgroundColor: "var(--color-cream-dark)",
          borderBottom: "1px solid rgba(196,149,106,0.2)",
          padding: "clamp(32px, 6vw, 56px) 0",
        }}>
        <div className="page-container">
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "clamp(16px, 5vw, 56px)",
              alignItems: "center",
            }}>
            {/* Big number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: "center", flexShrink: 0 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 10vw, 5rem)",
                  fontWeight: 400,
                  color: "var(--color-espresso)",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}>
                {avgRating}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "3px",
                  justifyContent: "center",
                  marginBottom: "6px",
                }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill={
                      i <= Math.round(avgRating)
                        ? "var(--color-gold)"
                        : "var(--color-warm-gray-light)"
                    }>
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.75rem",
                  color: "var(--color-warm-gray)",
                  fontFamily: "var(--font-body)",
                }}>
                {cafeData.reviewCount} reviews
              </p>
            </motion.div>

            {/* Bars */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              {ratingBreakdown.map(({ stars, count }, i) => (
                <motion.div
                  key={stars}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--color-charcoal)",
                      fontFamily: "var(--font-body)",
                      width: "10px",
                      textAlign: "right",
                      flexShrink: 0,
                    }}>
                    {stars}
                  </span>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="var(--color-gold)"
                    style={{ flexShrink: 0 }}>
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                  <div
                    style={{
                      flex: 1,
                      height: "6px",
                      background: "rgba(28,15,7,0.08)",
                      borderRadius: "3px",
                      overflow: "hidden",
                    }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width:
                          totalShown > 0
                            ? `${(count / totalShown) * 100}%`
                            : "0%",
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3 + i * 0.07,
                        ease: "easeOut",
                      }}
                      style={{
                        height: "100%",
                        backgroundColor: "var(--color-gold)",
                        borderRadius: "3px",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--color-warm-gray)",
                      width: "18px",
                      fontFamily: "var(--font-body)",
                      flexShrink: 0,
                    }}>
                    {count}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── REVIEWS GRID ─── */}
      <div
        ref={gridSection.ref}
        style={{
          paddingTop: "clamp(40px, 8vw, 64px)",
          paddingBottom: "clamp(60px, 10vw, 100px)",
        }}>
        <div className="page-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: "16px",
              marginBottom: "clamp(36px, 6vw, 56px)",
            }}>
            {qualityReviews.map((review, i) => (
              <motion.div
                key={`${review.reviewer}-${i}`}
                initial={{ opacity: 0, y: 18 }}
                animate={gridSection.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: Math.min(i * 0.035, 0.6) }}>
                <ReviewCard review={review} variant="light" />
              </motion.div>
            ))}
          </div>

          {/* Google CTA */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                color: "var(--color-warm-gray)",
                fontSize: "0.875rem",
                marginBottom: "16px",
              }}>
              Visited recently? Share your experience.
            </p>
            <a
              href={cafeData.google_map_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "var(--color-espresso)",
                color: "var(--color-cream)",
                padding: "13px 24px",
                borderRadius: "4px",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                minHeight: "44px",
                touchAction: "manipulation",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "var(--color-coffee)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "var(--color-espresso)")
              }>
              <ExternalLink size={15} /> Leave a Review on Google
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
