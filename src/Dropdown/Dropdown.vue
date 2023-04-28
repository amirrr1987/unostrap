<template>
  <a href="">
    fff
    <ul>
        <li>item01</li>
        <li>item02</li>
        <li>item03</li>
        <li>item04</li>
    </ul>
  </a>
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
      path: "Card.vue"
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

<style lang="less">

</style>
