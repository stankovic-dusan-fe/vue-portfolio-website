<template>
  <ProjectCard
    v-for="project in projects"
    :key="project.title"
    :title="project.title"
    :desc="project.desc"
    :img="project.img"
    :link="project.link"
  ></ProjectCard>
</template>

<script setup>
import { ref } from "vue";

import ProjectCard from "./ProjectCard.vue";

const projects = ref([
  {
    title: "Porfolio Template",
    desc: "It’s this site that you are currently on :)",
    // Promeni slike
    img: "https://cdn.dribbble.com/userupload/2837272/file/original-013c89203c5c1a65195340c225e6654f.png?resize=752x470&vertical=center",
    link: "#",
  },
  {
    title: "Weather app",
    desc: "API and responsive design focus",
    img: "https://cdn.dribbble.com/userupload/2837272/file/original-013c89203c5c1a65195340c225e6654f.png?resize=752x470&vertical=center",
    link: "#",
  },
  {
    title: "Budget Tracker",
    desc: "State management exploration",
    img: "https://cdn.dribbble.com/userupload/2837272/file/original-013c89203c5c1a65195340c225e6654f.png?resize=752x470&vertical=center",
    link: "#",
  },
]);
</script>