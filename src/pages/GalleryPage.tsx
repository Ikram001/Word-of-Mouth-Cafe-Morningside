import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cafeData } from "../data/cafeData";

// Use ALL photos from the data file — error handler in render will skip dead URLs
const photos = cafeData.photoUrls;

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedUrls, setFailedUrls] = useState<Set<string>>(new Set());

  const validPhotos = photos.filter((url) => !failedUrls.has(url));

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + validPhotos.length) % validPhotos.length : null,
    );
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % validPhotos.length : null));

  const handleImgError = (url: string) => {
    setFailedUrls((prev) => new Set(prev).add(url));
  };

  return (
    <>
      <Helmet>
        <title>Gallery – Word of Mouth Morningside</title>
        <meta
          name="description"
          content="Explore photos of Word of Mouth Morningside café — our space, food, and coffee in Edinburgh."
        />
      </Helmet>

      {/* ─── PAGE HERO ─── */}
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
              "radial-gradient(ellipse at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 65%)",
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
          Captured moments
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
          Our{" "}
          <em style={{ fontStyle: "italic", color: "rgba(196,149,106,0.9)" }}>
            Gallery
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
          {validPhotos.length} photos from our little corner of Morningside
        </motion.p>
      </div>

      {/* ─── MASONRY GRID ─── */}
      <div
        className="page-container"
        style={{ paddingTop: "48px", paddingBottom: "80px" }}>
        <div
          style={{
            columnGap: "12px",
          }}
          className="masonry-grid">
          <style>{`
            .masonry-grid {
              columns: 2;
            }
            @media (min-width: 640px) {
              .masonry-grid { columns: 3; }
            }
            @media (min-width: 900px) {
              .masonry-grid { columns: 4; }
            }
            .masonry-item {
              break-inside: avoid;
              margin-bottom: 12px;
              border-radius: 8px;
              overflow: hidden;
              cursor: pointer;
              position: relative;
              display: block;
            }
            .masonry-item img {
              width: 100%;
              display: block;
              border-radius: 8px;
              transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
            }
            .masonry-item:hover img {
              transform: scale(1.05);
            }
            .masonry-item .hover-overlay {
              position: absolute;
              inset: 0;
              background: rgba(28,15,7,0);
              transition: background 0.3s;
              border-radius: 8px;
            }
            .masonry-item:hover .hover-overlay {
              background: rgba(28,15,7,0.25);
            }
          `}</style>

          {validPhotos.map((url, i) => (
            <motion.div
              key={url}
              className="masonry-item"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.5) }}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={`Open photo ${i + 1}`}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}>
              <img
                src={url}
                alt={`Word of Mouth Morningside — photo ${i + 1}`}
                loading="lazy"
                onError={() => handleImgError(url)}
              />
              <div className="hover-overlay" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              backgroundColor: "rgba(0,0,0,0.93)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(48px, 8vw, 60px) clamp(48px, 8vw, 60px)",
            }}>
            {/* Close */}
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(250,246,240,0.2)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(8px)",
                touchAction: "manipulation",
              }}>
              <X size={18} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(250,246,240,0.15)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(8px)",
                touchAction: "manipulation",
                zIndex: 10,
              }}>
              <ChevronLeft size={20} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22 }}
              src={validPhotos[lightboxIndex]}
              alt={`Photo ${lightboxIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "82vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
              }}
            />

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(250,246,240,0.15)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(8px)",
                touchAction: "manipulation",
                zIndex: 10,
              }}>
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.78rem",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.06em",
                background: "rgba(0,0,0,0.4)",
                padding: "4px 12px",
                borderRadius: "99px",
                backdropFilter: "blur(8px)",
              }}>
              {lightboxIndex + 1} / {validPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
