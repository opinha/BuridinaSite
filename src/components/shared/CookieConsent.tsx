import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import { Cookie } from "lucide-react";
import { useTranslation } from "../../context/TranslationContext";

const STORAGE_KEY = "cookie_consent";
/** Marca a visita atual. Vive só enquanto a aba estiver aberta. */
const SESSION_KEY = "cookie_consent_seen";

export type CookieChoice = "accepted" | "necessary";

/**
 * Última escolha registrada pelo visitante. Persiste entre visitas — é a prova
 * de consentimento que a LGPD exige e o que deve travar qualquer analytics.
 */
export function getCookieConsent(): CookieChoice | null {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "accepted" || saved === "necessary" ? saved : null;
}

export function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // O aviso reaparece a cada nova visita ao site, mesmo para quem já
    // escolheu antes. Dentro da mesma visita ele não volta: a marca de sessão
    // evita que o banner pisque a cada troca de página.
    setVisible(sessionStorage.getItem(SESSION_KEY) === null);
  }, []);

  const decide = (choice: CookieChoice) => {
    localStorage.setItem(STORAGE_KEY, choice);
    localStorage.setItem("cookie_consent_date", new Date().toISOString());
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-live="polite"
          aria-label={t("cookies.title")}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl bg-white border border-amber-200 shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white flex items-center justify-center flex-shrink-0">
              <Cookie size={24} />
            </div>

            <div className="flex-1">
              <h2 className="font-bold text-amber-900 mb-1">
                {t("cookies.title")}
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                {t("cookies.description")}{" "}
                <Link
                  to="/privacidade"
                  className="text-orange-700 font-semibold underline underline-offset-4 hover:text-orange-800"
                >
                  {t("cookies.policyLink")}
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => decide("necessary")}
                className="px-5 py-3 rounded-xl border-2 border-stone-200 text-stone-700 font-semibold hover:border-stone-300 transition-colors cursor-pointer"
              >
                {t("cookies.rejectButton")}
              </button>
              <button
                type="button"
                onClick={() => decide("accepted")}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                {t("cookies.acceptButton")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
