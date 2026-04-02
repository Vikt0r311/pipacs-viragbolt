"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, PhoneCall, FileCheck, Wrench, CheckCircle } from "lucide-react";

// TODO: Replace steps with real process steps relevant to the business
const steps = [
  {
    icon: PhoneCall,
    title: "Kapcsolatfelvétel",
    description:
      "Az ügyfél felveszi velünk a kapcsolatot telefonon, e-mailben vagy az ajánlatkérő űrlapon keresztül. Megbeszéljük az igényeket és a projekt részleteit.",
  },
  {
    icon: ClipboardList,
    title: "Igényfelmérés és ajánlat",
    description:
      "Helyszíni vagy online felmérést végzünk, majd személyre szabott árajánlatot készítünk. Az ajánlat részletes, átlátható és kötelezettségmentes.",
  },
  {
    icon: FileCheck,
    title: "Megállapodás és tervezés",
    description:
      "Az ajánlat elfogadása után szerződést kötünk, és megkezdjük a részletes tervezést. Minden részletet előre egyeztetünk.",
  },
  {
    icon: Wrench,
    title: "Kivitelezés",
    description:
      "Szakképzett csapatunk elvégzi a munkát a megbeszélt határidőre, a legszigorúbb minőségi standardok szerint. Folyamatosan tájékoztatjuk az ügyfelet.",
  },
  {
    icon: CheckCircle,
    title: "Átadás és garancia",
    description:
      "Az elkészült munkát közösen ellenőrizzük és átadjuk. Garanciát vállalunk az elvégzett munkákra, és elérhető maradunk a jövőbeni kérdések esetén is.",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-6 top-0 bottom-0 w-px md:left-8"
        style={{ background: "var(--color-border)" }}
      />

      <div className="flex flex-col gap-10">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return <ProcessStep key={i} step={step} index={i} Icon={Icon} />;
        })}
      </div>
    </div>
  );
}

function ProcessStep({
  step,
  index,
  Icon,
}: {
  step: { title: string; description: string };
  index: number;
  Icon: React.ElementType;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 md:gap-10 pl-16 md:pl-20"
    >
      {/* Icon circle — positioned over the vertical line */}
      <div
        className="absolute left-0 flex items-center justify-center rounded-full w-12 h-12 md:w-16 md:h-16 shrink-0"
        style={{
          background: "var(--color-bg-subtle)",
          border: "2px solid var(--color-primary)",
          color: "var(--color-primary)",
        }}
      >
        <Icon size={20} />
      </div>

      {/* Content */}
      <div className="pb-2">
        <div
          className="text-xs font-semibold uppercase tracking-widest mb-1"
          style={{ color: "var(--color-primary)" }}
        >
          {index + 1}. lépés
        </div>
        <h3
          className="text-lg md:text-xl font-bold mb-2"
          style={{ color: "var(--color-text)" }}
        >
          {step.title}
        </h3>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
