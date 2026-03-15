"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    tag: "Skincare Brand",
    title: "38% Revenue Lift in 60 Days",
    metrics: ["38% revenue from email", "4.2x ROI", "22% open rate"],
    problem:
      "A DTC skincare brand was generating less than 8% of revenue from email despite having a 45,000-person list. Their welcome series was a single email, and they had no post-purchase or win-back flows in place.",
    strategy:
      "Audited deliverability and cleaned the list (removing 11k unengaged subscribers). Built a 5-email welcome series with brand storytelling and product education. Launched post-purchase sequence with upsell logic, replenishment reminders, and a loyalty invite. Created segmented VIP campaigns for top 10% buyers.",
    results:
      "Within 60 days, email revenue jumped from 8% to 38% of total store revenue. Welcome flow alone generates $4,200/month. Win-back campaign recovered 312 lapsed customers in the first 30 days. Overall email ROI: 4.2x.",
  },
  {
    tag: "Apparel Brand",
    title: "62% Cart Recovery Lift",
    metrics: ["62% cart recovery lift", "$38K recovered in 30 days", "31% flow CTR"],
    problem:
      "A fast-growing apparel brand had a basic 2-email abandoned cart sequence with a 12% recovery rate. No browse abandonment, no checkout abandonment differentiation, and no SMS integration to support the flow.",
    strategy:
      "Rebuilt the entire abandonment funnel: separate flows for browse, add-to-cart, and checkout abandonment — each with unique copy and timing. Added social proof and scarcity messaging. Integrated SMS as a second touch on checkout abandonment. Implemented dynamic product blocks pulling live inventory.",
    results:
      "Cart recovery rate increased from 12% to 19.4% — a 62% lift. The rebuilt abandonment flows recovered $38,000 in the first 30 days. Checkout abandonment flow CTR: 31%. SMS integration contributed an additional $7,200/month in recovered revenue.",
  },
  {
    tag: "Supplement Brand",
    title: "$120K Attributed Revenue in 90 Days",
    metrics: ["$120K in 90 days", "52% of total revenue", "41% repeat purchase rate"],
    problem:
      "A supplement brand launching on Shopify needed a complete Klaviyo build from scratch. No existing flows, no segmentation strategy, and a previous ESP with no historical performance data to benchmark against.",
    strategy:
      "Complete Klaviyo setup including Shopify integration, DNS configuration, and list migration. Built a 12-flow automation stack: welcome, post-purchase (x3 product lines), subscription upsell, replenishment, browse abandon, cart abandon, winback, and sunset. Designed 6-segment campaign strategy based on purchase behavior.",
    results:
      "In the first 90 days post-launch, email generated $120,000 in attributed revenue — 52% of total store revenue. Repeat purchase rate reached 41%. Subscription upsell flow converted 18% of one-time buyers to subscribe-and-save. Email list grew from 0 to 8,400 engaged subscribers.",
  },
];

function CaseItem({ c, index, isInView }: { c: typeof cases[0]; index: number; isInView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="border border-[#E5E5E5] rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-[#F5F5F5]/50 transition-colors duration-200"
      >
        <div className="flex-1">
          <span className="text-xs font-medium tracking-widest uppercase text-[#F43F5E] mb-2 block">
            {c.tag}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-[#0A0A0A]">{c.title}</h3>
          <div className="flex flex-wrap gap-3 mt-4">
            {c.metrics.map((m) => (
              <span
                key={m}
                className="text-xs bg-[#F5F5F5] text-[#737373] px-3 py-1 rounded-full border border-[#E5E5E5]"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
        <div className={`w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7h10" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 grid md:grid-cols-3 gap-6 border-t border-[#E5E5E5] pt-6">
              {[
                { label: "The Problem", content: c.problem },
                { label: "The Strategy", content: c.strategy },
                { label: "The Results", content: c.results },
              ].map((section) => (
                <div key={section.label}>
                  <div className="text-xs font-medium tracking-widest uppercase text-[#F43F5E] mb-3">
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
    <section id="case-studies" className="py-24 px-6 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[#F43F5E]">
            Case Studies
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-4 max-w-2xl leading-tight"
        >
          Real Results for Real Brands
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#737373] text-lg mb-12 max-w-xl"
        >
          Click each case study to see the full breakdown — problem, strategy, and results.
        </motion.p>

        <div className="space-y-4">
          {cases.map((c, i) => (
            <CaseItem key={c.title} c={c} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
