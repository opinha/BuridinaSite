import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useTranslation } from "../../context/TranslationContext";

export function RootLayout() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-stone-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-orange-600 text-white px-4 py-2 rounded-lg font-bold shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
      >
        {t("nav.skipToContent")}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
