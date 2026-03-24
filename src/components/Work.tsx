"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const cards = [
  {
    brand: "Velora Skincare",
    tag: "Welcome Flow",
    src: "/email 2.png",
    size: "large", // col-span-2, row-span-2
  },
  {
    brand: "PULSE+",
    tag: "Abandoned Cart",
    src: "/ABANDONED CART 2.png",
    size: "medium",
  },
  {
    brand: "Orvid Coffee",
    tag: "Campaign",
    src: "/orvid_coffee.png",
    size: "medium",
  },
  {
    brand: "Clarity Pop",
    tag: "Campaign",
    src: null,
    size: "small",
  },
  {
    brand: null,
    tag: null,
    src: null,
    size: "small",
  },
  {
    brand: null,
    tag: null,
    src: null,
    size: "small",
  },
];

function BentoCard({
  card,
  index,
  isInView,
  style,
}: {
  card: (typeof cards)[0];
  index: number;
  isInView: boolean;
  style?: React.CSSProperties;
}) {
  const hasImage = !!card.src;
  const hasLabel = !!card.brand;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
      style={style}
      className="group relative overflow-hidden rounded-[8px] bg-[#F5F5F5] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/10 cursor-default"
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

      {/* Gradient overlay — only for image cards */}
      {hasImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      )}

      {/* Coming Soon — placeholder cards */}
      {!hasImage && !hasLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-[#CCCCCC] tracking-widest uppercase">
            Coming Soon
          </span>
        </div>
      )}

      {/* Named placeholder (no image yet) */}
      {!hasImage && hasLabel && (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-[#AAAAAA] tracking-widest uppercase">
              Coming Soon
            </span>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-end justify-between">
              <span className="text-xs font-medium text-[#737373]">
                {card.brand}
              </span>
              {card.tag && (
                <span className="text-[10px] text-[#999] border border-[#E0E0E0] px-2 py-0.5 rounded-full bg-white/80">
                  {card.tag}
                </span>
              )}
            </div>
          </div>
        </>
      )}

      {/* Label overlay — image cards */}
      {hasImage && (
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className="text-sm font-medium text-white leading-tight">
            {card.brand}
          </span>
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

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
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

        {/* Bento Grid — desktop */}
        <div
          className="hidden md:grid gap-2"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "320px 320px 220px",
          }}
        >
          {/* Card 1 — hero, spans 2 cols × 2 rows */}
          <BentoCard
            card={cards[0]}
            index={0}
            isInView={isInView}
            style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}
          />
          {/* Card 2 */}
          <BentoCard card={cards[1]} index={1} isInView={isInView} />
          {/* Card 3 */}
          <BentoCard card={cards[2]} index={2} isInView={isInView} />
          {/* Cards 4-6 — bottom row */}
          <BentoCard card={cards[3]} index={3} isInView={isInView} />
          <BentoCard card={cards[4]} index={4} isInView={isInView} />
          <BentoCard card={cards[5]} index={5} isInView={isInView} />
        </div>

        {/* Mobile — simple stacked grid */}
        <div className="grid md:hidden grid-cols-2 gap-2">
          {cards.map((card, i) => (
            <BentoCard
              key={i}
              card={card}
              index={i}
              isInView={isInView}
              style={{ height: i === 0 ? "340px" : "200px", gridColumn: i === 0 ? "1 / 3" : undefined }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
