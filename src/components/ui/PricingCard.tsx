import { PricingItem } from "@/data/pricing";

interface PricingCardProps {
  item: PricingItem;
}

export default function PricingCard({ item }: PricingCardProps) {
  return (
    <div className="relative bg-[#252525] border border-[#555] rounded-[23px] p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1">
      {/* Recommended Badge */}
      {item.recommended && (
        <div className="absolute top-5 right-5 flex flex-col items-center gap-1">
          <svg className="w-7 h-7 text-text-muted" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="text-[11px] font-semibold text-text-white tracking-wide">
            Recomended
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl md:text-[28px] font-bold text-text-white font-heading mb-1 pr-20">
        {item.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-muted italic mb-5">{item.description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6 flex-grow">
        {item.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[15px] text-text-light">
            <span className="text-text-muted mt-0.5 flex-shrink-0">&#10003;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Delivery Info + Price Row */}
      <div className="flex items-end justify-between mt-auto pt-4">
        {/* Delivery Info */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5 text-sm text-text-muted">
            <span className="w-6 h-6 bg-[#3a3a3a] rounded flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <span>Dikirim file PDF</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-text-muted">
            <span className="w-6 h-6 bg-[#3a3a3a] rounded flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </span>
            <span>Link edit Canva</span>
          </div>
        </div>

        {/* Price */}
        <div className="text-right">
          <span className="text-sm text-text-muted line-through block mb-0.5">
            {item.originalPrice}
          </span>
          <div className="flex items-baseline gap-1 justify-end">
            <span className="text-3xl md:text-[40px] font-bold text-text-white font-heading leading-none">
              {item.currentPrice}
            </span>
            {item.priceNote && (
              <span className="text-sm text-text-muted font-medium">{item.priceNote}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
