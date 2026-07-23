import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "jokiportofolio",
  tagline: "CV",
  description:
    "Jasa Buat CV ATS, Portofolio Kerja & Optimasi Linkedin",
  whatsappLink: "http://wa.link/fbeqby",
  whatsappNumber: "6281234567890",
  socialMedia: {
    instagram: "https://instagram.com/jokiportofolio",
    linkedin: "https://linkedin.com/company/jokiportofolio",
    tiktok: "https://tiktok.com/@jokiportofolio",
  },
  metadata: {
    title: "Jasa Pembuatan CV ATS, Portofolio & Optimasi LinkedIn | Jokiportofolio",
    description:
      "CV, Portofolio, dan LinkedIn yang dirancang biar profilmu terlihat lebih profesional, lebih dilirik recruiter, dan lebih percaya diri saat apply kerja.",
    keywords: [
      "jasa cv",
      "cv ats",
      "portofolio kerja",
      "optimasi linkedin",
      "jasa membuat cv",
      "template cv",
      "career service",
    ],
  },
};

export const COLORS = {
  primary: "#4d71e0",
  primaryLight: "#6b8af0",
  primaryDark: "#3455bb",
  accent: "#fbca41",
  dark: "#191919",
  darkAlt: "#313131",
  darkCard: "#252525",
  textWhite: "#ffffff",
  textMuted: "#858484",
  textLight: "#cad4f3",
  border: "#304254",
  background: "#f1f1f1",
  borderLight: "#dddddd",
} as const;
