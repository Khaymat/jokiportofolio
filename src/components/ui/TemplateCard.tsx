import Image from "next/image";
import { TemplateItem } from "@/types";
import { cn } from "@/lib/utils";

interface TemplateCardProps {
  template: TemplateItem;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const aspectRatio = template.aspectRatio === "landscape" 
    ? "aspect-video" 
    : "aspect-[1131/1600]";

  return (
    <div className="group flex flex-col items-center transition-all duration-500 hover:-translate-y-1">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl shadow-lg w-full ring-0 transition-all duration-500 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-primary/30",
          aspectRatio
        )}
      >
        <Image
          src={template.image}
          alt={template.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
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
