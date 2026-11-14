import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { articles as defaultArticles, type Article } from "../data/news";

export type Program = {
  id: string;
  image: string;
  alt: string;
  badge: string;
  badgeColor: string;
  title: string;
  level: string;
  description: string;
  details: string[];
};

const defaultPrograms: Program[] = [
  {
    id: "tahfidz",
    image: "https://images.unsplash.com/photo-1649297711865-3d7c4de3610f?w=600&h=400&fit=crop&auto=format",
    alt: "Santri menghafal Al-Quran dengan tekun",
    badge: "Unggulan",
    badgeColor: "#39B54A",
    title: "Tahfidz Al-Quran",
    level: "Tingkat Dasar – Lanjut",
    description: "Program intensif menghafal dan memahami Al-Quran 30 juz dengan metode talaqqi dan tasmi' yang telah teruji. Santri dibimbing oleh hafidz/hafidzah bersanad.",
    details: ["Setoran harian", "Muraja'ah terstruktur", "Metode talaqqi", "Sanad Al-Quran"],
  },
  {
    id: "formal",
    image: "https://images.unsplash.com/photo-1643216755260-cb0bc30473c8?w=600&h=400&fit=crop&auto=format",
    alt: "Santri belajar di kelas pendidikan formal",
    badge: "Terakreditasi",
    badgeColor: "#6E8649",
    title: "Pendidikan Formal",
    level: "MTs & MA",
    description: "Jenjang Madrasah Tsanawiyah (setara SMP) dan Madrasah Aliyah (setara SMA) terakreditasi A, mengintegrasikan kurikulum Kemendikbud dengan muatan pesantren.",
    details: ["Kurikulum Merdeka", "Lab sains & komputer", "Perpustakaan modern", "Ekskul beragam"],
  },
  {
    id: "salaf",
    image: "https://images.unsplash.com/photo-1644461561916-2acd569906b0?w=600&h=400&fit=crop&auto=format",
    alt: "Santri mengkaji kitab kuning klasik",
    badge: "Tradisional",
    badgeColor: "#8B6914",
    title: "Kitab Kuning (Salaf)",
    level: "Tingkat Dasar – Mutakharrij",
    description: "Pengkajian kitab-kitab klasik ulama salaf mencakup fiqh, akidah, nahwu-sharaf, hadits, dan tafsir. Metode bandongan dan sorogan ala pesantren tradisional.",
    details: ["Fiqh & Ushul Fiqh", "Nahwu & Sharaf", "Hadits & Musthalah", "Tafsir Al-Quran"],
  },
];

type DataContextType = {
  programs: Program[];
  setPrograms: (programs: Program[]) => void;
  addProgram: (p: Program) => void;
  updateProgram: (p: Program) => void;
  deleteProgram: (id: string) => void;
  news: Article[];
  setNews: (articles: Article[]) => void;
  addArticle: (a: Article) => void;
  updateArticle: (a: Article) => void;
  deleteArticle: (id: string) => void;
  getArticleBySlug: (slug: string) => Article | undefined;
};

const DataContext = createContext<DataContextType | null>(null);

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function DataProvider({ children }: { children: ReactNode }) {
  const [programs, setPrograms] = useState<Program[]>(() =>
    load("alhidayah_programs", defaultPrograms)
  );
  const [news, setNews] = useState<Article[]>(() =>
    load("alhidayah_news", defaultArticles)
  );

  useEffect(() => {
    localStorage.setItem("alhidayah_programs", JSON.stringify(programs));
  }, [programs]);

  useEffect(() => {
    localStorage.setItem("alhidayah_news", JSON.stringify(news));
  }, [news]);

  function addProgram(p: Program) {
    setPrograms((prev) => [...prev, p]);
  }
  function updateProgram(p: Program) {
    setPrograms((prev) => prev.map((x) => (x.id === p.id ? p : x)));
  }
  function deleteProgram(id: string) {
    setPrograms((prev) => prev.filter((x) => x.id !== id));
  }

  function addArticle(a: Article) {
    setNews((prev) => [a, ...prev]);
  }
  function updateArticle(a: Article) {
    setNews((prev) => prev.map((x) => (x.id === a.id ? a : x)));
  }
  function deleteArticle(id: string) {
    setNews((prev) => prev.filter((x) => x.id !== id));
  }
  function getArticleBySlug(slug: string) {
    return news.find((a) => a.slug === slug);
  }

  return (
    <DataContext.Provider
      value={{
        programs, setPrograms, addProgram, updateProgram, deleteProgram,
        news, setNews, addArticle, updateArticle, deleteArticle, getArticleBySlug,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used inside DataProvider");
  return ctx;
}
