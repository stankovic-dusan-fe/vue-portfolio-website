import PortfolioView from "@/views/core/PortfolioView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "portfolio",
      component: PortfolioView,
    },
  ],
});

export default router;
