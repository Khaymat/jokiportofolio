"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = Array.from({ length: 30 }, (_, i) => ({
  src: `/assets/media/univ_logo_${i + 1}.png`,
  alt: `Universitas ${i + 1}`,
}));

export default function MarqueeLogos() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#f1f1f1] py-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-dark text-xl md:text-2xl font-bold mb-8"
        >
          <span className="text-primary">100+</span> Universitas Sudah Join, Kamu Kapan?
        </motion.h3>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="w-[120px] h-[60px] relative flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
