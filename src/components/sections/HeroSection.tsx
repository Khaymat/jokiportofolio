"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { stats } from "@/data/content";

const tags = ["Cover Letter", "Linkedin", "Portofolio"];

export default function HeroSection() {
  return (
    <section className="relative bg-background pt-20 pb-12 md:pt-28 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {tags.map((tag, i) => (
                <span key={i} className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
              <span className="text-xs text-text-muted flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Rate 4.9 dari mahasiswa
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-heading text-dark mb-4 leading-tight tracking-tight">
              Jasa Buat{" "}
              <span className="text-primary">CV ATS,</span>
              <br />
              Portofolio Kerja &amp;
              <br />
              Optimasi Linkedin
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-text-muted mb-6 max-w-lg leading-relaxed">
              CV, Portofolio, dan LinkedIn yang dirancang biar profilmu terlihat lebih profesional, lebih dilirik recruiter, dan lebih percaya diri saat apply kerja.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-cta hover:bg-green-cta-hover text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Konsultasi Gratis
              </a>
              <a
                href="/pricelist"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                PriceList
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-base md:text-lg font-extrabold font-heading text-dark">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/3]">
              <Image
                src="/assets/media/ff80108748a757ece737e8a30a8bd000.png"
                alt="CV Portfolio Preview"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 0px, 400px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
