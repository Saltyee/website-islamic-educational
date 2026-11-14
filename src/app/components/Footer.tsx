import { Link } from "react-router";
import { MapPin, Phone, Mail, BookOpen, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const footerLinks = {
  pesantren: [
    { label: "Profil Pesantren", to: "/profil" },
    { label: "Sejarah & Pendiri", to: "/profil#sejarah" },
    { label: "Visi & Misi", to: "/profil#visi" },
    { label: "Struktur Organisasi", to: "/profil#organisasi" },
    { label: "Fasilitas", to: "/profil#fasilitas" },
  ],
  program: [
    { label: "Tahfidz Al-Quran", to: "/program#tahfidz" },
    { label: "Pendidikan Formal (MTs & MA)", to: "/program#formal" },
    { label: "Kitab Kuning (Salaf)", to: "/program#salaf" },
    { label: "Penerimaan Santri Baru", to: "/daftar" },
  ],
  info: [
    { label: "Berita & Kegiatan", to: "/berita" },
    { label: "Daftar Sekarang", to: "/daftar" },
    { label: "Kontak & Lokasi", to: "/#kontak-person" },
    { label: "Dashboard Admin", to: "/dashboard" },
  ],
};

const socials = [
  { icon: <Facebook className="w-4 h-4" />, label: "Facebook", href: "https://facebook.com" },
  { icon: <Instagram className="w-4 h-4" />, label: "Instagram", href: "https://instagram.com" },
  { icon: <Youtube className="w-4 h-4" />, label: "YouTube", href: "https://youtube.com" },
  { icon: <Twitter className="w-4 h-4" />, label: "Twitter / X", href: "https://twitter.com" },
];

type FooterLink = { label: string; to: string };

function FooterLinkItem({ link }: { link: FooterLink }) {
  if (link.to.includes("#")) {
    const [path, hash] = link.to.split("#");
    return (
      <Link
        to={{ pathname: path || "/", hash }}
        onClick={() => {
          setTimeout(() => {
            const target = document.getElementById(hash);
            // Scroll to the matching section; if there is none (e.g. a program tab),
            // go to the top so the selected content is visible.
            if (target) target.scrollIntoView({ behavior: "smooth" });
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100);
        }}
        className="text-gray-400 text-sm hover:text-white transition-colors leading-snug"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {link.label}
      </Link>
    );
  }
  return (
    <Link
      to={link.to}
      className="text-gray-400 text-sm hover:text-white transition-colors leading-snug"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {link.label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer id="footer" style={{ backgroundColor: "#2D3748" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#39B54A" }}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                  PP Al-Hidayah
                </p>
                <p className="text-gray-400 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  Jangkebuan Bangkalan
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Pondok Pesantren Al-Hidayah Jangkebuan adalah lembaga pendidikan Islam terpadu yang
              berdedikasi mencetak generasi Muslim berilmu, berakhlak, dan berdaya saing.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#39B54A" }} />
                <span className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  Jl. Pesantren No. 1, Jangkebuan, Bangkalan, Madura, Jawa Timur 69112
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#39B54A" }} />
                <a href="tel:+6285606069996" className="text-gray-400 text-sm hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                  0856-0606-9996
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#39B54A" }} />
                <a href="mailto:info@alhidayah-bangkalan.sch.id" className="text-gray-400 text-sm hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                  info@alhidayah-bangkalan.sch.id
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-2 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#39B54A")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.07)")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[
            { title: "Tentang Pesantren", links: footerLinks.pesantren },
            { title: "Program Pendidikan", links: footerLinks.program },
            { title: "Informasi", links: footerLinks.info },
          ].map((col) => (
            <div key={col.title} className="lg:col-span-2" style={{ gridColumn: "span 2 / span 2" }}>
              <h5
                className="text-white font-semibold mb-4 pb-2 border-b"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.9rem", borderColor: "rgba(255,255,255,0.1)" }}
              >
                {col.title}
              </h5>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLinkItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left" style={{ fontFamily: "Inter, sans-serif" }}>
            © 2026 Pondok Pesantren Al-Hidayah Jangkebuan Bangkalan. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-4">
            {["Kebijakan Privasi", "Syarat & Ketentuan"].map((item) => (
              <a key={item} href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
