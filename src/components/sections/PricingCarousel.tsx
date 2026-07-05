"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricingCategories } from "@/data/pricing";
import PricingCard from "@/components/ui/PricingCard";

export default function PricingCarousel() {
  const allItems = pricingCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.title }))
  );
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? allItems.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === allItems.length - 1 ? 0 : c + 1));

  return (
    <div className="relative max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-2">
            <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">
              {allItems[current].category}
            </span>
          </div>
          <PricingCard item={allItems[current]} />
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors"
          aria-label="Previous"
        >
          <svg className="w-4 h-4 text-text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="text-sm text-text-muted">
          {current + 1} / {allItems.length}
        </span>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors"
          aria-label="Next"
        >
          <svg className="w-4 h-4 text-text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
