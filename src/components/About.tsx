"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[#4A6FA5]">
            About
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="aspect-[4/5] bg-[#E5E5E5] rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-[#0A0A0A]/10 mx-auto mb-4 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="14" r="7" fill="#0A0A0A" fillOpacity="0.3"/>
                    <path d="M6 34c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#0A0A0A" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-[#737373] text-sm">Photo Placeholder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-6 leading-tight">
              Retention-First Email Strategy
            </h2>
            <p className="text-[#737373] leading-relaxed text-lg">
              I&apos;m Lovre, an email marketing specialist focused on Klaviyo and retention for Shopify brands. I&apos;m early in my freelance journey but deeply invested in the craft — I spend more time in Klaviyo than most people spend on their phones. If you&apos;re a growing brand looking for someone who will treat your email program like it&apos;s their own business, let&apos;s talk.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
