<template>
  <ProjectCard
    v-for="project in projects"
    :key="project.title"
    :title="project.title"
    :desc="project.desc"
    :img="`/src/assets/images/${project.img}`"
    :link="project.link"
  >
  </ProjectCard>
  <ProjectModal project="project" />
</template>

<script setup>
import { ref } from "vue";

import ProjectCard from "./ProjectCard.vue";
import ProjectModal from "./ProjectModal.vue";

const projects = ref([
  {
    title: "Weather app",
    desc: "API and responsive design focus",
    img: "weather-desing.jpg",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    web: "https://vue-weather-dashboard.netlify.app/",
    tech: ["Vue.js", "JavaScript", "CSS", "HTML"],
    git: "https://github.com/duhansan/vue-weather-dashboard",
  },
  {
    title: "Budget Tracker",
    desc: "",
    img: "https://cdn.dribbble.com/userupload/2837272/file/original-013c89203c5c1a65195340c225e6654f.png?resize=752x470&vertical=center",
    link: "#",
  },

  {
    title: "Grocery Store",
    desc: "Pinia State management exploration",
    img: "https://cdn.dribbble.com/userupload/2837272/file/original-013c89203c5c1a65195340c225e6654f.png?resize=752x470&vertical=center",
    link: "#",
  },
  // {
  //   title: "Porfolio Template",
  //   desc: "It’s this site that you are currently on :)",
  //   // Promeni slike
  //   img: "https://cdn.dribbble.com/userupload/2837272/file/original-013c89203c5c1a65195340c225e6654f.png?resize=752x470&vertical=center",
  //   link: "#",
  // },
  // {
  //   title: "Budget Tracker",
  //   desc: "State management exploration",
  //   img: "https://cdn.dribbble.com/userupload/2837272/file/original-013c89203c5c1a65195340c225e6654f.png?resize=752x470&vertical=center",
  //   link: "#",
  // },
]);
</script>
