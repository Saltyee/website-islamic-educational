export type Article = {
  id: string;
  slug: string;
  category: string;
  categoryColor: string;
  date: string;
  dateISO: string;
  title: string;
  excerpt: string;
  content: string; // HTML string for full article
  image: string;
  alt: string;
  author: string;
  authorRole: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
};

export const articles: Article[] = [
  {
    id: "1",
    slug: "haflah-akhirussanah-1447h",
    category: "Kegiatan",
    categoryColor: "#39B54A",
    date: "8 Juni 2026",
    dateISO: "2026-06-08",
    title: "Haflah Akhirussanah 1447 H: Wisuda Santri dan Tasyakuran Pesantren",
    excerpt:
      "Ratusan wali santri memadati aula utama pesantren dalam rangkaian acara wisuda dan haflah akhir tahun yang penuh haru dan syukur.",
    content: `
      <p>Pondok Pesantren Al-Hidayah Jangkebuan Bangkalan kembali menyelenggarakan <strong>Haflah Akhirussanah 1447 H</strong> yang berlangsung dengan khidmat dan meriah pada Sabtu, 7 Juni 2026. Acara tahunan ini menjadi salah satu momen paling dinantikan oleh seluruh civitas pesantren.</p>
      <p>Ribuan tamu undangan yang terdiri dari wali santri, alumni, tokoh masyarakat, dan pejabat daerah memadati aula utama PP Al-Hidayah sejak pagi hari. Acara dibuka dengan tilawah Al-Quran oleh santri terbaik, dilanjutkan sambutan pimpinan pesantren, KH. Abdullah Mubarok.</p>
      <h3>Prosesi Wisuda 312 Santri</h3>
      <p>Tahun ini, sebanyak <strong>312 santri</strong> diwisuda dari jenjang MTs dan MA. Di antara mereka, 47 santri berhasil menyelesaikan hafalan 30 juz Al-Quran dan mendapatkan penghargaan khusus berupa sanad ijazah langsung dari pimpinan pesantren.</p>
      <p>"Kami bangga dengan capaian para santri tahun ini. Mereka tidak hanya unggul dalam ilmu agama, tetapi juga meraih berbagai prestasi akademik di tingkat nasional," ujar KH. Abdullah Mubarok dalam sambutannya.</p>
      <h3>Penghargaan dan Prestasi</h3>
      <p>Dalam acara tersebut juga diumumkan berbagai penghargaan, di antaranya:</p>
      <ul>
        <li>Santri Berprestasi Akademik Terbaik: Muhammad Hafidz Nurullah (MA Kelas XII IPA)</li>
        <li>Santri Tahfidz Terbaik: Nur Aisyah Ramadhani (MTs Kelas IX)</li>
        <li>Santri Paling Disiplin: Ahmad Syaifullah (MA Kelas XI IPS)</li>
        <li>Ustaz/Ustazah Teladan: Ust. Muhammad Hakim, Lc</li>
      </ul>
      <p>Acara Haflah Akhirussanah 1447 H ditutup dengan doa bersama dan ramah tamah antara pimpinan pesantren, dewan asatidz, dan para wali santri.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1665664660924-255a6167f498?w=900&h=600&fit=crop&auto=format",
    alt: "Santri mengikuti haflah akhirussanah dan wisuda pesantren",
    author: "Redaksi PP Al-Hidayah",
    authorRole: "Tim Humas Pesantren",
    readTime: "4 menit",
    tags: ["Haflah", "Wisuda", "Kegiatan Tahunan"],
    featured: true,
  },
  {
    id: "2",
    slug: "peluncuran-e-learning-pesantren",
    category: "Akademik",
    categoryColor: "#6E8649",
    date: "1 Juni 2026",
    dateISO: "2026-06-01",
    title: "Peluncuran Sistem E-Learning Pesantren untuk Santri Jenjang MA",
    excerpt:
      "Pesantren Al-Hidayah resmi meluncurkan platform pembelajaran digital yang memudahkan akses materi kitab dan modul akademik bagi seluruh santri MA.",
    content: `
      <p>Dalam rangka meningkatkan kualitas pembelajaran dan mengikuti perkembangan teknologi pendidikan, <strong>Pondok Pesantren Al-Hidayah</strong> resmi meluncurkan platform e-learning bertajuk <em>"Al-Hidayah Digital Learning"</em> pada 1 Juni 2026.</p>
      <p>Platform ini dikembangkan selama 8 bulan oleh tim IT pesantren bekerja sama dengan vendor teknologi pendidikan lokal. Sistem ini memungkinkan santri mengakses materi pelajaran, kitab digital, tugas, dan rekap nilai secara online.</p>
      <h3>Fitur Unggulan Platform</h3>
      <ul>
        <li><strong>Perpustakaan Digital:</strong> Koleksi lebih dari 2.000 kitab klasik dalam format PDF terindeks</li>
        <li><strong>Video Pembelajaran:</strong> Rekaman kajian dan pengajaran oleh para asatidz</li>
        <li><strong>Absensi Digital:</strong> Sistem presensi santri berbasis QR code</li>
        <li><strong>Rapor Online:</strong> Wali santri dapat memantau perkembangan akademik secara real-time</li>
        <li><strong>Forum Diskusi:</strong> Ruang diskusi antara santri dan ustaz</li>
      </ul>
      <h3>Respons Positif dari Santri dan Wali</h3>
      <p>Ust. Fauzi selaku koordinator teknologi pesantren menyatakan, "Kami berharap platform ini memudahkan proses belajar-mengajar, khususnya bagi santri yang tinggal di asrama dan membutuhkan akses materi di luar jam kelas."</p>
      <p>Saat ini platform telah diakses oleh lebih dari <strong>850 santri jenjang MA</strong> dan akan dikembangkan untuk jenjang MTs pada tahun ajaran berikutnya.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1644564930499-386ed55f97c5?w=900&h=600&fit=crop&auto=format",
    alt: "Santri mengkaji kitab di perpustakaan pesantren",
    author: "Tim IT Pesantren",
    authorRole: "Koordinator Teknologi",
    readTime: "3 menit",
    tags: ["Teknologi", "E-Learning", "Akademik"],
    featured: false,
  },
  {
    id: "3",
    slug: "juara-mtq-jawa-timur-2026",
    category: "Prestasi",
    categoryColor: "#D97706",
    date: "22 Mei 2026",
    dateISO: "2026-05-22",
    title: "Santri Al-Hidayah Raih Juara I MTQ Tingkat Provinsi Jawa Timur",
    excerpt:
      "Muhammad Hafidz Nurullah, santri kelas XI MA, berhasil menyabet medali emas pada cabang Tilawah Remaja MTQ Jawa Timur yang digelar di Surabaya.",
    content: `
      <p>Kebanggaan kembali hadir bagi keluarga besar Pondok Pesantren Al-Hidayah Jangkebuan. <strong>Muhammad Hafidz Nurullah</strong>, santri kelas XI MA, berhasil meraih Juara I pada cabang <em>Tilawah Al-Quran Kategori Remaja</em> dalam ajang Musabaqah Tilawatil Quran (MTQ) Tingkat Provinsi Jawa Timur yang diselenggarakan di Surabaya pada 20–22 Mei 2026.</p>
      <p>Hafidz, sapaan akrabnya, tampil memukau di hadapan ratusan penonton dan dewan juri. Ia membacakan surah Al-Baqarah dengan maqam Bayati yang mengalun indah, mendapatkan standing ovation dari penonton.</p>
      <h3>Perjalanan Menuju Podium</h3>
      <p>"Saya sudah berlatih intensif selama 6 bulan bersama Ust. Hakim. Setiap malam setelah Isya kami berlatih khusus selama 2 jam," tutur Hafidz dengan rendah hati.</p>
      <p>Ust. Muhammad Hakim, Lc selaku pembimbing menceritakan, Hafidz memiliki bakat luar biasa yang dikombinasikan dengan kerja keras dan istiqomah. "Saya tinggal memoles teknik dan emosi dalam bacaannya."</p>
      <h3>Wakil Jawa Timur di Tingkat Nasional</h3>
      <p>Dengan kemenangan ini, Hafidz berhak mewakili Jawa Timur pada MTQ Nasional yang akan diselenggarakan di Makassar, Sulawesi Selatan, pada Agustus 2026. Pesantren berkomitmen mendukung penuh persiapan Hafidz menuju event bergengsi tersebut.</p>
      <p>KH. Abdullah Mubarok menyampaikan rasa syukur dan bangga, "Ini bukan hanya prestasi Hafidz, ini prestasi seluruh keluarga Al-Hidayah. Semoga menjadi motivasi bagi santri lainnya."</p>
    `,
    image:
      "https://images.unsplash.com/photo-1589995635011-078e0bb91d11?w=900&h=600&fit=crop&auto=format",
    alt: "Santri juara MTQ sedang membaca Al-Quran",
    author: "Redaksi PP Al-Hidayah",
    authorRole: "Tim Humas Pesantren",
    readTime: "3 menit",
    tags: ["MTQ", "Prestasi", "Tilawah"],
    featured: false,
  },
  {
    id: "4",
    slug: "kunjungan-studi-kampus-malang",
    category: "Kegiatan",
    categoryColor: "#39B54A",
    date: "15 Mei 2026",
    dateISO: "2026-05-15",
    title: "Kunjungan Studi Banding Santri MA ke Kampus-Kampus Ternama di Malang",
    excerpt:
      "Sebanyak 120 santri kelas XII MA melakukan kunjungan studi banding ke UIN Maulana Malik Ibrahim, UB, dan UM Malang untuk membuka wawasan perguruan tinggi.",
    content: `
      <p>Menjelang kelulusan, sebanyak <strong>120 santri kelas XII Madrasah Aliyah (MA)</strong> PP Al-Hidayah mengikuti program Kunjungan Studi Banding ke tiga kampus bergengsi di Malang, yaitu <strong>UIN Maulana Malik Ibrahim Malang, Universitas Brawijaya (UB), dan Universitas Negeri Malang (UM)</strong>.</p>
      <p>Kegiatan yang berlangsung selama 2 hari (14–15 Mei 2026) ini bertujuan membuka wawasan santri tentang dunia perguruan tinggi dan mendorong semangat melanjutkan pendidikan ke jenjang yang lebih tinggi.</p>
      <h3>Agenda di UIN Malang</h3>
      <p>Di UIN Maulana Malik Ibrahim, para santri mendapat sambutan hangat dari pihak rektorat. Mereka mengikuti sesi presentasi program studi unggulan, tour kampus, dan dialog dengan mahasiswa yang juga merupakan alumni pesantren.</p>
      <p>Salah satu peserta, Nurul Hidayah (XII IPA), mengungkapkan kekagumannya, "Kampusnya luar biasa. Ada ma'had (asrama) yang suasananya hampir mirip pesantren, jadi saya tidak terlalu khawatir."</p>
      <h3>Motivasi Melanjutkan Pendidikan</h3>
      <p>Waka Kurikulum MA, Ust. Syarifuddin, M.Pd, berharap kunjungan ini menjadi motivasi nyata. "Kami ingin santri punya gambaran konkret tentang kampus impian mereka, sehingga belajar dengan tujuan yang jelas."</p>
    `,
    image:
      "https://images.unsplash.com/photo-1629273229664-11fabc0becc0?w=900&h=600&fit=crop&auto=format",
    alt: "Santri berkunjung ke kampus untuk studi banding",
    author: "Ust. Syarifuddin, M.Pd",
    authorRole: "Waka Kurikulum MA",
    readTime: "3 menit",
    tags: ["Studi Banding", "Perguruan Tinggi", "MA"],
    featured: false,
  },
  {
    id: "5",
    slug: "program-ramadhan-1448h",
    category: "Kegiatan",
    categoryColor: "#39B54A",
    date: "10 April 2026",
    dateISO: "2026-04-10",
    title: "Program Ramadhan 1448 H: Itikaf, Tahfidz Kilat, dan Khatmil Quran",
    excerpt:
      "Pesantren Al-Hidayah kembali menyelenggarakan program Ramadhan intensif: itikaf 10 hari terakhir, tahfidz kilat, kajian kitab, dan khatmil Quran bersama.",
    content: `
      <p>Memasuki bulan Ramadhan 1448 H, <strong>Pondok Pesantren Al-Hidayah</strong> kembali menghadirkan rangkaian program keagamaan yang sarat manfaat. Program ini terbuka bagi seluruh santri mukim maupun santri luar (kalong) yang ingin memaksimalkan bulan suci.</p>
      <h3>Itikaf 10 Hari Terakhir</h3>
      <p>Program itikaf di 10 hari terakhir Ramadhan menjadi agenda yang paling banyak diminati. Peserta menghabiskan waktu di masjid pesantren untuk qiyamul lail, tadarus, kajian, dan khalwat spiritual.</p>
      <h3>Tahfidz Kilat Ramadhan</h3>
      <p>Program Tahfidz Kilat Ramadhan menargetkan hafalan 1 juz dalam 30 hari bagi pemula, dan 5 juz bagi peserta lanjutan. "Momentum Ramadhan sangat tepat untuk menghafal karena konsentrasi dan keberkahan yang berlipat," jelas koordinator Tahfidz, Ust. Hakim.</p>
      <h3>Khatmil Quran Bersama</h3>
      <p>Puncak acara adalah Khatmil Quran bersama pada malam ke-27 Ramadhan, diikuti oleh lebih dari 500 santri dan ustaz. Acara berlangsung mulai ba'da Isya hingga dini hari dengan suasana yang sangat khidmat.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1649297711865-3d7c4de3610f?w=900&h=600&fit=crop&auto=format",
    alt: "Santri membaca Al-Quran dalam program Ramadhan",
    author: "Ust. Muhammad Hakim, Lc",
    authorRole: "Koordinator Program Tahfidz",
    readTime: "3 menit",
    tags: ["Ramadhan", "Itikaf", "Tahfidz"],
    featured: false,
  },
  {
    id: "6",
    slug: "olimpiade-sains-mts-2026",
    category: "Prestasi",
    categoryColor: "#D97706",
    date: "3 April 2026",
    dateISO: "2026-04-03",
    title: "Tim MTs Al-Hidayah Borong Medali di Olimpiade Sains Kabupaten Bangkalan",
    excerpt:
      "Santri jenjang MTs meraih 3 medali emas dan 2 perak dalam Olimpiade Sains Tingkat Kabupaten Bangkalan bidang matematika, IPA, dan bahasa Arab.",
    content: `
      <p>Prestasi membanggakan kembali ditorehkan oleh santri PP Al-Hidayah. Pada <strong>Olimpiade Sains Tingkat Kabupaten Bangkalan</strong> yang digelar pada 2 April 2026, tim MTs Al-Hidayah berhasil meraih total <strong>3 medali emas dan 2 medali perak</strong>.</p>
      <h3>Rincian Perolehan Medali</h3>
      <ul>
        <li>🥇 <strong>Medali Emas</strong> – Matematika: Zaid Mubarak (MTs Kelas VIII)</li>
        <li>🥇 <strong>Medali Emas</strong> – IPA Biologi: Fatimah Az-Zahra (MTs Kelas IX)</li>
        <li>🥇 <strong>Medali Emas</strong> – Bahasa Arab: Ahmad Faruq (MTs Kelas IX)</li>
        <li>🥈 <strong>Medali Perak</strong> – IPA Fisika: Ibrahim Khalil (MTs Kelas VIII)</li>
        <li>🥈 <strong>Medali Perak</strong> – Matematika: Maryam Khodijah (MTs Kelas VII)</li>
      </ul>
      <p>Kepala MTs Al-Hidayah, Ust. Mahfudz, S.Pd, menyampaikan apresiasi kepada seluruh peserta dan pembimbing. "Ini buah dari kerja keras para santri dan dedikasi ustaz pembimbing yang tak kenal lelah mendampingi persiapan."</p>
    `,
    image:
      "https://images.unsplash.com/photo-1643216755260-cb0bc30473c8?w=900&h=600&fit=crop&auto=format",
    alt: "Santri MTs berhasil meraih medali olimpiade sains",
    author: "Redaksi PP Al-Hidayah",
    authorRole: "Tim Humas Pesantren",
    readTime: "2 menit",
    tags: ["Olimpiade", "Prestasi", "MTs"],
    featured: false,
  },
];

export const allCategories = ["Semua", "Kegiatan", "Akademik", "Prestasi"];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getRelatedArticles(currentId: string, category: string): Article[] {
  return articles
    .filter((a) => a.id !== currentId && a.category === category)
    .slice(0, 3);
}
