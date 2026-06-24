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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-orange-600 focus:text-white focus:rounded-full focus:font-bold focus:shadow-2xl transition-all"
      >
        {t("a11y.skipToContent")}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
