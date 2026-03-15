import { createRouter, createWebHistory } from "vue-router";
import type { RouterScrollBehavior } from "vue-router";
import { routes } from "./routes";

const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }

  if (to.hash) {
    const targetId = decodeURIComponent(to.hash.slice(1));
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      return {
        el: targetElement,
        top: 16,
        behavior: "smooth"
      };
    }
  }

  return { top: 0 };
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
});

export default router;
