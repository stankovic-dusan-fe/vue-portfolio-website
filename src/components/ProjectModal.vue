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

        <!-- <div
          class="project-image"
          :style="{ backgroundImage: 'url(' + project.img + ')' }"
          
        ></div> -->
        <div class="project-image">
          <img
            :src="project.img"
            alt="project-image"
          />
        </div>
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

<style lang="scss" scoped>
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
  z-index: 10;

  .project-modal {
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: calc(1440px + 232px);
    height: 708px;
    background-color: white;
    color: black;
    border-radius: 64px 64px 0 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 80px;

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
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 32px;

      .project-info {
        width: 744px;
        height: 456px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
          font-size: 56px;
          line-height: 80px;
          font-weight: normal;
        }

        #tech {
          text-transform: uppercase;
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;
        }

        p {
          text-transform: none;
          font-size: 14px;
          line-height: 24px;
          font-weight: 300;
        }

        .buttons {
          display: flex;
          gap: 24px;
        }
      }

      .project-image {
        width: 100%;
        max-width: 615px;
        height: 456px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 1330px) {
  .modal-wrapper {
    .project-modal {
      height: auto;
      padding: 60px;
      .modal-content {
        gap: 12px;

        .project-image {
          justify-content: center;
          align-items: center;

          img {
            width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .modal-wrapper {
    .project-modal {
      .modal-content {
        .project-info {
          height: auto;
          gap: 12px;
          h2 {
            font-size: 48px;
            line-height: normal;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .modal-wrapper {
    .project-modal {
      position: relative;
      width: 100%;
      height: auto;
      min-height: 100vh;
      border-radius: 0;
      padding: 24px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      .close-modal {
        margin-bottom: 20px;
      }

      .modal-content {
        height: auto;
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;

        .project-info {
          height: auto;
          width: 100%;

          h2 {
            width: 100%;
            font-size: 2rem;
            line-height: normal;
            margin-bottom: 20px;
            text-wrap: auto;
          }

          p {
            margin-top: 0px;
          }

          #tech {
            margin: 24px 0px;
          }

          .buttons {
            flex-direction: column;
            gap: 12px;
          }
        }

        .project-image {
          width: 100%;
          height: auto;
          margin-top: 12px;
          margin-bottom: 24px;

          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
