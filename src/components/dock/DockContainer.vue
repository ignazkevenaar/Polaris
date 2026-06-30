<script setup>
import { useWindowManager } from "../../composables/windowManager.js";
import applications from "../../config/applications.js";
import IconContainer from "../IconContainer.vue";
import DockButton from "./DockButton.vue";

const { registerOrSwitch, openWindowIDs } = useWindowManager();

const openOrSwitchApplication = (applicationID) => {
  const application = applications[applicationID];
  registerOrSwitch(
    applicationID,
    application.name,
    application.component,
    application,
  );
};

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="container emboss">
    <DockButton
      v-for="(applicationID, applicationIndex) in items"
      :key="applicationIndex"
      :open="openWindowIDs.has(applicationID)"
      :tooltip="applications[applicationID].name"
      @click="openOrSwitchApplication(applicationID)"
    >
      <IconContainer :icon="applications[applicationID].icon" />
    </DockButton>
  </div>
</template>

<style lang="css" scoped>
.container {
  width: auto;
  display: flex;
  box-sizing: border-box;
}
</style>
