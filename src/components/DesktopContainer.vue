<script setup>
import { onMounted, provide, useTemplateRef } from "vue";
import ApplicationDock from "./ApplicationDock.vue";
import ApplicationWindow from "./ApplicationWindow.vue";
import { useWindowManager } from "../composables/windowManager.js";

const desktopElement = useTemplateRef("desktop");
provide("desktopElement", desktopElement);

const { windows, windowOrder, register, bringToFront, move, resize } =
  useWindowManager();

onMounted(() => {
  for (let i = 0; i < 3; i++) {
    register();
  }
});
</script>

<template>
  <div class="desktop" ref="desktop">
    <pre>{{ windows }}</pre>
    <ApplicationWindow
      v-for="(windowID, windowIndex) in windowOrder"
      :key="windowID"
      :active="windowIndex === windowOrder.length - 1"
      :width="windows[windowID].width"
      :height="windows[windowID].height"
      @focus="bringToFront(windowID)"
      @move="move(windowID, $event)"
      @resize="resize(windowID, $event)"
    ></ApplicationWindow>
    <ApplicationDock />
  </div>
</template>

<style lang="css" scoped>
.desktop {
  position: relative;
  overflow: hidden;
  width: 1024px;
  height: 768px;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr min-content;
  image-rendering: pixelated;
  background: url("img/wallpaper.png") repeat-x;
  font-family: "Tiny5", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
}

.dock {
  grid-row: 2;
}
</style>
