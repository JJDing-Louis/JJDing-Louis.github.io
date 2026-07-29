import type { RedirectSchema } from "@/data/schema/redirectSchema";

export const legacyRedirects: RedirectSchema[] = [
  {
    legacyPath: "/index.html",
    targetPath: "/",
    redirectType: "meta-refresh",
    locale: "zh-TW"
  },
  {
    legacyPath: "/programnoteoutline.html",
    targetPath: "/notes",
    redirectType: "meta-refresh",
    locale: "zh-TW"
  }
];
