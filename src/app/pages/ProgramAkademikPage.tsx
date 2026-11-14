import { Link, useLocation, useNavigate } from "react-router";
import { ArrowLeft, ChevronRight, CheckCircle2, Clock, Users, Award, BookOpen } from "lucide-react";

type ProgramId = "tahfidz" | "formal" | "salaf";

const programs: Record<ProgramId, {
  id: ProgramId;
  label: string;
  color: string;
  image: string;
  alt: string;
  badge: string;
  headline: string;
  description: string;
  jenjang: string;
  duration: string;
  capacity: string;
  kurikulum: { title: string; items: string[] }[];
  highlights: string[];
  schedule: { waktu: string; kegiatan: string }[];
}> = {
  tahfidz: {
    id: "tahfidz",
    label: "Tahfidz Al-Quran",
    color: "#39B54A",
    image: "https://images.unsplash.com/photo-1649297711865-3d7c4de3610f?w=900&h=600&fit=crop&auto=format",
    alt: "Santri menghafal Al-Quran dengan penuh khusyuk",
    badge: "Program Unggulan",
    headline: "Hafal 30 Juz dengan Metode Talaqqi Bersanad",
    description:
      "Program Tahfidz Al-Quran adalah program kebanggaan PP Al-Hidayah yang telah menghasilkan ratusan hafidz dan hafidzah bersanad. Didampingi oleh pengajar hafidz/hafidzah yang memiliki sanad sambung hingga Rasulullah ﷺ.",
    jenjang: "Setara SD – SMA",
    duration: "1 – 6 Tahun",
    capacity: "200 Santri per angkatan",
    kurikulum: [
      {
        title: "Tahap Dasar (Tajwid & Tilawah)",
        items: ["Makharijul Huruf", "Sifatul Huruf", "Hukum-hukum Tajwid", "Tilawah dengan 7 maqam"],
      },
      {
        title: "Tahap Hafalan (Tahfidz)",
        items: ["Setoran Harian (1–2 halaman)", "Muraja'ah Harian", "Tasmi' Mingguan", "Khatam 1 Juz per bulan"],
      },
      {
        title: "Tahap Lanjut (Itqan & Sanad)",
        items: ["Tasmi' 30 Juz", "Ujian Syafahiyah", "Penerimaan Ijazah Sanad", "Pembinaan Murabbi Tahfidz"],
      },
    ],
    highlights: [
      "Pengajar berSanad tersambung ke Rasulullah ﷺ",
      "Metode talaqqi & tasmi' sesuai sunnah",
      "Target hafalan terukur dan terpantau",
      "Muraja'ah terstruktur setiap hari",
      "Lingkungan asrama kondusif untuk hafalan",
      "Ujian berkala dan sertifikat resmi",
    ],
    schedule: [
      { waktu: "04.00 – 05.30", kegiatan: "Shalat Tahajjud, Setoran Subuh, Muraja'ah" },
      { waktu: "05.30 – 06.30", kegiatan: "Shalat Subuh berjamaah & Dzikir pagi" },
      { waktu: "06.30 – 07.30", kegiatan: "Sarapan, Mandi, Persiapan" },
      { waktu: "07.30 – 12.00", kegiatan: "Setoran Pagi (Kelompok & Individual)" },
      { waktu: "12.00 – 13.30", kegiatan: "Shalat Dzuhur, Makan Siang, Istirahat" },
      { waktu: "13.30 – 15.30", kegiatan: "Muraja'ah Sore & Tasmi' Kelompok" },
      { waktu: "15.30 – 17.00", kegiatan: "Shalat Ashar berjamaah & Waktu bebas" },
      { waktu: "17.00 – 19.30", kegiatan: "Shalat Maghrib, Makan Malam, Isya berjamaah" },
      { waktu: "19.30 – 21.30", kegiatan: "Setoran Malam & Kajian Tajwid" },
      { waktu: "21.30 – 22.00", kegiatan: "Persiapan tidur & Dzikir malam" },
    ],
  },
  formal: {
    id: "formal",
    label: "Pendidikan Formal",
    color: "#6E8649",
    image: "https://images.unsplash.com/photo-1643216755260-cb0bc30473c8?w=900&h=600&fit=crop&auto=format",
    alt: "Santri belajar di kelas formal yang modern",
    badge: "Terakreditasi A",
    headline: "MTs & MA Terakreditasi A — Kurikulum Merdeka",
    description:
      "Jenjang Madrasah Tsanawiyah (MTs) dan Madrasah Aliyah (MA) PP Al-Hidayah terakreditasi A oleh Kementerian Agama RI. Mengintegrasikan Kurikulum Merdeka dengan muatan keislaman pesantren yang kuat.",
    jenjang: "MTs (Kelas 7–9) & MA (Kelas 10–12)",
    duration: "3 Tahun per jenjang",
    capacity: "150 Siswa per angkatan",
    kurikulum: [
      {
        title: "Mata Pelajaran Agama (Muatan Pesantren)",
        items: ["Al-Quran Hadits", "Aqidah Akhlak", "Fiqh Ibadah & Muamalah", "Bahasa Arab", "SKI (Sejarah Kebudayaan Islam)"],
      },
      {
        title: "Mata Pelajaran Umum (Kurikulum Merdeka)",
        items: ["Matematika & IPA", "Bahasa Indonesia & Inggris", "IPS & PKn", "Informatika & Teknologi", "Seni & Olahraga"],
      },
      {
        title: "Program Kekhususan MA",
        items: ["Jurusan IPA (Kelas 11–12)", "Jurusan IPS (Kelas 11–12)", "Bimbingan SNBT/SPAN-PTKIN", "Program Persiapan Kuliah"],
      },
    ],
    highlights: [
      "Akreditasi A dari Kemenag RI",
      "Kurikulum Merdeka terintegrasi pesantren",
      "Laboratorium sains dan komputer modern",
      "Perpustakaan dengan 10.000+ koleksi",
      "Guru berpengalaman S1/S2/S3",
      "Bimbingan masuk PTN/PTKIN terbaik",
    ],
    schedule: [
      { waktu: "07.00 – 07.30", kegiatan: "Apel pagi, doa, dan muhadatsah Bahasa Arab" },
      { waktu: "07.30 – 12.00", kegiatan: "KBM (Kegiatan Belajar Mengajar) Sesi 1" },
      { waktu: "12.00 – 13.00", kegiatan: "Shalat Dzuhur berjamaah & Istirahat" },
      { waktu: "13.00 – 15.00", kegiatan: "KBM Sesi 2 & Kegiatan Tambahan" },
      { waktu: "15.00 – 15.30", kegiatan: "Shalat Ashar berjamaah" },
      { waktu: "15.30 – 17.00", kegiatan: "Ekstrakurikuler & Kegiatan Mandiri" },
      { waktu: "19.30 – 21.00", kegiatan: "Belajar mandiri terbimbing (malam)" },
    ],
  },
  salaf: {
    id: "salaf",
    label: "Kitab Kuning (Salaf)",
    color: "#8B6914",
    image: "https://images.unsplash.com/photo-1644461561916-2acd569906b0?w=900&h=600&fit=crop&auto=format",
    alt: "Santri mengkaji kitab kuning klasik warisan ulama",
    badge: "Tradisi Pesantren",
    headline: "Mengkaji Warisan Ilmu Ulama Salafusshalih",
    description:
      "Program Kitab Kuning (Salaf) adalah inti tradisi pesantren. Santri mengkaji kitab-kitab klasik karya ulama terkemuka dunia Islam, mencakup fiqh, aqidah, nahwu-sharaf, hadits, dan tafsir dengan metode bandongan dan sorogan.",
    jenjang: "Dasar – Mutakharrij",
    duration: "2 – 6 Tahun",
    capacity: "Terbuka untuk semua santri",
    kurikulum: [
      {
        title: "Tingkat Dasar (Ula)",
        items: ["Safinatun Najah (Fiqh)", "Aqidatul Awam (Aqidah)", "Jurumiyyah (Nahwu)", "Matan Arba'in (Hadits)"],
      },
      {
        title: "Tingkat Menengah (Wustho)",
        items: ["Fathul Qarib / Minhajul Qawim", "Kifayatul Akhyar", "Imrithi & Alfiyah Ibnu Malik", "Bulughul Maram"],
      },
      {
        title: "Tingkat Lanjut (Ulya/Mutakharrij)",
        items: ["Fathul Mu'in / I'anatut Thalibin", "Ihya Ulumuddin", "Riyadhush Shalihin", "Tafsir Jalalain & Ibnu Katsir"],
      },
    ],
    highlights: [
      "Pengajar ulama berpengalaman dan bersanad",
      "Metode bandongan & sorogan ala pesantren",
      "Kajian kitab-kitab warisan ulama klasik",
      "Tersertifikasi Musabaqah Qiraatil Kutub (MQK)",
      "Ijazah sanad dari masyayikh pesantren",
      "Membentuk ulama-ulama masa depan",
    ],
    schedule: [
      { waktu: "06.00 – 07.00", kegiatan: "Kajian Kitab ba'da Subuh (Bandongan)" },
      { waktu: "13.30 – 15.00", kegiatan: "Sorogan Kitab (Individual/Kelompok kecil)" },
      { waktu: "16.00 – 17.00", kegiatan: "Kajian Kitab Sore (Bandongan Asatidz Senior)" },
      { waktu: "20.00 – 21.30", kegiatan: "Kajian Kitab Malam (Intensif & Diskusi)" },
      { waktu: "Sabtu", kegiatan: "Bahtsul Masail (Diskusi & Pemecahan Masalah Fiqh)" },
    ],
  },
};

