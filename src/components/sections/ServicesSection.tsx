"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

const services = [
  {
    title: "Pembuatan CV",
    description: "Penyusunan ulang resume lama menjadi berstandar ATS, menonjolkan pencapaian (achievement-based), dan disesuaikan dengan posisi target.",
    features: ["Lulus Mesin ATS Parser", "Optimasi Kata Kunci Industri", "Format & Layout Profesional", "Achievement-Based (Metode STAR)"],
  },
  {
    title: "Pembuatan Portofolio",
    description: "Pembuatan showcase karya & proyek kerja profesional yang interaktif dan mudah dibaca recruiter untuk meyakinkan keahlian nyata Anda.",
    features: ["Draf Portofolio Eksklusif", "Penyusunan Studi Kasus Proyek", "Personal Branding yang Solid", "Layout Menarik & Interaktif"],
  },
  {
    title: "Pembuatan Linkedin",
    description: "Perombakan total profil LinkedIn Anda dari header hingga deskripsi detail agar bersahabat dengan pencarian SEO Recruiter.",
    features: ["Draf Portofolio Eksklusif", "Penyusunan Studi Kasus Proyek", "Personal Branding yang Solid", "Layout Menarik & Interaktif"],
  },
];

export default function ServicesSection() {
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
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-dark mb-4 leading-tight tracking-tight max-w-xs md:max-w-none mx-auto">
            Tingkatkan<br />
            Peluang Karir<br />
            <span className="text-primary">Kamu 4x Lipat</span>
          </h2>
          <p className="text-sm text-text-muted max-w-xl mx-auto">
            Layanan karir profesional terintegrasi untuk mendongkrak daya pikat resume, portofolio, dan akun LinkedIn kamu di mata recruiter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-[23px] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
            >
              <h3 className="text-lg font-bold text-dark font-heading mb-3">
                {service.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-text-muted">
                    <svg className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors w-full"
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
