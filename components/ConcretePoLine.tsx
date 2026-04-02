"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ConcretePoLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="overflow-hidden" style={{ height: "2px" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          height: "2px",
          background: "var(--color-primary)",
          transformOrigin: "left",
        }}
      />
    </div>
  );
}
