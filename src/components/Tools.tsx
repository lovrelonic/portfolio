"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  {
    name: "Klaviyo",
    desc: "Primary ESP & automation platform",
    badge: "Certified Partner",
  },
  {
    name: "Shopify",
    desc: "Ecommerce platform integration",
    badge: "Deep Integration",
  },
  {
    name: "Google Analytics",
    desc: "Revenue attribution & tracking",
    badge: "GA4 Certified",
  },
  {
    name: "Triple Whale",
    desc: "Multi-touch attribution & LTV data",
    badge: "Data Partner",
  },
];

export default function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[#F43F5E]">
            Tools & Platforms
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-14 text-center leading-tight"
        >
          The Stack That Drives Results
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="bg-[#F5F5F5] rounded-2xl p-6 border border-[#E5E5E5] text-center hover:border-[#F43F5E] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-[#E5E5E5] mx-auto mb-4 flex items-center justify-center">
                <span className="font-serif text-xl text-[#0A0A0A]">
                  {t.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-medium text-[#0A0A0A] mb-1">{t.name}</h3>
              <p className="text-xs text-[#737373] mb-3">{t.desc}</p>
              <span className="inline-block text-xs bg-white text-[#737373] px-2.5 py-1 rounded-full border border-[#E5E5E5]">
                {t.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
