"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "38%", label: "Avg. Revenue from Email" },
  { value: "$2.4M+", label: "Generated" },
  { value: "50+", label: "Flows Built" },
  { value: "3.1x", label: "ROI" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex lg:flex-row overflow-hidden bg-white">
      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Photo — absolute background on mobile, right-half flex child on desktop */}
      <div className="absolute inset-0 lg:relative lg:inset-auto lg:w-1/2 lg:flex-shrink-0 order-last">
        <Image
          src="/lovre.PNG"
          alt="Lovre Lonić"
          fill
          className="object-cover object-top"
          priority
        />
        {/* White overlay — mobile only, keeps text readable */}
        <div className="absolute inset-0 bg-white/60 lg:hidden" />
        {/* Bottom fade — desktop only */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      {/* Text content */}
      <div className="relative z-20 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 px-6 md:px-14 xl:px-20 pt-24 pb-16 min-h-screen lg:min-h-0">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-[0.2em] uppercase text-[#737373] mb-8 block"
        >
          Klaviyo Email Marketing Specialist
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-[#0A0A0A] leading-[1.05] tracking-tight mb-8"
        >
          Lovre Lonić.
          <br />
          Email Marketing &amp;
          <br />
          Retention Specialist.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
          className="text-base md:text-lg text-[#737373] max-w-sm mb-10 leading-relaxed"
        >
          Helping Shopify brands turn email into their most profitable channel.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
          className="text-sm text-[#737373] max-w-sm mb-10 leading-relaxed"
        >
          I&apos;m Lovre — a Klaviyo email marketing specialist helping Shopify brands build retention systems that grow revenue without increasing ad spend. I treat every email program like it&apos;s my own business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.42, ease: "easeOut" }}
          className="mb-16"
        >
          <a
            href="https://calendly.com/lovre-lovrelonic/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white text-sm font-medium px-7 py-4 hover:bg-[#262626] transition-colors duration-200"
          >
            Book a Free Audit →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.52, ease: "easeOut" }}
          className="border-t border-[#E5E5E5] pt-8 w-full max-w-sm lg:max-w-none"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
              >
                <div className="font-serif text-2xl md:text-3xl text-[#0A0A0A] leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#737373] leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
