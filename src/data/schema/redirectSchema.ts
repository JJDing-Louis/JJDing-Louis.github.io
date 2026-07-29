export interface RedirectSchema {
  legacyPath: string;
  targetPath: string;
  redirectType: "meta-refresh" | "script";
  locale: "zh-TW" | "en";
}

export const validateRedirectSchema = (value: Partial<RedirectSchema>) => {
  return Boolean(value.legacyPath && value.targetPath && value.redirectType && value.locale);
};
