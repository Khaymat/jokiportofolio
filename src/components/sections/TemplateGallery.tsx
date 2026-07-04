"use client";

import TemplateCard from "@/components/ui/TemplateCard";
import { templateCategories } from "@/data/templates";

interface TemplateGalleryProps {
  title?: string;
  description?: string;
  categoryId?: string;
}

export default function TemplateGallery({
  title,
  description,
  categoryId,
}: TemplateGalleryProps) {
  const activeCategory = templateCategories.find((cat) => cat.id === categoryId);
  const activeTemplates = activeCategory?.templates || [];

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-text-white mb-4 leading-tight tracking-tight">
            {title || activeCategory?.label || "Template Gallery"}
          </h1>
          <p className="text-sm md:text-base text-text-white/80 max-w-2xl mx-auto">
            {description || "Screenshot templatenya, lalu kirim ke admin"}
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTemplates.map((template, i) => (
            <TemplateCard key={i} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
