<template>
  <figure class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class="rounded-t-lg" :src="props.img" :title="props.title" :alt="props.title" />
    <figcaption class="p-5">
      <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ props.title }}</h4>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ props.caption }}</p>
      <!-- < :to="linkUrl">{{ props.linkLabel }}</> -->
      <router-link to="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </router-link>
    </figcaption>
  </figure>
</template>

<script setup>
import { defineProps,onMounted,watch } from "vue";
import { z } from "zod";
import CLG from "console-log-advanced";
const clg = new CLG({isDevelopMode: true})

const PropsSchema = z.object({
  img: z.string(),
  title: z.string(),
  caption: z.string(),
  linkLabel: z.string(),
  linkUrl: z.string(),
})
const props = defineProps({
  img: '',
  title: '',
  caption: '',
  linkLabel: '',
  linkUrl: '',
});
const dataValidator = async () => {
  const { success, error } = await PropsSchema.safeParse(props)
  if (!success) {
    clg.logger({ name: "zod issues", value: error.issues, path: 'TCard.vue', line: '35', commit: "comment", deactivate: false })
  } 
}
onMounted(() => {
  dataValidator()
})
watch(props, () => {
  dataValidator()
})

</script>

<style lang="less">
.card{
  background-color: red;
  &__img{
    width: 400px;
    height: 300px;
  }
}
</style>
