<template>
  <nav>
    <ul class="flex gap-x-4">
      <li v-for="(item, index) in items" :key="index">
        <RouterLink :to="item.link">{{ item.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  items: Array,
});
</script>