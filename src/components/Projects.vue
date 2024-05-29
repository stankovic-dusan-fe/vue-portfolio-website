<template>
  <ProjectCard
    v-for="project in projects"
    :key="project.title"
    :title="project.title"
    :desc="project.desc"
    :img="`/src/assets/images/${project.img}`"
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
    title: "Weather App",
    desc: "API and responsive design focus",
    img: "weather-project.png",
    details: "Track weather forecasts effortlessly with my Vue Weather Dashboard. Utilizing Vue.js javascript framework and interesting Vue.js features, this application offers a seamless experience for users on various devices. Integrated with the OpenWeatherMap API for global forecast and historical data.",
    tech: ["Vue.js", "JavaScript", "CSS", "HTML", "API"],
    web: "https://vue-weather-dashboard.netlify.app/",
    git: "https://github.com/stankovic-dusan-fe/vue-weather-dashboard",
  },
  {
    title: "Budget Tracker App",
    desc: "API and responsive design focus",
    img: "#",
    details: "Track weather forecasts effortlessly with my Vue Weather Dashboard. Utilizing Vue.js javascript framework and interesting Vue.js features, this application offers a seamless experience for users on various devices. Integrated with the OpenWeatherMap API for global forecast and historical data.",
    tech: ["Vue.js", "JavaScript", "CSS", "HTML", "API"],
    web: "https://vue-weather-dashboard.netlify.app/",
    git: "https://github.com/stankovic-dusan-fe/vue-weather-dashboard",
  },
  {
    title: "Grocery Store App",
    desc: "API and responsive design focus",
    img: "grocery-store.png",
    details: "Track weather forecasts effortlessly with my Vue Weather Dashboard. Utilizing Vue.js javascript framework and interesting Vue.js features, this application offers a seamless experience for users on various devices. Integrated with the OpenWeatherMap API for global forecast and historical data.",
    tech: ["Vue.js", "JavaScript", "CSS", "HTML", "API"],
    web: "https://vue-weather-dashboard.netlify.app/",
    git: "https://github.com/stankovic-dusan-fe/vue-weather-dashboard",
  },
]);
</script>
