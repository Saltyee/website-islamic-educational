import { Link } from "react-router";
import { ArrowRight, Award, Users, Heart, Star } from "lucide-react";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1629273229664-11fabc0becc0?w=800&h=600&fit=crop&auto=format";

const pillars = [
  { icon: <Award className="w-5 h-5" style={{ color: "#39B54A" }} />, title: "Kurikulum Terpadu", desc: "Memadukan ilmu agama Islam dengan kurikulum nasional Kemendikbud." },
  { icon: <Users className="w-5 h-5" style={{ color: "#39B54A" }} />, title: "Lingkungan Islami", desc: "Asrama 24 jam dengan pembinaan akhlak dan pembiasaan ibadah harian." },
  { icon: <Heart className="w-5 h-5" style={{ color: "#39B54A" }} />, title: "Pengajar Berkualitas", desc: "Diasuh oleh ustaz dan ustazah berpengalaman lulusan pesantren ternama." },
  { icon: <Star className="w-5 h-5" style={{ color: "#39B54A" }} />, title: "Prestasi Nasional", desc: "Meraih berbagai penghargaan MTQ, olimpiade sains, dan kompetisi seni." },
];

export function AboutPreview() {
  return (
    <section id="profil" className="py-20 lg:py-28" style={{ backgroundColor: "#F3F1ED" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Image — 5 cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto lg:h-[520px] bg-green-100">
              <img src={ABOUT_IMAGE} alt="Santri PP Al-Hidayah sedang belajar bersama" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ backgroundColor: "#39B54A" }} />
            </div>
            <div
              className="absolute -bottom-5 -right-2 sm:-right-5 rounded-xl px-5 py-4 shadow-lg text-center min-w-[130px]"
              style={{ backgroundColor: "#39B54A" }}
            >
              <p className="text-white font-bold text-2xl leading-none" style={{ fontFamily: "Poppins, sans-serif" }}>1985</p>
              <p className="text-white/90 text-xs mt-1" style={{ fontFamily: "Inter, sans-serif" }}>Tahun Berdiri</p>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-20 hidden lg:block" style={{ backgroundColor: "#6E8649" }} />
          </div>

          {/* Text — 7 cols */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ backgroundColor: "#39B54A" }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#39B54A", fontFamily: "Inter, sans-serif" }}>Tentang Kami</span>
            </div>
            <h2 className="mb-5" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.25rem)", lineHeight: 1.25, color: "#1F2937" }}>
              Lembaga Pendidikan Islam{" "}
              <span style={{ color: "#6E8649" }}>Terpercaya</span> di Bangkalan
            </h2>
            <p className="mb-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563", fontSize: "1rem" }}>
              Pondok Pesantren Al-Hidayah Jangkebuan adalah lembaga pendidikan Islam berbasis pesantren yang telah berdiri sejak 1985 di Bangkalan, Madura. Kami berkomitmen mencetak generasi Muslim yang unggul dalam ilmu agama maupun ilmu pengetahuan umum.
            </p>
            <p className="mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563", fontSize: "1rem" }}>
              Dengan visi <em>"Terwujudnya insan yang berilmu, berakhlak mulia, dan berdaya saing global"</em>, pesantren kami terus berinovasi dalam sistem pendidikan sambil menjaga nilai-nilai salaf yang kokoh.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-3 p-4 rounded-xl bg-white border transition-shadow hover:shadow-md" style={{ borderColor: "rgba(110,134,73,0.15)" }}>
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F0F7F1" }}>
                    {p.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ fontFamily: "Poppins, sans-serif", color: "#1F2937" }}>{p.title}</p>
                    <p className="text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* → navigates to /profil */}
            <Link
              to="/profil"
              className="group inline-flex items-center gap-2 font-semibold text-sm transition-colors"
              style={{ color: "#6E8649", fontFamily: "Poppins, sans-serif" }}
            >
              Baca Profil Lengkap
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
