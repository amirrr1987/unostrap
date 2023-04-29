<template>
  <div class="">
    <div
      @click="handelClose"
      v-show="visibility"
      class=":uno: bg-black opacity-70 fixed inset-0 w-screen h-screen m-auto z-49"
    />
    <div
      v-show="visibility"
      class=":uno: bg-white z-50 fixed w-180 h-120 inset-0 rounded m-auto"
    >
      <div class=":uno: p-4 flex justify-between">
        <button @click="handelClose">
          <svg
            width="25"
            height="25"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" fill="white" fill-opacity="0.01" />
            <path
              d="M14 14L34 34"
              stroke="#333"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 34L34 14"
              stroke="#333"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="">{{ props.title }}</div>
      </div>
      <div class=":uno: p-4">
        {{ props.body }}
      </div>
      <div class=":uno: p-4">
        {{ props.footer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, watch, ref } from "vue";
import { z } from "zod";
import CLG from "console-log-advanced";
const clg = new CLG({ isDevelopMode: true });

const PropsSchema = z.object({
  title: z.string(),
  body: z.string(),
  footer: z.string(),
  visibility: z.boolean(),
});
const props = defineProps({
  title: "",
  body: "",
  footer: "",
  visibility: false,
});
const dataValidator = async () => {
  const { success, error } = await PropsSchema.safeParse(props);
  if (!success) {
    clg.logger({
      name: "zod issues",
      value: error.issues,
      path: "Modal.vue",
    });
  }
};
onMounted(() => {
  dataValidator();
});
watch(props, () => {
  dataValidator();
  handelClose();
  if (!props.visibility) {
    document.getElementById("app").style.overflowY = "hidden";
  }
});
const visibility = ref(false);
const handelClose = () => {
  visibility.value = !visibility.value;
};
</script>

<style lang="less"></style>
