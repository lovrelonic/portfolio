"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white border border-[#E5E5E5] rounded-lg px-4 py-3.5 text-[#0A0A0A] text-sm placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#0A0A0A] transition-colors duration-200";

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[#4A6FA5] block mb-4">
            Contact
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0 border border-[#E5E5E5] rounded-2xl overflow-hidden">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-10 md:p-14 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#0A0A0A] leading-tight mb-6">
                Let&apos;s Work<br />Together
              </h2>
              <p className="text-[#737373] text-base leading-relaxed mb-10 max-w-sm">
                Book a free 45-minute audit. I&apos;ll review your current email setup and show you exactly where you&apos;re leaving money on the table.
              </p>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-1.5 border border-[#4A6FA5]/30 rounded-full px-2.5 py-1 mb-10 bg-[#4A6FA5]/5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#4A6FA5] flex-shrink-0"
                  style={{ animation: "dot-pulse 2s ease-in-out infinite" }}
                />
                <span style={{ fontSize: "0.7rem" }} className="text-[#4A6FA5] font-medium whitespace-nowrap leading-none">
                  Currently available for new clients
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:lovre@lovrelonic.com"
                className="flex items-center gap-3 text-sm text-[#0A0A0A] hover:text-[#4A6FA5] transition-colors duration-200 group"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <path d="M2 4h12v9H2zM2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                lovre@lovrelonic.com
              </a>
              <a
                href="https://linkedin.com/in/lovrelonic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#0A0A0A] hover:text-[#4A6FA5] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M4 6.5v5M4 4v.5M7 11.5V9c0-1.5 4-1.5 4 0v2.5M7 6.5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                linkedin.com/in/lovrelonic
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#F5F5F5] p-10 md:p-14"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-14 h-14 rounded-full bg-[#0A0A0A] flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12l5 5L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-[#0A0A0A] mb-3">Message Sent</h3>
                <p className="text-[#737373] text-sm leading-relaxed max-w-xs">
                  I&apos;ll review your details and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full">
                <div>
                  <label className="text-xs text-[#737373] mb-1.5 block font-medium uppercase tracking-wide">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs text-[#737373] mb-1.5 block font-medium uppercase tracking-wide">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="you@brand.com"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-[#737373] mb-1.5 block font-medium uppercase tracking-wide">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your brand and what you're working on..."
                    className={inputClass + " resize-none"}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#0A0A0A] text-white font-medium py-4 rounded-lg hover:bg-[#262626] transition-colors duration-200 text-sm"
                  >
                    Book a Free Audit →
                  </button>
                  <p className="text-xs text-[#A3A3A3] text-center mt-3">
                    Usually responds within 24 hours. No spam, no pitch.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
