import { Link } from "react-router"
import {
  ArrowLeft,
  Target,
  Eye,
  BookOpen,
  Users,
  Award,
  Building2,
  Heart,
  Star,
  ChevronRight,
} from "lucide-react"
import AnimatedCounter from "../components/AnimatedCounter"

const sejarahMilestones = [
  {
    year: "1985",
    event:
      "PP Al-Hidayah didirikan oleh KH. Abdul Ghani Mubarok dengan 23 santri perdana di atas tanah wakaf 2.000 m².",
  },
  {
    year: "1992",
    event:
      "Pembangunan masjid utama dan asrama putra pertama. Jumlah santri mencapai 200 orang.",
  },
  {
    year: "1998",
    event:
      "Dibuka jenjang Madrasah Tsanawiyah (MTs) formal terakreditasi Kementerian Agama RI.",
  },
  {
    year: "2005",
    event:
      "Pendirian Madrasah Aliyah (MA) program IPA dan IPS. Program Tahfidz Al-Quran intensif resmi dimulai.",
  },
  {
    year: "2010",
    event:
      "Pesantren meraih akreditasi A untuk jenjang MTs dan MA. Santri bertambah menjadi 700+.",
  },
  {
    year: "2015",
    event:
      "Pembangunan gedung perpustakaan modern, laboratorium sains, dan asrama putri baru.",
  },
  {
    year: "2020",
    event:
      "Adaptasi pembelajaran daring di masa pandemi. Peluncuran platform digital pertama pesantren.",
  },
  {
    year: "2024",
    event:
      "Santri mencapai 1.200+ dari berbagai daerah. Meraih penghargaan pesantren terbaik se-Madura.",
  },
]

const visimisi = {
  visi: "Terwujudnya insan yang berilmu, berakhlak mulia, dan berdaya saing global berlandaskan nilai-nilai Islam Ahlussunnah wal Jamaah.",
  misi: [
    "Menyelenggarakan pendidikan Islam terpadu yang memadukan kurikulum salaf dan modern.",
    "Membentuk karakter santri yang berakhlak karimah, mandiri, dan bertanggung jawab.",
    "Mengembangkan kemampuan akademik santri agar mampu bersaing di tingkat nasional dan internasional.",
    "Membudayakan tradisi ilmiah, kritis, dan kreatif dalam bingkai nilai-nilai pesantren.",
    "Menjalin kerjasama aktif dengan keluarga, masyarakat, dan lembaga pendidikan lain.",
  ],
}

const strukturOrganisasi = [
  {
    jabatan: "Pengasuh / Pimpinan Pesantren",
    name: "KH. Abdullah Mubarok, Lc., M.Ag",
    photo:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop&auto=format",
  },
  {
    jabatan: "Wakil Pengasuh Bidang Akademik",
    name: "KH. Ahmad Fathoni, S.Pd.I., M.Pd",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&auto=format",
  },
  {
    jabatan: "Kepala MTs Al-Hidayah",
    name: "Ust. Mahfudz Syaifullah, S.Pd",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format",
  },
  {
    jabatan: "Kepala MA Al-Hidayah",
    name: "Ust. Dr. Syarifuddin, M.Pd",
    photo:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&auto=format",
  },
  {
    jabatan: "Koordinator Tahfidz & Salaf",
    name: "Ust. Muhammad Hakim, Lc",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
  },
  {
    jabatan: "Kepala Tata Usaha & Administrasi",
    name: "Ibu Siti Aisyah, S.E",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format",
  },
]

const fasilitas = [
  {
    icon: <Building2 className="w-6 h-6" />,
    label: "Masjid Utama",
    desc: "Kapasitas 1.500 jamaah, AC, sound system profesional",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    label: "Perpustakaan Modern",
    desc: "10.000+ koleksi buku, kitab, dan referensi digital",
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: "Asrama Putra & Putri",
    desc: "Terpisah, berkapasitas 700 santri, 24-jam terjaga",
  },
  {
    icon: <Star className="w-6 h-6" />,
    label: "Laboratorium Sains",
    desc: "Lab Fisika, Kimia, Biologi, dan Komputer modern",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    label: "Klinik Kesehatan",
    desc: "Layanan kesehatan santri 24 jam dengan tenaga medis",
  },
  {
    icon: <Award className="w-6 h-6" />,
    label: "Aula & Lapangan",
    desc: "Aula serbaguna, lapangan basket, futsal, dan voli",
  },
]

