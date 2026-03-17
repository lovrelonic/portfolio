"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const statements = [
  {
    headline: "Retention beats acquisition.",
    subtext:
      "Most brands spend 80% of their budget getting new customers. The brands that win spend just as much keeping them.",
  },
  {
    headline: "Every email has one job.",
    subtext:
      "Not every email should sell. Some educate, some build trust, some re-engage. Map every send to a moment in the customer journey.",
  },
  {
    headline: "Data over vanity metrics.",
    subtext:
      "Open rates are ego. Revenue per recipient, flow conversion rate, repeat purchase rate — these are the numbers that move businesses.",
  },
];

export default function Approach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[#4A6FA5]">
            How I Think About Email
          </span>
        </motion.div>

        <div>
          {statements.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
            >
              <div className="py-14 md:py-16">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0A0A0A] leading-tight mb-6">
                  {s.headline}
                </h2>
                <p className="text-base md:text-lg text-[#737373] italic leading-relaxed max-w-2xl">
                  {s.subtext}
                </p>
              </div>
              {i < statements.length - 1 && (
                <div className="border-t border-[#E5E5E5]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
