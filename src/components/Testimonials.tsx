"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Alex completely transformed our email program. We went from 9% email revenue to 41% in under 3 months. The flows he built are still our top revenue drivers 18 months later.",
    name: "Sarah Chen",
    title: "Founder, Lumière Skincare",
    initials: "SC",
  },
  {
    quote:
      "I was skeptical at first, but the results speak for themselves. Our cart abandonment recovery alone is paying for Alex's retainer 3x over every month. Should have hired him sooner.",
    name: "Marcus Okafor",
    title: "CEO, Grounded Apparel",
    initials: "MO",
  },
  {
    quote:
      "Alex doesn't just execute — he thinks strategically. He flagged segment decay issues we didn't know we had, and his replenishment flow became our single best-performing asset.",
    name: "Jamie Russo",
    title: "Director of Growth, Vitalcore Supplements",
    initials: "JR",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-[#E5E6E4]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[#847577]">
            Testimonials
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-14 text-center leading-tight"
        >
          What Founders Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-[#FBFBF2] rounded-2xl p-8 border border-[#CFD2CD] flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="#C4622D">
                    <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
                  </svg>
                ))}
              </div>
              <p className="text-[#847577] leading-relaxed mb-8 flex-1 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E5E6E4] border border-[#CFD2CD] flex items-center justify-center">
                  <span className="text-xs font-medium text-[#847577]">{t.initials}</span>
                </div>
                <div>
                  <div className="font-medium text-[#1a1a1a] text-sm">{t.name}</div>
                  <div className="text-xs text-[#A6A2A2]">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
