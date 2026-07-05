import Image from "next/image";
import PricingCarousel from "@/components/sections/PricingCarousel";

export const metadata = {
  title: "Pricelist - jokiportofolio",
  description:
    "Pilih paket yang paling cocok untuk kebutuhan CV, portofolio, dan LinkedIn kamu.",
};

export default function PricelistPage() {
  return (
    <div className="pt-14 min-h-screen bg-dark">
      {/* Header */}
      <section className="relative bg-dark pt-16 md:pt-24 pb-8 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-text-white mb-4 leading-tight tracking-tight">
            Pilih <span className="text-primary-light">Paket yang Paling Cocok</span> Buat Kamu
          </h1>
          <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
            Mulai bangun personal branding dengan portofolio, CV, dan LinkedIn yang lebih profesional. Pilih paket sesuai kebutuhan dan target kariermu.
          </p>
        </div>
      </section>

      {/* Pricing Cards - Carousel */}
      <section className="py-8 md:py-12 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCarousel />
        </div>
      </section>

      {/* Ketentuan */}
      <section className="py-10 bg-dark border-t border-[#333]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-white font-heading mb-6">
            Ketentuan
          </h2>
          <ul className="space-y-3 text-sm text-text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-primary-light mt-0.5 shrink-0">&#8226;</span>
              <span>Pembayaran dilakukan di awal (DP 50%) dan sisanya setelah selesai (50%).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light mt-0.5 shrink-0">&#8226;</span>
              <span>Revisi sesuai paket yang dipilih. Revisi tambahan dikenakan biaya sesuai kesepakatan.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light mt-0.5 shrink-0">&#8226;</span>
              <span>Waktu pengerjaan 1-3 hari kerja tergantung tingkat kesulitan dan paket yang dipilih.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light mt-0.5 shrink-0">&#8226;</span>
              <span>Hasil akhir dikirim dalam format PDF (dan file editable jika termasuk dalam paket).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light mt-0.5 shrink-0">&#8226;</span>
              <span>Data pribadi kamu aman dan tidak akan disebarluaskan.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light mt-0.5 shrink-0">&#8226;</span>
              <span>Dengan melakukan pemesanan, kamu menyetujui seluruh ketentuan yang berlaku.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Metode Pembayaran */}
      <section className="py-12 bg-dark border-t border-[#333]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-white font-heading mb-4">
            Metode Pembayaran
          </h2>
          <p className="text-sm text-text-muted mb-6 max-w-xl">
            Mulai bangun personal branding dengan portofolio, CV, dan LinkedIn yang lebih profesional. Pilih paket sesuai kebutuhan dan target kariermu.
          </p>
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-6 py-4">
            <Image src="/assets/media/bca_logo.svg" alt="BCA" width={120} height={38} className="h-9 w-auto" />
            <div className="w-px h-8 bg-gray-200"></div>
            <Image src="/assets/media/gopay_logo.svg" alt="GoPay" width={63} height={16} className="h-7 w-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
