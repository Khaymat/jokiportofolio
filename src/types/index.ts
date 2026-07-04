export interface NavLink {
  label: string;
  href: string;
}

export interface PricingFeature {
  text: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  originalPrice?: string;
  priceSuffix?: string;
  description?: string;
  features: PricingFeature[];
  badge?: string;
  featured?: boolean;
  whatsappMessage: string;
  deliveryInfo?: string[];
}

export interface PricingCategory {
  id: string;
  label: string;
  packages: PricingPackage[];
}

export interface TemplateItem {
  name: string;
  description: string;
  image: string;
  aspectRatio?: "portrait" | "landscape";
}

export interface TemplateCategory {
  id: string;
  label: string;
  templates: TemplateItem[];
}

export interface StatItem {
  value: string;
  label: string;
  icon?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TargetAudience {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

export interface TestimonialItem {
  name: string;
  role?: string;
  quote?: string;
  avatar?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  whatsappLink: string;
  whatsappNumber: string;
  socialMedia: {
    instagram?: string;
    linkedin?: string;
    tiktok?: string;
  };
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
}
