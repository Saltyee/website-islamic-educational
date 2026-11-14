import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, ChevronRight, Calendar, Clock, User, Tag, ArrowRight, Share2, Facebook, Twitter, MessageCircle } from "lucide-react";
import { useData } from "../context/DataContext";

export function DetailBeritaPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { getArticleBySlug, news } = useData();
  const article = getArticleBySlug(slug ?? "");

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <p className="text-5xl mb-4">📰</p>
        <h2 className="mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#1F2937" }}>
          Artikel Tidak Ditemukan
        </h2>
        <p className="mb-6 text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
          Artikel yang Anda cari tidak tersedia atau telah dihapus.
        </p>
        <Link to="/berita" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm" style={{ backgroundColor: "#39B54A", fontFamily: "Poppins, sans-serif" }}>
          <ArrowLeft className="w-4 h-4" /> Kembali ke Berita
        </Link>
      </div>
    );
  }

  const related = news.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div style={{ backgroundColor: "#F8F9FA" }}>

      {/* Hero image banner */}
      <div className="relative pt-16" style={{ backgroundColor: "#2D3748" }}>
        <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden">
          <img
            src={article.image}
            alt={article.alt}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(45,55,72,0.4) 0%, rgba(45,55,72,0.85) 100%)" }} />
          {/* Content over image */}
          <div className="absolute inset-0 flex flex-col justify-end max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-4 text-white/60 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
              <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/berita" className="hover:text-white transition-colors">Berita</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80 truncate max-w-[200px]">{article.title}</span>
            </div>
            {/* Category + Date */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: article.categoryColor }}
              >
                <Tag className="w-3 h-3" /> {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/70 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                <Calendar className="w-3 h-3" /> {article.date}
              </span>
              <span className="flex items-center gap-1.5 text-white/70 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                <Clock className="w-3 h-3" /> {article.readTime} baca
              </span>
            </div>
            {/* Title */}
            <h1 className="text-white" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.2rem, 3.5vw, 2rem)", lineHeight: 1.3 }}>
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Article body — 8 cols */}
          <article className="lg:col-span-8">
            {/* Author strip */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl mb-8 border"
              style={{ backgroundColor: "white", borderColor: "rgba(110,134,73,0.15)" }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(57,181,74,0.1)" }}>
                <User className="w-5 h-5" style={{ color: "#39B54A" }} />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ fontFamily: "Poppins, sans-serif", color: "#1F2937" }}>{article.author}</p>
                <p className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}>{article.authorRole}</p>
              </div>
            </div>

            {/* Article HTML content */}
            <div
              className="prose-article bg-white rounded-2xl border p-6 lg:p-8"
              style={{ borderColor: "rgba(110,134,73,0.12)" }}
            >
              <style>{`
                .prose-article p { margin-bottom: 1rem; line-height: 1.75; color: #374151; font-family: Inter, sans-serif; font-size: 0.95rem; }
                .prose-article h3 { font-family: Poppins, sans-serif; font-weight: 700; font-size: 1.1rem; color: #1F2937; margin: 1.5rem 0 0.75rem; }
                .prose-article h4 { font-family: Poppins, sans-serif; font-weight: 600; font-size: 0.95rem; color: #374151; margin: 1.25rem 0 0.5rem; }
                .prose-article ul, .prose-article ol { padding-left: 1.25rem; margin-bottom: 1rem; }
                .prose-article li { margin-bottom: 0.4rem; line-height: 1.65; color: #374151; font-family: Inter, sans-serif; font-size: 0.9rem; }
                .prose-article strong { color: #1F2937; font-weight: 600; }
                .prose-article em { color: #6E8649; font-style: italic; }
                .prose-article table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-family: Inter, sans-serif; font-size: 0.85rem; }
                .prose-article td { padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(110,134,73,0.15); color: #374151; }
                .prose-article td:first-child { font-weight: 500; white-space: nowrap; color: #1F2937; }
              `}</style>
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "rgba(57,181,74,0.1)", color: "#39B54A", fontFamily: "Inter, sans-serif" }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ borderColor: "rgba(110,134,73,0.15)" }}>
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4" style={{ color: "#6B7280" }} />
                <span className="text-sm font-semibold" style={{ fontFamily: "Poppins, sans-serif", color: "#1F2937" }}>Bagikan artikel ini:</span>
              </div>
              <div className="flex gap-2">
                {[
                  { icon: <Facebook className="w-4 h-4" />, label: "Facebook", href: `https://facebook.com/sharer/sharer.php?u=${shareUrl}`, bg: "#1877F2" },
                  { icon: <Twitter className="w-4 h-4" />, label: "Twitter / X", href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(article.title)}`, bg: "#1DA1F2" },
                  { icon: <MessageCircle className="w-4 h-4" />, label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(article.title + " " + shareUrl)}`, bg: "#25D366" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Bagikan ke ${s.label}`}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: s.bg }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Back + nav */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-semibold transition-colors hover:bg-green-50"
                style={{ borderColor: "#6E8649", color: "#6E8649", fontFamily: "Poppins, sans-serif" }}
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Kembali
              </button>
              <Link
                to="/berita"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 text-white"
                style={{ backgroundColor: "#39B54A", fontFamily: "Poppins, sans-serif" }}
              >
                Semua Berita <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Sidebar — 4 cols */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            {/* Info card */}
            <div className="bg-white rounded-xl border p-5" style={{ borderColor: "rgba(110,134,73,0.15)" }}>
              <h4 className="font-semibold text-sm mb-4 pb-3 border-b" style={{ fontFamily: "Poppins, sans-serif", color: "#1F2937", borderColor: "rgba(110,134,73,0.15)" }}>
                Informasi Artikel
              </h4>
              {[
                { label: "Penulis", value: article.author },
                { label: "Jabatan", value: article.authorRole },
                { label: "Tanggal", value: article.date },
                { label: "Kategori", value: article.category },
                { label: "Waktu Baca", value: article.readTime },
              ].map((info) => (
                <div key={info.label} className="flex justify-between text-xs py-1.5 border-b last:border-0" style={{ borderColor: "rgba(110,134,73,0.08)" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}>{info.label}</span>
                  <span className="font-medium text-right" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>{info.value}</span>
                </div>
              ))}
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div className="bg-white rounded-xl border p-5" style={{ borderColor: "rgba(110,134,73,0.15)" }}>
                <h4 className="font-semibold text-sm mb-4 pb-3 border-b" style={{ fontFamily: "Poppins, sans-serif", color: "#1F2937", borderColor: "rgba(110,134,73,0.15)" }}>
                  Berita Terkait
                </h4>
                <div className="space-y-4">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/berita/${rel.slug}`}
                      className="group flex gap-3 hover:opacity-90 transition-opacity"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-green-50">
                        <img src={rel.image} alt={rel.alt} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold leading-snug mb-1 group-hover:underline" style={{ fontFamily: "Poppins, sans-serif", color: "#1F2937" }}>
                          {rel.title}
                        </p>
                        <p className="text-xs flex items-center gap-1" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
                          <Calendar className="w-3 h-3" /> {rel.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div
              className="rounded-xl p-5 text-white"
              style={{ background: "linear-gradient(135deg, #39B54A 0%, #6E8649 100%)" }}
            >
              <p className="font-bold mb-1 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>Daftar Santri Baru 2026/2027</p>
              <p className="text-white/80 text-xs mb-3 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Pendaftaran kini dibuka. Bergabunglah bersama ribuan santri Al-Hidayah.
              </p>
              <Link
                to="/daftar"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-white text-xs font-semibold transition-opacity hover:opacity-90"
                style={{ color: "#39B54A", fontFamily: "Poppins, sans-serif" }}
              >
                Daftar Sekarang <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
