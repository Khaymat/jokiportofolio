"use client";

import { motion } from "framer-motion";
import { processSteps, processIntro } from "@/data/content";

export default function ProcessSteps() {
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
            {processIntro.title}
          </h2>
          <p className="text-sm text-text-muted max-w-xl mx-auto">
            {processIntro.description}
          </p>
        </motion.div>

        {/* Horizontal Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-primary/20" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step Circle */}
                <div className="relative z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg mb-4">
                  <span className="text-white text-sm font-bold font-heading">
                    {step.number}
                  </span>
                </div>
                {/* Arrow connector (desktop) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5">
                    <svg className="w-full h-4 -mt-1.5" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 L90 5 L85 0 M90 5 L85 10" fill="none" stroke="#185fb1" strokeWidth="1.5" opacity="0.4" />
                    </svg>
                  </div>
                )}
                {/* Content */}
                <h3 className="text-sm font-bold text-dark font-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
