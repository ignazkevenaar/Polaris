<script setup>
defineProps({
  text: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button class="bevel interactive" :disabled>
    <slot></slot>
    <i v-if="icon" class="icon-16" :class="icon" />
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<style lang="css" scoped>
button {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: inherit;
  padding: 4px 8px;
  font-size: 1em;

  &:disabled > * {
    opacity: 0.5;
  }
}

.icon-16 {
  margin: 4px;
}
</style>
