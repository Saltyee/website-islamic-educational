import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Calendar, Tag, X, Download, AlertCircle, MessageCircle } from "lucide-react";
import { useData } from "../context/DataContext";
import { announcements, type Announcement } from "../data/announcements";

const categoryBadgeStyle: Record<string, string> = {
  Penting: "#DC2626",
  Akademik: "#6E8649",
  Umum: "#6B7280",
};

function AnnouncementModal({ ann, onClose }: { ann: Announcement; onClose: () => void }) {
  return (
    /* Modal backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div
          className="flex items-start justify-between gap-4 p-5 lg:p-6 border-b flex-shrink-0"
          style={{ borderColor: "rgba(110,134,73,0.15)" }}
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: categoryBadgeStyle[ann.category] ?? "#6B7280" }}
              >
                {ann.category}
              </span>
              <span
                className="flex items-center gap-1 text-xs"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
              >
                <Calendar className="w-3 h-3" /> {ann.date}
              </span>
            </div>
            <h2
              id="modal-title"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#1F2937", lineHeight: 1.35 }}
            >
              {ann.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors hover:bg-gray-100"
            aria-label="Tutup pengumuman"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Modal body — scrollable */}
        <div className="overflow-y-auto flex-1 p-5 lg:p-6">
          <style>{`
            .ann-content p { margin-bottom: 0.9rem; line-height: 1.7; color: #374151; font-family: Inter, sans-serif; font-size: 0.9rem; }
            .ann-content h4 { font-family: Poppins, sans-serif; font-weight: 700; font-size: 0.9rem; color: #1F2937; margin: 1.25rem 0 0.5rem; }
            .ann-content ul, .ann-content ol { padding-left: 1.25rem; margin-bottom: 0.75rem; }
            .ann-content li { margin-bottom: 0.35rem; line-height: 1.6; color: #374151; font-family: Inter, sans-serif; font-size: 0.875rem; }
            .ann-content strong { color: #1F2937; font-weight: 600; }
            .ann-content table { width: 100%; border-collapse: collapse; margin: 0.75rem 0; font-size: 0.83rem; }
            .ann-content td { padding: 0.45rem 0.6rem; border-bottom: 1px solid rgba(110,134,73,0.12); color: #374151; font-family: Inter, sans-serif; }
            .ann-content td:first-child { font-weight: 500; color: #1F2937; white-space: nowrap; padding-right: 1.5rem; }
          `}</style>
          <div className="ann-content" dangerouslySetInnerHTML={{ __html: ann.detail }} />
        </div>

        {/* Modal footer */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 p-5 lg:p-6 border-t flex-shrink-0"
          style={{ borderColor: "rgba(110,134,73,0.15)", backgroundColor: "#FAFAFA" }}
        >
          {ann.attachments && ann.attachments.length > 0 ? (
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              {ann.attachments.map((att) => (
                <a
                  key={att.label}
                  href={att.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-semibold transition-colors hover:bg-green-50"
                  style={{ borderColor: "#39B54A", color: "#39B54A", fontFamily: "Poppins, sans-serif" }}
                >
                  <Download className="w-3.5 h-3.5" />
                  {att.label}
                </a>
              ))}
            </div>
          ) : (
            <div />
          )}
          <div className="flex gap-2 ml-auto">
            <a
              href="https://wa.me/6281234567890?text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20tentang%20pengumuman%20pesantren"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-xs font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366", fontFamily: "Poppins, sans-serif" }}
            >
              <MessageCircle className="w-3.5 h-3.5" /> Tanya via WA
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border text-xs font-semibold transition-colors hover:bg-gray-100"
              style={{ borderColor: "rgba(110,134,73,0.2)", color: "#6B7280", fontFamily: "Poppins, sans-serif" }}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NewsActivities() {
  const { news } = useData();
  const displayArticles = news.slice(0, 3);
  const [activeAnn, setActiveAnn] = useState<Announcement | null>(null);

  return (
    <>
      <section id="berita" className="py-20 lg:py-28" style={{ backgroundColor: "#F3F1ED" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-10" style={{ backgroundColor: "#39B54A" }} />
                <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#39B54A", fontFamily: "Inter, sans-serif" }}>
                  Berita & Kegiatan
                </span>
              </div>
              <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.25rem)", lineHeight: 1.25, color: "#1F2937" }}>
                Kabar Terbaru{" "}
                <span style={{ color: "#6E8649" }}>Pesantren</span>
              </h2>
            </div>
            {/* → navigates to /berita */}
            <Link
              to="/berita"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold flex-shrink-0 transition-colors"
              style={{ color: "#6E8649", fontFamily: "Poppins, sans-serif" }}
            >
              Semua Berita
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 8/4 split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Articles — 8 cols */}
            <div className="lg:col-span-8">
              {/* Featured article */}
              <Link
                to={`/berita/${displayArticles[0].slug}`}
                className="group bg-white rounded-xl overflow-hidden border mb-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 block"
                style={{ borderColor: "rgba(110,134,73,0.12)", borderRadius: "12px" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="relative overflow-hidden aspect-video sm:aspect-auto sm:h-full bg-green-50 min-h-[200px]">
                    <img
                      src={displayArticles[0].image}
                      alt={displayArticles[0].alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: displayArticles[0].categoryColor }}
                      >
                        <Tag className="w-3 h-3" />
                        {displayArticles[0].category}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
                        <Calendar className="w-3 h-3" />
                        {displayArticles[0].date}
                      </span>
                    </div>
                    <h3 className="mb-2 leading-snug" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#1F2937" }}>
                      {displayArticles[0].title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1 mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
                      {displayArticles[0].excerpt}
                    </p>
                    <div className="group/link inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: "#6E8649", fontFamily: "Poppins, sans-serif" }}>
                      Baca Selengkapnya
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Articles 2 & 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {displayArticles.slice(1).map((article) => (
                  <Link
                    key={article.id}
                    to={`/berita/${article.slug}`}
                    className="group bg-white rounded-xl overflow-hidden border flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                    style={{ borderColor: "rgba(110,134,73,0.12)", borderRadius: "12px" }}
                  >
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
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-center gap-1 mb-2 text-xs" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                      <h3 className="mb-2 leading-snug flex-1" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#1F2937" }}>
                        {article.title}
                      </h3>
                      <p className="text-xs leading-relaxed mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
                        {article.excerpt}
                      </p>
                      <div className="group/link inline-flex items-center gap-1 text-xs font-semibold transition-colors mt-auto" style={{ color: "#6E8649", fontFamily: "Poppins, sans-serif" }}>
                        Baca Selengkapnya
                        <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar — 4 cols */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              {/* Announcement list */}
              <div className="bg-white rounded-xl border p-5" style={{ borderColor: "rgba(110,134,73,0.12)", borderRadius: "12px" }}>
                <h4 className="mb-4 pb-3 border-b" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#1F2937", borderColor: "rgba(110,134,73,0.15)" }}>
                  📌 Pengumuman Terkini
                </h4>
                <ul className="space-y-0">
                  {announcements.map((ann, idx) => (
                    <li key={ann.id}>
                      {/* Clicking opens the modal */}
                      <button
                        onClick={() => setActiveAnn(ann)}
                        className="w-full text-left group flex flex-col gap-1 py-3 transition-colors hover:bg-green-50 rounded-lg px-2 -mx-2"
                      >
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: categoryBadgeStyle[ann.category] ?? "#6B7280" }} />
                          <span
                            className="text-sm leading-snug group-hover:underline text-left"
                            style={{ fontFamily: "Inter, sans-serif", color: "#1F2937" }}
                          >
                            {ann.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 pl-5">
                          <span
                            className="px-1.5 py-0.5 rounded text-xs font-semibold text-white"
                            style={{ backgroundColor: categoryBadgeStyle[ann.category] ?? "#6B7280" }}
                          >
                            {ann.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
                            <Calendar className="w-3 h-3" />
                            {ann.date}
                          </span>
                        </div>
                      </button>
                      {idx < announcements.length - 1 && (
                        <div className="h-px" style={{ backgroundColor: "rgba(110,134,73,0.1)" }} />
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA banner */}
              <div
                className="rounded-xl p-5 text-white"
                style={{ background: "linear-gradient(135deg, #39B54A 0%, #6E8649 100%)", borderRadius: "12px" }}
              >
                <p className="font-bold mb-1" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.05rem" }}>
                  Pendaftaran Santri Baru
                </p>
                <p className="text-white/80 text-sm mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  Tahun Ajaran 2026/2027 kini dibuka. Daftarkan putra/putri Anda sekarang!
                </p>
                <Link
                  to="/daftar"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ color: "#39B54A", fontFamily: "Poppins, sans-serif" }}
                >
                  Daftar Sekarang
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Announcement detail modal */}
      {activeAnn && (
        <AnnouncementModal
          ann={activeAnn}
          onClose={() => setActiveAnn(null)}
        />
      )}
    </>
  );
}
