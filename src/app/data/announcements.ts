export type Announcement = {
  id: string;
  title: string;
  date: string;
  dateISO: string;
  category: "Penting" | "Akademik" | "Umum";
  summary: string;
  detail: string;   // full HTML content for modal
  attachments?: { label: string; href: string }[];
};

export const announcements: Announcement[] = [
  {
    id: "ann-1",
    title: "Pengumuman Penerimaan Santri Baru Tahun Ajaran 2026/2027",
    date: "10 Juni 2026",
    dateISO: "2026-06-10",
    category: "Penting",
    summary:
      "Pendaftaran santri baru jenjang MTs dan MA resmi dibuka mulai 1 Juli 2026. Kuota terbatas.",
    detail: `
      <p>Bismillahirrahmanirrahim.</p>
      <p>Pondok Pesantren Al-Hidayah Jangkebuan Bangkalan dengan bangga mengumumkan pembukaan <strong>Penerimaan Santri Baru (PSB) Tahun Ajaran 2026/2027</strong> untuk jenjang:</p>
      <ul>
        <li><strong>Madrasah Tsanawiyah (MTs)</strong> — Setara SMP, masa studi 3 tahun</li>
        <li><strong>Madrasah Aliyah (MA)</strong> — Setara SMA, masa studi 3 tahun</li>
      </ul>
      <h4>Jadwal Pendaftaran</h4>
      <table>
        <tr><td><strong>Pendaftaran Online</strong></td><td>1 – 31 Juli 2026</td></tr>
        <tr><td><strong>Seleksi Berkas</strong></td><td>1 – 5 Agustus 2026</td></tr>
        <tr><td><strong>Tes Masuk</strong></td><td>10 Agustus 2026</td></tr>
        <tr><td><strong>Pengumuman Hasil</strong></td><td>15 Agustus 2026</td></tr>
        <tr><td><strong>Daftar Ulang</strong></td><td>16 – 25 Agustus 2026</td></tr>
        <tr><td><strong>Awal Masuk Pesantren</strong></td><td>1 September 2026</td></tr>
      </table>
      <h4>Persyaratan Pendaftaran</h4>
      <ul>
        <li>Lulus SD/MI (untuk MTs) atau MTs/SMP (untuk MA)</li>
        <li>Fotocopy Akta Kelahiran (2 lembar)</li>
        <li>Fotocopy Kartu Keluarga (2 lembar)</li>
        <li>Fotocopy Ijazah/SKHUN (dilegalisir)</li>
        <li>Pas foto 3×4 berwarna (4 lembar)</li>
        <li>Surat Keterangan Sehat dari dokter</li>
        <li>Surat Izin Orang Tua bermaterai Rp 10.000</li>
      </ul>
      <h4>Biaya</h4>
      <p>Pendaftaran <strong>GRATIS</strong>. Biaya pendidikan dan asrama akan diinformasikan setelah dinyatakan diterima.</p>
      <p>Untuk informasi lebih lanjut, hubungi Panitia PSB di nomor <strong>0812-3456-7890</strong> atau email <strong>psb@alhidayah-bangkalan.sch.id</strong>.</p>
    `,
    attachments: [
      { label: "Download Formulir Pendaftaran (PDF)", href: "#download-formulir" },
      { label: "Brosur PSB 2026/2027", href: "#download-brosur" },
    ],
  },
  {
    id: "ann-2",
    title: "Jadwal Libur Akhir Semester Genap Tahun Ajaran 2025/2026",
    date: "5 Juni 2026",
    dateISO: "2026-06-05",
    category: "Akademik",
    summary:
      "Libur semester genap dimulai 20 Juni 2026. Santri wajib lapor kepada wali asrama sebelum pulang.",
    detail: `
      <p>Diberitahukan kepada seluruh santri, wali santri, dan dewan asatidz bahwa <strong>Libur Akhir Semester Genap Tahun Ajaran 2025/2026</strong> akan dilaksanakan sebagai berikut:</p>
      <h4>Jadwal Libur</h4>
      <ul>
        <li><strong>Ujian Akhir Semester (UAS):</strong> 9 – 18 Juni 2026</li>
        <li><strong>Pembagian Rapor:</strong> 20 Juni 2026</li>
        <li><strong>Mulai Libur Santri:</strong> 21 Juni 2026</li>
        <li><strong>Masuk Kembali:</strong> 1 September 2026</li>
      </ul>
      <h4>Ketentuan Kepulangan</h4>
      <ul>
        <li>Santri wajib lapor kepada wali asrama sebelum pulang</li>
        <li>Santri wajib menyelesaikan tagihan administrasi sebelum pulang</li>
        <li>Santri yang belum menyelesaikan UAS tidak diizinkan pulang</li>
        <li>Orang tua/wali yang menjemput wajib menunjukkan kartu identitas</li>
        <li>Barang-barang pribadi yang tertinggal menjadi tanggung jawab santri</li>
      </ul>
      <h4>Program Libur (Opsional)</h4>
      <p>Bagi santri yang tidak pulang selama libur, pesantren menyediakan <strong>Program Tahfidz Libur</strong> dan kajian kitab intensif. Daftar ke bagian pengasuhan maksimal 15 Juni 2026.</p>
    `,
  },
  {
    id: "ann-3",
    title: "Hasil Musabaqah Qiraatil Kutub Internal Semester Genap 1447 H",
    date: "28 Mei 2026",
    dateISO: "2026-05-28",
    category: "Akademik",
    summary:
      "Pengumuman juara Musabaqah Qiraatil Kutub (MQK) internal pesantren semester genap 1447 H.",
    detail: `
      <p>Alhamdulillah, <strong>Musabaqah Qiraatil Kutub (MQK) Internal</strong> Semester Genap 1447 H telah terlaksana dengan lancar pada 25–27 Mei 2026. Berikut pengumuman resmi para pemenang:</p>
      <h4>Juara Tingkat MTs</h4>
      <ul>
        <li>🥇 Juara I: Ahmad Faruq (MTs IX-A) — Kitab Safinatun Najah</li>
        <li>🥈 Juara II: Maryam Khodijah (MTs IX-B) — Kitab Jurumiyyah</li>
        <li>🥉 Juara III: Zaid Mubarak (MTs VIII-A) — Kitab Aqidatul Awam</li>
      </ul>
      <h4>Juara Tingkat MA</h4>
      <ul>
        <li>🥇 Juara I: Muhammad Hafidz Nurullah (MA XI IPA) — Kitab Fathul Qarib</li>
        <li>🥈 Juara II: Nurul Hidayah (MA XI IPA) — Kitab Riyadhush Shalihin</li>
        <li>🥉 Juara III: Ibrahim Khalil (MA XI IPS) — Kitab Alfiyah Ibnu Malik</li>
      </ul>
      <p>Para juara akan mewakili pesantren dalam MQK Tingkat Kabupaten Bangkalan yang direncanakan pada September 2026. Selamat kepada para pemenang! Jazakumullahu khairan.</p>
    `,
  },
  {
    id: "ann-4",
    title: "Program Ramadhan 1448 H – Itikaf & Tahfidz Kilat",
    date: "15 Mei 2026",
    dateISO: "2026-05-15",
    category: "Penting",
    summary:
      "Program Ramadhan 1448 H dibuka untuk santri mukim dan luar. Pendaftaran dibuka mulai 1 Maret 2026.",
    detail: `
      <p>Bismillah. Dalam rangka menyambut dan memaksimalkan bulan Ramadhan 1448 H, PP Al-Hidayah kembali menggelar <strong>Program Ramadhan Intensif</strong> yang terdiri dari beberapa paket:</p>
      <h4>Paket Program</h4>
      <ul>
        <li><strong>Paket A – Full Ramadhan (30 Hari):</strong> Itikaf + Tahfidz Kilat + Kajian Kitab + Khatmil Quran. Terbuka untuk santri mukim dan umum usia 13–25 tahun.</li>
        <li><strong>Paket B – 10 Hari Terakhir (Itikaf):</strong> Khusus itikaf malam ke-21 hingga akhir Ramadhan. Fokus qiyamul lail, tadarus, dan khalwat spiritual.</li>
        <li><strong>Paket C – Tahfidz Kilat Weekend:</strong> Setiap akhir pekan selama Ramadhan. Cocok untuk pelajar/mahasiswa yang tidak bisa penuh.</li>
      </ul>
      <h4>Biaya & Fasilitas</h4>
      <ul>
        <li>Paket A: Rp 500.000 (termasuk konsumsi sahur-buka, asrama, dan materi)</li>
        <li>Paket B: Rp 250.000</li>
        <li>Paket C: Gratis (biaya mandiri)</li>
      </ul>
      <h4>Pendaftaran</h4>
      <p>Pendaftaran dilakukan melalui WhatsApp ke nomor <strong>0812-3456-7890</strong> dengan format: RAMADHAN_NAMA_PAKET. Kuota terbatas, pendaftaran ditutup setelah penuh.</p>
    `,
  },
];

export function getAnnouncementById(id: string): Announcement | undefined {
  return announcements.find((a) => a.id === id);
}
