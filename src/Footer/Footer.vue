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
