<template>
  <div
    @click="$emit('openModal')"
    class="card-container"
    @mouseover="activeCard = true"
    @mouseleave="activeCard = false"
  >
    <div
      class="project-img"
      :class="{ 'project-img-active': activeCard }"
      :style="{ backgroundImage: 'url(' + cover + ')' }"
    ></div>
    <div class="project-details">
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
      <a>View Project Details</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeCard = ref(false);

const props = defineProps(["title", "desc", "cover", "link", "project"]);
</script>

<style lang="scss" scoped>
.card-container {
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #959595;
  margin-top: 24px;
  padding-bottom: 24px;

  .project-img {
    transition: ease-out 0.6s;
    width: 0px;
    height: 200px;
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 8px;
  }

  .project-img-active {
    transition: ease-out 0.5s;
    width: 280px;
    height: 200px;
    margin-right: 32px;
  }

  .project-details {
    p {
      text-transform: none;
      margin-bottom: 10px;
    }
    a {
      color: #2472fc;
      font-family: "Unbounded", sans-serif;
      font-size: 24px;
      line-height: 32px;
      text-decoration: none;
      text-transform: uppercase;

      -webkit-tap-highlight-color: transparent;
    }
  }
}

.card-container:last-child {
  border-bottom: 0px;
}

@media screen and (max-width: 480px) {
  .card-container {
    height: 200px;
    padding-bottom: 12px;

    .project-details {
      p {
        margin: 10px 0;
      }
      a {
        font-size: 16px;
      }
    }
  }
  .project-img {
    display: none;
  }
}
</style>
