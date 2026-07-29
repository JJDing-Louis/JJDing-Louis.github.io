import { createI18n } from "vue-i18n";

const messages = {
  "zh-TW": {
    siteTitle: "JJDing 技術教學網站",
    navLabel: "主選單",
    footerText: "GitHub Pages 技術教學網站重構中"
  },
  en: {
    siteTitle: "JJDing Technical Notes",
    navLabel: "Main navigation",
    footerText: "GitHub Pages technical notes site in migration"
  }
};

const i18n = createI18n({
  legacy: false,
  locale: "zh-TW",
  fallbackLocale: "zh-TW",
  messages
});

export default i18n;
