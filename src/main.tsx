import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StateProvider } from "./Common/StateProvider";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "de"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/src/assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },

    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <StateProvider>
    <App />
  </StateProvider>
  // </React.StrictMode>
);
