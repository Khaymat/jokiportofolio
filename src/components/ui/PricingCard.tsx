import { PricingItem } from "@/data/pricing";

interface PricingCardProps {
  item: PricingItem;
}

export default function PricingCard({ item }: PricingCardProps) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-[20px] p-4 sm:p-5 md:p-6 flex flex-col h-full transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      {/* Recommended Badge */}
      {item.recommended && (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] sm:text-xs font-bold text-primary self-start mb-3">
          <svg className="w-3 h-3 text-yellow-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          Recommended
        </span>
      )}

      {/* Title */}
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-dark font-heading mb-1.5 leading-snug">
        {item.name}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-text-muted italic mb-4 leading-relaxed">{item.description}</p>

      {/* Features */}
      <ul className="space-y-1.5 mb-6 flex-grow">
        {item.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 leading-normal">
            <span className="text-primary flex-shrink-0 mt-0.5">&#10003;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Delivery Info + Price Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-auto pt-4 border-t border-gray-100">
        {/* Delivery Info */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500">
            <span className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <span>File PDF</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500">
            <span className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </span>
            <span>Link Canva</span>
          </div>
        </div>

        {/* Price */}
        <div className="text-left sm:text-right flex-shrink-0">
          <span className="text-[10px] sm:text-xs text-gray-400 line-through block mb-0.5 leading-none">
            {item.originalPrice}
          </span>
          <div className="flex items-baseline gap-1 justify-start sm:justify-end flex-wrap">
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-primary font-heading leading-none">
              {item.currentPrice}
            </span>
            {item.priceNote && (
              <span className="text-[10px] text-gray-400 font-medium leading-none">{item.priceNote}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
