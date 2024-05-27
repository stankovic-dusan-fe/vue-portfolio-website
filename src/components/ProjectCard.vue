<template>
  <div
    class="card-container"
    @mouseover="activeCard = true"
    @mouseleave="activeCard = false"
  >
    <div
      class="project-img"
      :class="{ 'project-img-active': activeCard }"
      :style="{ backgroundImage: 'url(' + img + ')' }"
    ></div>
    <div class="project-details">
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
      <a
        target="_blank"
        v-show="activeCard"
        >View Project Details</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeCard = ref(false);

const props = defineProps({
  title: String,
  desc: String,
  img: String,
  link: String,
});
</script>

<style lang="scss" scoped>
.card-container {
  cursor: default;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #959595;
  padding: 24px 0;

  .project-img {
    transition: ease-out 0.4s;
    transition: e;
    width: 0px;
    height: 160px;
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .project-img-active {
    transition: ease-out 0.4s;
    width: 280px;
    height: 180px;
    margin-right: 32px;
  }

  .project-details {
    p {
      text-transform: none;
    }
    a {
      color: #2472fc;
      font-family: "Unbounded", sans-serif;
      font-size: 24px;
      line-height: 32px;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
}

.card-container:last-child {
  border-bottom: 0px;
}
</style>
