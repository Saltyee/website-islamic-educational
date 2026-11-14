import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { label: "Beranda", to: "/" },
  { label: "Profil", to: "/profil" },
  { label: "Program", to: "/program" },
  { label: "Berita", to: "/berita" },
  { label: "Kontak", to: "/#kontak-person" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleAnchorLink(to: string) {
    setIsOpen(false);
    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      if (window.location.pathname !== (path || "/")) {
        navigate(path || "/");
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"}`}
      style={{ backgroundColor: "#6E8649" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
              style={{ backgroundColor: "#39B54A" }}
            >
              <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-bold text-sm lg:text-base" style={{ fontFamily: "Poppins, sans-serif" }}>
                PP Al-Hidayah
              </p>
              <p className="text-green-200 text-xs hidden sm:block">Jangkebuan Bangkalan</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.to.includes("#") ? (
                  <button
                    onClick={() => handleAnchorLink(link.to)}
                    className="px-4 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </button>
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        isActive ? "text-white bg-white/15" : "text-white/90 hover:text-white hover:bg-white/10"
                      }`
                    }
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
            <li className="ml-2">
              <NavLink
                to="/daftar"
                className="px-5 py-2 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95 whitespace-nowrap"
                style={{ backgroundColor: "#39B54A", fontFamily: "Poppins, sans-serif" }}
              >
                Daftar Sekarang
              </NavLink>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/20 pb-4 pt-2">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleAnchorLink(link.to)}
                    className="block w-full text-left px-4 py-2.5 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 px-4">
                <NavLink
                  to="/daftar"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#39B54A", fontFamily: "Poppins, sans-serif" }}
                >
                  Daftar Sekarang
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
