"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: 1,
    title: "Portfolio That Sells",
    description: 'Bukan asal masukin project. Kami pilih dan susun karya terbaikmu supaya lebih menarik dan punya "cerita" yang bikin orang paham kemampuanmu.',
  },
  {
    number: 2,
    title: "Personal Branding yang Nempel",
    description: "Setiap bagian dirancang biar orang langsung tahu kamu jago di bidang apa. First impression itu penting.",
  },
  {
    number: 3,
    title: "Recruiter & Client Friendly",
    description: "Portofolio dibuat dengan cara berpikir recruiter dan calon klien. Jadi bukan cuma estetik, tapi juga gampang dipahami.",
  },
  {
    number: 4,
    title: "Achievement-Based Writing",
    description: "Fokus menceritakan hasil kerja, metrik kuantitatif, dan output bisnis dengan format STAR (Situation-Task-Action-Result).",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Numbered List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 group"
              >
                {/* Red Circle Number */}
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-md mt-0.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600">
                  <span className="text-white font-bold text-xs font-heading">
                    {feature.number}
                  </span>
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-sm font-bold text-dark font-heading mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Heading + Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-sm font-bold italic text-primary mb-2">
              Mengapa Kami?
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-dark mb-6 leading-tight tracking-tight">
              Bukan Sekadar Bikin Portofolio, Tapi Bikin Orang{" "}
              <span className="text-primary">Ngelirik</span>
            </h2>
            <p className="text-sm text-text-muted leading-relaxed whitespace-pre-line mb-8">
              Portofolio bukan cuma tempat naruh hasil kerja. Kalau disusun dengan benar, portofolio bisa jadi alasan recruiter ngajak interview atau klien langsung nge-chat duluan.{"\n\n"}Kami bantu bikin portofolio yang enak dilihat, gampang dipahami, dan yang paling penting: bisa nunjukin value kamu tanpa harus banyak ngomong.
            </p>
              <div className="flex flex-wrap gap-3">
              <a href="/template-cv-ats" className="px-5 py-2.5 bg-[#e0e7ff] text-primary rounded-xl text-sm font-semibold hover:bg-[#d0d7ff] transition-colors">
                Template CV
              </a>
              <a href="/template-portofolio-kreatif" className="px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-light transition-colors">
                Template Portofolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
