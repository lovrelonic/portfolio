"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Workflow, BarChart2, Users, RefreshCw, FlaskConical } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { icon: LucideIcon; title: string; desc: string; highlights: string[] }[] = [
  {
    icon: Settings,
    title: "Klaviyo Setup & Migration",
    desc: "Full platform setup, ESP migration, and technical integration with your Shopify store. Get your foundation right from day one.",
    highlights: ["DNS & deliverability setup", "Shopify deep integration", "Historical data migration"],
  },
  {
    icon: Workflow,
    title: "Email Flow Automation",
    desc: "Build high-converting automated flows — welcome series, abandoned cart, post-purchase, win-back, and browse abandonment.",
    highlights: ["Welcome & nurture sequences", "Cart & checkout recovery", "Post-purchase upsells"],
  },
  {
    icon: BarChart2,
    title: "Campaign Strategy & Execution",
    desc: "Monthly campaign calendars, copywriting, design direction, and full send management tailored to your brand voice.",
    highlights: ["Promotional calendars", "Segment-targeted sends", "Launch & sale campaigns"],
  },
  {
    icon: Users,
    title: "List Growth & Segmentation",
    desc: "Pop-up optimization, lead magnet strategy, and advanced segmentation to send the right message to the right person.",
    highlights: ["Pop-up & form CRO", "RFM segmentation", "Predictive analytics"],
  },
  {
    icon: RefreshCw,
    title: "Lifecycle & Retention Marketing",
    desc: "Full customer lifecycle strategy to maximize LTV — from first purchase through loyal advocate, with VIP and loyalty programs.",
    highlights: ["LTV optimization", "VIP tier programs", "Churn prevention flows"],
  },
  {
    icon: FlaskConical,
    title: "A/B Testing & Optimization",
    desc: "Systematic testing of subject lines, send times, content, and flows to continuously improve performance and revenue.",
    highlights: ["Subject line testing", "Send time optimization", "Flow split testing"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[#F43F5E]">
            Services
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-4 max-w-2xl leading-tight"
        >
          Everything Your Email Program Needs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#737373] text-lg mb-14 max-w-xl"
        >
          End-to-end Klaviyo services designed to turn your email list into a revenue engine.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
              className="bg-[#F5F5F5] rounded-2xl p-6 border border-[#E5E5E5] hover:border-[#F43F5E] transition-all duration-300 group"
            >
              <s.icon size={20} className="mb-4 text-[#0A0A0A] group-hover:text-[#F43F5E] transition-colors duration-300" />
              <h3 className="font-serif text-xl text-[#0A0A0A] mb-3">{s.title}</h3>
              <p className="text-[#737373] text-sm leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-[#737373]">
                    <span className="w-1 h-1 rounded-full bg-[#F43F5E] flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
