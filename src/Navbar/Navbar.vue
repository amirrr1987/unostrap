<template>
  <nav class="py-2">
    <ul class="flex gap-x-4">
      <li v-for="(item, index) in items" :key="index">
        <RouterLink :to="item.link">{{ item.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps, onMounted, watch, defineComponent } from "vue";
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
    clg.logger({ name: "zod issues", value: error.issues, path: 'TCard.vue' })
  } 
}
onMounted(() => {
  dataValidator()
})
watch(props, () => {
  dataValidator()
})
</script>
