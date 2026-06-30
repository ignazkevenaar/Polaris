<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <i class="icon-64" :class="icon"><slot /></i>
</template>
