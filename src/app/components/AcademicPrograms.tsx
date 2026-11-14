import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useData } from "../context/DataContext";

export function AcademicPrograms() {
  const { programs } = useData();
  return (
    <section id="program" className="py-20 lg:py-28" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: "#39B54A" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#39B54A", fontFamily: "Inter, sans-serif" }}>Program Akademik</span>
            <div className="h-px w-10" style={{ backgroundColor: "#39B54A" }} />
          </div>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.25rem)", lineHeight: 1.25, color: "#1F2937" }}>
            Program Unggulan{" "}
            <span style={{ color: "#6E8649" }}>Pesantren</span>
          </h2>
          <p className="mt-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", fontSize: "1rem" }}>
            Tiga jalur pendidikan komprehensif yang saling melengkapi, dirancang untuk membentuk santri yang unggul di bidang agama maupun ilmu pengetahuan.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program) => (
            <article
              key={program.id}
              className="group bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
              style={{ borderColor: "rgba(110,134,73,0.12)", borderRadius: "12px" }}
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-green-50">
                <img
                  src={program.image}
                  alt={program.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-white text-xs font-semibold"
                  style={{ backgroundColor: program.badgeColor, fontFamily: "Inter, sans-serif" }}
                >
                  {program.badge}
                </span>
                <span className="absolute bottom-3 left-3 text-white/90 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  {program.level}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "1.1rem", color: "#1F2937" }}>
                  {program.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
                  {program.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {program.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-xs" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#39B54A" }} />
                      {detail}
                    </li>
                  ))}
                </ul>
                {/* → navigates to /program with the tab preselected via hash */}
                <Link
                  to={`/program#${program.id}`}
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold transition-colors mt-auto"
                  style={{ color: "#6E8649", fontFamily: "Poppins, sans-serif" }}
                >
                  Selengkapnya
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA → /program */}
        <div className="text-center mt-12">
          <Link
            to="/program"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-lg border-2 font-semibold text-sm transition-all duration-200 hover:text-white hover:bg-[#6E8649]"
            style={{ borderColor: "#6E8649", color: "#6E8649", fontFamily: "Poppins, sans-serif" }}
          >
            Lihat Semua Program
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
