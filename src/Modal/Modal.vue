<template>
  <div class="uno: bg-black opacity-70 fixed inset-0 w-screen h-screen m-auto z-49">

  </div>
      <div class=":uno: bg-white z-50 fixed w-180 h-120 inset-0 rounded m-auto">
      <div class=":uno: p-4">
        <div class="">{{ props.title }}</div>
      </div>
      <div class=":uno: p-4">
        {{ props.body }}
      </div>
      <div class=":uno: p-4">
        {{ props.footer }}
      </div>
    </div>
</template>

<script setup>
import { defineProps, onMounted, watch } from "vue";
import { z } from "zod";
import CLG from "console-log-advanced";
const clg = new CLG({ isDevelopMode: true });

const PropsSchema = z.object({
  title: z.string(),
  body: z.string(),
  footer: z.string(),
});
const props = defineProps({
  title: "",
  body: "",
  footer: "",
});
const dataValidator = async () => {
  const { success, error } = await PropsSchema.safeParse(props);
  if (!success) {
    clg.logger({
      name: "zod issues",
      value: error.issues,
      path: "Modal.vue",
      line: "35",
      commit: "comment",
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
