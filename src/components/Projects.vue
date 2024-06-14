<template>
  <ProjectCard
    v-for="project in projects"
    :key="project.title"
    :title="project.title"
    :desc="project.desc"
    :cover="`/images/${project.cover}`"
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
};

const closeModal = () => {
  isModalVisible.value = false;
};

const projects = ref([
  {
    title: "Weather Dashboard",
    desc: "Vue.js project focused on utilizing API calls and leveraging advanced Vue 3 features.",
    cover: "weather-project.png",
    details: "Vue Weather Dashboard is a Vue.js application for tracking daily and weekly weather forecasts for selected cities or the user's current location. It provides detailed information on temperature, UV index, wind speed, pressure, and humidity.",
    tech: ["Vue2", "Vue3 features", "VueUse", "API", "Axios", "TailwindCSS", "Netlify"],
    web: "https://vue-weather-dashboard.netlify.app/",
    git: "https://github.com/stankovic-dusan-fe/vue-weather-dashboard",

    img: "/images/weather-desing.jpg",
  },
  {
    title: "Budget Tracker",
    desc: "Integrating Firebase Realtime Database and Google Authentication, real-time data and secure user login",
    cover: "weather-project.png",
    details: "Vue Budget Tracker is a Vue.js application designed for tracking income and expenses. Users can log in through their Google accounts, with all financial data securely stored in an internal database. The application provides a graphical representation of all transactions, allowing users to monitor their financial balance easily. Designed with a mobile-first approach, it ensures a seamless user experience on mobile devices",
    tech: ["Vue3.js", "Firebase", "GoogleAuth", "Apexcharts", "TailwindCSS", "Pinia", "Netlify"],
    web: "https://vue-budget-tracker.netlify.app/auth",
    git: "https://github.com/stankovic-dusan-fe/vue-budget-tracker",

    img: "/src/assets/images/weather-desing.jpg",
  },
  {
    title: "Vue Grocery Shop",
    desc: "The project is aimed at mastering Vue state management, particularly using Pinia",
    cover: "weather-project.png",
    details: "Track weather forecasts effortlessly with my Vue Weather Dashboard. Utilizing Vue.js javascript framework and interesting Vue.js features, this application offers a seamless experience for users on various devices. Integrated with the OpenWeatherMap API for global forecast and historical data.",
    tech: ["Vue.js", "JavaScript", "CSS", "HTML", "API"],
    web: "https://vue-weather-dashboard.netlify.app/",
    git: "https://github.com/stankovic-dusan-fe/vue-weather-dashboard",

    img: "/src/assets/images/weather-desing.jpg",
  },
]);
</script>
