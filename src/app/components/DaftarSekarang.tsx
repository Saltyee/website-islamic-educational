import { useState } from "react";
import {
  CheckCircle2,
  User,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  ChevronDown,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

export type FormData = {
  namaLengkap: string;
  namaWali: string;
  noHp: string;
  email: string;
  asalDaerah: string;
  jenjang: string;
  program: string;
  pesan: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export const jenjangOptions = ["Madrasah Tsanawiyah (MTs)", "Madrasah Aliyah (MA)"];
export const programOptions = [
  "Tahfidz Al-Quran",
  "Pendidikan Formal (MTs/MA)",
  "Kitab Kuning (Salaf)",
  "Kombinasi Tahfidz + Formal",
];

const WA_NUMBER = "6285606069996";

const steps = [
  { num: "01", title: "Isi Formulir Online", desc: "Lengkapi data calon santri dan wali" },
  { num: "02", title: "Verifikasi Dokumen", desc: "Tim kami akan menghubungi Anda untuk verifikasi" },
  { num: "03", title: "Tes Seleksi", desc: "Calon santri mengikuti tes baca Al-Quran & wawancara" },
  { num: "04", title: "Pengumuman & Daftar Ulang", desc: "Peserta yang diterima melakukan daftar ulang" },
];

function validate(data: FormData): Errors {
  const errs: Errors = {};
  if (!data.namaLengkap.trim()) errs.namaLengkap = "Nama lengkap wajib diisi";
  if (!data.namaWali.trim()) errs.namaWali = "Nama wali wajib diisi";
  if (!/^08[0-9]{8,11}$/.test(data.noHp.replace(/[-\s]/g, "")))
    errs.noHp = "Nomor HP tidak valid (contoh: 08123456789)";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errs.email = "Format email tidak valid";
  if (!data.asalDaerah.trim()) errs.asalDaerah = "Asal daerah wajib diisi";
  if (!data.jenjang) errs.jenjang = "Pilih jenjang yang diinginkan";
  if (!data.program) errs.program = "Pilih program yang diinginkan";
  return errs;
}

function buildWAMessage(form: FormData): string {
  const lines = [
    "Assalamualaikum Warahmatullahi Wabarakatuh,",
    "",
    "Saya ingin mendaftarkan calon santri baru ke PP Al-Hidayah Jangkebuan Bangkalan.",
    "",
    "📋 *FORMULIR PENDAFTARAN SANTRI BARU*",
    "*Pondok Pesantren Al-Hidayah Jangkebuan Bangkalan*",
    "━━━━━━━━━━━━━━━━━━━━━",
    `👤 *Nama Lengkap Calon Santri:* ${form.namaLengkap}`,
    `👨‍👩‍👧 *Nama Orang Tua / Wali:* ${form.namaWali}`,
    `📱 *No. HP / WhatsApp:* ${form.noHp}`,
    form.email ? `📧 *Email:* ${form.email}` : null,
    `📍 *Asal Daerah:* ${form.asalDaerah}`,
    `📚 *Jenjang yang Dituju:* ${form.jenjang}`,
    `🎯 *Program Pilihan:* ${form.program}`,
    form.pesan ? `💬 *Pesan / Pertanyaan:* ${form.pesan}` : null,
    "━━━━━━━━━━━━━━━━━━━━━",
    "",
    "Mohon informasi lebih lanjut mengenai proses pendaftaran.",
    "Jazakumullahu Khairan. 🙏",
  ]
    .filter((l) => l !== null)
    .join("\n");
  return lines;
}

export function DaftarSekarangForm() {
  const [form, setForm] = useState<FormData>({
    namaLengkap: "",
    namaWali: "",
    noHp: "",
    email: "",
    asalDaerah: "",
    jenjang: "",
    program: "",
    pesan: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const message = buildWAMessage(form);
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  const inputBase =
    "w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all duration-200 focus:ring-2 bg-white";
  const inputStyle = (field: keyof FormData) =>
    `${inputBase} ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-gray-200 focus:border-green-400 focus:ring-green-100"
    }`;

  if (submitted) {
    return (
      <div
        className="bg-white rounded-2xl border p-10 text-center flex flex-col items-center"
        style={{ borderColor: "rgba(57,181,74,0.2)" }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
          style={{ backgroundColor: "rgba(57,181,74,0.1)" }}
        >
          <CheckCircle2 className="w-10 h-10" style={{ color: "#39B54A" }} />
        </div>
        <h3
          className="mb-2"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#1F2937" }}
        >
          Jazakumullahu Khairan!
        </h3>
        <p
          className="mb-2 max-w-md"
          style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", fontSize: "1rem" }}
        >
          WhatsApp terbuka dengan formulir lengkap atas nama{" "}
          <strong style={{ color: "#1F2937" }}>{form.namaLengkap}</strong>.
        </p>
        <p
          className="mb-8 max-w-md text-sm"
          style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
        >
          Silakan tekan <strong>Kirim</strong> di WhatsApp untuk mengirim pendaftaran ke panitia.
          Tim kami akan merespons dalam 1×24 jam kerja.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWAMessage(form))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", fontFamily: "Poppins, sans-serif" }}
          >
            <MessageCircle className="w-4 h-4" />
            Buka WhatsApp Lagi
          </a>
          <button
            onClick={() => { setSubmitted(false); setForm({ namaLengkap: "", namaWali: "", noHp: "", email: "", asalDaerah: "", jenjang: "", program: "", pesan: "" }); }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-colors hover:bg-gray-50"
            style={{ fontFamily: "Poppins, sans-serif", color: "#6B7280", borderColor: "#D1D5DB" }}
          >
            Daftar Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border p-6 lg:p-8"
      style={{ borderColor: "rgba(110,134,73,0.15)" }}
    >
      <h3
        className="mb-6"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#1F2937" }}
      >
        Formulir Pendaftaran Santri Baru
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">

        {/* Nama lengkap */}
        <div className="sm:col-span-2 md:col-span-1">
          <label htmlFor="namaLengkap" className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Poppins, sans-serif", color: "#374151" }}>
            Nama Lengkap Calon Santri <span style={{ color: "#EF4444" }}>*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input id="namaLengkap" name="namaLengkap" type="text" value={form.namaLengkap} onChange={handleChange} placeholder="Masukkan nama lengkap" className={`${inputStyle("namaLengkap")} pl-10`} style={{ fontFamily: "Inter, sans-serif" }} />
          </div>
          {errors.namaLengkap && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.namaLengkap}</p>}
        </div>

        {/* Nama wali */}
        <div>
          <label htmlFor="namaWali" className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Poppins, sans-serif", color: "#374151" }}>
            Nama Orang Tua / Wali <span style={{ color: "#EF4444" }}>*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input id="namaWali" name="namaWali" type="text" value={form.namaWali} onChange={handleChange} placeholder="Nama ayah / ibu / wali" className={`${inputStyle("namaWali")} pl-10`} style={{ fontFamily: "Inter, sans-serif" }} />
          </div>
          {errors.namaWali && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.namaWali}</p>}
        </div>

        {/* No HP */}
        <div>
          <label htmlFor="noHp" className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Poppins, sans-serif", color: "#374151" }}>
            No. HP / WhatsApp <span style={{ color: "#EF4444" }}>*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input id="noHp" name="noHp" type="tel" value={form.noHp} onChange={handleChange} placeholder="0812-3456-7890" className={`${inputStyle("noHp")} pl-10`} style={{ fontFamily: "Inter, sans-serif" }} />
          </div>
          {errors.noHp && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.noHp}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Poppins, sans-serif", color: "#374151" }}>
            Email <span className="text-xs font-normal" style={{ color: "#9CA3AF" }}>(opsional)</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="contoh@email.com" className={`${inputStyle("email")} pl-10`} style={{ fontFamily: "Inter, sans-serif" }} />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
        </div>

        {/* Asal daerah */}
        <div>
          <label htmlFor="asalDaerah" className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Poppins, sans-serif", color: "#374151" }}>
            Asal Daerah <span style={{ color: "#EF4444" }}>*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input id="asalDaerah" name="asalDaerah" type="text" value={form.asalDaerah} onChange={handleChange} placeholder="Kota / Kabupaten asal" className={`${inputStyle("asalDaerah")} pl-10`} style={{ fontFamily: "Inter, sans-serif" }} />
          </div>
          {errors.asalDaerah && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.asalDaerah}</p>}
        </div>

        {/* Jenjang */}
        <div>
          <label htmlFor="jenjang" className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Poppins, sans-serif", color: "#374151" }}>
            Jenjang yang Dituju <span style={{ color: "#EF4444" }}>*</span>
          </label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select id="jenjang" name="jenjang" value={form.jenjang} onChange={handleChange} className={`${inputStyle("jenjang")} pl-10 pr-8 appearance-none`} style={{ fontFamily: "Inter, sans-serif" }}>
              <option value="">-- Pilih Jenjang --</option>
              {jenjangOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          {errors.jenjang && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.jenjang}</p>}
        </div>

        {/* Program */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Poppins, sans-serif", color: "#374151" }}>
            Program Pilihan <span style={{ color: "#EF4444" }}>*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {programOptions.map((opt) => (
              <label
                key={opt}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all duration-200 ${form.program === opt ? "border-green-400 bg-green-50" : "border-gray-200 hover:border-green-200 hover:bg-gray-50"}`}
              >
                <input type="radio" name="program" value={opt} checked={form.program === opt} onChange={handleChange} className="sr-only" />
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${form.program === opt ? "border-green-500" : "border-gray-300"}`}>
                  {form.program === opt && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#39B54A" }} />}
                </div>
                <span className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: form.program === opt ? "#1F2937" : "#6B7280", fontWeight: form.program === opt ? 500 : 400 }}>
                  {opt}
                </span>
              </label>
            ))}
          </div>
          {errors.program && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.program}</p>}
        </div>

        {/* Pesan */}
        <div className="sm:col-span-2">
          <label htmlFor="pesan" className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Poppins, sans-serif", color: "#374151" }}>
            Pesan / Pertanyaan <span className="text-xs font-normal" style={{ color: "#9CA3AF" }}>(opsional)</span>
          </label>
          <textarea id="pesan" name="pesan" value={form.pesan} onChange={handleChange} rows={3} placeholder="Tuliskan pertanyaan atau informasi tambahan..." className={`${inputBase} border-gray-200 focus:border-green-400 focus:ring-green-100 focus:ring-2 resize-none`} style={{ fontFamily: "Inter, sans-serif" }} />
        </div>
      </div>

      {/* WA info note */}
      <div className="flex items-start gap-2 mb-5 p-3 rounded-xl" style={{ backgroundColor: "rgba(37,211,102,0.08)" }}>
        <MessageCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#25D366" }} />
        <p className="text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>
          Setelah submit, Anda akan diarahkan ke <strong>WhatsApp</strong> dengan pesan pendaftaran yang sudah terisi otomatis. Cukup tekan <strong>Kirim</strong> untuk mengirimnya ke panitia.
        </p>
      </div>

      <p className="text-xs mb-5 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}>
        🔒 Data yang Anda masukkan dijaga kerahasiaannya dan hanya digunakan untuk keperluan penerimaan santri baru PP Al-Hidayah.
      </p>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg"
        style={{ backgroundColor: "#25D366", fontFamily: "Poppins, sans-serif" }}
      >
        <MessageCircle className="w-5 h-5" />
        Kirim via WhatsApp
      </button>
    </form>
  );
}

export function DaftarSekarang() {
  return (
    <section id="daftar" className="py-20 lg:py-28" style={{ backgroundColor: "#F3F1ED" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: "#39B54A" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#39B54A", fontFamily: "Inter, sans-serif" }}>
              Penerimaan Santri Baru 2026/2027
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "#39B54A" }} />
          </div>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.25rem)", lineHeight: 1.25, color: "#1F2937" }}>
            Daftar Sekarang &{" "}
            <span style={{ color: "#39B54A" }}>Bergabung Bersama Kami</span>
          </h2>
          <p className="mt-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", fontSize: "1rem" }}>
            Isi formulir pendaftaran di bawah ini. Pendaftaran{" "}
            <strong style={{ color: "#39B54A" }}>GRATIS</strong> dan tidak mengikat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Steps timeline */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border sticky top-24" style={{ borderColor: "rgba(110,134,73,0.15)" }}>
              <h3 className="mb-6" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#1F2937" }}>
                Alur Pendaftaran
              </h3>
              <div className="space-y-0">
                {steps.map((step, idx) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ backgroundColor: "#39B54A", fontFamily: "Poppins, sans-serif" }}>
                        {step.num}
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="w-px flex-1 my-1" style={{ backgroundColor: "rgba(57,181,74,0.25)", minHeight: "36px" }} />
                      )}
                    </div>
                    <div className={idx < steps.length - 1 ? "pb-6" : ""}>
                      <p className="font-semibold text-sm leading-snug" style={{ fontFamily: "Poppins, sans-serif", color: "#1F2937" }}>{step.title}</p>
                      <p className="text-xs mt-0.5 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: "rgba(57,181,74,0.08)" }}>
                <div className="flex gap-2 items-start">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#39B54A" }} />
                  <div>
                    <p className="text-xs font-semibold mb-1" style={{ fontFamily: "Poppins, sans-serif", color: "#1F2937" }}>Dokumen yang disiapkan:</p>
                    <ul className="text-xs space-y-1" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
                      {["Fotocopy Akta Kelahiran", "Fotocopy Kartu Keluarga", "Fotocopy Ijazah SD/MI", "Pas foto 3×4 (4 lembar)", "Surat Keterangan Kesehatan"].map((doc) => (
                        <li key={doc} className="flex items-start gap-1.5"><span style={{ color: "#39B54A" }}>•</span>{doc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <DaftarSekarangForm />
          </div>
        </div>
      </div>
    </section>
  );
}
