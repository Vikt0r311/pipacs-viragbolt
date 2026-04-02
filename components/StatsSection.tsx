"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 2021, suffix: "", label: "Alapítás éve", description: "Szakmai tapasztalat azóta" },
  { value: 50, suffix: "+", label: "Elvégzett projekt", description: "Veszprém és Balaton-felvidéken" },
  { value: 15, suffix: " km", label: "Körzeten belül", description: "Veszprém és Balatonalmádi" },
  { value: 4, suffix: " fő", label: "Szakképzett csapat", description: "Dedikált, megbízható szakemberek" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = duration / 60;
    const increment = target / (duration / (1000 / 60));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      className="section-py relative overflow-hidden"
      style={{ background: "var(--color-bg-subtle)" }}
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(212,147,42,0.03) 40px,
            rgba(212,147,42,0.03) 41px
          )`,
        }}
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div
                className="text-4xl md:text-5xl font-black mb-1"
                style={{ color: "var(--color-primary)", letterSpacing: "-0.02em" }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div
                className="text-sm font-semibold mb-1"
                style={{ color: "var(--color-text)" }}
              >
                {stat.label}
              </div>
              <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
