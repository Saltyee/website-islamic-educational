import { AlertCircle, CheckCircle2 } from "lucide-react";
import { DaftarSekarangForm } from "../components/DaftarSekarang";

const steps = [
  { num: "01", title: "Isi Formulir Online", desc: "Lengkapi data calon santri dan wali secara lengkap dan benar" },
  { num: "02", title: "Kirim via WhatsApp", desc: "Formulir dikirim otomatis ke WhatsApp panitia penerimaan" },
  { num: "03", title: "Verifikasi Dokumen", desc: "Tim kami akan menghubungi Anda dalam 1×24 jam untuk verifikasi" },
  { num: "04", title: "Tes Seleksi", desc: "Calon santri mengikuti tes baca Al-Quran & wawancara" },
  { num: "05", title: "Pengumuman & Daftar Ulang", desc: "Peserta yang diterima melakukan daftar ulang dan pembayaran" },
];

export function DaftarPage() {
  return (
    <div className="pt-20 lg:pt-24" style={{ backgroundColor: "#F3F1ED", minHeight: "100vh" }}>

      {/* Page hero */}
      <div
        className="py-14 lg:py-20 text-center relative overflow-hidden"
        style={{ backgroundColor: "#6E8649" }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #39B54A 0%, transparent 60%), radial-gradient(circle at 80% 50%, #39B54A 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-green-300 opacity-60" />
            <span className="text-green-200 text-sm font-semibold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
              Penerimaan Santri Baru 2026 / 2027
            </span>
            <div className="h-px w-10 bg-green-300 opacity-60" />
          </div>
          <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2 }}>
            Formulir Pendaftaran Santri Baru
          </h1>
          <p className="text-green-100 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem" }}>
            Bergabunglah bersama keluarga besar PP Al-Hidayah Jangkebuan Bangkalan. Pendaftaran{" "}
            <strong className="text-white">GRATIS</strong> dan tidak mengikat.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { val: "800+", label: "Santri Aktif" },
              { val: "Gratis", label: "Biaya Pendaftaran" },
              { val: "1×24 jam", label: "Respons Panitia" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-white font-bold text-xl" style={{ fontFamily: "Poppins, sans-serif" }}>{s.val}</p>
                <p className="text-green-200 text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Sidebar: alur + dokumen */}
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
                        <div className="w-px flex-1 my-1" style={{ backgroundColor: "rgba(57,181,74,0.25)", minHeight: "32px" }} />
                      )}
                    </div>
                    <div className={idx < steps.length - 1 ? "pb-5" : ""}>
                      <p className="font-semibold text-sm leading-snug" style={{ fontFamily: "Poppins, sans-serif", color: "#1F2937" }}>{step.title}</p>
                      <p className="text-xs mt-0.5 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Documents */}
              <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: "rgba(57,181,74,0.08)" }}>
                <div className="flex gap-2 items-start">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#39B54A" }} />
                  <div>
                    <p className="text-xs font-semibold mb-1" style={{ fontFamily: "Poppins, sans-serif", color: "#1F2937" }}>Dokumen yang disiapkan:</p>
                    <ul className="text-xs space-y-1" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
                      {["Fotocopy Akta Kelahiran", "Fotocopy Kartu Keluarga", "Fotocopy Ijazah SD/MI", "Pas foto 3×4 (4 lembar)", "Surat Keterangan Kesehatan", "Surat Rekomendasi (jika ada)"].map((doc) => (
                        <li key={doc} className="flex items-start gap-1.5"><span style={{ color: "#39B54A" }}>•</span>{doc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Keunggulan */}
              <div className="mt-5 space-y-2.5">
                {[
                  "Lingkungan asrama yang aman & kondusif",
                  "Pengajar berpengalaman & bersanad",
                  "Kurikulum terpadu agama & umum",
                  "Beasiswa bagi santri berprestasi",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#39B54A" }} />
                    <span className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form area */}
          <div className="lg:col-span-8">
            <DaftarSekarangForm />
          </div>
        </div>
      </div>
    </div>
  );
}
