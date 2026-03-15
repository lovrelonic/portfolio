"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    revenue: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white border border-[#E5E5E5] rounded-xl px-4 py-3.5 text-[#0A0A0A] text-sm placeholder:text-[#737373] focus:outline-none focus:border-[#F43F5E] transition-colors duration-200";

  return (
    <section id="contact" className="py-24 px-6 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-medium tracking-widest uppercase text-[#F43F5E] block mb-4">
              Contact
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-6 leading-tight">
              Book a Free Retention Audit
            </h2>
            <p className="text-[#737373] leading-relaxed mb-8 text-lg">
              Let&apos;s look at your current email program together. I&apos;ll identify your top 3
              revenue opportunities and give you a clear roadmap — no strings attached.
            </p>

            <div className="space-y-5">
              {[
                { text: "60-minute deep-dive call" },
                { text: "Full Klaviyo account audit" },
                { text: "Custom growth roadmap" },
                { text: "Revenue opportunity breakdown" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F43F5E] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#737373] text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl border border-[#E5E5E5] p-10 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#F43F5E]/10 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l6 6L23 8" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-[#0A0A0A] mb-3">You&apos;re Booked In</h3>
                <p className="text-[#737373] text-sm leading-relaxed max-w-xs">
                  Thanks! I&apos;ll review your details and reach out within 24 hours to schedule your free retention audit.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-[#E5E5E5] p-8 space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#737373] mb-1.5 block font-medium">Name</label>
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
                    <label className="text-xs text-[#737373] mb-1.5 block font-medium">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="you@brand.com"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#737373] mb-1.5 block font-medium">Company / Brand</label>
                  <input
                    type="text"
                    placeholder="Your brand name"
                    className={inputClass}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs text-[#737373] mb-1.5 block font-medium">Monthly Revenue</label>
                  <select
                    className={inputClass}
                    value={form.revenue}
                    onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                  >
                    <option value="" disabled>Select range...</option>
                    <option value="under-10k">Under $10K/mo</option>
                    <option value="10k-50k">$10K – $50K/mo</option>
                    <option value="50k-100k">$50K – $100K/mo</option>
                    <option value="100k-500k">$100K – $500K/mo</option>
                    <option value="500k-plus">$500K+/mo</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-[#737373] mb-1.5 block font-medium">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your brand and your biggest email challenge..."
                    className={inputClass + " resize-none"}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F43F5E] text-white font-medium py-4 rounded-xl hover:bg-[#E11D48] transition-all duration-200 hover:shadow-lg hover:shadow-[#F43F5E]/25 text-sm"
                >
                  Book My Free Retention Audit →
                </button>
                <p className="text-xs text-[#737373] text-center">
                  No spam. No sales pitch. Just actionable insights for your brand.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
