"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#E5E5E5]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-serif text-xl text-[#0A0A0A]">
            Lovre Lonić
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 border border-[#4A6FA5]/30 rounded-full px-2.5 py-1 bg-[#4A6FA5]/5">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#4A6FA5] flex-shrink-0"
              style={{ animation: "dot-pulse 2s ease-in-out infinite" }}
            />
            <span style={{ fontSize: "0.7rem" }} className="text-[#4A6FA5] font-medium whitespace-nowrap leading-none">
              Currently available for new clients
            </span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Work", "Services", "Case Studies", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white text-sm font-medium px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:bg-[#262626] transition-all duration-200 hover:shadow-lg hover:shadow-black/20"
        >
          Book a Call
        </a>
      </div>
    </motion.nav>
  );
}
