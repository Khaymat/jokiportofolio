export interface PricingItem {
  name: string;
  description: string;
  features: string[];
  originalPrice: string;
  currentPrice: string;
  priceNote?: string;
  recommended?: boolean;
}

export interface PricingCategory {
  title: string;
  items: PricingItem[];
}

export const pricingCategories: PricingCategory[] = [
  {
    title: "Paket Standar",
    items: [
      {
        name: "Paket Standar",
        description: "Cocok buat kamu yang sudah punya isi CV dan portofolio tapi butuh dirapikan.",
        features: [
          "Rapihin teks & susunan CV",
          "Perbaikan typo & kalimat dasar",
          "Format rapi & enak dibaca",
          "Layout portofolio sederhana",
          "1x revisi",
        ],
        originalPrice: "Rp 27.500",
        currentPrice: "Rp 25.000",
      },
    ],
  },
  {
    title: "Paket Profesional",
    items: [
      {
        name: "Paket Profesional",
        description: "Buat kamu yang mau CV dan portofolio terlihat lebih meyakinkan.",
        features: [
          "Penyusunan ulang isi CV biar lebih kuat",
          "Kalimat Impactful untuk perusahaan",
          "Struktur recruiter-friendly",
          "Alur portofolio lebih nyaman dibaca HR",
          "Penonjolan skill & pengalaman penting",
          "2x revisi",
        ],
        originalPrice: "Rp 47.000",
        currentPrice: "Rp 40.000",
        recommended: true,
      },
    ],
  },
  {
    title: "Paket Expert",
    items: [
      {
        name: "Paket Expert",
        description: "Untuk kamu yang mau CV dan portofolio siap bersaing.",
        features: [
          "Full rewrite isi CV",
          "Impactful + angka",
          "Optimasi wording + positioning diri",
          "Highlight achievement & value diri",
          "Penyesuaian posisi target kerja",
          "SEO Keyword untuk Sistem ATS",
          "Storytelling ringan (tidak berlebihan)",
          "3x revisi",
        ],
        originalPrice: "Rp 55.000",
        currentPrice: "Rp 48.000",
        recommended: true,
      },
    ],
  },
  {
    title: "LinkedIn dan Cover Letter",
    items: [
      {
        name: "LinkedIn dan Cover Letter",
        description: "Cocok untuk kamu yang mau profil LinkedIn stand out dan surat lamaran yang niat.",
        features: [
          "Optimasi headline + about section LinkedIn",
          "Perbaikan deskripsi pengalaman kerja LinkedIn",
          "Penyesuaian keyword sesuai target karir",
          "Struktur profil lebih recruiter-friendly",
          "Surat lamaran custom sesuai posisi dilamar",
          "2x revisi",
        ],
        originalPrice: "Rp 100.000",
        currentPrice: "Rp 85.000",
      },
    ],
  },
];