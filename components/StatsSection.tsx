"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

// TODO: Replace with real stats
const stats = [
  { value: 10, suffix: "+", label: "Stat neve 1", description: "Rövid leírás" },
  { value: 50, suffix: "+", label: "Stat neve 2", description: "Rövid leírás" },
  { value: 5, suffix: " év", label: "Stat neve 3", description: "Rövid leírás" },
  { value: 100, suffix: "%", label: "Stat neve 4", description: "Rövid leírás" },
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
