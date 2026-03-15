import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import type { AppLocale } from "@/router/types";

export const useLocaleSwitch = () => {
  const { locale } = useI18n();
  const route = useRoute();

  const resolvePathForLocale = (nextLocale: AppLocale): string => {
    const normalizedPath = route.path.startsWith("/en/") ? route.path.slice(3) : route.path;
    const basePath = normalizedPath === "" ? "/" : normalizedPath;

    return nextLocale === "en" ? `/en${basePath === "/" ? "" : basePath}` : basePath;
  };

  const currentLocale = computed<AppLocale>(() =>
    route.path === "/en" || route.path.startsWith("/en/") ? "en" : "zh-TW"
  );
  const alternateLocale = computed<AppLocale>(() =>
    currentLocale.value === "zh-TW" ? "en" : "zh-TW"
  );
  const switchPath = computed(() => resolvePathForLocale(alternateLocale.value));

  const switchLocale = (nextLocale: AppLocale) => {
    locale.value = nextLocale;
  };

  return {
    currentLocale,
    alternateLocale,
    resolvePathForLocale,
    switchLocale,
    switchPath
  };
};
