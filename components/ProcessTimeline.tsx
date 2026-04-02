"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, LayoutTemplate, GitBranch, Droplets, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Tervezés és egyeztetés",
    description:
      "Felszínre hozzuk az épület igényeit. A statikai terv alapján meghatározzuk a zsaluzat típusát, az anyagmennyiséget és a munkaidőkeretet. Mindent előre egyeztetünk.",
  },
  {
    icon: LayoutTemplate,
    title: "Zsaluzás",
    description:
      "Panelzsaluzattal pontosan beformázzuk a szerkezetet. Milliméteres pontossággal állítjuk be a zsaluzatot, hogy a végeredmény tökéletesen illeszkedjen az épület geometriájához.",
  },
  {
    icon: GitBranch,
    title: "Vasalás",
    description:
      "A statikai terv szerinti vasalási hálót behelyezzük és rögzítjük. A vasalás szilárdsága és elrendezése meghatározza a szerkezet teherbírását és tartósságát.",
  },
  {
    icon: Droplets,
    title: "Betonozás",
    description:
      "Minőségi betont öntünk be a zsaluzatba, gondosan tömörítve és egyenletesen elosztva. A betonozás ütemezése az időjárási viszonyok és a szerkezet méretének függvénye.",
  },
  {
    icon: CheckCircle,
    title: "Kizsaluzás és átadás",
    description:
      "Miután a beton elérte a szükséges szilárdságot (általában 28 nap után), eltávolítjuk a zsaluzatot. Az elkészült szerkezetet precíz ellenőrzés után adjuk át.",
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
