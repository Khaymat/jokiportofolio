"use client";

import { motion } from "framer-motion";
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
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-dark mb-4 leading-tight tracking-tight">
            {testimonialIntro.title}
          </h2>
          <p className="text-sm text-text-muted max-w-xl mx-auto">
            {testimonialIntro.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-[23px] p-5 hover:shadow-md transition-shadow duration-300"
            >
              <StarRating />
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-[10px]">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-dark">{testimonial.name}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
