<script setup>
defineProps({
  open: {
    type: Boolean,
  },
  tooltip: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="button color-surface bevel">
    <div class="iconContainer">
      <slot></slot>
    </div>
    <div class="indicator" v-if="open"></div>
    <div v-if="tooltip" class="tooltip bevel color-secondary text-shadow">
      {{ tooltip }}
    </div>
  </div>
</template>

<style lang="css" scoped>
.button {
  aspect-ratio: 1;
  width: 84px;
  height: 84px;
  background: linear-gradient(
    to bottom right,
    rgb(var(--local-color)),
    var(--local-color-dark)
  );
  box-sizing: border-box;
  display: grid;
  place-items: center;
  position: relative;

  &:hover {
    .tooltip {
      display: block;
      position: absolute;
      inset-block-end: 125%;
    }
  }

  &:active {
    background: linear-gradient(
      to bottom right,
      var(--local-color-dark),
      rgb(var(--local-color))
    );

    .iconContainer {
      filter: brightness(0.75);
    }
  }

  .indicator {
    height: 8px;
    background-color: black;
    position: absolute;
    inset-inline: 0;
    top: 0;
  }

  .iconContainer {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
  }

  .tooltip {
    display: none;
    padding: 4px 8px;
    text-align: center;
    box-shadow: 2px 2px 0 rgb(0 0 0 / 0.2);
  }
}
</style>
