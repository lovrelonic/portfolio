"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CtaBanner({ text, label }: { text: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 px-6"
      >
        <p className="font-serif text-2xl md:text-3xl text-[#0A0A0A]">{text}</p>
        <a
          href="https://calendly.com/lovre-lovrelonic/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white text-sm font-medium px-6 py-3.5 hover:bg-[#262626] transition-colors duration-200 whitespace-nowrap"
        >
          {label}
        </a>
      </motion.div>
    </section>
  );
}
