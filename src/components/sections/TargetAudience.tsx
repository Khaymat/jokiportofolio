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
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-dark mb-4 leading-tight tracking-tight">
            Siapa Saja yang<br />
            <span className="text-primary">Butuh Jasa Ini?</span>
          </h2>
          <p className="text-sm text-text-muted max-w-xl mx-auto">
            Portofolio yang kami buat disesuaikan dengan kebutuhanmu, apapun profesi dan tujuanmu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((persona, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-[23px] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
            >
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={persona.image}
                  alt={persona.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-dark font-heading mb-2">
                  {persona.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {persona.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
