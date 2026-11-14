import { useState, useRef } from "react";
import {
  LayoutDashboard, BookOpen, Newspaper, Plus, Pencil, Trash2,
  Save, X, ChevronDown, Eye, EyeOff, LogOut, Shield,
  Tag, Calendar, User, Image, AlignLeft, ListChecks,
} from "lucide-react";
import { useData, type Program } from "../context/DataContext";
import { type Article } from "../data/news";

// Simple password gate — not a real auth system
const ADMIN_PASSWORD = "alhidayah2026";

// ─── helpers ──────────────────────────────────────────────────────────────────

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

// ─── Program form ─────────────────────────────────────────────────────────────

const emptyProgram = (): Program => ({
  id: uid(),
  title: "",
  badge: "",
  badgeColor: "#39B54A",
  level: "",
  description: "",
  details: ["", "", "", ""],
  image: "",
  alt: "",
});

function ProgramForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: Program;
  onSave: (p: Program) => void;
  onCancel: () => void;
}) {
  const [p, setP] = useState<Program>(initial ?? emptyProgram());

  function set(key: keyof Program, value: unknown) {
    setP((prev) => ({ ...prev, [key]: value }));
  }

  function setDetail(idx: number, val: string) {
    const d = [...p.details];
    d[idx] = val;
    setP((prev) => ({ ...prev, details: d }));
  }

  function addDetail() {
    setP((prev) => ({ ...prev, details: [...prev.details, ""] }));
  }

  function removeDetail(idx: number) {
    setP((prev) => ({ ...prev, details: prev.details.filter((_, i) => i !== idx) }));
  }

  function handleSave() {
    if (!p.title.trim() || !p.description.trim()) return;
    onSave({ ...p, details: p.details.filter((d) => d.trim()) });
  }

  const inputCls = "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 bg-white transition-all";
  const labelCls = "block text-xs font-semibold mb-1 text-gray-600";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
      <h4 className="font-bold text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
        {initial ? "Edit Program" : "Tambah Program Baru"}
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Nama Program *</label>
          <input className={inputCls} value={p.title} onChange={(e) => set("title", e.target.value)} placeholder="Tahfidz Al-Quran" />
        </div>
        <div>
          <label className={labelCls}>Badge Label</label>
          <input className={inputCls} value={p.badge} onChange={(e) => set("badge", e.target.value)} placeholder="Unggulan" />
        </div>
        <div>
          <label className={labelCls}>Tingkat / Level</label>
          <input className={inputCls} value={p.level} onChange={(e) => set("level", e.target.value)} placeholder="Tingkat Dasar – Lanjut" />
        </div>
        <div>
          <label className={labelCls}>Warna Badge</label>
          <div className="flex items-center gap-2">
            <input type="color" value={p.badgeColor} onChange={(e) => set("badgeColor", e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-gray-200" />
            <input className={`${inputCls} flex-1`} value={p.badgeColor} onChange={(e) => set("badgeColor", e.target.value)} placeholder="#39B54A" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Deskripsi *</label>
          <textarea className={`${inputCls} resize-none`} rows={3} value={p.description} onChange={(e) => set("description", e.target.value)} placeholder="Deskripsi singkat program..." />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>URL Gambar</label>
          <input className={inputCls} value={p.image} onChange={(e) => set("image", e.target.value)} placeholder="https://images.unsplash.com/..." />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Alt Text Gambar</label>
          <input className={inputCls} value={p.alt} onChange={(e) => set("alt", e.target.value)} placeholder="Deskripsi gambar untuk aksesibilitas" />
        </div>
      </div>

      {/* Details */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className={labelCls}>Poin Detail Program</label>
          <button onClick={addDetail} className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg transition-colors hover:bg-green-50" style={{ color: "#39B54A" }}>
            <Plus className="w-3 h-3" /> Tambah
          </button>
        </div>
        <div className="space-y-2">
          {p.details.map((d, i) => (
            <div key={i} className="flex gap-2">
              <input className={`${inputCls} flex-1`} value={d} onChange={(e) => setDetail(i, e.target.value)} placeholder={`Poin ${i + 1}`} />
              <button onClick={() => removeDetail(i)} className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button onClick={handleSave} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: "#39B54A", fontFamily: "Poppins, sans-serif" }}>
          <Save className="w-4 h-4" /> Simpan
        </button>
        <button onClick={onCancel} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>
          <X className="w-4 h-4" /> Batal
        </button>
      </div>
    </div>
  );
}

// ─── News form ────────────────────────────────────────────────────────────────

const categoryOptions = ["Kegiatan", "Akademik", "Prestasi", "Pengumuman"];
const categoryColors: Record<string, string> = {
  Kegiatan: "#39B54A",
  Akademik: "#6E8649",
  Prestasi: "#D97706",
  Pengumuman: "#DC2626",
};

const emptyArticle = (): Article => ({
  id: uid(),
  slug: "",
  category: "Kegiatan",
  categoryColor: "#39B54A",
  date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
  dateISO: new Date().toISOString().split("T")[0],
  title: "",
  excerpt: "",
  content: "",
  image: "",
  alt: "",
  author: "Redaksi PP Al-Hidayah",
  authorRole: "Tim Humas Pesantren",
  readTime: "3 menit",
  tags: [],
  featured: false,
});

function NewsForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: Article;
  onSave: (a: Article) => void;
  onCancel: () => void;
}) {
  const [a, setA] = useState<Article>(initial ?? emptyArticle());
  const [tagInput, setTagInput] = useState("");

  function set(key: keyof Article, value: unknown) {
    setA((prev) => ({ ...prev, [key]: value }));
  }

  function handleCategoryChange(cat: string) {
    setA((prev) => ({ ...prev, category: cat, categoryColor: categoryColors[cat] ?? "#6B7280" }));
  }

  function handleTitleChange(title: string) {
    setA((prev) => ({ ...prev, title, slug: slugify(title) }));
  }

  function addTag(e: React.KeyboardEvent) {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      setA((prev) => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
      setTagInput("");
    }
  }

  function removeTag(tag: string) {
    setA((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));
  }

  function handleSave() {
    if (!a.title.trim() || !a.excerpt.trim()) return;
    onSave(a);
  }

  const inputCls = "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 bg-white transition-all";
  const labelCls = "block text-xs font-semibold mb-1 text-gray-600";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
      <h4 className="font-bold text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
        {initial ? "Edit Berita" : "Tambah Berita Baru"}
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className={labelCls}>Judul Berita *</label>
          <input className={inputCls} value={a.title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="Judul berita..." />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Slug (otomatis)</label>
          <input className={`${inputCls} bg-gray-50 text-gray-500`} value={a.slug} onChange={(e) => set("slug", e.target.value)} />
        </div>

        <div>
          <label className={labelCls}>Kategori</label>
          <div className="relative">
            <select className={`${inputCls} appearance-none pr-8`} value={a.category} onChange={(e) => handleCategoryChange(e.target.value)}>
              {categoryOptions.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className={labelCls}>Penulis</label>
          <input className={inputCls} value={a.author} onChange={(e) => set("author", e.target.value)} placeholder="Redaksi PP Al-Hidayah" />
        </div>

        <div>
          <label className={labelCls}>Peran Penulis</label>
          <input className={inputCls} value={a.authorRole} onChange={(e) => set("authorRole", e.target.value)} placeholder="Tim Humas Pesantren" />
        </div>

        <div>
          <label className={labelCls}>Estimasi Baca</label>
          <input className={inputCls} value={a.readTime} onChange={(e) => set("readTime", e.target.value)} placeholder="3 menit" />
        </div>

        <div>
          <label className={labelCls}>Tanggal (tampil)</label>
          <input className={inputCls} value={a.date} onChange={(e) => set("date", e.target.value)} placeholder="8 Juni 2026" />
        </div>

        <div>
          <label className={labelCls}>Tanggal ISO</label>
          <input type="date" className={inputCls} value={a.dateISO} onChange={(e) => set("dateISO", e.target.value)} />
        </div>

        <div className="sm:col-span-2">
          <label className={labelCls}>URL Gambar Cover</label>
          <input className={inputCls} value={a.image} onChange={(e) => set("image", e.target.value)} placeholder="https://images.unsplash.com/..." />
        </div>

        <div className="sm:col-span-2">
          <label className={labelCls}>Alt Text Gambar</label>
          <input className={inputCls} value={a.alt} onChange={(e) => set("alt", e.target.value)} placeholder="Deskripsi gambar" />
        </div>

        <div className="sm:col-span-2">
          <label className={labelCls}>Ringkasan (Excerpt) *</label>
          <textarea className={`${inputCls} resize-none`} rows={2} value={a.excerpt} onChange={(e) => set("excerpt", e.target.value)} placeholder="Ringkasan singkat berita..." />
        </div>

        <div className="sm:col-span-2">
          <label className={labelCls}>Isi Berita (HTML didukung)</label>
          <textarea className={`${inputCls} resize-y font-mono text-xs`} rows={8} value={a.content} onChange={(e) => set("content", e.target.value)} placeholder="<p>Isi berita lengkap...</p>" />
        </div>

        {/* Tags */}
        <div className="sm:col-span-2">
          <label className={labelCls}>Tags (tekan Enter untuk tambah)</label>
          <input className={inputCls} value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={addTag} placeholder="Tambah tag..." />
          {a.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {a.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium text-white" style={{ backgroundColor: a.categoryColor }}>
                  {tag}
                  <button onClick={() => removeTag(tag)} className="ml-0.5 opacity-70 hover:opacity-100"><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Featured toggle */}
        <div className="sm:col-span-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <div
              onClick={() => set("featured", !a.featured)}
              className={`relative w-10 h-5 rounded-full transition-colors ${a.featured ? "bg-green-500" : "bg-gray-300"}`}
            >
              <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${a.featured ? "translate-x-5" : "translate-x-0.5"}`} />
            </div>
            <span className="text-sm font-medium text-gray-700">Tampilkan sebagai Berita Unggulan</span>
          </label>
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button onClick={handleSave} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: "#39B54A", fontFamily: "Poppins, sans-serif" }}>
          <Save className="w-4 h-4" /> Simpan
        </button>
        <button onClick={onCancel} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>
          <X className="w-4 h-4" /> Batal
        </button>
      </div>
    </div>
  );
}

// ─── Programs tab ─────────────────────────────────────────────────────────────

function ProgramsTab() {
  const { programs, addProgram, updateProgram, deleteProgram } = useData();
  const [editing, setEditing] = useState<Program | null>(null);
  const [adding, setAdding] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-gray-800" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.1rem" }}>Program Akademik</h3>
          <p className="text-sm text-gray-500 mt-0.5">{programs.length} program terdaftar</p>
        </div>
        {!adding && !editing && (
          <button onClick={() => setAdding(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: "#39B54A", fontFamily: "Poppins, sans-serif" }}>
            <Plus className="w-4 h-4" /> Tambah Program
          </button>
        )}
      </div>

      {adding && (
        <ProgramForm
          onSave={(p) => { addProgram(p); setAdding(false); }}
          onCancel={() => setAdding(false)}
        />
      )}

      {editing && (
        <ProgramForm
          initial={editing}
          onSave={(p) => { updateProgram(p); setEditing(null); }}
          onCancel={() => setEditing(null)}
        />
      )}

      <div className="space-y-3">
        {programs.map((prog) => (
          <div key={prog.id} className="bg-white rounded-2xl border border-gray-200 p-5 flex gap-4 items-start">
            {prog.image && (
              <img src={prog.image} alt={prog.alt} className="w-20 h-14 object-cover rounded-lg flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: prog.badgeColor }}>
                  {prog.badge || "Program"}
                </span>
                <span className="text-xs text-gray-400">{prog.level}</span>
              </div>
              <h4 className="font-semibold text-gray-800 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>{prog.title}</h4>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{prog.description}</p>
              {prog.details.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {prog.details.map((d) => (
                    <span key={d} className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">{d}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => { setEditing(prog); setAdding(false); }} className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                <Pencil className="w-4 h-4" />
              </button>
              <button onClick={() => { if (confirm("Hapus program ini?")) deleteProgram(prog.id); }} className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── News tab ─────────────────────────────────────────────────────────────────

function NewsTab() {
  const { news, addArticle, updateArticle, deleteArticle } = useData();
  const [editing, setEditing] = useState<Article | null>(null);
  const [adding, setAdding] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-gray-800" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.1rem" }}>Berita & Kegiatan</h3>
          <p className="text-sm text-gray-500 mt-0.5">{news.length} artikel terdaftar</p>
        </div>
        {!adding && !editing && (
          <button onClick={() => setAdding(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: "#39B54A", fontFamily: "Poppins, sans-serif" }}>
            <Plus className="w-4 h-4" /> Tambah Berita
          </button>
        )}
      </div>

      {adding && (
        <NewsForm
          onSave={(a) => { addArticle(a); setAdding(false); }}
          onCancel={() => setAdding(false)}
        />
      )}

      {editing && (
        <NewsForm
          initial={editing}
          onSave={(a) => { updateArticle(a); setEditing(null); }}
          onCancel={() => setEditing(null)}
        />
      )}

      <div className="space-y-3">
        {news.map((article) => (
          <div key={article.id} className="bg-white rounded-2xl border border-gray-200 p-5 flex gap-4 items-start">
            {article.image && (
              <img src={article.image} alt={article.alt} className="w-24 h-16 object-cover rounded-lg flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: article.categoryColor }}>
                  {article.category}
                </span>
                {article.featured && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-amber-700 bg-amber-100">Unggulan</span>
                )}
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>
              <h4 className="font-semibold text-gray-800 text-sm line-clamp-1" style={{ fontFamily: "Poppins, sans-serif" }}>{article.title}</h4>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{article.excerpt}</p>
              <p className="text-xs text-gray-400 mt-1">/{article.slug}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => { setEditing(article); setAdding(false); }} className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                <Pencil className="w-4 h-4" />
              </button>
              <button onClick={() => { if (confirm("Hapus berita ini?")) deleteArticle(article.id); }} className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Login gate ───────────────────────────────────────────────────────────────

function LoginGate({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError("Password salah. Silakan coba lagi.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#F3F1ED" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#39B54A" }}>
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-bold text-gray-800 text-2xl" style={{ fontFamily: "Poppins, sans-serif" }}>Admin Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">PP Al-Hidayah Jangkebuan</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1.5 text-gray-700">Password Admin</label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={pw}
                onChange={(e) => { setPw(e.target.value); setError(""); }}
                placeholder="Masukkan password..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all pr-10"
              />
              <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
          </div>
          <button type="submit" className="w-full py-2.5 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: "#39B54A", fontFamily: "Poppins, sans-serif" }}>
            Masuk Dashboard
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-4">
          Hanya untuk pengelola resmi PP Al-Hidayah
        </p>
      </div>
    </div>
  );
}

// ─── Main DashboardPage ───────────────────────────────────────────────────────

type Tab = "programs" | "news";

export function DashboardPage() {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem("alhidayah_admin") === "true"
  );
  const [activeTab, setActiveTab] = useState<Tab>("programs");

  function handleLogin() {
    sessionStorage.setItem("alhidayah_admin", "true");
    setAuthenticated(true);
  }

  function handleLogout() {
    sessionStorage.removeItem("alhidayah_admin");
    setAuthenticated(false);
  }

  if (!authenticated) {
    return <LoginGate onLogin={handleLogin} />;
  }

  const tabs: { id: Tab; label: string; icon: React.ReactNode; count: number }[] = [
    { id: "programs", label: "Program Akademik", icon: <BookOpen className="w-4 h-4" />, count: 0 },
    { id: "news", label: "Berita & Kegiatan", icon: <Newspaper className="w-4 h-4" />, count: 0 },
  ];

  return (
    <div className="pt-20 lg:pt-24 min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
      {/* Header bar */}
      <div className="border-b border-gray-200 bg-white sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-5 h-5" style={{ color: "#39B54A" }} />
              <span className="font-bold text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>Dashboard Admin</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="hidden sm:inline text-sm text-gray-500">PP Al-Hidayah Jangkebuan</span>
            </div>
            <button onClick={handleLogout} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500 transition-colors">
              <LogOut className="w-4 h-4" /> Keluar
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 p-1 bg-gray-100 rounded-xl w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "programs" ? <ProgramsTab /> : <NewsTab />}
      </div>
    </div>
  );
}
