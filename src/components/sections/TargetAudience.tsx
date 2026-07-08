"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const personas = [
  {
    title: "Fresh Graduate & Mahasiswa",
    description: "Baru lulus atau mau daftar magang tapi bingung menyusun organisasi/tugas kuliah jadi portofolio menarik?",
    image: "/assets/media/Sekolah.png",
  },
  {
    title: "Career Switcher",
    description: "Mau pindah haluan karier? Kami bantu re-branding CV dan LinkedIn agar pengalaman lamamu tetap dilirik di industri baru.",
    image: "/assets/media/career.png",
  },
  {
    title: "Profesional / Job Seeker",
    description: "Sudah apply puluhan kali tapi sepi panggilan? Berarti CV-mu belum lolos seleksi mesin ATS Parser. Yuk, kita rombak total!",
    image: "/assets/media/kerja.png",
  },
];

export default function TargetAudience() {
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
            Siapa Saja yang<br />
            <span className="text-primary">Butuh Jasa Ini?</span>
          </h2>
          <p className="text-sm text-text-muted max-w-xl mx-auto">
            Portofolio yang kami buat disesuaikan dengan kebutuhanmu, apapun profesi dan tujuanmu.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {personas.map((persona, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-row items-center gap-4 p-4 md:p-5 bg-white border border-gray-100 rounded-[23px] transition-all duration-500 hover:shadow-lg hover:border-primary/20"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 shrink-0 rounded-[18px] overflow-hidden">
                <Image
                  src={persona.image}
                  alt={persona.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80px, 112px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-dark font-heading mb-1 md:mb-2">
                  {persona.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {persona.description}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-primary text-[10px] sm:text-xs font-bold">
                  <span>{i === 0 ? "Lihat Paket Fresh Graduate" : i === 1 ? "Lihat Paket Career Switcher" : "Lihat Paket Profesional"}</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
