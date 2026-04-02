"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  badge?: string;
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function HeroSection({
  badge = "Városnév · Régió neve",
  headline = "SZOLGÁLTATÁS NEVE\nVÁROSBAN",
  subheadline = "Rövid leírás a cégről és a szolgáltatásról. Minőségi munka, megbízható csapat, versenyképes ár.",
  ctaLabel = "Ajánlatot kérek",
  ctaHref = "/kapcsolat",
  secondaryLabel = "Szolgáltatásaink",
  secondaryHref = "/szolgaltatasok",
}: HeroSectionProps) {
  const headlineLines = headline.split("\n");

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-subtle) 100%)",
      }}
    >
      {/* Decorative primary vertical line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: "var(--color-primary)", opacity: 0.7, zIndex: 2 }}
      />

      <div className="container-site py-24 md:py-32" style={{ position: "relative", zIndex: 2 }}>
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span
              className="inline-block w-8 h-0.5"
              style={{ background: "var(--color-primary)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-primary)" }}
            >
              {badge}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-black uppercase leading-none mb-6"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-text)",
              lineHeight: 1.05,
            }}
          >
            {headlineLines.map((line, i) => (
              <span key={i}>
                {i === headlineLines.length - 1 ? (
                  <span style={{ color: "var(--color-primary)" }}>{line}</span>
                ) : (
                  line
                )}
                {i < headlineLines.length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "var(--color-text-muted)" }}
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href={ctaHref}
              className="px-7 py-3.5 rounded-md font-semibold text-sm btn-primary"
            >
              {ctaLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="px-7 py-3.5 rounded-md font-semibold text-sm border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              style={{
                color: "var(--color-text-muted)",
                borderColor: "var(--color-border-strong)",
                background: "transparent",
              }}
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "var(--color-text-light)", zIndex: 2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
