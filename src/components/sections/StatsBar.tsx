"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2,300+", label: "Joki" },
  { value: "2,100+", label: "Portofolio" },
  { value: "4.9/5", label: "Rating" },
];

export default function StatsBar() {
  return (
    <section className="bg-white py-8 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-12 md:gap-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold font-heading text-dark">
                {stat.value}
              </div>
              {stat.label && (
                <div className="text-xs text-text-muted mt-0.5">{stat.label}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
