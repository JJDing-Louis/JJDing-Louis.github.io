import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import type { AppLocale } from "@/router/types";

export const useLocaleSwitch = () => {
  const { locale } = useI18n();
  const route = useRoute();

  const currentLocale = computed(() => locale.value as AppLocale);
  const alternateLocale = computed<AppLocale>(() =>
    currentLocale.value === "zh-TW" ? "en" : "zh-TW"
  );

  const switchPath = computed(() => {
    const path = route.path.replace(/^\/en/, "") || "/";
    return alternateLocale.value === "en" ? `/en${path === "/" ? "" : path}` : path;
  });

  const switchLocale = (nextLocale: AppLocale) => {
    locale.value = nextLocale;
  };

  return {
    currentLocale,
    alternateLocale,
    switchLocale,
    switchPath
  };
};
