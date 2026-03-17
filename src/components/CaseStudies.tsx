"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    brand: "Skincare Brand",
    title: "38% Revenue Lift in 60 Days",
    metrics: [{ value: "38%", label: "Revenue from Email" }, { value: "4.2x", label: "ROI" }],
    problem:
      "A DTC skincare brand was generating less than 8% of revenue from email despite having a 45,000-person list. Their welcome series was a single email, and they had no post-purchase or win-back flows in place.",
    strategy:
      "Audited deliverability and cleaned the list (removing 11k unengaged subscribers). Built a 5-email welcome series with brand storytelling and product education. Launched post-purchase sequence with upsell logic, replenishment reminders, and a loyalty invite.",
    results:
      "Within 60 days, email revenue jumped from 8% to 38% of total store revenue. Welcome flow alone generates $4,200/month. Win-back campaign recovered 312 lapsed customers in the first 30 days.",
  },
  {
    brand: "Apparel Brand",
    title: "62% Cart Recovery Lift",
    metrics: [{ value: "62%", label: "Recovery Lift" }, { value: "$38K", label: "Recovered in 30 Days" }],
    problem:
      "A fast-growing apparel brand had a basic 2-email abandoned cart sequence with a 12% recovery rate. No browse abandonment, no checkout abandonment differentiation, and no SMS integration to support the flow.",
    strategy:
      "Rebuilt the entire abandonment funnel: separate flows for browse, add-to-cart, and checkout abandonment — each with unique copy and timing. Added social proof and scarcity messaging. Integrated SMS as a second touch on checkout abandonment.",
    results:
      "Cart recovery rate increased from 12% to 19.4% — a 62% lift. The rebuilt abandonment flows recovered $38,000 in the first 30 days. Checkout abandonment flow CTR: 31%.",
  },
  {
    brand: "Supplement Brand",
    title: "$120K Attributed in 90 Days",
    metrics: [{ value: "$120K", label: "Revenue in 90 Days" }, { value: "52%", label: "Of Total Revenue" }],
    problem:
      "A supplement brand launching on Shopify needed a complete Klaviyo build from scratch. No existing flows, no segmentation strategy, and a previous ESP with no historical performance data.",
    strategy:
      "Complete Klaviyo setup including Shopify integration, DNS configuration, and list migration. Built a 12-flow automation stack: welcome, post-purchase, subscription upsell, replenishment, browse abandon, cart abandon, winback, and sunset.",
    results:
      "In the first 90 days, email generated $120,000 in attributed revenue — 52% of total store revenue. Repeat purchase rate reached 41%. Subscription upsell flow converted 18% of one-time buyers.",
  },
];

function CaseRow({ c, index, isInView }: { c: typeof cases[0]; index: number; isInView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
      className="border-b border-[#E5E5E5]"
    >
      {/* Row header */}
      <button
        onClick={() => setOpen(!open)}
        className="group w-full text-left flex items-start gap-6 md:gap-10 py-8 px-4 -mx-4 hover:bg-[#F5F5F5] transition-colors duration-300"
      >
        {/* Number */}
        <span className="font-serif text-2xl text-[#CCCCCC] w-10 flex-shrink-0 pt-1 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Brand + Title */}
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium tracking-widest uppercase text-[#737373] block mb-2">
            {c.brand}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-[#0A0A0A] leading-tight group-hover:translate-x-[5px] transition-transform duration-300">
            {c.title}
          </h3>
        </div>

        {/* Metrics */}
        <div className="hidden md:flex items-start gap-10 flex-shrink-0">
          {c.metrics.map((m) => (
            <div key={m.label} className="text-right">
              <div className="font-serif text-3xl text-[#0A0A0A] leading-none">{m.value}</div>
              <div className="text-xs text-[#737373] mt-1 whitespace-nowrap">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Toggle icon */}
        <div className={`w-7 h-7 flex items-center justify-center flex-shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7h10" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-16 md:pl-24 grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                { label: "The Problem", content: c.problem },
                { label: "The Strategy", content: c.strategy },
                { label: "The Results", content: c.results },
              ].map((section) => (
                <div key={section.label}>
                  <div className="text-xs font-medium tracking-widest uppercase text-[#0A0A0A] mb-4">
                    {section.label}
                  </div>
                  <p className="text-sm text-[#737373] leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[#4A6FA5]">
            Case Studies
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-16 leading-tight"
        >
          Real Results for Real Brands
        </motion.h2>

        <div className="border-t border-[#E5E5E5]">
          {cases.map((c, i) => (
            <CaseRow key={c.title} c={c} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
