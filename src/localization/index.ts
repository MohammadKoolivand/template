import EN_US from "./en";
import FA_IR from "./fa";
import Cookies from "js-cookie";

const isClient = typeof window !== "undefined";
const lang = isClient ? Cookies.get("lang") || "fa" : "fa";
export { lang };

const directions: {
  fa: string;
  en: string;
} = {
  fa: "rtl",
  en: "ltr",
};

const direction: string = directions[lang as keyof typeof directions];
export { direction };

const font: {
  fa: string;
  en: string;
} = {
  fa: "IRANSans",
  en: "Poppins",
};

function getFonts() {
  return font[lang as keyof typeof font];
}
export { getFonts };

const translates = {
  en: EN_US,
  fa: FA_IR,
};

const translate = translates[lang as keyof typeof translates];

export { translate };

function changeLanguage(newLang: string) {
  if (newLang === lang) {
    return;
  }
  localStorage.setItem("lang", newLang);
  window.location.reload();
}
export { changeLanguage };
