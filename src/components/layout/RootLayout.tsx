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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-orange-600 focus:text-white focus:rounded-lg focus:font-bold"
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