const stats = [
  { value: 1200, suffix: "+", label: "Santri Aktif" },
  { value: 85, suffix: "+", label: "Tenaga Pengajar" },
  { value: 38, suffix: "", label: "Tahun Berdiri" },
  { text: "Akreditasi A", label: "MTs & MA" },
]

export function ProfilPage() {
  return (
    <div style={{ backgroundColor: "#F8F9FA" }}>
      {/* Page hero banner */}
      <div
        className="relative pt-20 pb-16 flex items-end"
        style={{
          background: "linear-gradient(135deg, #6E8649 0%, #2D3748 100%)",
          minHeight: "260px",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <div
            className="flex items-center gap-2 mb-4 text-white/60 text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <Link
              to="/"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Profil Pesantren</span>
          </div>
          <h1
            className="text-white"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            }}
          >
            Profil Pesantren
          </h1>
          <p
            className="text-white/75 mt-2"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem" }}
          >
            PP Al-Hidayah Jangkebuan Bangkalan — Mendidik sejak 1985
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ backgroundColor: "#39B54A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="text-white font-bold text-2xl"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {s.value !== undefined ? (
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  ) : (
                    s.text
                  )}
                </p>
                <p
                  className="text-green-100 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-20">
        {/* Sejarah */}
        <section id="sejarah">
          <SectionLabel label="Sejarah Pesantren" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h2
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "#1F2937",
                }}
              >
                Perjalanan Panjang{" "}
                <span style={{ color: "#6E8649" }}>38 Tahun</span> Mendidik
                Bangsa
              </h2>
              <p
                className="mt-4 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
              >
                Berawal dari sebuah surau kecil di Jangkebuan, KH. Abdul Ghani
                Mubarok merintis pesantren dengan tekad mulia: mencetak generasi
                Muslim yang utuh — kokoh dalam iman, luas dalam ilmu, dan mulia
                dalam akhlak.
              </p>
              <p
                className="mt-3 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
              >
                Kini, PP Al-Hidayah telah berkembang menjadi lembaga pendidikan
                Islam terkemuka di Madura dengan lebih dari 1.200 santri dari
                berbagai penjuru Indonesia, dikelola oleh 85+ tenaga pengajar
                berpengalaman.
              </p>
              <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1622597943118-45ebacc528d1?w=700&h=450&fit=crop&auto=format"
                  alt="Masjid pesantren Al-Hidayah"
                  className="w-full object-cover"
                  style={{ height: "250px" }}
                />
              </div>
            </div>
            {/* Timeline */}
            <div className="lg:col-span-7">
              <div className="space-y-0">
                {sejarahMilestones.map((m, idx) => (
                  <div key={m.year} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{
                          backgroundColor:
                            idx % 2 === 0 ? "#39B54A" : "#6E8649",
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "0.7rem",
                        }}
                      >
                        {m.year}
                      </div>
                      {idx < sejarahMilestones.length - 1 && (
                        <div
                          className="w-px flex-1 my-1"
                          style={{
                            backgroundColor: "rgba(57,181,74,0.25)",
                            minHeight: "32px",
                          }}
                        />
                      )}
                    </div>
                    <div
                      className={`pb-6 ${
                        idx === sejarahMilestones.length - 1 ? "pb-0" : ""
                      }`}
                    >
                      <p
                        className="text-sm leading-relaxed pt-3.5"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: "#4B5563",
                        }}
                      >
                        {m.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Visi Misi */}
        <section id="visi-misi">
          <SectionLabel label="Visi & Misi" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visi */}
            <div
              className="rounded-2xl p-8 text-white relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #39B54A 0%, #2D8A3A 100%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{
                  backgroundColor: "white",
                  transform: "translate(30%, -30%)",
                }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                  }}
                >
                  Visi
                </h3>
              </div>
              <p
                className="text-white/95 leading-relaxed text-lg italic"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                "{visimisi.visi}"
              </p>
            </div>
            {/* Misi */}
            <div
              className="rounded-2xl p-8 bg-white border"
              style={{ borderColor: "rgba(110,134,73,0.15)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(57,181,74,0.1)" }}
                >
                  <Target className="w-5 h-5" style={{ color: "#39B54A" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#1F2937",
                  }}
                >
                  Misi
                </h3>
              </div>
              <ol className="space-y-3">
                {visimisi.misi.map((m, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5"
                      style={{
                        backgroundColor: "#6E8649",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {i + 1}
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "#4B5563",
                      }}
                    >
                      {m}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Struktur Organisasi */}
        <section id="organisasi">
          <SectionLabel label="Struktur Organisasi" />
          <h2
            className="mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              color: "#1F2937",
            }}
          >
            Pimpinan &amp; Pengurus Pesantren
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {strukturOrganisasi.map((org) => (
              <div
                key={org.name}
                className="bg-white rounded-xl p-4 text-center border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ borderColor: "rgba(110,134,73,0.15)" }}
              >
                <div
                  className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3"
                  style={{ boxShadow: "0 0 0 3px rgba(57,181,74,0.25)" }}
                >
                  <img
                    src={org.photo}
                    alt={org.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className="text-xs font-semibold mb-1 leading-snug"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#1F2937",
                  }}
                >
                  {org.name}
                </p>
                <p
                  className="text-xs leading-tight"
                  style={{ fontFamily: "Inter, sans-serif", color: "#39B54A" }}
                >
                  {org.jabatan}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Fasilitas */}
        <section id="fasilitas">
          <SectionLabel label="Fasilitas" />
          <h2
            className="mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              color: "#1F2937",
            }}
          >
            Fasilitas Penunjang Pembelajaran
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {fasilitas.map((f) => (
              <div
                key={f.label}
                className="bg-white rounded-xl p-5 flex gap-4 border transition-all duration-300 hover:shadow-lg"
                style={{ borderColor: "rgba(110,134,73,0.15)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(57,181,74,0.1)",
                    color: "#39B54A",
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#1F2937",
                    }}
                  >
                    {f.label}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#6B7280",
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Facility gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                src: "https://images.unsplash.com/photo-1634532999884-ecd677928bac?w=400&h=300&fit=crop&auto=format",
                alt: "Masjid pesantren",
              },
              {
                src: "https://images.unsplash.com/photo-1649297711865-3d7c4de3610f?w=400&h=300&fit=crop&auto=format",
                alt: "Santri belajar Al-Quran",
              },
              {
                src: "https://images.unsplash.com/photo-1643216755260-cb0bc30473c8?w=400&h=300&fit=crop&auto=format",
                alt: "Kelas formal santri",
              },
              {
                src: "https://images.unsplash.com/photo-1644461561916-2acd569906b0?w=400&h=300&fit=crop&auto=format",
                alt: "Kajian kitab kuning",
              },
            ].map((img) => (
              <div
                key={img.alt}
                className="rounded-xl overflow-hidden aspect-video bg-green-50"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <div
          className="rounded-2xl p-8 lg:p-10 text-center"
          style={{
            background: "linear-gradient(135deg, #6E8649 0%, #2D3748 100%)",
          }}
        >
          <h3
            className="text-white mb-2"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "1.4rem",
            }}
          >
            Tertarik Mendaftarkan Putra/Putri Anda?
          </h3>
          <p
            className="text-white/80 mb-6 max-w-lg mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Pendaftaran santri baru tahun ajaran 2026/2027 kini telah dibuka.
            Daftar sekarang dan dapatkan informasi lengkap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/daftar"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#39B54A",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Daftar Sekarang
            </Link>
            <Link
              to="/program"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Lihat Program
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px w-8" style={{ backgroundColor: "#39B54A" }} />
      <span
        className="text-sm font-semibold uppercase tracking-widest"
        style={{ color: "#39B54A", fontFamily: "Inter, sans-serif" }}
      >
        {label}
      </span>
    </div>
  )
}
