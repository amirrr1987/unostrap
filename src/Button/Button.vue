<template>
  <button
    :class="`:uno: bg-blue-500 hover:bg-blue-800 focus:bg-blue-600 text-blue-50 rounded ${classComputed}`"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, onMounted, watch, computed } from "vue";
import { z } from "zod";
import CLG from "console-log-advanced";
const clg = new CLG({ isDevelopMode: true });

const PropsSchema = z.object({
  size: z.string(),
});
const props = defineProps({
  size: "",
});
const classComputed = computed(() => {
  switch (props.size) {
    case "xs":
      return "px-2 py-1";
    case "sm":
      return "px-4 py-2";
    case "base":
      return "px-6 py-2";
    case "lg":
      return "px-8 py-2";
    case "xl":
      return "px-10 py-2";
  }
});
const dataValidator = async () => {
  const { success, error } = await PropsSchema.safeParse(props);
  if (!success) {
    clg.logger({
      name: "zod issues",
      value: error.issues,
      path: "Button.vue",
      line: "35",
      commit: "UButton validate failed",
      deactivate: false,
    });
  }
};
onMounted(() => {
  dataValidator();
});
watch(props, () => {
  dataValidator();
});
</script>

<style lang="less"></style>
