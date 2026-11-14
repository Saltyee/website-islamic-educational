import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { ProfilPage } from "./pages/ProfilPage";
import { ProgramAkademikPage } from "./pages/ProgramAkademikPage";
import { SemuaBeritaPage } from "./pages/SemuaBeritaPage";
import { DetailBeritaPage } from "./pages/DetailBeritaPage";
import { DaftarPage } from "./pages/DaftarPage";
import { DashboardPage } from "./pages/DashboardPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "profil", Component: ProfilPage },
      { path: "program", Component: ProgramAkademikPage },
      { path: "berita", Component: SemuaBeritaPage },
      { path: "berita/:slug", Component: DetailBeritaPage },
      { path: "daftar", Component: DaftarPage },
      { path: "dashboard", Component: DashboardPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
], {
  // "/" locally; "/<repo-name>/" when built for GitHub Pages (see .github/workflows/deploy.yml)
  basename: import.meta.env.BASE_URL,
});
