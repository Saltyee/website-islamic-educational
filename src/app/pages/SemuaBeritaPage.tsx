import { useState, useMemo } from "react";
import { Link } from "react-router";
import { ArrowLeft, ChevronRight, Search, Calendar, Tag, ArrowRight } from "lucide-react";
import { useData } from "../context/DataContext";

const allCategories = ["Semua", "Kegiatan", "Akademik", "Prestasi", "Pengumuman"];

export function SemuaBeritaPage() {
  const { news: articles } = useData();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCat = category === "Semua" || a.category === category;
      const q = query.toLowerCase();
      const matchQ = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [query, category, articles]);

  const featured = articles.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured || query || category !== "Semua");

  return (
    <div style={{ backgroundColor: "#F8F9FA" }}>

      {/* Hero banner */}
      <div
        className="relative pt-20 pb-16 flex items-end"
        style={{ background: "linear-gradient(135deg, #6E8649 0%, #2D3748 100%)", minHeight: "260px" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 mb-4 text-white/60 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Berita & Kegiatan</span>
          </div>
          <h1 className="text-white" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
            Berita &amp; Kegiatan
          </h1>
          <p className="text-white/75 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
            Informasi terkini, prestasi, dan kegiatan PP Al-Hidayah Jangkebuan
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

        {/* Search + Filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari berita, kegiatan, atau prestasi..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white text-sm outline-none transition-all focus:ring-2 focus:ring-green-100 focus:border-green-400"
              style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(110,134,73,0.2)", color: "#1F2937" }}
            />
          </div>
          {/* Category pills */}
          <div className="flex gap-2 flex-wrap">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  backgroundColor: category === cat ? "#39B54A" : "white",
                  color: category === cat ? "white" : "#6B7280",
                  border: `2px solid ${category === cat ? "#39B54A" : "rgba(110,134,73,0.2)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured article — only shown when no filter active */}
        {featured && !query && category === "Semua" && (
          <Link
            to={`/berita/${featured.slug}`}
            className="group block mb-10 rounded-2xl overflow-hidden bg-white border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            style={{ borderColor: "rgba(110,134,73,0.15)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[320px] bg-green-50 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-semibold"
                  style={{ backgroundColor: "#39B54A" }}
                >
                  ★ Berita Utama
                </span>
              </div>
              <div className="p-7 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: featured.categoryColor }}>
                    <Tag className="w-3 h-3" />{featured.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                    <Calendar className="w-3 h-3" />{featured.date}
                  </span>
                </div>
                <h2 className="mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(1.15rem, 2vw, 1.5rem)", color: "#1F2937", lineHeight: 1.3 }}>
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed mb-5" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
                  {featured.excerpt}
                </p>
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: "#6E8649", fontFamily: "Poppins, sans-serif" }}>
                  Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Results info */}
        {(query || category !== "Semua") && (
          <p className="mb-6 text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
            Menampilkan <strong style={{ color: "#1F2937" }}>{filtered.length}</strong> hasil
            {query && <> untuk "<strong style={{ color: "#1F2937" }}>{query}</strong>"</>}
            {category !== "Semua" && <> di kategori <strong style={{ color: "#39B54A" }}>{category}</strong></>}
          </p>
        )}

        {/* Article grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🔍</p>
            <p className="font-semibold text-lg mb-2" style={{ fontFamily: "Poppins, sans-serif", color: "#1F2937" }}>
              Tidak ada hasil ditemukan
            </p>
            <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
              Coba kata kunci yang berbeda atau pilih kategori lain.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(query || category !== "Semua" ? filtered : rest).map((article) => (
              <Link
                key={article.id}
                to={`/berita/${article.slug}`}
                className="group bg-white rounded-xl overflow-hidden border flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ borderColor: "rgba(110,134,73,0.12)", borderRadius: "12px" }}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-video bg-green-50">
                  <img
                    src={article.image}
                    alt={article.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: article.categoryColor }}
                  >
                    {article.category}
                  </span>
                </div>
                {/* Body */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center gap-1 text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                      <Calendar className="w-3 h-3" />{article.date}
                    </span>
                    <span className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>· {article.readTime}</span>
                  </div>
                  <h3 className="mb-2 flex-1 leading-snug" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#1F2937" }}>
                    {article.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
                    {article.excerpt}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: "rgba(57,181,74,0.08)", color: "#39B54A", fontFamily: "Inter, sans-serif" }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold transition-colors mt-auto" style={{ color: "#6E8649", fontFamily: "Poppins, sans-serif" }}>
                    Baca Selengkapnya <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
