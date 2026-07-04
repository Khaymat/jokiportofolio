import TemplateGallery from "@/components/sections/TemplateGallery";

export const metadata = {
  title: "Template CV ATS - jokiportofolio",
  description:
    "Koleksi template CV ATS yang dirancang lolos mesin parser dan menarik perhatian recruiter.",
};

export default function CVATSPage() {
  return (
    <div className="pt-14 min-h-screen bg-primary">
      <TemplateGallery
        title="Template CV ATS"
        description="Screenshot templatenya, lalu kirim ke admin"
        categoryId="cv-ats"
      />
    </div>
  );
}
