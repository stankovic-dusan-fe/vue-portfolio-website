<template>
  <button>
    {{ buttonTitle }}
  </button>
</template>

<script setup>
const props = defineProps(["buttonTitle"]);
</script>

<style scoped>
button {
  background-color: black;
  padding: 16px 24px;
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 28px;
  font-weight: 800;
  border: none;
}
</style>
