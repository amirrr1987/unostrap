<template>
  <button
    :class="`bg-${color} hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded-lg`"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  color: String,
});
</script>