import { StatItem, FeatureItem, TargetAudience, ServiceItem, ProcessStep, TestimonialItem } from "@/types";

export const stats: StatItem[] = [
  { value: "2.300+", label: "Joki" },
  { value: "1.200+", label: "Portofolio" },
  { value: "120+", label: "Cover Letter" },
  { value: "25+", label: "Linkedin" },
];

export const features: FeatureItem[] = [
  {
    title: "Portfolio That Sells",
    description:
      'Bukan asal masukin project. Kami pilih dan susun karya terbaikmu supaya lebih menarik dan punya "cerita" yang bikin orang paham kemampuanmu.',
  },
  {
    title: "Personal Branding yang Nempel",
    description:
      "Setiap bagian dirancang biar orang langsung tahu kamu jago di bidang apa. First impression itu penting.",
  },
  {
    title: "Recruiter & Client Friendly",
    description:
      "Portofolio dibuat dengan cara berpikir recruiter dan calon klien. Jadi bukan cuma estetik, tapi juga gampang dipahami.",
  },
  {
    title: "Achievement-Based Writing",
    description:
      "Fokus menceritakan hasil kerja, metrik kuantitatif, dan output bisnis dengan format STAR (Situation-Task-Action-Result).",
  },
];

export const targetAudiences: TargetAudience[] = [
  {
    title: "Fresh Graduate & Mahasiswa",
    description:
      "Baru lulus atau mau daftar magang tapi bingung menyusun organisasi/tugas kuliah jadi portofolio menarik?",
  },
  {
    title: "Career Switcher",
    description:
      "Mau pindah haluan karier? Kami bantu re-branding CV dan LinkedIn agar pengalaman lamamu tetap dilirik di industri baru.",
  },
  {
    title: "Profesional / Job Seeker",
    description:
      "Sudah apply puluhan kali tapi sepi panggilan? Berarti CV-mu belum lolos seleksi mesin ATS Parser. Yuk, kita rombak total!",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Portofolio ATS",
    description:
      "Portofolio ringkas & efektif yang diformat khusus agar lolos sistem ATS (Applicant Tracking System) dan sampai ke tangan HRD.",
    features: [],
  },
  {
    title: "Portofolio Kreatif",
    description:
      "Desain visual modern yang memamerkan hasil karya, proyek, dan pencapaianmu dengan cara yang eye-catching.",
    features: [],
  },
  {
    title: "Portofolio Profesional",
    description:
      "Gabungan strategi ATS + desain premium untuk tampilan profesional yang kuat di mata recruiter.",
    features: [],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Kirim Data & Project",
    description:
      "Kirim CV, hasil kerja, tugas, desain, sertifikat, atau project yang ingin dimasukkan ke portofolio. Belum punya semuanya? Santai, nanti kami bantu arahkan.",
  },
  {
    number: "02",
    title: "Cerita Dulu, Maunya Apa?",
    description:
      "Kita ngobrol sebentar lewat WhatsApp tentang targetmu. Mau daftar kerja, magang, freelance, beasiswa, atau bangun personal branding? Biar portofolionya pas sasaran..",
  },
  {
    number: "03",
    title: "Kami Susun & Percantik",
    description:
      "Project dipilih, ditulis ulang dengan storytelling yang menarik, lalu didesain jadi portofolio yang clean, profesional, dan enak dibaca.",
  },
  {
    number: "04",
    title: "Review Bareng",
    description:
      "Kami kirim draft pertama untuk dicek. Kalau ada yang mau ditambah, diubah, atau diperbaiki, tinggal kasih feedback. Revisi sampai mantap.",
  },
  {
    number: "05",
    title: "Siap Dipakai!",
    description:
      "Portofolio final dikirim dalam format PDF (dan file editable jika dipilih), siap dipakai buat apply kerja, magang, freelance, atau dipasang di LinkedIn.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Rizky Amelia",
    role: "Fresh Graduate",
    quote: "Dulu asli stres banget, udah apply puluhan kali lewat LinkedIn atau Jobstreet tapi gak pernah ada panggilan sama sekali. Akhirnya nekat coba rombak CV sama Portofolio di Joki Portofolio. Gila sih, dalam 2 minggu setelah direvisi langsung dapet 4 panggilan interview sekaligus di Tech Company! Metode STAR-nya ngebantu banget pas ngejelasin hasil kerjaan.",
  },
  {
    name: "Andi Wijaya",
    role: "Marketing Specialist",
    quote: "Gue mutusin buat career switch ke Digital Marketing dan ngerasa minder karena gak punya background linear. Tapi setelah LinkedIn gue dioptimasi sama dibikinin portofolio studi kasus dari proyek mandiri, profil gue jadi kelihatan pro banget. Sekarang malah rekruter yang aktif reach out duluan nawarin loker ke gue lewat DM. Worth it parah!",
  },
  {
    name: "Jessica Lauren",
    role: "Software Engineer Intern",
    quote: "Kombinasi perbaikan CV ATS sama Portfolio Showcase di sini ngebantu aku banget waktu mau daftar magang. Tim Joki Portofolio paham banget cara nulis pencapaian berbasis data kuantitatif, jadi portofolioku gak cuma estetik tapi ada isinya. Alhamdulillah langsung keterima magang di perusahaan impian!",
  },
];

export const heroContent = {
  subtitle: "Kami membantu mahasiswa, fresh graduate, dan profesional membangun portofolio yang menarik, profesional, dan siap lolos ATS",
  title: "Portofoliorkreatif untuk Semua Orang",
  rating: "Rate 4.9 dari mahasiswa",
  cta: "Konsultasi Gratis",
};

export const universityMarquee = {
  title: "100+ Universitas Sudah Join, Kamu Kapan?",
};

export const whyUsIntro = {
  title: "Mengapa Kami?",
  subtitle: "Bukan Sekadar Bikin Portofolio, Tapi Bikin Orang Ngelirik",
  description:
    "Portofolio bukan cuma tempat naruh hasil kerja. Kalau disusun dengan benar, portofolio bisa jadi alasan recruiter ngajak interview atau klien langsung nge-chat duluan.\nKami bantu bikin portofolio yang enak dilihat, gampang dipahami, dan yang paling penting: bisa nunjukin value kamu tanpa harus banyak ngomong.",
};

export const serviceIntro = {
  title: "Kamu Butuh Jasa Apa?",
  description:
    "Pilih layanan yang sesuai dengan kebutuhanmu",
};

export const processIntro = {
  title: "5 Langkah Simpel Biar Lamaranmu Makin Dilirik",
  description:
    "Nggak ribet, nggak bikin pusing. Tinggal ikuti prosesnya, sisanya biar tim kami yang kerjain.",
};

export const testimonialIntro = {
  title: "Cerita Mereka yang Berhasil Upgrade Personal Branding",
  description:
    "Nggak cuma bikin portofolio jadi lebih keren, tapi juga bikin lebih percaya diri saat apply kerja, cari klien, sampai bangun personal branding.",
};

export const templatePreviews = {
  cv: { label: "Template CV" },
  portofolio: { label: "Template Portofolio" },
};
