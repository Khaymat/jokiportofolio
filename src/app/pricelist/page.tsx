import PricingCard from "@/components/ui/PricingCard";
import { pricingCategories } from "@/data/pricing";

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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-text-white mb-4 leading-tight tracking-tight">
            Pilih <span className="text-primary-light">Paket yang Paling Cocok</span> Buat Kamu
          </h1>
          <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
            Mulai bangun personal branding dengan portofolio, CV, dan LinkedIn yang lebih profesional. Pilih paket sesuai kebutuhan dan target kariermu.
          </p>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="py-8 md:py-12 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {pricingCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0">
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-text-white text-center mb-10">
                {category.title}
              </h2>

              <div className="space-y-6">
                {category.items.map((item, i) => (
                  <PricingCard key={i} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Metode Pembayaran */}
      <section className="py-12 bg-dark border-t border-[#333]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-white font-heading mb-4">
            Metode Pembayaran
          </h2>
          <p className="text-sm text-text-muted mb-6 max-w-xl">
            Mulai bangun personal branding dengan portofolio, CV, dan LinkedIn yang lebih profesional. Pilih paket sesuai kebutuhan dan target kariermu.
          </p>
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BCA</span>
              </div>
              <span className="text-dark font-bold text-lg">BCA</span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-dark font-bold text-lg">gopay</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
