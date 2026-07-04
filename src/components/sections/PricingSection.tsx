"use client";

import { motion } from "framer-motion";
import PricingCard from "@/components/ui/PricingCard";
import { pricingCategories } from "@/data/pricing";

export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-dark" id="pricing">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-text-white mb-4 leading-tight tracking-tight">
            Pilih <span className="text-primary">Paket yang Paling Cocok</span> Buat Kamu
          </h2>
          <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
            Mulai bangun personal branding dengan portofolio, CV, dan LinkedIn yang lebih profesional. Pilih paket sesuai kebutuhan dan target kariermu.
          </p>
        </motion.div>

        {/* Pricing Categories - All shown sequentially */}
        {pricingCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-text-white text-center mb-10">
              {category.title}
            </h3>

            <div className="space-y-6">
              {category.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <PricingCard item={item} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}