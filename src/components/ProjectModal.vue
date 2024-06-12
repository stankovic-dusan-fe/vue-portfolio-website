<template>
  <div
    class="modal-wrapper"
    v-if="show"
  >
    <div
      class="project-modal"
      ref="modal"
    >
      <p
        class="close-modal"
        @click="$emit('closeModal')"
      >
        [X] CLOSE
      </p>
      <div class="modal-content">
        <div class="project-info">
          <h2>{{ project.title }}</h2>

          <p id="details">{{ project.details }}</p>
          <p id="tech">{{ project.tech.join(", ") }}</p>
          <div class="buttons">
            <BaseButton
              button-title="View live app"
              :link="project.web"
            />
            <BaseButton
              button-title="View Github"
              :link="project.git"
            />
          </div>
        </div>
        <div class="project-image"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

import BaseButton from "../components/UI/BaseButton.vue";

const props = defineProps(["show", "project"]);

const modal = ref(null);

const emit = defineEmits(["close-modal"]);

onClickOutside(modal, () => {
  emit("close-modal");
});
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}

.project-modal {
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: calc(1440px + 160px);
  background-color: white;
  color: black;
  height: auto;
  border-radius: 64px 64px 0 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
}

.close-modal {
  display: flex;
  justify-content: flex-end;
  color: #60606c;
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  margin-bottom: 32px;
  cursor: pointer;
}

.modal-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-gap: 64px; */
}

.modal-content h2 {
  font-weight: 400;
  line-height: 88px;
}

.modal-content p {
  text-transform: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  margin-top: 24px;
}

.buttons {
  display: flex;
  gap: 24px;
}

#tech {
  text-transform: uppercase;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  margin: 48px 0;
}

.project-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-image img {
  width: 100%;
}

@media screen and (max-width: 700px) {
  .project-modal {
    position: relative;
    min-height: 100vh;
    width: 100%;
    height: auto;
    border-radius: 0;
    padding: 32px;
    display: flex;
    justify-content: flex-start;
  }

  .project-info h2 {
    line-height: normal;
    margin-bottom: 20px;
  }

  .close-modal {
    margin-bottom: 20px;
  }
  .modal-content {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
  .project-image {
    width: 100%;
    height: 30vh;
    margin-bottom: 20px;

    background-image: url("../assets/images/weather-project.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .modal-content p {
    margin-top: 0px;
  }

  .buttons {
    justify-content: space-between;
  }

  #tech {
    margin: 24px 0;
  }
}
</style>
