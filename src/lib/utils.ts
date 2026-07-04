import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getWhatsAppUrl(message: string): string {
  const base = "https://wa.me/";
  const number = "6281234567890";
  const encoded = encodeURIComponent(message);
  return `${base}${number}?text=${encoded}`;
}
