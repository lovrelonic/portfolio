"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Flow Automation",
  "Advanced Segmentation",
  "A/B Testing",
  "Deliverability",
  "Campaign Strategy",
  "List Growth",
];

export default function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-[#0A0A0A]">Klaviyo</h2>
          <span className="text-xs font-medium tracking-widest uppercase border border-[#0A0A0A] px-2.5 py-1 rounded-full text-[#0A0A0A] mt-1">
            Certified
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#737373] text-lg leading-relaxed mb-10"
        >
          My primary platform. I live in Klaviyo — flows, segmentation, A/B testing,
          deliverability, and everything in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
              className="text-sm text-[#0A0A0A] border border-[#E5E5E5] px-4 py-2 rounded-full hover:border-[#0A0A0A] transition-colors duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
