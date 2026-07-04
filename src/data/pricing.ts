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
    title: "Pricelist CV",
    items: [
      {
        name: "CV (Versi Hemat Friendly)",
        description: "Cocok buat kamu yang sudah punya isi CV tapi berantakan formatnya.",
        features: [
          "Rapihin teks & susunan CV",
          "Perbaikan typo & kalimat dasar",
          "Format rapi & enak dibaca",
          "1x revisi",
        ],
        originalPrice: "Rp 22.000",
        currentPrice: "Rp 20.000",
      },
      {
        name: "CV Professional",
        description: "Buat kamu yang mau CV terlihat lebih meyakinkan.",
        features: [
          "Penyusunan ulang isi biar lebih kuat",
          "Kalimat Impactful untuk perusahaan",
          "Struktur recruiter-friendly",
          "Penonjolan skill & pengalaman penting",
          "2x revisi",
        ],
        originalPrice: "Rp 40.000",
        currentPrice: "Rp 35.000",
        recommended: true,
      },
      {
        name: "CV Expert",
        description: "Untuk kamu yang mau CV siap bersaing.",
        features: [
          "Full rewrite isi CV",
          "Impactful + angka",
          "Optimasi wording + positioning diri",
          "Highlight achievement & value diri",
          "Penyesuaian posisi target kerja",
          "3x revisi",
        ],
        originalPrice: "Rp 40.000",
        currentPrice: "Rp 35.000",
        recommended: true,
      },
    ],
  },
  {
    title: "Pricelist Portofolio",
    items: [
      {
        name: "Portofolio Standar",
        description: "Cocok buat kamu yang sudah punya isi tapi butuh dirapikan.",
        features: [
          "Rapihin teks biar rapi & enak dibaca",
          "Perbaikan typo & struktur kalimat dasar",
          "Layout sederhana",
          "1x revisi",
        ],
        originalPrice: "Rp 5.500",
        currentPrice: "Rp 5.000",
        priceNote: "/Halaman",
      },
      {
        name: "Portofolio Professional",
        description: "Buat yang mau portofolionya terlihat lebih meyakinkan.",
        features: [
          "Penyusunan ulang teks biar lebih jelas & profesional",
          "Perbaikan kalimat biar lebih impactful",
          "Alur halaman lebih nyaman dibaca HR",
          "2x revisi",
        ],
        originalPrice: "Rp 7.000",
        currentPrice: "Rp 6.500",
        priceNote: "/Halaman",
        recommended: true,
      },
      {
        name: "Portofolio Expert",
        description: "Untuk kamu yang mau portofolio siap bersaing.",
        features: [
          "Penulisan ulang deskripsi project",
          "SEO Keyword untuk Sistem ATS",
          "Lebih Impactful + angka",
          "Storytelling ringan (tidak berlebihan)",
          "Highlight hasil & value kontribusi",
          "Revisi sampai puas",
        ],
        originalPrice: "Rp 8.000",
        currentPrice: "Rp 7.500",
        priceNote: "/Halaman",
      },
    ],
  },
  {
    title: "Pricelist Surat Lamaran Kerja & Linkedin",
    items: [
      {
        name: "Surat Lamaran Kerja",
        description: "Cocok untuk pelamar yang mau surat lamaran terlihat niat & bukan template pasaran.",
        features: [
          "Dibuat custom sesuai posisi yang dilamar",
          "Bahasa profesional & formal HR-friendly",
          "Disesuaikan dengan CV dan pengalaman kamu",
          "2x revisi",
        ],
        originalPrice: "Rp 30.000",
        currentPrice: "Rp 25.000",
      },
      {
        name: "Optimasi Linkedin",
        description: "Cocok untuk kamu yang mau profil terlihat profesional & lebih mudah ditemukan recruiter.",
        features: [
          "Optimasi headline + about section",
          "Perbaikan deskripsi pengalaman kerja",
          "Penyesuaian keyword sesuai target karir",
          "Struktur profil lebih recruiter-friendly",
          "2x revisi",
        ],
        originalPrice: "Rp 75.000",
        currentPrice: "Rp 65.000",
      },
    ],
  },
];