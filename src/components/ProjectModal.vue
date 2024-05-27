<template>
  <div
    class="project-modal"
    v-if="showModal"
  >
    <p
      class="close-modal"
      @click="closeModal"
    >
      [X] CLOSE
    </p>
    <div class="modal-content">
      <div class="project-info">
        <h2>GROCERY STORE</h2>
        <h2>(concept)</h2>
        <p>Simplified version of grocery store application as an exploration of VUE state management, and PINIA. App contains simple store interface, with dynamic cart controls, shopping cart calculation, favourite items and more.</p>
        <p id="tech">VUE.JS, PINIA, TAILWIND</p>
        <div class="buttons">
          <BaseButton button-title="View live app" />
          <BaseButton button-title="View Github" />
        </div>
      </div>
      <div class="project-image">
        <img
          src="../assets/images/weather-desing.jpg"
          alt="project-image-modul"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import BaseButton from "../components/UI/BaseButton.vue";

const showModal = ref(true);

const props = defineProps(["project"]);

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.project-modal {
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  color: black;
  width: calc(100% - 220px);
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
  margin-bottom: 64px;
  cursor: pointer;
}

.modal-content {
  display: flex;
  width: 100%;
  height: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-image img {
  width: 80%;
}
</style>
