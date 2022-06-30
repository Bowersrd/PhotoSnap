import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/stories",
      name: "stories",
      component: () => import("../views/StoriesView.vue"),
    },
    {
      path: "/features",
      name: "features",
      component: () => import("../views/FeaturesView.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("../views/PricingView.vue"),
    },
  ],
});

router.beforeEach(() => {
  window.scroll(0, 0);
});

export default router;
