import { useNavigate } from "react-router"
import { ArrowRight, ChevronDown } from "lucide-react"
import AnimatedCounter from "./AnimatedCounter"

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1666533835045-3a1b3dfc3538?w=1920&h=1080&fit=crop&auto=format"

export function HeroSection() {
  const navigate = useNavigate()

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#6E8649" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(110,134,73,0.80) 0%, rgba(45,55,72,0.85) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 lg:py-32">
        {/* Basmalah badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
          <span className="text-green-300 text-lg">☽</span>
          <span
            lang="ar"
            dir="rtl"
            className="text-white/95 text-lg sm:text-xl leading-none"
            style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </span>
        </div>

        <h1
          className="text-white mb-6 tracking-tight"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Membentuk Generasi{" "}
          <span style={{ color: "#39B54A" }}>Berilmu, Berakhlak,</span>
          <br className="hidden sm:block" />
          <span className="sm:ml-2">dan Bertaqwa</span>
        </h1>

        <p
          className="text-white/80 mb-10 max-w-2xl mx-auto"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            lineHeight: 1.7,
          }}
        >
          Pondok Pesantren Al-Hidayah Jangkebuan Bangkalan — mendidik santri
          dengan kurikulum terpadu antara ilmu agama dan ilmu umum sejak 1985.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/daftar")}
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-green-500/30 active:scale-95"
            style={{
              backgroundColor: "#39B54A",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Daftar Santri Baru
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => navigate("/profil")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-base border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Profil Pesantren
          </button>
        </div>

        {/* Stats */}
        <div className="mt-14 sm:mt-16 grid grid-cols-3 max-w-2xl mx-auto overflow-hidden rounded-2xl border border-white/15 bg-white/10 px-1 py-4 sm:px-3 sm:py-5 shadow-lg shadow-black/10 backdrop-blur-md">
          {[
            { value: 1200, suffix: "+", label: "Santri Aktif" },
            { value: 38, suffix: "+", label: "Tahun Berdiri" },
            { value: 85, suffix: "+", label: "Tenaga Pengajar" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center px-1.5 sm:px-5 [&:not(:first-child)]:border-l [&:not(:first-child)]:border-white/15"
            >
              <p
                className="font-bold leading-none"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(1.2rem, 4.5vw, 1.85rem)",
                  color: "#62D372",
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p
                className="text-white/75 text-[0.65rem] leading-tight sm:text-sm mt-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("profil")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50 hover:text-white/90 transition-colors"
        aria-label="Scroll ke bawah"
      >
        <span className="text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  )
}
