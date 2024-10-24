<template>
  <ProjectCard
    v-for="project in projects"
    :key="project.title"
    :title="project.title"
    :desc="project.desc"
    :cover="`images/projects-images/covers/${project.cover}`"
    :link="project.link"
    :project="project"
    @open-modal="openModal(project)"
  >
  </ProjectCard>
  <ProjectModal
    :show="isModalVisible"
    @close-modal="closeModal"
    :project="selectedProject"
  />
</template>

<script setup>
import { ref } from "vue";

import ProjectCard from "./ProjectCard.vue";
import ProjectModal from "./ProjectModal.vue";

const isModalVisible = ref(false);
const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
  isModalVisible.value = true;

  document.body.classList.add("no-scroll");
};

const closeModal = () => {
  isModalVisible.value = false;

  document.body.classList.remove("no-scroll");
};

const projects = ref([
  {
    title: "Weather Dashboard",
    desc: "Vue.js project focused on utilizing API calls and leveraging advanced Vue 3 features.",
    cover: "weather2.png",
    details: "Vue Weather Dashboard is a Vue.js application for tracking daily and weekly weather forecasts for selected cities or the user's current location. It provides detailed information on temperature, UV index, wind speed, pressure, and humidity.",
    tech: ["Vue2", "Vue3 features", "VueUse", "API", "Axios", "TailwindCSS", "Netlify"],
    web: "https://vue-weather-dashboard.netlify.app/",
    git: "https://github.com/stankovic-dusan-fe/vue-weather-dashboard",

    img: "/images/projects-images/weather2.png",
  },
  {
    title: "Budget Tracker",
    desc: "Integrating Firebase Realtime Database and Google Authentication, real-time data and secure user login",
    cover: "budgettracker.png",
    details: "Vue Budget Tracker is a Vue.js application designed for tracking income and expenses. Users can log in through their Google accounts, with all financial data securely stored in an internal database. The application provides a graphical representation of all transactions, allowing users to monitor their financial balance easily. Designed with a mobile-first approach, it ensures a seamless user experience on mobile devices",
    tech: ["Vue3.js", "Firebase", "GoogleAuth", "Apexcharts", "TailwindCSS", "Pinia", "Netlify"],
    web: "https://vue-budget-tracker.netlify.app/auth",
    git: "https://github.com/stankovic-dusan-fe/vue-budget-tracker",

    img: "/images/projects-images/budgettracker.png",
  },
  {
    title: "Vue Grocery Shop",
    desc: "The project is aimed at mastering Vue state management, particularly using Pinia",
    cover: "grocerystore.png",
    details: "Track weather forecasts effortlessly with my Vue Weather Dashboard. Utilizing Vue.js javascript framework and interesting Vue.js features, this application offers a seamless experience for users on various devices. Integrated with the OpenWeatherMap API for global forecast and historical data.",
    tech: ["Vue.js", "JavaScript", "CSS", "HTML", "API"],
    web: "https://vue-grocery-shop.netlify.app/",
    git: "https://github.com/stankovic-dusan-fe/vue-grocery-shop",

    img: "/images/projects-images/grocerystore.png",
  },
  {
    title: "Moonstruck Website",
    desc: "Complete redesign of the Moonstruck website, from concept in Figma to fully coded static single-page application.",
    cover: "moonstruck.png",
    details: "Moonstruck Website Redesign is a Vue.js-based static website designed for presenting key information about the Moonstruck company. The project started with a full UI/UX design in Figma, carefully crafted to provide a responsive and user-friendly experience on all devices. The site focuses on simplicity, offering clients a seamless way to explore the company's portfolio, projects, and other essential details.",
    tech: ["Vue.js", "JavaScript", "CSS", "HTML", "API"],
    web: "https://moonstruck-web.netlify.app/",
    git: "https://github.com/stankovic-dusan-fe/moonstruck-web",

    img: "/images/projects-images/moonstruck.png",
  },
]);
</script>
