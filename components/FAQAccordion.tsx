"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y" style={{ borderColor: "var(--color-border)" }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderColor: "var(--color-border)" }}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left transition-colors group"
            aria-expanded={openIndex === i}
          >
            <span
              className="font-semibold text-base md:text-lg leading-snug transition-colors"
              style={{
                color: openIndex === i ? "var(--color-primary)" : "var(--color-text)",
              }}
            >
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
              style={{ color: "var(--color-primary)" }}
            >
              <ChevronDown size={20} />
            </motion.span>
          </button>

          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <p
                  className="pb-5 text-sm md:text-base leading-relaxed max-w-3xl"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
