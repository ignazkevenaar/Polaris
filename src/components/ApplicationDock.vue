<script setup>
import { useWindowManager } from "../composables/windowManager.js";
import dock from "../config/dock.js";
import { computed } from "vue";
import DockSeparator from "./dock/DockSeparator.vue";
import DockContainer from "./dock/DockContainer.vue";

const { windows } = useWindowManager();

defineProps({
  active: {
    type: Boolean,
  },
});

const openWindowsNotAlreadyInDock = computed(() => {
  return Object.values(windows.value)
    .filter((window) => {
      const dockHasApplication = !!dock.some(
        (item) =>
          Array.isArray(item.items) &&
          item.items.find(
            (dockApplicationID) => dockApplicationID === window.id,
          ),
      );
      return !dockHasApplication;
    })
    .map((window) => window.id);
});

// Filter out container items without any items, specifically for the "openWindows"
const parsedDockItems = computed(() =>
  dock
    .map((item) => {
      if (item.type === "container") {
        if (item.items === "runningApplications") {
          if (openWindowsNotAlreadyInDock.value.length > 0) {
            return {
              ...item,
              items: openWindowsNotAlreadyInDock.value,
            };
          }
          return;
        }

        return item.items.length > 0 ? item : undefined;
      }
    })
    .filter(Boolean),
);
</script>

<template>
  <div class="dockContainer">
    <div class="dock bevel color-primary" :class="{ active }">
      <div class="bevel flex color-primary">
        <template v-for="(item, index) in parsedDockItems" :key="index">
          <DockContainer
            :items="item.type === 'runningApplications' ? [] : item.items"
          />
          <DockSeparator v-if="index < parsedDockItems.length - 1" />
        </template>
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
    padding-top: 8px;
    padding-inline: 24px;
  }
}

.flex {
  display: flex;
}
</style>
