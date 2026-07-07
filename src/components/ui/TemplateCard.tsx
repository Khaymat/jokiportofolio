import Image from "next/image";
import { TemplateItem } from "@/types";

interface TemplateCardProps {
  template: TemplateItem;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="group flex flex-col items-center transition-all duration-500 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-2xl shadow-lg w-full ring-0 transition-all duration-500 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-primary/30" style={{ aspectRatio: template.aspectRatio === "landscape" ? "16/9" : "auto" }}>
        <Image
          src={template.image}
          alt={template.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="mt-3 text-center w-full">
        <h4 className="text-sm font-semibold text-text-white font-heading">
          {template.name}
        </h4>
        {template.description && (
          <p className="text-xs text-text-white/70 mt-0.5">{template.description}</p>
        )}
      </div>
    </div>
  );
}
