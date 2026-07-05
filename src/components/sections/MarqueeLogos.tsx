"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = Array.from({ length: 30 }, (_, i) => ({
  src: `/assets/media/univ_logo_${i + 1}.png`,
  alt: `Universitas ${i + 1}`,
}));

const row1 = logos.slice(0, 15);
const row2 = logos.slice(15);

function MarqueeRow({ items, duration }: { items: typeof logos; duration: number }) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      >
        {[...items, ...items].map((logo, i) => (
          <div key={i} className="w-[100px] h-[50px] relative flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
              sizes="100px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

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
          className="text-center text-dark text-2xl md:text-3xl font-bold mb-6"
        >
          <span className="text-primary">100+</span> Universitas Sudah Join, Kamu Kapan?
        </motion.h3>

        <div className="space-y-4">
          <MarqueeRow items={row1} duration={15} />
          <MarqueeRow items={row2} duration={18} />
        </div>
      </div>
    </motion.section>
  );
}
