"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Audit",
    desc: "Deep dive into your current email program — deliverability, flows, segmentation, revenue attribution, and competitive benchmarks. I'll find exactly where you're leaving money on the table.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Build a custom 90-day email roadmap: which flows to build first, campaign calendar, list growth plan, and KPI targets. You get a clear picture of what we're building and why.",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "Full build-out in Klaviyo — flows, templates, segments, integrations. I handle the copy, design direction, logic, and testing. You review and approve before anything goes live.",
  },
  {
    num: "04",
    title: "Optimization",
    desc: "Ongoing analysis, A/B testing, and iteration. Monthly performance reviews with clear reporting on revenue, ROI, and list health. Always improving, never coasting.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[#F43F5E]">
            Process
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-4 max-w-xl leading-tight"
        >
          How We Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#737373] text-lg mb-16 max-w-lg"
        >
          A simple, proven 4-step framework from first call to ongoing optimization.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#E5E5E5] z-0 -translate-x-6" />
              )}
              <div className="relative z-10">
                <div className="font-serif text-4xl text-[#0A0A0A]/10 mb-4">{s.num}</div>
                <div className="w-8 h-0.5 bg-[#F43F5E] mb-4" />
                <h3 className="font-serif text-xl text-[#0A0A0A] mb-3">{s.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
