"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { stats } from "@/data/content";

const statIcons = [
  <svg key="0" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>,
  <svg key="1" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>,
  <svg key="2" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>,
  <svg key="3" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>,
];

export default function HeroSection() {
  return (
    <section
      className="relative bg-background pt-24 pb-0 md:pt-24 md:pb-20 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(77, 113, 224, 0.08) 0%, transparent 60%),
          linear-gradient(rgba(77, 113, 224, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(77, 113, 224, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 24px 24px, 24px 24px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left lg:order-1 flex flex-col justify-center min-h-[80vh] lg:min-h-0 py-6 lg:py-0"
          >
            {/* Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50/60 border border-blue-200/50 text-xs font-semibold text-primary">
                <svg className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Rate 4.9 dari Job Seeker
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-dark mb-4 leading-tight tracking-tight px-2 md:px-0">
              Jasa Buat <span className="text-primary">CV ATS,</span>{" "}
              <br className="hidden md:inline" />
              Portofolio Kerja &amp;{" "}
              <br className="hidden md:inline" />
              Optimasi LinkedIn
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-text-muted mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 md:px-0">
              CV, Portofolio, dan LinkedIn yang dirancang biar profilmu terlihat lebih profesional, lebih dilirik recruiter, dan lebih percaya diri saat apply kerja.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center sm:flex-row gap-3 mb-8 justify-center lg:justify-start px-4 md:px-0">
              <a
                href="/pricelist"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white text-sm font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 w-[280px] sm:w-auto"
              >
                Lihat Paket &amp; Harga
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-dark border border-gray-200 text-sm font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 w-[280px] sm:w-auto"
              >
                <svg className="w-4 h-4 text-dark/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.596.596 0 01-.478-.035.344.344 0 01-.137-.371l1.246-3.517c-2.903-1.15-4.82-3.486-4.82-6.046 0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                Konsultasi Gratis
              </a>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0 w-full px-4 md:px-0 mb-8 lg:mb-0"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200/50 p-3 text-center shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="p-1.5 rounded-lg bg-primary/5 text-primary mb-1.5 shrink-0">
                    {statIcons[i]}
                  </span>
                  <span className="text-sm font-extrabold font-heading text-dark block leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-text-muted font-medium mt-0.5 block leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image - bottom flush on mobile, side by side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-end justify-center lg:order-2 w-full mt-6 md:mt-0"
          >
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/3] -mb-1 origin-bottom">
              <Image
                src="/assets/media/hero_career.png"
                alt="CV Portfolio Preview"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
