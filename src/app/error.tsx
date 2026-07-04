"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-red-400">!</span>
        </div>
        <h2 className="text-xl font-bold text-text-white font-heading mb-2">
          Terjadi Kesalahan
        </h2>
        <p className="text-text-muted text-sm mb-6">
          {error.message || "Terjadi kesalahan yang tidak terduga. Silakan coba lagi."}
        </p>
        <button
          onClick={reset}
          className="px-6 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-medium rounded-lg transition-colors"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