export function ProgramAkademikPage() {
  // The active tab comes from the URL hash (e.g. /program#formal), so footer and
  // home-page links can open a specific program directly.
  const { hash } = useLocation();
  const navigate = useNavigate();
  const hashId = hash.replace("#", "");
  const active: ProgramId = Object.prototype.hasOwnProperty.call(programs, hashId) ? (hashId as ProgramId) : "tahfidz";
  const setActive = (key: ProgramId) => navigate({ hash: key }, { replace: true });
  const prog = programs[active];

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
            <span className="text-white">Program Akademik</span>
          </div>
          <h1 className="text-white" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
            Program Akademik
          </h1>
          <p className="text-white/75 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
            Tiga jalur pendidikan komprehensif yang membentuk santri unggul dunia & akhirat
          </p>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="sticky top-16 z-30 bg-white border-b shadow-sm" style={{ borderColor: "rgba(110,134,73,0.15)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0 scrollbar-hide">
            {(Object.keys(programs) as ProgramId[]).map((key) => {
              const p = programs[key];
              const isActive = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className="flex items-center gap-2 px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 flex-shrink-0"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    borderColor: isActive ? p.color : "transparent",
                    color: isActive ? p.color : "#6B7280",
                  }}
                >
                  <BookOpen className="w-4 h-4" />
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Program header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-video bg-gray-100 shadow-lg">
            <img src={prog.image} alt={prog.alt} className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 self-start"
              style={{ backgroundColor: prog.color }}
            >
              {prog.badge}
            </span>
            <h2 className="mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#1F2937", lineHeight: 1.25 }}>
              {prog.headline}
            </h2>
            <p className="mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
              {prog.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: <Users className="w-4 h-4" />, label: "Jenjang", value: prog.jenjang },
                { icon: <Clock className="w-4 h-4" />, label: "Durasi", value: prog.duration },
                { icon: <Award className="w-4 h-4" />, label: "Kapasitas", value: prog.capacity },
              ].map((info) => (
                <div key={info.label} className="rounded-xl p-3 text-center" style={{ backgroundColor: "rgba(57,181,74,0.07)" }}>
                  <div className="flex items-center justify-center gap-1 mb-1" style={{ color: prog.color }}>
                    {info.icon}
                    <span className="text-xs font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>{info.label}</span>
                  </div>
                  <p className="text-xs leading-tight font-medium" style={{ fontFamily: "Poppins, sans-serif", color: "#1F2937" }}>{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kurikulum + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Kurikulum — 8 cols */}
          <div className="lg:col-span-8">
            <h3 className="mb-5" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#1F2937" }}>
              Struktur Kurikulum
            </h3>
            <div className="space-y-4">
              {prog.kurikulum.map((k, idx) => (
                <div key={k.title} className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: "rgba(110,134,73,0.15)" }}>
                  <div
                    className="flex items-center gap-3 px-5 py-3"
                    style={{ backgroundColor: idx % 2 === 0 ? prog.color : "#6E8649" }}
                  >
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
                      {idx + 1}
                    </span>
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>{k.title}</p>
                  </div>
                  <div className="px-5 py-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {k.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: prog.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights — 4 cols */}
          <div className="lg:col-span-4">
            <h3 className="mb-5" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#1F2937" }}>
              Keunggulan Program
            </h3>
            <div className="bg-white rounded-xl border p-5 space-y-3" style={{ borderColor: "rgba(110,134,73,0.15)" }}>
              {prog.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: `${prog.color}20` }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: prog.color }} />
                  </div>
                  <p className="text-sm leading-snug" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Jadwal Harian */}
        <div className="mb-12">
          <h3 className="mb-5" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#1F2937" }}>
            Jadwal Kegiatan Harian
          </h3>
          <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: "rgba(110,134,73,0.15)" }}>
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: prog.color }}>
                  <th className="text-left px-5 py-3 text-white text-sm" style={{ fontFamily: "Poppins, sans-serif", width: "200px" }}>Waktu</th>
                  <th className="text-left px-5 py-3 text-white text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>Kegiatan</th>
                </tr>
              </thead>
              <tbody>
                {prog.schedule.map((s, idx) => (
                  <tr
                    key={s.waktu}
                    className="border-t"
                    style={{ borderColor: "rgba(110,134,73,0.08)", backgroundColor: idx % 2 === 0 ? "white" : "#FAFAFA" }}
                  >
                    <td className="px-5 py-3 text-sm font-semibold" style={{ fontFamily: "Poppins, sans-serif", color: prog.color }}>{s.waktu}</td>
                    <td className="px-5 py-3 text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>{s.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #39B54A 0%, #6E8649 100%)" }}
        >
          <div>
            <p className="text-white font-bold text-lg mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
              Tertarik dengan program {prog.label}?
            </p>
            <p className="text-white/80 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              Daftarkan putra/putri Anda sekarang. Kuota terbatas!
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              to="/daftar"
              className="px-5 py-2.5 rounded-xl bg-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ color: "#39B54A", fontFamily: "Poppins, sans-serif" }}
            >
              Daftar Sekarang
            </Link>
            <Link
              to="/#kontak-person"
              className="px-5 py-2.5 rounded-xl border-2 border-white/50 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Tanya Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
