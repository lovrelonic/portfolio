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
        <span className="font-serif text-xl text-[#0A0A0A]">
          Lovre Lonić
        </span>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Work", "Services", "Case Studies", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-[#737373] hover:text-[#F43F5E] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#F43F5E] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#E11D48] transition-all duration-200 hover:shadow-lg hover:shadow-[#F43F5E]/25"
        >
          Book a Call
        </a>
      </div>
    </motion.nav>
  );
}
