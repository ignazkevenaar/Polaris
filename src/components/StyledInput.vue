<script setup>
import { ref } from "vue";
const model = defineModel();

const focused = ref(false);
</script>

<template>
  <input
    v-model="model"
    type="text"
    class="color-field emboss"
    :class="{ active: focused }"
    @focus="focused = true"
    @blur="focused = false"
  />
</template>

<style lang="css" scoped>
input {
  appearance: none;
  outline: none;
  font-family: inherit;
  font-size: 1em;
  padding-inline: 8px;
}
</style>
