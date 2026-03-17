"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Klaviyo Setup & Migration",
    desc: "Full platform setup, ESP migration, and technical integration with your Shopify store. Get your foundation right from day one.",
  },
  {
    title: "Email Flow Automation",
    desc: "Welcome series, abandoned cart, post-purchase, win-back, and browse abandonment — built to convert.",
  },
  {
    title: "Campaign Strategy & Execution",
    desc: "Monthly campaign calendars, copywriting, design direction, and full send management tailored to your brand.",
  },
  {
    title: "List Growth & Segmentation",
    desc: "Pop-up optimization, lead magnet strategy, and advanced segmentation to reach the right person every time.",
  },
  {
    title: "Lifecycle & Retention Marketing",
    desc: "Full customer lifecycle strategy to maximize LTV — from first purchase through loyal advocate.",
  },
  {
    title: "A/B Testing & Optimization",
    desc: "Systematic testing of subject lines, send times, content, and flows to continuously improve performance.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[#4A6FA5]">
            Services
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-16 leading-tight"
        >
          What I Do
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 border-t border-[#E5E5E5]">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
            className="group flex items-start gap-8 md:gap-16 py-8 border-b border-[#E5E5E5] hover:bg-[#F5F5F5] transition-colors duration-300 px-4 -mx-4 cursor-default"
          >
            {/* Number */}
            <span className="font-serif text-[#CCCCCC] text-2xl w-10 flex-shrink-0 pt-1 select-none">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Service name */}
            <h3
              className="font-serif text-2xl md:text-3xl text-[#0A0A0A] flex-1 leading-tight transition-transform duration-300 group-hover:translate-x-[5px]"
            >
              {s.title}
            </h3>

            {/* Description */}
            <p className="hidden md:block text-[#737373] text-sm leading-relaxed max-w-xs flex-shrink-0 pt-1">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
