import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "../shared/CookieConsent";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
