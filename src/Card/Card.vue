<template>
  <figure
    class=":uno: border border-solid border-gray-300 rounded block overflow-hidden"
  >
    <img
      class="rounded-b w-full aspect-[3/2]"
      :src="props.img"
      :title="props.title"
      :alt="props.title"
    />
    <figcaption class="p-4">
      <h4 class="font-medium text-xl capitalize mb-2">{{ props.title }}</h4>
      <p class="font-normal text-sm  leading-6 capitalize mb-2">{{ props.caption }}</p>
      <!-- < :to="linkUrl">{{ props.linkLabel }}</> -->
      <router-link
        to="/"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center cursor-pointer text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </router-link>
    </figcaption>
  </figure>
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

<style lang="less">

</style>
