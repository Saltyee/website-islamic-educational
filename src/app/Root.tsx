import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F8F9FA" }}>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
