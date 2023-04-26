<template>
  <footer
    class="bg-blue-500"
  >
    <div class="flex gap-4 py-2">
      <template v-for="slot in props.slots">
        <slot></slot>
      </template>
    </div>
    <div class="flex py-2 justify-center">
      <slot name="copyright"></slot>
    </div>
  </footer>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  slots: Number,
});
</script>
