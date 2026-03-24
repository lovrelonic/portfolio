"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

type Card = {
  brand: string | null;
  tag: string | null;
  src: string | null;
  size: string;
};

const cards: Card[] = [
  { brand: "Velora Skincare", tag: "Welcome Flow",  src: "/email 2.png",          size: "large"  },
  { brand: "PULSE+",          tag: "Abandoned Cart", src: "/ABANDONED CART 2.png", size: "medium" },
  { brand: "Orvid Coffee",    tag: "Campaign",       src: "/orvid_coffee.png",     size: "medium" },
  { brand: "Clarity Pop",     tag: "Campaign",       src: null,                    size: "small"  },
  { brand: null,              tag: null,             src: null,                    size: "small"  },
  { brand: null,              tag: null,             src: null,                    size: "small"  },
];

// ─── Lightbox ────────────────────────────────────────────────────────────────

function Lightbox({ card, onClose }: { card: Card; onClose: () => void }) {
  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      // Click outside to close
      onMouseDown={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.85)" }} />

      {/* Container */}
      <motion.div
        className="relative z-10 bg-white rounded-xl overflow-hidden w-full"
        style={{ maxWidth: "500px", maxHeight: "90vh", overflowY: "auto" }}
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#F0F0F0] sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <span className="font-medium text-sm text-[#0A0A0A]">{card.brand}</span>
            {card.tag && (
              <span className="text-[10px] text-[#737373] border border-[#E5E5E5] px-2 py-0.5 rounded-full">
                {card.tag}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#F5F5F5] transition-colors duration-150"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Full image */}
        <div className="bg-[#F5F5F5]">
          <Image
            src={card.src!}
            alt={card.brand!}
            width={500}
            height={1000}
            className="w-full h-auto block"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── BentoCard ────────────────────────────────────────────────────────────────

function BentoCard({
  card,
  index,
  isInView,
  style,
  onOpen,
}: {
  card: Card;
  index: number;
  isInView: boolean;
  style?: React.CSSProperties;
  onOpen?: () => void;
}) {
  const hasImage = !!card.src;
  const hasLabel = !!card.brand;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
      style={style}
      onClick={hasImage ? onOpen : undefined}
      className={`group relative overflow-hidden rounded-[8px] bg-[#F5F5F5] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/10 ${
        hasImage ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {/* Image */}
      {hasImage && (
        <Image
          src={card.src!}
          alt={card.brand!}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}

      {/* Gradient — image cards */}
      {hasImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      )}

      {/* Coming Soon — no brand */}
      {!hasImage && !hasLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-[#CCCCCC] tracking-widest uppercase">Coming Soon</span>
        </div>
      )}

      {/* Named placeholder */}
      {!hasImage && hasLabel && (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-[#AAAAAA] tracking-widest uppercase">Coming Soon</span>
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <span className="text-xs font-medium text-[#737373]">{card.brand}</span>
            {card.tag && (
              <span className="text-[10px] text-[#999] border border-[#E0E0E0] px-2 py-0.5 rounded-full bg-white/80">
                {card.tag}
              </span>
            )}
          </div>
        </>
      )}

      {/* Label — image cards */}
      {hasImage && (
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className="text-sm font-medium text-white leading-tight">{card.brand}</span>
          {card.tag && (
            <span className="text-[10px] text-white/80 border border-white/30 px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm whitespace-nowrap">
              {card.tag}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}

// ─── Work ─────────────────────────────────────────────────────────────────────

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<Card | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="work" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-widest uppercase text-[#4A6FA5] block mb-4"
        >
          Selected Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-[#0A0A0A] leading-tight mb-10"
        >
          Email Designs<br />That Convert
        </motion.h2>

        {/* Bento — desktop */}
        <div
          className="hidden md:grid gap-2"
          style={{ gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "320px 320px 220px" }}
        >
          <BentoCard card={cards[0]} index={0} isInView={isInView} style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }} onOpen={() => setSelected(cards[0])} />
          <BentoCard card={cards[1]} index={1} isInView={isInView} onOpen={() => setSelected(cards[1])} />
          <BentoCard card={cards[2]} index={2} isInView={isInView} onOpen={() => setSelected(cards[2])} />
          <BentoCard card={cards[3]} index={3} isInView={isInView} onOpen={() => setSelected(cards[3])} />
          <BentoCard card={cards[4]} index={4} isInView={isInView} onOpen={() => setSelected(cards[4])} />
          <BentoCard card={cards[5]} index={5} isInView={isInView} onOpen={() => setSelected(cards[5])} />
        </div>

        {/* Mobile */}
        <div className="grid md:hidden grid-cols-2 gap-2">
          {cards.map((card, i) => (
            <BentoCard
              key={i}
              card={card}
              index={i}
              isInView={isInView}
              onOpen={() => setSelected(card)}
              style={{ height: i === 0 ? "340px" : "200px", gridColumn: i === 0 ? "1 / 3" : undefined }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected?.src && <Lightbox card={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
