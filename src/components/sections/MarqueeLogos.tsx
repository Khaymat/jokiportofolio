"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MarqueeLogos() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white py-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-dark text-xl md:text-2xl font-bold font-heading mb-8"
        >
          <span className="text-primary">100+</span> Universitas Sudah Join, Kamu Kapan?
        </motion.h3>

        {/* Static logo grid - 3x repeat like Canva */}
        <div className="flex justify-center items-center gap-8">
          <div className="w-[220px] h-[220px] relative">
            <Image
              src="/assets/media/0e5a349d6e1e74b1c26a0f0e7be5ec6a.png"
              alt="Universitas logos"
              fill
              className="object-contain"
              sizes="220px"
            />
          </div>
          <div className="w-[220px] h-[220px] relative">
            <Image
              src="/assets/media/0e5a349d6e1e74b1c26a0f0e7be5ec6a.png"
              alt="Universitas logos"
              fill
              className="object-contain"
              sizes="220px"
            />
          </div>
          <div className="w-[220px] h-[220px] relative">
            <Image
              src="/assets/media/0e5a349d6e1e74b1c26a0f0e7be5ec6a.png"
              alt="Universitas logos"
              fill
              className="object-contain"
              sizes="220px"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
