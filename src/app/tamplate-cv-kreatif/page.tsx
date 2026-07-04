import TemplateGallery from "@/components/sections/TemplateGallery";

export const metadata = {
  title: "Tamplate CV Kreatif - jokiportofolio",
  description:
    "Koleksi template CV kreatif yang menampilkan kepribadianmu secara profesional.",
};

export default function CVKreatifPage() {
  return (
    <div className="pt-14 min-h-screen bg-primary">
      <TemplateGallery
        title="Template CV Kreatif"
        description="Screenshot templatenya, lalu kirim ke admin"
        categoryId="cv-kreatif"
      />
    </div>
  );
}
