<script setup>
import DockButton from "./DockButton.vue";
import { useWindowManager } from "../composables/windowManager.js";
import dock from "../config/dock.js";

const { registerOrSwitch, openWindowNames } = useWindowManager();

const openOrSwitchApplication = (application) => {
  registerOrSwitch(application.name, application.component, application);
};
</script>

<template>
  <div class="dockContainer">
    <div class="dock bevel color-primary">
      <div class="bevel">
        <div class="container emboss">
          <DockButton
            v-for="(application, applicationIndex) in dock"
            :key="applicationIndex"
            :class="{ active: false }"
            :open="openWindowNames.has(application.name)"
            :tooltip="application.name"
            @click="openOrSwitchApplication(application)"
          >
            <i class="icon" :class="application.icon"></i>
          </DockButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dockContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.dock {
  z-index: 10;
  padding: 2px;

  > div {
    padding: 2px;
    padding-bottom: 4px;
    padding-inline: 24px;
    margin-bottom: -8px;
  }
}

.container {
  width: auto;
  display: flex;
  box-sizing: border-box;
}
</style>
