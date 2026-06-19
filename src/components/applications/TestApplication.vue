<script setup>
import { ref } from "vue";
import ApplicationWindow from "../ApplicationWindow.vue";

const counter = ref(0);
</script>
<template>
  <ApplicationWindow title="Test application!">
    <div>
      {{ counter }}<br />
      <button @click="counter++">increment</button>
      <button @click="counter--">decrement</button>
    </div>
  </ApplicationWindow>
</template>
