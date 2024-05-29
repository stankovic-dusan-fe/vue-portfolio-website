<template>
  <button>
    <a :href="link">{{ buttonTitle }}</a>
  </button>
</template>

<script setup>
const props = defineProps(["buttonTitle", "link"]);
</script>

<style scoped>
button {
  background-color: black;
  padding: 16px 24px;
  color: white;
  font-size: 16px;
  line-height: 28px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
}
a {
  text-decoration: none;
  color: white;
}
</style>
