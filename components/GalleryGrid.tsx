"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryGridProps {
  images: string[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  }, [lightboxIndex, images.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      {/* Masonry grid — CSS columns */}
      <div
        className="columns-2 sm:columns-3 lg:columns-4 gap-2 md:gap-3"
        style={{ columnGap: "0.625rem" }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="break-inside-avoid mb-2 md:mb-3 rounded-md overflow-hidden cursor-pointer img-hover-scale"
            onClick={() => openLightbox(i)}
            style={{ border: "1px solid var(--color-border)" }}
          >
            <Image
              src={src}
              alt={`Vasbeton szerkezet Veszprémben — ${i + 1}. kép`}
              width={600}
              height={400}
              className="w-full h-auto block"
              style={{ display: "block" }}
              loading="lazy"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.93)" }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
              onClick={closeLightbox}
              aria-label="Bezárás"
            >
              <X size={22} />
            </button>

            {/* Counter */}
            <div
              className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.1)", color: "var(--color-text-muted)" }}
            >
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-3 md:left-6 p-2 rounded-full transition-colors z-10"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Előző"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center px-14 md:px-20"
              style={{ maxWidth: "90vw", maxHeight: "88vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={`Vasbeton szerkezet Veszprémben — ${lightboxIndex + 1}. kép`}
                width={1200}
                height={900}
                className="rounded-md object-contain"
                style={{ maxWidth: "80vw", maxHeight: "80vh", width: "auto", height: "auto" }}
                priority
                unoptimized
              />
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-3 md:right-6 p-2 rounded-full transition-colors z-10"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Következő"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
