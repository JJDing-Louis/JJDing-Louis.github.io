import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import type { AppLocale } from "@/router/types";
import { getArticleBySlug } from "@/services/content/contentQueryService";

export const useLocaleSwitch = () => {
  const { locale } = useI18n();
  const route = useRoute();

  const resolvePathForLocale = (nextLocale: AppLocale): string => {
    const localePrefix = nextLocale === "en" ? "/en" : "";
    const routeName = typeof route.name === "string" ? route.name : "";

    if (routeName.includes("home")) {
      return localePrefix || "/";
    }

    if (routeName.includes("about")) {
      return `${localePrefix}/about`;
    }

    if (routeName.includes("logs")) {
      return `${localePrefix}/logs` || "/logs";
    }

    if (routeName.includes("products")) {
      return `${localePrefix}/products`;
    }

    if (routeName.includes("notes") && !routeName.includes("category") && !routeName.includes("article")) {
      return `${localePrefix}/notes`;
    }

    if (routeName.includes("note-category")) {
      const categoryId = String(route.params.categoryId ?? "").trim();
      return categoryId ? `${localePrefix}/notes/${categoryId}` : `${localePrefix}/notes`;
    }

    if (routeName.includes("note-article")) {
      const slug = String(route.params.slug ?? "").trim();
      const targetArticle = slug ? getArticleBySlug(nextLocale, slug) : undefined;

      if (targetArticle) {
        return targetArticle.path;
      }

      const currentArticle = slug ? getArticleBySlug(currentLocale.value, slug) : undefined;
      const fallbackCategoryId = currentArticle?.categoryIds[0] ?? "python";

      return `${localePrefix}/notes/${fallbackCategoryId}`;
    }

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
