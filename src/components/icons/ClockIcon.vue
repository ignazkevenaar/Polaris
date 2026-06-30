<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import LargeIcon from "../LargeIcon.vue";

const hourAngle = ref(0);
const minuteAngle = ref(0);
let interval;

onMounted(() => {
  const setHandAngles = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    hourAngle.value = ((hours % 12) / 12 + minutes / 60 / 12) * 360;
    minuteAngle.value = (minutes / 60) * 360;
  };
  setHandAngles();
  interval = window.setInterval(setHandAngles, 5000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
  interval = undefined;
});
</script>

<template>
  <LargeIcon icon="clock">
    <div class="face color-tertiary active">
      <img
        src="/img/hand-hour.png"
        class="hand hour"
        :style="{ rotate: `${hourAngle}deg` }"
      />
      <img
        src="/img/hand-minute.png"
        class="hand"
        :style="{ rotate: `${minuteAngle}deg` }"
      />
    </div>
  </LargeIcon>
</template>

<style lang="css" scoped>
.face {
  height: 100%;
  width: 100%;
  position: relative;
  filter: drop-shadow(0 2px 0 rgb(0 0 0 / 0.25));
}

.hand {
  position: absolute;
  inset: 0;
  image-rendering: pixelated;
}
</style>
