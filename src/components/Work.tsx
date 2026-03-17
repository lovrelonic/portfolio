"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const allCards = [
  { brand: "Velora Skincare", tag: "Welcome Flow",  src: "/email 2.png" },
  { brand: "PULSE+",          tag: "Abandoned Cart", src: "/ABANDONED CART 2.png" },
  { brand: "LUMĒ",            tag: "Campaign",       src: null },
  { brand: "APEX",            tag: "Post-Purchase",  src: null },
  { brand: "VØID",            tag: "Win-Back Flow",  src: null },
  { brand: "Brand 06",        tag: "Campaign",       src: null },
];

// Column 1: original order. Column 2: offset for visual variety
const col1 = allCards;
const col2 = [...allCards.slice(2), ...allCards.slice(0, 2)];

function EmailCard({ brand, tag, src }: { brand: string; tag: string; src: string | null }) {
  return (
    <div
      style={{ width: "220px", flexShrink: 0, marginBottom: "16px" }}
      className="rounded-xl border border-[#E5E5E5] overflow-hidden bg-white shadow-sm"
    >
      <div className="bg-[#F5F5F5]">
        {src ? (
          <Image
            src={src}
            alt={brand}
            width={440}
            height={660}
            className="w-full h-auto block"
          />
        ) : (
          <div style={{ height: "290px" }} className="flex items-center justify-center">
            <span className="text-xs text-[#AAAAAA] tracking-widest uppercase">Coming Soon</span>
          </div>
        )}
      </div>
      <div className="px-3 py-2.5 flex items-center justify-between border-t border-[#F0F0F0]">
        <span className="text-xs font-medium text-[#0A0A0A]">{brand}</span>
        <span className="text-[10px] text-[#737373] border border-[#E5E5E5] px-2 py-0.5 rounded-full">{tag}</span>
      </div>
    </div>
  );
}

function ScrollColumn({ cards, direction, paused, className }: {
  cards: typeof allCards;
  direction: "up" | "down";
  paused: boolean;
  className?: string;
}) {
  const doubled = [...cards, ...cards];
  return (
    <div style={{ width: "220px", height: "700px", overflow: "hidden", flexShrink: 0 }} className={className}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          animation: `${direction === "up" ? "scroll-up" : "scroll-down"} 38s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((card, i) => (
          <EmailCard key={`${card.brand}-${i}`} {...card} />
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [paused, setPaused] = useState(false);

  return (
    <section id="work" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left — sticky */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-[20%] flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-medium tracking-widest uppercase text-[#4A6FA5] block mb-6">
                Selected Work
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#0A0A0A] leading-tight mb-6">
                Email Designs<br />That Convert
              </h2>
              <p className="text-[#737373] text-base leading-relaxed max-w-xs">
                Every email is built with one goal — revenue. Clean design, strategic copy, and flows that work while you sleep.
              </p>
            </motion.div>
          </div>

          {/* Right — two scrolling columns */}
          <motion.div
            className="w-full lg:w-[60%] flex gap-4 items-start justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <ScrollColumn cards={col1} direction="up"   paused={paused} />
            <ScrollColumn cards={col2} direction="down" paused={paused} className="hidden lg:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
