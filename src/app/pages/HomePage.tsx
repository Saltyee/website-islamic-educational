import { HeroSection } from "../components/HeroSection";
import { AboutPreview } from "../components/AboutPreview";
import { AcademicPrograms } from "../components/AcademicPrograms";
import { NewsActivities } from "../components/NewsActivities";
import { KontakPerson } from "../components/KontakPerson";
import { DaftarSekarang } from "../components/DaftarSekarang";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <AcademicPrograms />
      <NewsActivities />
      <KontakPerson />
      <DaftarSekarang />
    </>
  );
}
