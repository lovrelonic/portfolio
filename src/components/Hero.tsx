"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "38%", label: "Avg Revenue Lift from Email" },
  { value: "$2.4M+", label: "Revenue Generated" },
  { value: "50+", label: "Flows Built & Optimized" },
  { value: "3.1x", label: "Average Email ROI" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#F43F5E] tracking-widest uppercase">
            <span className="w-8 h-px bg-[#F43F5E]" />
            Klaviyo Email Marketing Specialist
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#0A0A0A] leading-[1.05] max-w-4xl mb-6"
        >
          I Help Ecommerce Brands Turn Email Into Their{" "}
          <span className="text-[#F43F5E] italic">#1 Revenue Channel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="text-lg md:text-xl text-[#737373] max-w-2xl mb-10 leading-relaxed"
        >
          Klaviyo-certified specialist helping Shopify brands build retention systems
          that generate predictable, scalable revenue — without increasing ad spend.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center gap-2 bg-[#F43F5E] text-white font-medium px-8 py-4 rounded-full hover:bg-[#E11D48] transition-all duration-200 hover:shadow-xl hover:shadow-[#F43F5E]/30 text-base"
          >
            View Case Studies
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-[#E5E5E5] text-[#0A0A0A] font-medium px-8 py-4 rounded-full hover:border-[#F43F5E] hover:text-[#F43F5E] transition-all duration-200 text-base"
          >
            Book a Strategy Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="border-t border-[#E5E5E5] pt-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
              >
                <div className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#737373] leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
