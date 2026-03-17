"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Audit",
    desc: "Deep dive into your current email program — deliverability, flows, segmentation, revenue attribution, and competitive benchmarks.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Build a custom 90-day email roadmap: which flows to build first, campaign calendar, list growth plan, and KPI targets.",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "Full build-out in Klaviyo — flows, templates, segments, integrations. You review and approve before anything goes live.",
  },
  {
    num: "04",
    title: "Optimization",
    desc: "Ongoing analysis, A/B testing, and iteration. Monthly performance reviews with clear reporting on revenue and list health.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[#4A6FA5]">
            Process
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-16 leading-tight"
        >
          How We Work Together
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="relative pt-16 pb-4"
            >
              {/* Watermark number */}
              <span
                className="absolute top-0 left-0 font-serif text-[#EEEEEE] select-none pointer-events-none"
                style={{ fontSize: "130px", lineHeight: 1 }}
              >
                {s.num}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-6 h-0.5 bg-[#4A6FA5] mb-4" />
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
