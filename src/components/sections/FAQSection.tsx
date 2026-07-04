"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Nanti draf CV atau Portofolionya bisa saya edit lagi gak di kemudian hari?",
    a: "Bisa banget! Selain dapet file siap pakai format PDF, kamu juga bakal dapet file master yang bisa kamu edit-edit sendiri (editable) sesuai paket yang kamu pilih nanti. Jadi kalau ada tambahan pengalaman baru, tinggal kamu update sendiri dengan mudah.",
  },
  {
    q: "Gimana kalau saya bener-bener belum punya pengalaman kerja buat bikin portofolio?",
    a: "Santai, gak usah panik. Tim kami bakal bantu ngulik dari tugas kuliah terbaik kamu, proyek kelompok, kerja lepas (freelance), sampai kegiatan kepanitiaan kampus buat dikemas jadi case study yang keren dan punya 'cerita' di mata rekruter.",
  },
  {
    q: "Proses pengerjaannya berapa lama, ya?",
    a: "Biasanya sekitar 1 sampai 2 hari kerja setelah semua data kamu beres dan sesi konsultasi awal selesai. Tapi kalau kamu buru-buru banget karena deadline lowongannya udah mepet, kami juga punya layanan kilat kok.",
  },
  {
    q: "Data pribadi saya dijamin aman gak nih?",
    a: "Dijamin 100% aman! Semua data sensitif kamu kayak nomor HP, alamat rumah, foto, atau riwayat kerjaan cuma bakal dipakai buat kebutuhan penyusunan dokumen kamu aja. Gak bakal disebarluaskan atau disalahgunakan.",
  },
  {
    q: "Kalau hasilnya nanti kurang sreg, bisa direvisi gak?",
    a: "Ada garansinya kok! Setiap paket yang kamu pilih udah termasuk kuota revisi gratis. Nanti kita bakal ada sesi review bareng, jadi kamu bisa kasih masukan sampai hasilnya bener-bener mantap dan sesuai ekspektasi kamu.",
  },
];

function AccordionItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-200 rounded-[16px] overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left font-semibold text-sm md:text-base text-dark hover:text-primary transition-colors"
      >
        <span className="pr-4">{q}</span>
        <svg
          className={`w-4 h-4 flex-shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-4 md:px-5 pb-4 md:pb-5 text-xs md:text-sm text-text-muted leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-dark mb-4 leading-tight tracking-tight">
            FAQ
          </h2>
          <p className="text-sm text-text-muted max-w-xl mx-auto">
            Pertanyaan yang sering diajukan sama klien kami
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <AccordionItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
