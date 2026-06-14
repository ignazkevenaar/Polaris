<script setup>
import { useDraggable, useResizeObserver } from "@vueuse/core";
import { computed, inject, useTemplateRef, watchEffect } from "vue";

const props = defineProps({
  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["focus", "move", "resize"]);

const desktopElement = inject("desktopElement");
const windowElement = useTemplateRef("window");
const titleBarElement = useTemplateRef("titleBar");

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(windowElement, {
  initialValue: { x: 40, y: 40 },
  handle: titleBarElement,
  containerElement: desktopElement,
});

watchEffect(() => {
  emit("move", { x, y });
});

useResizeObserver(windowElement, (entries) => {
  const entry = entries[0];
  const { width, height } = entry.contentRect;
  emit("resize", { width, height });
});

const myStyles = computed(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`,
}));
</script>

<template>
  <div
    ref="window"
    :style="[style, myStyles]"
    class="window"
    :class="{ active }"
    @mousedown="emit('focus')"
    @resize="test"
  >
    <div class="titleBar" ref="titleBar"></div>
    <div class="content">
      {{ x }}-{{ y }}<br />
      {{ active }}<br />
      {{ style }}
      <slot></slot>
    </div>
  </div>
</template>

<style lang="css" scoped>
.window {
  position: absolute;
  background: #aaa;
  border: 1px outset white;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow:
    2px 2px 0px black,
    8px 8px 0px rgba(0 0 0 / 0.2);
  resize: both;
  overflow: auto;
  padding: 1px 0 0 1px;
  min-width: 96px;
  min-height: 72px;

  .titleBar {
    height: 20px;
    background: #555;
    margin-bottom: 2px;
  }

  &.active {
    .titleBar {
      background: linear-gradient(to right, rgb(0 0 123), rgb(60, 130, 200));
    }
  }

  .content {
    grid-row: 2;
    background-color: white;
    border: 2px inset black;
    text-rendering: geometricPrecision;
  }
}
</style>
