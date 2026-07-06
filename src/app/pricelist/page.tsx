import Image from "next/image";
import PricingCarousel from "@/components/sections/PricingCarousel";

export const metadata = {
  title: "Pricelist - jokiportofolio",
  description:
    "Pilih paket yang paling cocok untuk kebutuhan CV, portofolio, dan LinkedIn kamu.",
};

export default function PricelistPage() {
  return (
    <div className="pt-14 min-h-screen bg-background">
      {/* Header */}
      <section className="relative bg-background pt-16 md:pt-24 pb-8 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-dark mb-4 leading-tight tracking-tight">
            Pilih <span className="text-primary">Paket yang Paling Cocok</span> Buat Kamu
          </h1>
          <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
            Mulai bangun personal branding dengan portofolio, CV, dan LinkedIn yang lebih profesional. Pilih paket sesuai kebutuhan dan target kariermu.
          </p>
        </div>
      </section>

      {/* Pricing Cards - Carousel */}
      <section className="py-8 md:py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCarousel />
        </div>
      </section>

      {/* Ketentuan & Berkas */}
      <section className="py-10 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark font-heading mb-4">
            Ketentuan & Berkas yang Perlu Kamu Siapkan
          </h2>
          <p className="text-sm text-text-muted mb-8 max-w-2xl">
            Proses kerja sama bisa berjalan lancar tanpa hambatan, yuk intip apa aja yang perlu kamu siapkan sebelum order sesuai layanan yang kamu pilih:
          </p>

          <div className="space-y-8">
            {/* 1. CV */}
            <div>
              <h3 className="text-lg font-bold text-dark font-heading mb-3 flex items-center gap-2">
                <span className="text-primary">1.</span> Jasa Pembuatan & Revamp CV
              </h3>
              <p className="text-sm text-text-muted mb-3">
                Sebelum mulai lewat WhatsApp/Chat admin, pastikan kamu sudah menyiapkan:
              </p>
              <ul className="space-y-2 text-sm text-text-muted pl-5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span><strong className="text-dark">CV Lama (jika Ada):</strong> Formatnya mau PDF, Word, atau berupa screenshot foto kasar juga boleh banget.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span><strong className="text-dark">Detail Riwayat Karier:</strong> Catatan ringkas tentang jurusan kuliah, riwayat organisasi, magang, kerja kepanitiaan, atau proyek mandiri yang pernah kamu ikuti.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span><strong className="text-dark">Target Posisi:</strong> Posisi yang sedang kamu incar baik kerja atau magang apa nih? (Misal: Admin, Digital Marketing, Tech Internship, dll). Ini penting banget biar tim kami bisa menyesuaikan kata kunci industri.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span><strong className="text-dark">Foto Profil Terbaik:</strong> Siapkan foto kasual/rapi atau formal dengan wajah yang kelihatan.</span>
                </li>
              </ul>
            </div>

            {/* 2. Portofolio */}
            <div>
              <h3 className="text-lg font-bold text-dark font-heading mb-3 flex items-center gap-2">
                <span className="text-primary">2.</span> Jasa Pembuatan Portofolio
              </h3>
              <p className="text-sm text-text-muted mb-3">
                Untuk portofolio, kuncinya adalah &quot;Bahan Mentah&quot; dari hasil karyamu. Yang perlu kamu kumpulkan ke dalam satu Google Drive adalah:
              </p>
              <ul className="space-y-2 text-sm text-text-muted pl-5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span><strong className="text-dark">Dokumentasi Proyek:</strong> Bisa berupa file tugas kuliah terbaik, laporan magang, hasil desain, tulisan, atau screenshot kerja kamu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span><strong className="text-dark">Catatan Cerita Proyek:</strong> Deskripsi singkat tentang proyek tersebut (Ngomongin soal kamu pakai tools apa, tugasnya dikapah, dan tujuan proyeknya buat apa sih).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span><strong className="text-dark">Gak ada dokumentasi/foto &quot;desain&quot;:</strong> tenang, bisa diganti pakai sertifikat atau foto kegiatan saat aktif di organisasi/magang, kok!</span>
                </li>
              </ul>
            </div>

            {/* 3. LinkedIn */}
            <div>
              <h3 className="text-lg font-bold text-dark font-heading mb-3 flex items-center gap-2">
                <span className="text-primary">3.</span> Jasa Optimasi LinkedIn
              </h3>
              <p className="text-sm text-text-muted mb-3">
                Biar profil LinkedIn kamu makin stand out dan ramah di pencarian SEO recruiter, siapkan hal-hal ini:
              </p>
              <ul className="space-y-2 text-sm text-text-muted pl-5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span><strong className="text-dark">Akses Akun / Link Profil Saat Ini:</strong> Link profil LinkedIn kamu yang sekarang (kalau sudah punya akun).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span><strong className="text-dark">CV Terbaru:</strong> Siapkan file CV terakhir kamu (format PDF/Word) sebagai acuan tim kami untuk menjelaskan data pengalaman kerjamu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span><strong className="text-dark">Fokus Target:</strong> Tentukan tujuan utama kamu main LinkedIn saat ini (Apakah fokus cari kerja, bangun personal branding, cari klien/freelance, atau lainnya).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metode Pembayaran */}
      <section className="py-12 bg-background border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark font-heading mb-4">
            Metode Pembayaran
          </h2>
          <p className="text-sm text-text-muted mb-6 max-w-xl">
            Mulai bangun personal branding dengan portofolio, CV, dan LinkedIn yang lebih profesional. Pilih paket sesuai kebutuhan dan target kariermu.
          </p>
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-6 py-4 border border-gray-200">
            <Image src="/assets/media/bca_logo.svg" alt="BCA" width={120} height={38} className="h-9 w-auto" />
            <div className="w-px h-8 bg-gray-200"></div>
            <Image src="/assets/media/gopay_logo.svg" alt="GoPay" width={63} height={16} className="h-7 w-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
