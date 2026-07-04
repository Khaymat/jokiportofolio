import TemplateGallery from "@/components/sections/TemplateGallery";

export const metadata = {
  title: "Tamplate Portofolio Kreatif - jokiportofolio",
  description:
    "Koleksi template portofolio kreatif untuk menampilkan karya dan proyek terbaikmu.",
};

export default function PortofolioKreatifPage() {
  return (
    <div className="pt-14 min-h-screen bg-primary">
      <TemplateGallery
        title="Template Portofolio Kreatif"
        description="Halaman ini menampilkan ringkasan portofolio. Screenshot templatenya, lalu kirim ke admin"
        categoryId="portofolio"
      />
    </div>
  );
}
