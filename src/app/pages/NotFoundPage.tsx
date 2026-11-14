import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <p className="text-8xl font-bold mb-4" style={{ color: "#39B54A", fontFamily: "Poppins, sans-serif" }}>
        404
      </p>
      <h1 className="mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.75rem", color: "#1F2937" }}>
        Halaman Tidak Ditemukan
      </h1>
      <p className="mb-8 max-w-md" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
        Maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#39B54A", fontFamily: "Poppins, sans-serif" }}
      >
        <Home className="w-4 h-4" />
        Kembali ke Beranda
      </Link>
    </div>
  );
}
