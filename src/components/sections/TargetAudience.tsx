"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const personas = [
  {
    title: "Fresh Graduate & Mahasiswa",
    description: "Baru lulus atau mau daftar magang tapi bingung menyusun organisasi/tugas kuliah jadi portofolio menarik?",
    image: "/assets/media/4399a4f3ee6773e4c1b86fc8395b7eaa.png",
  },
  {
    title: "Career Switcher",
    description: "Mau pindah haluan karier? Kami bantu re-branding CV dan LinkedIn agar pengalaman lamamu tetap dilirik di industri baru.",
    image: "/assets/media/5c8baa6ebd1f66ede772efadacd8a2f2.png",
  },
  {
    title: "Profesional / Job Seeker",
    description: "Sudah apply puluhan kali tapi sepi panggilan? Berarti CV-mu belum lolos seleksi mesin ATS Parser. Yuk, kita rombak total!",
    image: "/assets/media/7c2b65fd0dc6b9f649fc354035458161.png",
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

        <div className="max-w-4xl mx-auto space-y-8">
          {personas.map((persona, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col md:flex-row items-center gap-6 bg-white border border-gray-100 rounded-[23px] overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-primary/20"
            >
              <div className="relative w-full md:w-40 aspect-[4/3] shrink-0">
                <Image
                  src={persona.image}
                  alt={persona.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white font-heading drop-shadow-lg">
                  {persona.title}
                </h3>
              </div>
              <div className="p-5 md:px-0 md:pr-5 flex-1">
                <p className="text-sm text-text-muted leading-relaxed">
                  {persona.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-primary text-xs font-semibold">
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
