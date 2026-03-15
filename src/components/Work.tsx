"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  { brand: "Velora", tag: "Welcome Flow" },
  { brand: "LUMĒ", tag: "Campaign" },
  { brand: "APEX", tag: "Abandoned Cart" },
  { brand: "VØID", tag: "Post-Purchase" },
  { brand: "Brand 05", tag: "Win-Back Flow" },
  { brand: "Brand 06", tag: "Campaign" },
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[#F43F5E]">
            Designs
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-4 leading-tight"
        >
          Selected Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#737373] text-lg mb-14 max-w-xl"
        >
          A selection of email designs built for Shopify brands across different verticals.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.brand}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
              className="group rounded-2xl border border-[#E5E5E5] overflow-hidden bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-400"
            >
              <div className="overflow-hidden aspect-[3/4]">
                <Image
                  src={`https://placehold.co/600x800/F5F5F5/737373?text=Email+Design`}
                  alt={`${project.brand} email design`}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <span className="font-medium text-[#0A0A0A] text-sm">{project.brand}</span>
                <span className="text-xs text-[#737373] border border-[#E5E5E5] px-2.5 py-1 rounded-full group-hover:text-[#F43F5E] group-hover:border-[#F43F5E] transition-colors duration-200">
                  {project.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
