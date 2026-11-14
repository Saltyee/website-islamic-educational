import { Phone, MessageCircle, Mail, Clock, MapPin, ExternalLink } from "lucide-react";

const contacts = [
  {
    id: 1,
    role: "Panitia Penerimaan Santri Baru",
    name: "Ust. Ahmad Fauzi, S.Pd.I",
    photo: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop&auto=format",
    phone: "0812-3456-7890",
    wa: "6281234567890",
    email: "psb@alhidayah-bangkalan.sch.id",
    available: "Senin – Jumat, 08.00 – 16.00 WIB",
  },
  {
    id: 2,
    role: "Koordinator Program Tahfidz",
    name: "Ust. Muhammad Hakim, Lc",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&auto=format",
    phone: "0813-9876-5432",
    wa: "6281398765432",
    email: "tahfidz@alhidayah-bangkalan.sch.id",
    available: "Senin – Sabtu, 07.00 – 15.00 WIB",
  },
  {
    id: 3,
    role: "Administrasi & Informasi Umum",
    name: "Ibu Siti Aisyah, S.E",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format",
    phone: "0856-1122-3344",
    wa: "6285611223344",
    email: "admin@alhidayah-bangkalan.sch.id",
    available: "Senin – Jumat, 08.00 – 16.00 WIB",
  },
];

const officeInfo = [
  {
    icon: <MapPin className="w-5 h-5" style={{ color: "#39B54A" }} />,
    label: "Alamat Kantor",
    value: "Jl. Pesantren No. 1, Jangkebuan, Bangkalan, Madura, Jawa Timur 69112",
  },
  {
    icon: <Phone className="w-5 h-5" style={{ color: "#39B54A" }} />,
    label: "Telepon Kantor",
    value: "(031) 234-5678",
    href: "tel:+6231234567",
  },
  {
    icon: <Mail className="w-5 h-5" style={{ color: "#39B54A" }} />,
    label: "Email Resmi",
    value: "info@alhidayah-bangkalan.sch.id",
    href: "mailto:info@alhidayah-bangkalan.sch.id",
  },
  {
    icon: <Clock className="w-5 h-5" style={{ color: "#39B54A" }} />,
    label: "Jam Operasional",
    value: "Senin – Jumat: 08.00 – 16.00 WIB\nSabtu: 08.00 – 12.00 WIB",
  },
];

export function KontakPerson() {
  return (
    /*
     * Kontak Person Section
     * White background (#F8F9FA) — clean break after News section.
     * Top: 3 contact cards (person, role, phone, WA, email).
     * Bottom: Office info strip + embedded Google Maps iframe placeholder.
     */
    <section id="kontak-person" className="py-20 lg:py-28" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: "#39B54A" }} />
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#39B54A", fontFamily: "Inter, sans-serif" }}
            >
              Hubungi Kami
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "#39B54A" }} />
          </div>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              lineHeight: 1.25,
              color: "#1F2937",
            }}
          >
            Kontak Person &{" "}
            <span style={{ color: "#6E8649" }}>Lokasi Kami</span>
          </h2>
          <p
            className="mt-4 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", fontSize: "1rem" }}
          >
            Kami siap membantu pertanyaan Anda seputar pendaftaran, program pendidikan,
            dan informasi pesantren lainnya.
          </p>
        </div>

        {/* Contact person cards — 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contacts.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-xl border p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ borderColor: "rgba(110,134,73,0.15)", borderRadius: "12px" }}
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4"
                style={{ ringColor: "#39B54A", boxShadow: "0 0 0 4px rgba(57,181,74,0.2)" }}
              >
                <img
                  src={c.photo}
                  alt={`Foto ${c.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Role badge */}
              <span
                className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-2"
                style={{
                  backgroundColor: "rgba(57,181,74,0.1)",
                  color: "#39B54A",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {c.role}
              </span>

              {/* Name */}
              <h3
                className="mb-1"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#1F2937",
                }}
              >
                {c.name}
              </h3>

              {/* Availability */}
              <div
                className="flex items-center gap-1.5 mb-5 text-xs"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
              >
                <Clock className="w-3 h-3 flex-shrink-0" />
                <span>{c.available}</span>
              </div>

              {/* Divider */}
              <div className="w-full h-px mb-5" style={{ backgroundColor: "rgba(110,134,73,0.1)" }} />

              {/* Contact actions */}
              <div className="flex flex-col gap-2.5 w-full">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${c.wa}?text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20mengenai%20PP%20Al-Hidayah`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-md"
                  style={{ backgroundColor: "#25D366", fontFamily: "Poppins, sans-serif" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp
                </a>

                {/* Phone */}
                <a
                  href={`tel:${c.phone.replace(/-/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold border-2 transition-all duration-200 hover:bg-green-50"
                  style={{
                    borderColor: "#39B54A",
                    color: "#39B54A",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  {c.phone}
                </a>

                {/* Email */}
                <a
                  href={`mailto:${c.email}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs transition-colors"
                  style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}
                >
                  <Mail className="w-3.5 h-3.5" />
                  {c.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Office info + map — 12-col: 5 info | 7 map */}
        <div
          className="bg-white rounded-2xl border overflow-hidden"
          style={{ borderColor: "rgba(110,134,73,0.15)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Office details — 5 of 12 cols */}
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#1F2937",
                  }}
                >
                  Informasi Kantor Pesantren
                </h3>

                <ul className="space-y-5">
                  {officeInfo.map((info, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(57,181,74,0.08)" }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                          style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                        >
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm leading-relaxed hover:underline"
                            style={{ color: "#1F2937", fontFamily: "Inter, sans-serif" }}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p
                            className="text-sm leading-relaxed whitespace-pre-line"
                            style={{ color: "#1F2937", fontFamily: "Inter, sans-serif" }}
                          >
                            {info.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direction button */}
              <a
                href="https://maps.google.com/?q=Bangkalan+Madura"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: "#39B54A", fontFamily: "Poppins, sans-serif" }}
              >
                <ExternalLink className="w-4 h-4" />
                Buka di Google Maps
              </a>
            </div>

            {/* Map placeholder — 7 of 12 cols */}
            <div className="lg:col-span-7 min-h-[320px] lg:min-h-0 relative bg-gray-100">
              {/* Embed Google Maps iframe — replace src with actual embed URL */}
              <iframe
                title="Lokasi PP Al-Hidayah Jangkebuan Bangkalan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9!2d112.98!3d-6.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTcnMDAuMCJTIDExMsKwNTgnNDguMCJF!5e0!3m2!1sen!2sid!4v1000000000000"
                className="w-full h-full absolute inset-0"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map overlay label */}
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-white text-xs font-semibold shadow-lg"
                style={{ backgroundColor: "#6E8649", fontFamily: "Poppins, sans-serif" }}
              >
                📍 PP Al-Hidayah, Bangkalan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
