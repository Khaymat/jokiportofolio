"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials, testimonialIntro } from "@/data/content";
import { siteConfig } from "@/lib/constants";

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-dark mb-4 leading-tight tracking-tight">
            Cerita Mereka yang<br />
            Berhasil Upgrade<br />
            Personal Branding
          </h2>
          <p className="text-sm text-text-muted max-w-xl mx-auto">
            {testimonialIntro.description}
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-100 rounded-[23px] p-6 md:p-8"
            >
              <StarRating />
              <p className="text-sm md:text-base text-text-muted leading-relaxed mb-6 italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">{testimonials[current].name}</p>
                    {testimonials[current].role && (
                      <p className="text-[11px] text-text-muted">{testimonials[current].role}</p>
                    )}
                  </div>
                </div>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary font-medium hover:underline"
                >
                  Chat Admin
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary/5 transition-colors"
            >
              <svg className="w-4 h-4 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary/5 transition-colors"
            >
              <svg className="w-4 h-4 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
