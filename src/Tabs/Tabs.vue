<template>
  <div class=":uno__tabs: ">
    <div class=":uno: flex justify-between">
      <a href="#tab-1">tab1</a>
      <a href="#tab-2">tab2</a>
      <a href="#tab-3">tab3</a>
    </div>
    <div class="">
      <div id="tab-1"></div>
      <div id="tab-2"></div>
      <div id="tab-3"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, watch } from "vue";
import { z } from "zod";
import CLG from "console-log-advanced";
const clg = new CLG({ isDevelopMode: true });

const PropsSchema = z.object({
  img: z.string(),
  title: z.string(),
  caption: z.string(),
  linkLabel: z.string(),
  linkUrl: z.string(),
});
const props = defineProps({
  img: "",
  title: "",
  caption: "",
  linkLabel: "",
  linkUrl: "",
});
const dataValidator = async () => {
  const { success, error } = await PropsSchema.safeParse(props);
  if (!success) {
    clg.logger({
      name: "zod issues",
      value: error.issues,
      path: "Card.vue",
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
