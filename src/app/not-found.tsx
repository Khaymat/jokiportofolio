import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl font-bold text-primary font-heading mb-4">404</div>
        <h2 className="text-xl font-bold text-text-white font-heading mb-2">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-text-muted text-sm mb-6">
          Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-medium rounded-lg transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
